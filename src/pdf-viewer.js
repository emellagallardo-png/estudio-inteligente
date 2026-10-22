/**
 * PDFViewer · Fase 6 Plan Luna 5.6
 * Visor y extractor local basado en PDF.js. El archivo nunca sale del navegador.
 */
const PDFViewer = (() => {
  'use strict';

  const PDFJS_VERSION = '3.11.174';
  const PDFJS_LIBRARY_URL = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${PDFJS_VERSION}/build/pdf.min.js`;
  const PDFJS_WORKER_URL = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${PDFJS_VERSION}/build/pdf.worker.min.js`;
  const MAX_FILE_BYTES = 50 * 1024 * 1024;
  const MAX_CHAT_CONTEXT_CHARS = 14000;
  const STOP_WORDS = new Set([
    'para', 'como', 'esta', 'este', 'estos', 'estas', 'sobre', 'entre', 'desde',
    'hasta', 'donde', 'cuando', 'cual', 'qué', 'que', 'una', 'uno', 'unos', 'unas',
    'del', 'las', 'los', 'con', 'por', 'documento', 'pagina', 'página'
  ]);

  const state = {
    document: null,
    filename: '',
    currentPage: 1,
    pageTexts: [],
    renderTask: null,
    loadToken: 0,
    options: {
      containerId: 'pdf-canvas-container',
      pageLabelId: 'pdf-page-num',
      filenameId: 'pdf-active-name',
      statusId: 'pdf-extraction-status'
    }
  };
  let pdfJsPromise = null;

  function configurePdfJs() {
    if (typeof pdfjsLib === 'undefined') return null;
    pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_URL;
    return pdfjsLib;
  }

  function ensurePdfJs() {
    const loaded = configurePdfJs();
    if (loaded) return Promise.resolve(loaded);
    if (pdfJsPromise) return pdfJsPromise;

    pdfJsPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      const timeout = window.setTimeout(() => {
        script.remove();
        pdfJsPromise = null;
        reject(new Error('PDF.js no respondió dentro del tiempo esperado. Comprueba la conexión.'));
      }, 12000);
      script.src = PDFJS_LIBRARY_URL;
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        window.clearTimeout(timeout);
        const library = configurePdfJs();
        if (library) resolve(library);
        else {
          pdfJsPromise = null;
          reject(new Error('PDF.js se descargó, pero no pudo inicializarse.'));
        }
      };
      script.onerror = () => {
        window.clearTimeout(timeout);
        pdfJsPromise = null;
        reject(new Error('No fue posible descargar PDF.js. El resto de la aplicación sigue disponible.'));
      };
      document.head.appendChild(script);
    });
    return pdfJsPromise;
  }

  function element(id) {
    return id ? document.getElementById(id) : null;
  }

  function updateStatus(message, kind = 'info') {
    const target = element(state.options.statusId);
    if (!target) return;
    target.textContent = String(message || '');
    target.dataset.status = kind;
  }

  function updateToolbar() {
    const filename = element(state.options.filenameId);
    const pageLabel = element(state.options.pageLabelId);
    if (filename) filename.textContent = state.filename || 'Selecciona un PDF local';
    if (pageLabel) {
      pageLabel.textContent = state.document
        ? `Pág ${state.currentPage} / ${state.document.numPages}`
        : 'Pág 0 / 0';
    }
  }

  function readFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error || new Error('No fue posible leer el archivo local.'));
      reader.onabort = () => reject(new Error('La lectura del PDF fue cancelada.'));
      reader.readAsArrayBuffer(file);
    });
  }

  function validateFile(file) {
    if (!(file instanceof File)) throw new TypeError('Debes seleccionar un archivo PDF local.');
    const isPdf = file.type === 'application/pdf' || file.name.toLocaleLowerCase('es-CL').endsWith('.pdf');
    if (!isPdf) throw new TypeError('El archivo seleccionado no es un PDF.');
    if (file.size === 0) throw new TypeError('El PDF está vacío.');
    if (file.size > MAX_FILE_BYTES) throw new RangeError('El PDF supera el límite local de 50 MB.');
  }

  function normalizePageText(textContent) {
    return textContent.items
      .map((item) => String(item.str || '').trim())
      .filter(Boolean)
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  async function extractPageTexts(pdfDocument, token) {
    const texts = new Array(pdfDocument.numPages);
    for (let pageNumber = 1; pageNumber <= pdfDocument.numPages; pageNumber += 1) {
      if (token !== state.loadToken) throw new Error('La extracción fue reemplazada por una carga más reciente.');
      updateStatus(`Extrayendo texto: página ${pageNumber} de ${pdfDocument.numPages}…`);
      const page = await pdfDocument.getPage(pageNumber);
      const content = await page.getTextContent();
      texts[pageNumber - 1] = normalizePageText(content);
    }
    return texts;
  }

  function fitScale(page) {
    const container = element(state.options.containerId);
    const baseViewport = page.getViewport({ scale: 1 });
    const availableWidth = Math.max(320, (container ? container.clientWidth : 900) - 32);
    return clamp(availableWidth / baseViewport.width, 0.5, 2.25);
  }

  function clamp(value, minimum, maximum) {
    return Math.min(maximum, Math.max(minimum, value));
  }

  async function renderPage(pageNumber = state.currentPage) {
    if (!state.document) throw new Error('Carga un PDF antes de navegar por sus páginas.');
    const requestedPage = clamp(Math.round(Number(pageNumber) || 1), 1, state.document.numPages);
    state.currentPage = requestedPage;
    updateToolbar();

    if (state.renderTask && typeof state.renderTask.cancel === 'function') {
      state.renderTask.cancel();
    }

    const page = await state.document.getPage(requestedPage);
    const scale = fitScale(page);
    const viewport = page.getViewport({ scale });
    const outputScale = Math.min(window.devicePixelRatio || 1, 2);
    const canvas = document.createElement('canvas');
    canvas.className = 'pdf-page-canvas';
    canvas.setAttribute('aria-label', `Página ${requestedPage} del PDF ${state.filename}`);
    canvas.width = Math.floor(viewport.width * outputScale);
    canvas.height = Math.floor(viewport.height * outputScale);
    canvas.style.width = `${Math.floor(viewport.width)}px`;
    canvas.style.height = `${Math.floor(viewport.height)}px`;

    const context = canvas.getContext('2d', { alpha: false });
    const transform = outputScale === 1 ? null : [outputScale, 0, 0, outputScale, 0, 0];
    const container = element(state.options.containerId);
    if (!container) throw new Error('No se encontró el contenedor del visor PDF.');
    container.replaceChildren(canvas);

    const renderTask = page.render({ canvasContext: context, transform, viewport });
    state.renderTask = renderTask;
    try {
      await renderTask.promise;
    } catch (error) {
      if (error && error.name !== 'RenderingCancelledException') throw error;
    } finally {
      if (state.renderTask === renderTask) state.renderTask = null;
    }
    return requestedPage;
  }

  async function loadFile(file) {
    validateFile(file);
    const token = ++state.loadToken;
    state.filename = file.name;
    state.document = null;
    state.currentPage = 1;
    state.pageTexts = [];
    updateToolbar();
    updateStatus('Leyendo el PDF exclusivamente en este dispositivo…');

    const arrayBuffer = await readFile(file);
    const library = await ensurePdfJs();
    const loadingTask = library.getDocument({ data: new Uint8Array(arrayBuffer) });
    const pdfDocument = await loadingTask.promise;
    if (token !== state.loadToken) {
      await pdfDocument.destroy();
      throw new Error('La carga fue reemplazada por un PDF más reciente.');
    }

    state.document = pdfDocument;
    updateToolbar();
    await renderPage(1);
    state.pageTexts = await extractPageTexts(pdfDocument, token);
    const textPages = state.pageTexts.filter(Boolean).length;
    const totalCharacters = state.pageTexts.reduce((sum, pageText) => sum + pageText.length, 0);
    updateStatus(
      textPages
        ? `Texto local listo: ${textPages}/${pdfDocument.numPages} páginas · ${totalCharacters.toLocaleString('es-CL')} caracteres.`
        : `PDF renderizado: ${pdfDocument.numPages} páginas. No se detectó texto seleccionable.`,
      textPages ? 'success' : 'warning'
    );
    return { filename: file.name, pages: pdfDocument.numPages, textPages, totalCharacters };
  }

  async function changePage(delta) {
    if (!state.document) throw new Error('Carga un PDF antes de navegar.');
    return renderPage(state.currentPage + Number(delta || 0));
  }

  function tokenize(query) {
    return String(query || '')
      .toLocaleLowerCase('es-CL')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .split(/[^a-z0-9]+/)
      .filter((term) => term.length > 2 && !STOP_WORDS.has(term));
  }

  function pageScore(text, terms) {
    const normalized = String(text || '').toLocaleLowerCase('es-CL').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return terms.reduce((score, term) => score + (normalized.includes(term) ? 1 : 0), 0);
  }

  function getChatContext(query) {
    if (!state.document) return 'No hay un PDF local cargado.';
    if (!state.pageTexts.some(Boolean)) {
      return `El PDF “${state.filename}” tiene ${state.document.numPages} páginas, pero no contiene texto seleccionable. Puede tratarse de un documento escaneado.`;
    }

    const terms = tokenize(query);
    const currentIndex = state.currentPage - 1;
    const ranked = state.pageTexts
      .map((text, index) => ({ index, text, score: pageScore(text, terms) + (index === currentIndex ? 100 : 0) }))
      .filter((page) => page.text)
      .sort((a, b) => b.score - a.score || a.index - b.index);

    const sections = [];
    let length = 0;
    for (const page of ranked) {
      const section = `[PDF: ${state.filename} · página ${page.index + 1}/${state.document.numPages}]\n${page.text}`;
      if (sections.length > 0 && length + section.length > MAX_CHAT_CONTEXT_CHARS) continue;
      sections.push(section.slice(0, MAX_CHAT_CONTEXT_CHARS - length));
      length += section.length;
      if (sections.length >= 4 || length >= MAX_CHAT_CONTEXT_CHARS) break;
    }
    return sections.join('\n\n');
  }

  function init(options = {}) {
    state.options = { ...state.options, ...options };
    updateToolbar();
    updateStatus('Selecciona un PDF local para renderizar y extraer su texto. PDF.js se cargará al usar el visor.');
    return true;
  }

  function getState() {
    return Object.freeze({
      filename: state.filename,
      currentPage: state.currentPage,
      pageCount: state.document ? state.document.numPages : 0,
      extractedPages: state.pageTexts.filter(Boolean).length
    });
  }

  return Object.freeze({
    init,
    loadFile,
    renderPage,
    changePage,
    getChatContext,
    getState,
    hasDocument: () => Boolean(state.document)
  });
})();

if (typeof globalThis !== 'undefined') globalThis.PDFViewer = PDFViewer;
if (typeof module !== 'undefined' && module.exports) module.exports = PDFViewer;
