'use strict';

// Generated PNG assets use the canonical repository SVG; no image service needed.
const fs = require('node:fs');
const path = require('node:path');
const { startBrowser } = require('../tests/helpers/browser-audit.cjs');

(async () => {
  const root = path.resolve(__dirname, '..');
  const audit = await startBrowser(root);
  try {
    fs.mkdirSync(path.join(root, 'icons'), { recursive: true });
    for (const size of [192, 512]) {
      const dataUrl = await audit.page.evaluate('(async () => {' +
        'const image = new Image(); image.src = "/app-icon.svg"; await image.decode();' +
        'const canvas = document.createElement("canvas"); canvas.width = canvas.height = ' + size + ';' +
        'const ctx = canvas.getContext("2d"); ctx.fillStyle = "#060911"; ctx.fillRect(0,0,canvas.width,canvas.height);' +
        'ctx.drawImage(image,0,0,canvas.width,canvas.height); return canvas.toDataURL("image/png");' +
        '})()');
      fs.writeFileSync(path.join(root, 'icons', 'app-' + size + '.png'), Buffer.from(dataUrl.split(',')[1], 'base64'));
      console.log('Generado icono ' + size + 'x' + size);
    }
  } finally {
    await audit.close();
  }
})().catch(error => { console.error(error.message); process.exitCode = 1; });
