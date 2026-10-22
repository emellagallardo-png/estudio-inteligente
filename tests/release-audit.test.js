'use strict';

// Node >=22 + Edge/Chrome. No npm packages, credentials or external API calls.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { startBrowser } = require('./helpers/browser-audit.cjs');
const root = path.resolve(__dirname, '..');
const source = filename => fs.readFileSync(path.join(root, filename), 'utf8');
const cases = [];
let browser;
const audit = (name, run) => cases.push({ name, run });

function findSecrets(text) {
  // Report rule + line, never the matched secret.
  const rules = [
    ['Google API key', /\bAIza[0-9A-Za-z_-]{35}\b/g],
    ['OpenAI/Stripe token', /\b(?:sk|rk)[-_](?:proj-|live_|test_)?[A-Za-z0-9_-]{20,}\b/g],
    ['GitHub token', /\b(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{40,})\b/g],
    ['AWS access key', /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/g],
    ['Slack token', /\bxox[baprs]-[A-Za-z0-9-]{20,}\b/g],
    ['JWT', /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/g],
    ['Private key', /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/g],
    ['Credential literal', /(?:["']?(?:api[_-]?key|access[_-]?token|auth[_-]?token|client[_-]?secret|password)["']?)\s*[:=]\s*["']([A-Za-z0-9_./+=-]{16,})["']/gi],
    ['Bearer credential', /\bBearer\s+[A-Za-z0-9_.-]{24,}/g]
  ];
  return rules.flatMap(([rule, pattern]) => Array.from(text.matchAll(pattern), match => ({
    rule, line: text.slice(0, match.index).split('\n').length
  })));
}

function projectFiles(directory = root) {
  const excluded = new Set(['.git', 'node_modules', '.codex', '.agents', '.gemini', 'scratch']);
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    if (excluded.has(entry.name) || entry.isSymbolicLink()) return [];
    const filename = path.join(directory, entry.name);
    return entry.isDirectory() ? projectFiles(filename) : [filename];
  });
}

function vaultContext() {
  const calls = [];
  const data = new Map();
  const storage = {
    getItem: key => data.get(key) ?? null,
    setItem: (key, value) => { calls.push({ key, value }); data.set(key, String(value)); },
    removeItem: key => data.delete(key)
  };
  const context = vm.createContext({ localStorage: storage, sessionStorage: storage,
    console: { info() {}, warn() {} } });
  vm.runInContext(source('security.js') + '\nthis.vault = SecureVault;', context);
  return { context, data, calls, vault: context.vault };
}

async function getBrowser() {
  if (!browser) browser = await startBrowser(root);
  return browser;
}

audit('1. No hay credenciales hard-coded en los archivos del proyecto', () => {
  const examples = [
    ['AIza', 'A'.repeat(35)].join(''),
    ['ghp_', 'B'.repeat(36)].join(''),
    ['api', 'Key = "', 'fixture'.repeat(6), '"'].join(''),
    ['-----BEGIN ', 'PRIVATE KEY-----'].join('')
  ];
  examples.forEach(value => assert.ok(findSecrets(value).length, 'El detector debe reconocer credenciales sintéticas.'));
  const findings = projectFiles().flatMap(filename => findSecrets(fs.readFileSync(filename).toString('utf8'))
    .map(finding => ({ file: path.relative(root, filename), ...finding })));
  assert.deepEqual(findings, [], 'Credenciales sospechosas (valores redactados)');
});

audit('2. SecureVault mantiene claves en memoria y no escribe almacenamiento persistente', () => {
  const first = vaultContext();
  const secret = ['fixture', 'session', 'only', 'not-a-real-key'].join('-');
  first.vault.setKey(' ' + secret + ' ');
  assert.equal(first.vault.getKey(), secret);
  assert.equal(first.vault.hasKey(), true);
  first.vault.setModel('gemini-1.5-flash');
  assert.equal(first.vault.getModel(), 'gemini-1.5-flash');
  assert.equal(vaultContext().vault.getKey(), null, 'Un contexto nuevo no hereda la clave.');
  assert.deepEqual(first.calls, [], 'No se permiten escrituras en localStorage/sessionStorage.');
  first.vault.clearKey();
  assert.equal(first.vault.hasKey(), false);
  first.data.set('mega_ai_studio_key', secret);
  vm.runInContext('migrateAndClearLegacyKeys()', first.context);
  assert.equal(first.vault.getKey(), secret);
  assert.equal(first.data.has('mega_ai_studio_key'), false);
  assert.deepEqual(first.calls, []);
  const escaped = vm.runInContext('escapeHTML(\'<img onerror="x"> & \\\'dato\\\'\')', first.context);
  assert.ok(!escaped.includes('<') && escaped.includes('&lt;'));
});

audit('3. CorpusEngine recupera NCh170/NCh430/DS594 y se abstiene sin respaldo local', () => {
  const context = vm.createContext({});
  vm.runInContext(source('src/corpus.js') + '\nthis.engine = CorpusEngine; this.corpus = NORMATIVE_CORPUS;', context);
  for (const [query, expectedId] of [['curado', 'NCh170:2016'], ['traslape', 'NCh430:2008'], ['izajes', 'DS594']]) {
    const result = context.engine.verifyClaim(query);
    assert.equal(result.verified, true);
    assert.equal(result.abstain, false);
    assert.ok(result.citation.clauseId.startsWith(expectedId + '.'));
    for (const key of ['standard', 'authority', 'clauseId', 'section', 'requirement', 'fieldAction']) {
      assert.ok(typeof result.citation[key] === 'string' && result.citation[key].length > 0, key);
    }
    const [standard, clause] = result.citation.clauseId.split('.');
    assert.equal(result.citation.requirement, context.corpus[standard].clauses[clause].requirement);
    assert.ok(result.citation.confidenceScore > 0);
  }
  for (const query of ['', null, 5, 'x', 'partida-inexistente-auditoria-espacial']) {
    const result = context.engine.verifyClaim(query);
    assert.equal(result.verified, false);
    assert.equal(result.abstain, true);
    assert.equal(result.citation, null);
  }
  // Tests validate the index contract, not legal accuracy of the underlying norms.
});

audit('4. FSRS v4 calcula intervalos y persiste revisiones en IndexedDB tras recargar', async () => {
  const session = await getBrowser();
  const result = await session.page.evaluate(async () => {
    const base = {
      id: 'release-audit-card', subject: 'QA', prompt: 'Pregunta', answer: 'Respuesta',
      stability: 2.4, difficulty: 4.93, reps: 2, streak: 2,
      lastReview: '2030-01-01T12:00:00.000Z', dueDate: '2030-01-03T12:00:00.000Z'
    };
    const at = new Date('2030-01-04T12:00:00.000Z');
    const preview = [1, 2, 3, 4].map(rating => FSRSEngine.previewReview(base, rating, at));
    const initial = [1, 2, 3, 4].map(rating => FSRSEngine.previewReview({
      id: 'initial', prompt: 'P', answer: 'A', dueDate: at.toISOString()
    }, rating, at));
    let rejected = 0;
    for (const rating of [0, 5, NaN, 1.5]) {
      try { FSRSEngine.previewReview(base, rating, at); } catch { rejected++; }
    }
    await FSRSEngine.addCards([base]);
    const saved = await FSRSEngine.reviewCard(base.id, 3, at);
    const raw = await new Promise((resolve, reject) => {
      const request = indexedDB.open('EstudioInteligenteDB');
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const db = request.result;
        const read = db.transaction('fsrs_cards').objectStore('fsrs_cards').get(base.id);
        read.onsuccess = () => { db.close(); resolve(read.result); };
        read.onerror = () => { db.close(); reject(read.error); };
      };
    });
    return { preview, initial, rejected, saved, raw };
  });
  assert.deepEqual(result.initial.map(card => card.intervalDays), [1, 1, 2, 6]);
  assert.equal(result.rejected, 4);
  const weights = [0.4, 0.6, 2.4, 5.8, 4.93, 0.94, 0.86, 0.01, 1.49, 0.14, 0.94, 2.18, 0.05, 0.34, 1.26, 0.29, 2.61];
  const recall = 1 / (1 + 3 / (9 * 2.4));
  result.preview.forEach((card, index) => {
    const rating = index + 1;
    const expected = rating === 1
      ? weights[11] * 4.93 ** -weights[12] * ((2.4 + 1) ** weights[13] - 1) * Math.exp(weights[14] * (1 - recall))
      : 2.4 * (1 + Math.exp(weights[8]) * (11 - 4.93) * 2.4 ** -weights[9]
        * (Math.exp(weights[10] * (1 - recall)) - 1) * (rating === 2 ? weights[15] : 1) * (rating === 4 ? weights[16] : 1));
    assert.ok(Math.abs(card.stability - expected) <= 0.000051, 'Estabilidad FSRS v4, rating ' + rating);
    assert.equal(card.intervalDays, Math.max(1, Math.round(9 * expected * (1 / 0.9 - 1))));
    assert.equal(card.streak, rating === 1 ? 0 : 3);
  });
  assert.deepEqual(result.raw, result.saved);
  await session.navigate(session.origin + '/index.html?release-reload=1');
  const reloaded = await session.page.evaluate(() => FSRSEngine.getCard('release-audit-card'));
  for (const key of ['stability', 'difficulty', 'lastReview', 'dueDate', 'streak', 'reps', 'lapses']) {
    assert.equal(reloaded[key], result.saved[key], 'Persistencia tras recarga: ' + key);
  }
});

