'use strict';

// Real Chromium APIs driven by Node's built-in WebSocket; no npm dependencies.
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const http = require('node:http');
const { spawn } = require('node:child_process');
const { once } = require('node:events');

class DevTools {
  constructor(socket) {
    this.socket = socket;
    this.sequence = 0;
    this.pending = new Map();
    socket.addEventListener('message', event => {
      const message = JSON.parse(String(event.data));
      const pending = this.pending.get(message.id);
      if (!pending) return;
      this.pending.delete(message.id);
      clearTimeout(pending.timer);
      if (message.error) pending.reject(new Error(message.error.message));
      else pending.resolve(message.result);
    });
    socket.addEventListener('close', () => {
      this.pending.forEach(({ reject, timer }) => {
        clearTimeout(timer);
        reject(new Error('El navegador cerró la conexión de auditoría.'));
      });
      this.pending.clear();
    });
  }

  static async connect(url) {
    const socket = new WebSocket(url);
    await new Promise((resolve, reject) => {
      socket.addEventListener('open', resolve, { once: true });
      socket.addEventListener('error', () => reject(new Error('No se pudo conectar a DevTools.')), { once: true });
    });
    return new DevTools(socket);
  }

  send(method, params = {}, timeout = 20000) {
    const id = ++this.sequence;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(id);
        reject(new Error('Timeout de auditoría: ' + method));
      }, timeout);
      this.pending.set(id, { resolve, reject, timer });
      this.socket.send(JSON.stringify({ id, method, params }));
    });
  }

  async evaluate(expression) {
    const result = await this.send('Runtime.evaluate', {
      expression: typeof expression === 'function' ? '(' + expression.toString() + ')()' : expression,
      awaitPromise: true, returnByValue: true
    });
    if (result.exceptionDetails) {
      throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
    }
    return result.result.value;
  }
}

function browserExecutable() {
  const choices = [
    process.env.AUDIT_BROWSER,
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    '/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/google-chrome',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  ];
  const found = choices.find(candidate => candidate && fs.existsSync(candidate));
  if (!found) throw new Error('Instala Edge/Chrome o define AUDIT_BROWSER con su ruta. No se simula IndexedDB.');
  return found;
}

async function startBrowser(root) {
  if (typeof WebSocket !== 'function') throw new Error('La auditoría integral requiere Node.js 22 o superior.');
  const executable = browserExecutable();
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'estudio-release-audit-'));
  let offline = false;
  const server = http.createServer((request, response) => {
    if (offline) { request.socket.destroy(); return; }
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const filename = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!filename.startsWith(root + path.sep)) { response.writeHead(403).end(); return; }
    fs.readFile(filename, (error, data) => {
      if (error) { response.writeHead(404).end(); return; }
      const types = { '.html': 'text/html', '.js': 'text/javascript', '.cjs': 'text/javascript',
        '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png' };
      response.setHeader('Content-Type', types[path.extname(filename)] || 'application/octet-stream');
      response.end(data);
    });
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const origin = 'http://127.0.0.1:' + server.address().port;
  const child = spawn(executable, [
    '--headless', '--disable-gpu', '--disable-background-mode', '--no-first-run', '--no-default-browser-check',
    '--remote-debugging-address=127.0.0.1', '--remote-debugging-port=0',
    '--user-data-dir=' + profile, 'about:blank'
  ], { windowsHide: true, stdio: ['ignore', 'ignore', 'pipe'] });
  let browser;
  let page;

  async function close() {
    if (browser) await browser.send('Browser.close', {}, 4000).catch(() => {});
    page?.socket.close();
    browser?.socket.close();
    if (child.exitCode === null) {
      await Promise.race([once(child, 'exit').catch(() => {}), new Promise(resolve => setTimeout(resolve, 4000))]);
      if (child.exitCode === null) child.kill();
    }
    server.closeAllConnections();
    await new Promise(resolve => server.close(resolve));
    // Only the exact temporary profile created above is removable.
    const target = path.resolve(profile);
    if (path.dirname(target) === path.resolve(os.tmpdir()) && path.basename(target).startsWith('estudio-release-audit-')) {
      try {
        fs.rmSync(target, { recursive: true, force: true, maxRetries: 8, retryDelay: 250 });
      } catch {
        console.warn('[QA] Perfil temporal bloqueado por el sistema; se conserva en ' + target);
      }
    }
  }

  try {
    const websocketUrl = await new Promise((resolve, reject) => {
      let stderr = '';
      const timer = setTimeout(() => reject(new Error('Edge/Chrome no inició DevTools en 45 segundos.')), 45000);
      child.once('error', error => { clearTimeout(timer); reject(error); });
      child.once('exit', () => { clearTimeout(timer); reject(new Error('El navegador terminó antes de iniciar DevTools.')); });
      child.stderr.on('data', chunk => {
        stderr = (stderr + chunk).slice(-8192);
        const match = stderr.match(/DevTools listening on (ws:\/\/[^\s]+)/);
        if (match) { clearTimeout(timer); resolve(match[1]); }
      });
    });
    browser = await DevTools.connect(websocketUrl);
    const { targetId } = await browser.send('Target.createTarget', { url: 'about:blank' });
    const baseUrl = new URL(websocketUrl);
    const tabs = await (await fetch('http://' + baseUrl.host + '/json/list')).json();
    page = await DevTools.connect(tabs.find(tab => tab.id === targetId).webSocketDebuggerUrl);
    await page.send('Page.enable');
    await page.send('Network.enable');
    // No third-party network calls or API billable calls are needed for release tests.
    await page.send('Network.setBlockedURLs', { urls: [
      '*fonts.googleapis.com*', '*fonts.gstatic.com*', '*cdn.jsdelivr.net*', '*generativelanguage.googleapis.com*'
    ] });
    const waitFor = async (expression, timeout = 20000) => {
      const deadline = Date.now() + timeout;
      let lastError;
      while (Date.now() < deadline) {
        try { if (await page.evaluate(expression)) return; } catch (error) { lastError = error; }
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      throw new Error('Timeout esperando condición del navegador.' + (lastError ? ' ' + lastError.message : ''));
    };
    const navigate = async url => {
      await page.send('Page.navigate', { url });
      await waitFor('location.href === ' + JSON.stringify(url));
      await waitFor(() => document.readyState === 'complete' && typeof FSRSEngine !== 'undefined');
      await waitFor(() => !document.getElementById('fsrs-due-count').textContent.includes('calculando'));
    };
    await navigate(origin + '/index.html');
    return { page, browser, origin, waitFor, navigate, close, setServerOffline: value => { offline = value; } };
  } catch (error) {
    await close();
    throw error;
  }
}

module.exports = { startBrowser };
