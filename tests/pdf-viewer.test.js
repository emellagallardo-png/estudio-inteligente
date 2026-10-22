'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

test('PDFViewer usa FileReader, renderiza y entrega texto paginado al chat', async () => {
  const elements = new Map();
  const makeElement = () => ({
    textContent: '',
    dataset: {},
    style: {},
    clientWidth: 800,
    replaceChildren(child) { this.child = child; }
  });
  ['pdf-canvas-container', 'pdf-page-num', 'pdf-active-name', 'pdf-extraction-status']
    .forEach((id) => elements.set(id, makeElement()));

  global.window = global;
  global.window.devicePixelRatio = 1;
  global.document = {
    head: { appendChild: () => {} },
    getElementById: (id) => elements.get(id) || null,
    createElement: (tag) => tag === 'canvas'
      ? { className: '', style: {}, setAttribute: () => {}, getContext: () => ({}) }
      : makeElement()
  };
  global.File = class File {
    constructor(name) {
      this.name = name;
      this.type = 'application/pdf';
      this.size = 128;
    }
  };
  global.FileReader = class FileReader {
    readAsArrayBuffer() {
      this.result = new ArrayBuffer(8);
      queueMicrotask(() => this.onload());
    }
  };

  const pageTexts = [
    'Hormigón prefabricado y conexión húmeda.',
    'Control ITO de densidad Marshall en carpeta asfáltica.'
  ];
  const pdfDocument = {
    numPages: 2,
    async getPage(pageNumber) {
      return {
        getViewport: ({ scale }) => ({ width: 600 * scale, height: 800 * scale }),
        render: () => ({ promise: Promise.resolve(), cancel: () => {} }),
        getTextContent: async () => ({ items: [{ str: pageTexts[pageNumber - 1] }] })
      };
    }
  };
  global.pdfjsLib = {
    GlobalWorkerOptions: {},
    getDocument: () => ({ promise: Promise.resolve(pdfDocument) })
  };

  delete require.cache[require.resolve('../src/pdf-viewer.js')];
  const PDFViewer = require('../src/pdf-viewer.js');
  PDFViewer.init();
  const result = await PDFViewer.loadFile(new File('prueba.pdf'));

  assert.deepEqual(result, { filename: 'prueba.pdf', pages: 2, textPages: 2, totalCharacters: 94 });
  assert.equal(elements.get('pdf-page-num').textContent, 'Pág 1 / 2');
  assert.equal(elements.get('pdf-active-name').textContent, 'prueba.pdf');
  assert.match(PDFViewer.getChatContext('Marshall densidad'), /página 2\/2/);
  assert.match(PDFViewer.getChatContext('Marshall densidad'), /Control ITO de densidad Marshall/);

  delete global.pdfjsLib;
  delete global.FileReader;
  delete global.File;
  delete global.document;
  delete global.window;
});