audit('5. iCalendar usa CRLF, escape de texto y plegado UTF-8 RFC 5545', async () => {
  const session = await getBrowser();
  const ics = await session.page.evaluate(async () => {
    const SavedBlob = Blob;
    const savedClick = HTMLAnchorElement.prototype.click;
    const savedAlert = window.alert;
    const savedEvents = CALENDAR_EVENTS;
    let calendarBlob;
    try {
      window.Blob = class extends SavedBlob { constructor(...args) { super(...args); calendarBlob = this; } };
      HTMLAnchorElement.prototype.click = function () {};
      window.alert = () => {};
      CALENDAR_EVENTS = [{
        id: 'qa-1', date: '2030-01-04', type: 'study', time: '21:00',
        title: 'Hormigón, revisión; ITO', desc: 'á🛠️'.repeat(100) + '\nsegunda línea\rotra;coma,barra\\final'
      }];
      downloadIcsCalendar();
      return await calendarBlob.text();
    } finally {
      window.Blob = SavedBlob;
      HTMLAnchorElement.prototype.click = savedClick;
      window.alert = savedAlert;
      CALENDAR_EVENTS = savedEvents;
    }
  });
  assert.equal(/(^|[^\r])\n/.test(ics), false, 'No se permiten saltos LF solos.');
  assert.equal(/\r(?!\n)/.test(ics), false, 'No se permiten CR solos.');
  assert.ok(ics.endsWith('END:VCALENDAR\r\n'));
  ics.split('\r\n').forEach(line => assert.ok(Buffer.byteLength(line, 'utf8') <= 75, 'Máximo 75 octetos por línea.'));
  const unfolded = ics.replace(/\r\n[ \t]/g, '');
  assert.ok(unfolded.startsWith('BEGIN:VCALENDAR\r\nVERSION:2.0\r\n'));
  assert.match(unfolded, /DTSTAMP:\d{8}T\d{6}Z\r\n/);
  assert.match(unfolded, /DTSTART;VALUE=DATE:20300104\r\nDTEND;VALUE=DATE:20300105\r\n/);
  assert.match(unfolded, /SUMMARY:Hormigón\\, revisión\\; ITO\r\n/);
  assert.ok(unfolded.includes('\\nsegunda línea\\notra\\;coma\\,barra\\\\final'));
  assert.equal((unfolded.match(/BEGIN:VEVENT/g) || []).length, 1);
  assert.equal((unfolded.match(/^UID:.+$/gm) || []).length, 1);
});

