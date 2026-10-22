'use strict';

// NODE_PATH may point at a temporary install of playwright-core and axe-core.
// Run: node tests/accessibility.browser.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const { chromium } = require('playwright-core');
const root = path.resolve(__dirname, '..');
const mime = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml' };

async function main() {
  const server = http.createServer((req, res) => {
    const file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
    if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
    fs.readFile(file, (error, data) => {
      if (error) res.writeHead(404).end();
      else { res.setHeader('Content-Type', mime[path.extname(file)] || 'application/octet-stream'); res.end(data); }
    });
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  let browser;
  try {
    browser = await chromium.launch({ channel: 'msedge', headless: true });
    const context = await browser.newContext({ viewport: { width: 393, height: 852 }, serviceWorkers: 'block', reducedMotion: 'reduce' });
    context.setDefaultTimeout(15000);
    await context.route('https://fonts.googleapis.com/**', route => route.abort());
    await context.route('https://fonts.gstatic.com/**', route => route.abort());
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => { errors.push(error.message); console.error('PAGE ERROR:', error.message); });
    await page.goto('http://127.0.0.1:' + server.address().port + '/index.html', { waitUntil: 'domcontentloaded' });
    console.log('Application loaded');
    await page.waitForFunction(() => !document.getElementById('fsrs-due-count').textContent.includes('calculando'), null, { timeout: 15000 });
    await page.addScriptTag({ path: require.resolve('axe-core/axe.min.js') });
    const findings = [];
    const audit = async label => {
      const result = await page.evaluate(async () => {
        const result = await axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] } });
        return result.violations.map(violation => ({
          id: violation.id, nodes: violation.nodes.map(node => ({ target: node.target, summary: node.failureSummary }))
        }));
      });
      if (result.length) findings.push({ label, result });
    };
    const inspectLayout = async label => {
      const result = await page.evaluate(() => {
        const visible = element => element.getClientRects().length && getComputedStyle(element).visibility !== 'hidden'
          && !element.closest('[inert], [hidden], .hidden');
        const small = Array.from(document.querySelectorAll('button, a[href], input:not([type="hidden"]), select, textarea, [role="button"], [role="tab"]'))
          .filter(visible).filter(element => {
            const rect = element.getBoundingClientRect();
            return rect.width < 43.99 || rect.height < 43.99;
          }).map(element => ({ id: element.id, class: element.className, text: element.textContent.slice(0, 40),
            width: element.getBoundingClientRect().width, height: element.getBoundingClientRect().height }));
        const clipped = Array.from(document.querySelectorAll('button, input, select, [role="button"], [role="tab"]'))
          .filter(visible).filter(element => {
            const rect = element.getBoundingClientRect();
            return rect.left < -1 || rect.right > innerWidth + 1;
          }).map(element => element.id || element.className);
        return { small, clipped, overflow: document.documentElement.scrollWidth > innerWidth,
          headerHeight: document.getElementById('main-header').getBoundingClientRect().height };
      });
      assert.deepEqual(result.small, [], label + ': targets smaller than 44px: ' + JSON.stringify(result.small));
      assert.deepEqual(result.clipped, [], label + ': clipped controls: ' + JSON.stringify(result.clipped));
      assert.equal(result.overflow, false, label + ': horizontal overflow');
      if (page.viewportSize().width <= 860) assert.ok(result.headerHeight <= 56, label + ': header >56px');
    };
    for (const width of [320, 393, 430, 860, 861, 1440]) {
      console.log('Checking viewport', width);
      await page.setViewportSize({ width, height: 852 });
      for (const mode of ['triad', 'astra', 'feynman', 'pdf', 'calendar']) {
        await page.evaluate(mode => switchPedagogicalMode(mode), mode);
        await inspectLayout(width + '/' + mode);
        if (process.env.PHASE7_ARTIFACTS && ((width === 393 && mode === 'triad') || (width === 320 && mode === 'calendar'))) {
          await page.locator('#study-session-view').scrollIntoViewIfNeeded();
          await page.screenshot({ path: path.join(process.env.PHASE7_ARTIFACTS, width + '-' + mode + '.png') });
        }
        if (width === 393 || width === 1440) await audit(width + '/' + mode);
      }
    }
    await page.setViewportSize({ width: 393, height: 852 });
    await page.evaluate(() => switchPedagogicalMode('calendar'));
    const day = page.locator('.cal-day-cell[role="button"]').nth(5);
    await day.focus();
    await page.keyboard.press('Space');
    assert.equal(await page.locator('.cal-day-cell:focus').getAttribute('aria-pressed'), 'true');
    await page.keyboard.press('Enter');
    assert.equal(await page.locator('.cal-day-cell:focus').getAttribute('aria-pressed'), 'true');
    await page.locator('#sidebar-toggle').click();
    await inspectLayout('drawer');
    await audit('drawer');
    const group = page.locator('#group-iplacex .group-header');
    await group.focus();
    await page.keyboard.press('Space');
    assert.equal(await group.getAttribute('aria-expanded'), 'false');
    assert.equal(await page.locator('#group-iplacex-items').isVisible(), false);
    await page.keyboard.press('Enter');
    assert.equal(await group.getAttribute('aria-expanded'), 'true');
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('#sidebar-toggle').evaluate(el => el === document.activeElement), true);
    // Open every modal from a real trigger, including drawer-to-modal transitions.
    for (const [trigger, id] of [
      ['#btn-open-duolingo', 'modal-duolingo'], ['#btn-open-youtube-ingest', 'modal-youtube'],
      ['#btn-open-calendar-modal', 'modal-calendar'], ['.alert-link', 'modal-fsrs'],
      ['#btn-open-ai-modal', 'modal-ai-studio']
    ]) {
      if (id !== 'modal-ai-studio') await page.locator('#sidebar-toggle').click();
      await page.locator(trigger).click();
      await page.waitForFunction(id => !document.getElementById(id).classList.contains('hidden'), id);
      await inspectLayout(id);
      await audit(id);
      await page.locator('#' + id + ' .btn-close-modal').hover();
      await audit('hover/' + id);
      if (id === 'modal-youtube') {
        await page.locator('#yt-url-input').fill('https://www.youtube.com/watch?v=test');
        await page.getByRole('button', { name: 'PROCESAR Y RESUMIR', exact: false }).click();
        await audit('youtube/result');
      }
      if (id === 'modal-fsrs') {
        await page.locator('#fsrs-reveal-answer').click();
        assert.equal(await page.locator('[data-fsrs-rating="1"]').evaluate(el => el === document.activeElement), true);
        await audit('fsrs/answer');
      }
      await page.evaluate(() => toggleSunlightMode());
      await audit('sunlight/' + id);
      await page.evaluate(() => toggleSunlightMode());
      const focus = await page.evaluate(id => {
        const dialog = document.getElementById(id).querySelector('[role="dialog"]');
        const elements = visibleFocusableElements(dialog);
        return { first: elements[0]?.outerHTML, count: elements.length, contained: dialog.contains(document.activeElement) };
      }, id);
      assert.ok(focus.contained && focus.count > 0, id + ': initial focus');
      await page.evaluate(() => focusLayerStart(AccessibilityState.layer));
      await page.keyboard.press('Tab');
      await page.keyboard.press('Shift+Tab');
      assert.equal(await page.evaluate(id => {
        const dialog = document.getElementById(id).querySelector('[role="dialog"]');
        return document.activeElement === visibleFocusableElements(dialog).at(-1);
      }, id), true, id + ': backward focus trap');
      await page.keyboard.press('Tab');
      assert.equal(await page.evaluate(id => {
        const dialog = document.getElementById(id).querySelector('[role="dialog"]');
        return document.activeElement === visibleFocusableElements(dialog)[0];
      }, id), true, id + ': forward focus trap');
      await page.keyboard.press('Escape');
      assert.equal(await page.locator('#' + id).isVisible(), false, id + ': Escape');
      assert.equal(await page.locator(id === 'modal-ai-studio' ? trigger : '#sidebar-toggle')
        .evaluate(el => el === document.activeElement), true, id + ': focus restored');
    }
    await page.locator('#btn-open-ai-modal').click();
    await page.setViewportSize({ width: 1200, height: 852 });
    await page.waitForFunction(() => document.querySelector('.header-center').parentElement.id === 'main-header');
    assert.equal(await page.locator('#sidebar-nav').evaluate(el => Boolean(el.closest('[inert]'))), true, 'rotated modal keeps background inert');
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('#sidebar-nav').evaluate(el => el.inert), false, 'desktop sidebar restored after modal');
    await page.setViewportSize({ width: 393, height: 852 });
    await page.waitForFunction(() => document.querySelector('.header-center').parentElement.id === 'drawer-utility-controls');
    assert.equal(await page.locator('#sidebar-nav').evaluate(el => el.inert), true, 'closed mobile drawer is inert');
    const missingLabels = await page.evaluate(() => Array.from(document.querySelectorAll('input,select,textarea'))
      .filter(element => element.type !== 'hidden' && !element.labels?.length).map(element => element.id));
    assert.deepEqual(missingLabels, [], 'Every form control has an explicit label');
    for (const mode of ['triad', 'astra', 'feynman', 'pdf', 'calendar']) {
      await page.evaluate(mode => switchPedagogicalMode(mode), mode);
      await page.locator('#sunlight-toggle').click();
      await audit('sunlight/' + mode);
      await page.locator('#sunlight-toggle').click();
    }
    assert.deepEqual(errors, [], 'Runtime errors: ' + JSON.stringify(errors));
    console.log(JSON.stringify({ findings }, null, 2));
    assert.equal(findings.length, 0, 'Accessibility violations (see findings above)');
    console.log('PASS: mobile layout, 44px targets, keyboard, modal traps, contrast and runtime.');
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