audit('6. Chat/Feynman renderizan usuario e IA como texto sin sinks HTML inseguros', async () => {
  const session = await getBrowser();
  const result = await session.page.evaluate(async () => {
    const payload = '<img src=x onerror="window.__auditXss=1"><svg onload="window.__auditXss=2"></svg><script>window.__auditXss=3</script>';
    const savedCall = callGeminiApi;
    const inner = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
    const outer = Object.getOwnPropertyDescriptor(Element.prototype, 'outerHTML');
    const adjacent = Element.prototype.insertAdjacentHTML;
    let sinkWrites = 0;
    const forbid = () => { sinkWrites++; throw new Error('Sink HTML prohibido durante chat/Feynman'); };
    try {
      window.__auditXss = 0;
      Object.defineProperty(Element.prototype, 'innerHTML', { ...inner, set: forbid });
      Object.defineProperty(Element.prototype, 'outerHTML', { ...outer, set: forbid });
      Element.prototype.insertAdjacentHTML = forbid;
      callGeminiApi = async () => ({
        verified: false, concept_score: 20, correct_aspects: [payload], gaps_and_omissions: [payload],
        normative_citation: payload, triada_verdict: { omen: payload, atlas: payload, ito: payload }
      });
      document.getElementById('feynman-user-input').value = payload;
      await evaluateFeynmanExplanation();
      document.getElementById('pdf-chat-input').value = payload;
      await sendPdfChatMessage();
      appendPdfSystemMessage(payload);
      const feynman = document.getElementById('feynman-analyzed-markup');
      const chat = document.getElementById('pdf-chat-messages');
      return {
        sinkWrites, executed: window.__auditXss,
        feynmanText: feynman.textContent.includes(payload), chatText: chat.textContent.includes(payload),
        injectedElements: feynman.querySelectorAll('img,svg,script,iframe,object').length
          + chat.querySelectorAll('img,svg,script,iframe,object').length
      };
    } finally {
      callGeminiApi = savedCall;
      Object.defineProperty(Element.prototype, 'innerHTML', inner);
      Object.defineProperty(Element.prototype, 'outerHTML', outer);
      Element.prototype.insertAdjacentHTML = adjacent;
    }
  });
  assert.deepEqual(result, { sinkWrites: 0, executed: 0, feynmanText: true, chatText: true, injectedElements: 0 });
});

audit('7. PRECACHE_ASSETS y manifest cubren todos los módulos e iconos móviles', () => {
  const context = vm.createContext({ self: { addEventListener() {} } });
  vm.runInContext(source('sw.js') + '\nthis.assets = PRECACHE_ASSETS; this.version = APP_VERSION;', context);
  const expected = ['index.html', 'styles.css', 'security.js', 'src/corpus.js', 'src/gemini-client.js',
    'src/fsrs.js', 'src/pdf-viewer.js', 'app.js', 'pwa.js', 'manifest.json', 'app-icon.svg'];
  const assetPaths = Array.from(context.assets, asset => new URL(asset, 'https://audit.invalid/').pathname.slice(1));
  expected.forEach(filename => assert.ok(assetPaths.includes(filename), 'Falta en precache: ' + filename));
  context.assets.forEach(asset => {
    const filename = new URL(asset, 'https://audit.invalid/').pathname.slice(1);
    if (filename) assert.ok(fs.existsSync(path.join(root, filename)), 'Activo inexistente: ' + filename);
  });
  for (const match of source('index.html').matchAll(/(?:src|href)="(\.\/[^"]+\?v=[^"]+)"/g)) {
    assert.ok(context.assets.includes(match[1]), 'HTML y precache desalineados: ' + match[1]);
  }
  const manifest = JSON.parse(source('manifest.json'));
  assert.ok(manifest.name && manifest.short_name && manifest.id);
  assert.ok(['standalone', 'minimal-ui', 'fullscreen'].includes(manifest.display));
  const base = new URL('https://audit.invalid/app/manifest.json');
  const scope = new URL(manifest.scope, base);
  assert.ok(new URL(manifest.start_url, base).href.startsWith(scope.href));
  for (const size of [192, 512]) {
    const icon = manifest.icons.find(icon => icon.sizes === size + 'x' + size && icon.type === 'image/png');
    assert.ok(icon && icon.purpose.includes('any'), 'Icono PNG instalable ' + size);
    const filename = new URL(icon.src, 'https://audit.invalid/').pathname.slice(1);
    const png = fs.readFileSync(path.join(root, filename));
    assert.equal(png.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
    assert.equal(png.readUInt32BE(16), size);
    assert.equal(png.readUInt32BE(20), size);
    assert.ok(assetPaths.includes(filename));
  }
  assert.equal(context.version, '2.0.0-PROD');
});

audit('8. Navegador valida manifiesto, Service Worker y recarga offline real', async () => {
  const session = await getBrowser();
  await session.waitFor(async () => Boolean(navigator.serviceWorker.controller));
  const manifest = await session.page.send('Page.getAppManifest');
  assert.deepEqual(manifest.errors, [], 'Errores del manifiesto en Chromium');
  assert.ok(JSON.parse(manifest.data).icons.some(icon => icon.sizes === '512x512'));
  const installability = await session.page.send('Page.getInstallabilityErrors');
  assert.deepEqual(installability.installabilityErrors, [], 'Criterios de instalación Chromium');
  const cache = await session.page.evaluate(async () => {
    const names = await caches.keys();
    const selected = names.find(name => name === 'estudio-inteligente-2.0.0-PROD');
    if (!selected) throw new Error('No existe caché de producción.');
    const requests = await (await caches.open(selected)).keys();
    return requests.map(request => new URL(request.url).pathname);
  });
  assert.ok(cache.includes('/src/fsrs.js') && cache.includes('/src/pdf-viewer.js') && cache.includes('/icons/app-512.png'));
  try {
    session.setServerOffline(true);
    await session.page.send('Network.emulateNetworkConditions', {
      offline: true, latency: 0, downloadThroughput: 0, uploadThroughput: 0
    });
    await session.navigate(session.origin + '/index.html?release-offline=1');
    const offline = await session.page.evaluate(async () => ({
      controlled: Boolean(navigator.serviceWorker.controller),
      card: await FSRSEngine.getCard('release-audit-card'),
      result: await GeminiClient.analyze({ prompt: 'partida inexistente espacial' })
    }));
    assert.equal(offline.controlled, true);
    assert.equal(offline.card.reps, 3);
    assert.equal(offline.result.verified, false);
    assert.ok(offline.result.normative_citation.includes('ABSTENCIÓN'));
  } finally {
    session.setServerOffline(false);
    await session.page.send('Network.emulateNetworkConditions', {
      offline: false, latency: 0, downloadThroughput: -1, uploadThroughput: -1
    });
  }
});

audit('9. PDF.js desactiva evaluación dinámica y los módulos mantienen sintaxis válida', () => {
  assert.match(source('src/pdf-viewer.js'), /isEvalSupported:\s*false/);
  for (const filename of ['app.js', 'security.js', 'sw.js', 'pwa.js', 'src/corpus.js',
    'src/gemini-client.js', 'src/fsrs.js', 'src/pdf-viewer.js']) {
    new vm.Script(source(filename), { filename });
  }
});

audit('10. Gemini usa JSON Schema, clave solo en cabecera y fallback ante error/timeout', async () => {
  const { context, vault, calls } = vaultContext();
  const secret = ['qa', 'runtime', 'credential', 'not-live'].join('-');
  vault.setKey(secret);
  context.AbortController = AbortController;
  context.setTimeout = setTimeout;
  context.clearTimeout = clearTimeout;
  const requests = [];
  context.fetch = async (url, options) => {
    requests.push({ url, options });
    return { ok: true, status: 200, json: async () => ({
      candidates: [{ content: { parts: [{ text: JSON.stringify({
        verified: true, concept_score: 83, correct_aspects: ['Acierto'], gaps_and_omissions: ['Revisar'],
        normative_citation: 'cita inventada por el modelo',
        triada_verdict: { omen: 'Concepto', atlas: 'Revisión local', ito: 'Inspección' }
      }) }] } }]
    }) };
  };
  vm.runInContext(source('src/corpus.js') + '\n' + source('src/gemini-client.js'), context);
  const result = await vm.runInContext('GeminiClient.analyze({prompt:"curado hormigón"})', context);
  assert.equal(result.verified, true);
  assert.ok(result.normative_citation.includes('NCh 170:2016'));
  assert.ok(!result.normative_citation.includes('inventada'));
  assert.deepEqual(Object.keys(result).sort(), [
    'concept_score', 'correct_aspects', 'gaps_and_omissions', 'normative_citation', 'triada_verdict', 'verified'
  ]);
  assert.equal(requests.length, 1);
  const request = requests[0];
  assert.equal(request.options.headers['x-goog-api-key'], secret);
  assert.ok(!request.url.includes(secret) && !request.options.body.includes(secret));
  const body = JSON.parse(request.options.body);
  assert.equal(body.generationConfig.responseMimeType, 'application/json');
  assert.equal(body.generationConfig.responseSchema.type, 'OBJECT');
  assert.ok(body.systemInstruction.parts[0].text.includes('El curado debe iniciarse'));
  context.fetch = async () => ({ ok: false, status: 503, json: async () => ({ error: { message: 'QA unavailable' } }) });
  const unavailable = await vm.runInContext('GeminiClient.analyze({prompt:"partida desconocida espacial"})', context);
  assert.equal(unavailable.verified, false);
  context.setTimeout = (callback, ms) => { assert.equal(ms, 8000); queueMicrotask(callback); return 0; };
  context.clearTimeout = () => {};
  context.fetch = (url, options) => new Promise((resolve, reject) => {
    const fail = () => { const error = new Error('QA abort'); error.name = 'AbortError'; reject(error); };
    if (options.signal.aborted) fail();
    else options.signal.addEventListener('abort', fail, { once: true });
  });
  const timeout = await vm.runInContext('GeminiClient.analyze({prompt:"partida desconocida espacial"})', context);
  assert.equal(timeout.verified, false);
  assert.ok(timeout.normative_citation.includes('ABSTENCIÓN'));
  assert.deepEqual(calls, []);
});

(async () => {
  let failures = 0;
  try {
    for (const { name, run } of cases) {
      try { await run(); console.log('PASS ' + name); }
      catch (error) { failures++; console.error('FAIL ' + name + '\n' + error.message); }
    }
  } finally {
    if (browser) await browser.close();
  }
  console.log('\nRelease audit: ' + (cases.length - failures) + '/' + cases.length + ' pruebas aprobadas.');
  process.exitCode = failures ? 1 : 0;
})().catch(error => { console.error(error.message); process.exitCode = 1; });
