/* Restitución de la navegación y aspecto de la página pública original.
 * Las conexiones, FSRS, PDF y gestión de foco conservan los motores modulares.
 */
const StudyMaterial = { text: '', url: '' };
let SelectedAcademicSubject = null;
const REFERENCE_SUBJECTS = ['viales', 'industrializada', 'civiles', 'contratos_uc', 'proyectos_uc', 'google_ia'];

function referenceButton(label, handler, className = 'btn-secondary') {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = className;
  button.textContent = label;
  button.addEventListener('click', handler);
  return button;
}

// Copia únicamente etiquetas de presentación; nunca atributos ejecutables ni estilos.
function renderStudyMarkup(target, markup) {
  const parsed = new DOMParser().parseFromString(String(markup || ''), 'text/html');
  const allowed = new Set(['P', 'STRONG', 'EM', 'DIV', 'SPAN', 'UL', 'OL', 'LI', 'BR', 'SUB', 'SUP']);
  const classes = new Set(['formula-card', 'formula-block', 'norm-checklist', 'normative-list',
    'field-alert', 'field-warning-box', 'folio-box', 'folio-box-head', 'book-folio-header',
    'key-takeaway', 'takeaway-label', 'action-steps', 'status-pill', 'status-hold']);
  function copy(node) {
    if (node.nodeType === Node.TEXT_NODE) return document.createTextNode(node.textContent);
    if (node.nodeType !== Node.ELEMENT_NODE) return document.createDocumentFragment();
    if (['SCRIPT', 'STYLE', 'IFRAME', 'OBJECT', 'SVG', 'IMG'].includes(node.tagName)) return document.createDocumentFragment();
    const output = allowed.has(node.tagName) ? document.createElement(node.tagName.toLowerCase()) : document.createDocumentFragment();
    if (output.nodeType === Node.ELEMENT_NODE) {
      for (const token of node.classList) if (classes.has(token)) output.classList.add(token);
    }
    for (const child of node.childNodes) output.append(copy(child));
    return output;
  }
  target.replaceChildren(...Array.from(parsed.body.childNodes, copy));
}

function renderModuleButtons() {
  const target = document.getElementById('reference-module-buttons');
  target.replaceChildren();
  for (let index = 1; index <= 6; index++) {
    const module = ACADEMIC_CURRICULUM[SelectedAcademicSubject]?.modules[index];
    const button = referenceButton('', () => {
      selectSubject(SelectedAcademicSubject, index);
      switchPedagogicalMode('triad');
    }, 'reference-module');
    button.id = 'mod-pill-' + index;
    button.disabled = !module;
    button.setAttribute('aria-pressed', String(AppState.activeSubject === SelectedAcademicSubject && AppState.activeModule === index));
    const title = module ? module.title.replace(/^Módulo\s+\d+:\s*/i, '') : 'Seleccione asignatura';
    button.setAttribute('aria-label', 'Módulo ' + index + ': ' + title);
    button.title = title;
    button.append(createTextElement('span', 'reference-module-number', 'MÓDULO ' + String(index).padStart(2, '0')),
      createTextElement('span', 'reference-module-title', title));
    target.append(button);
  }
}

function chooseAcademicSubject(key) {
  if (!ACADEMIC_CURRICULUM[key]) return;
  SelectedAcademicSubject = key;
  AppState.activeSubject = key;
  AppState.activeModule = null;
  document.getElementById('reference-mode-label').textContent = 'SELECCIONE UN MÓDULO';
  document.getElementById('reference-welcome').classList.remove('hidden');
  document.getElementById('study-session-view').classList.add('hidden');
  syncReferenceSubjects();
  renderModuleButtons();
  persistReferenceSelection();
}

function syncReferenceSubjects() {
  document.querySelectorAll('#reference-subjects button').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.subject === SelectedAcademicSubject));
  });
}

function persistReferenceSelection() {
  try { localStorage.setItem('EstudioInteligenteDB_v2', JSON.stringify(AppState)); } catch { /* sesión en memoria */ }
}

function prepareStudyModule(subjectKey, moduleIndex) {
  const curriculum = ACADEMIC_CURRICULUM[subjectKey];
  const module = curriculum?.modules[moduleIndex];
  if (!module) return false;
  SelectedAcademicSubject = subjectKey;
  AppState.activeSubject = subjectKey;
  AppState.activeModule = Number(moduleIndex);
  ACADEMIC_DATABASE[subjectKey] = { ...ACADEMIC_DATABASE[subjectKey], code: curriculum.code,
    name: curriculum.name, lessonTitle: module.title, omen: module.omen, atlas: module.atlas,
    ito: module.ito, astraScenario: module.astra };
  document.getElementById('reference-mode-label').textContent = 'DOCTORAL ACTIVO · MOD ' + String(moduleIndex).padStart(2, '0');
  document.getElementById('reference-hours').textContent = 'Carga lectiva: ' + curriculum.hours;
  document.getElementById('study-session-view').classList.remove('hidden');
  document.getElementById('reference-welcome').classList.add('hidden');
  document.getElementById('feynman-user-input').placeholder = module.feynmanPrompt || 'Explique el tema con sus palabras';
  document.getElementById('feynman-user-input').value = '';
  document.getElementById('feynman-analyzed-markup').replaceChildren();
  syncReferenceSubjects();
  renderModuleButtons();
  persistReferenceSelection();
  return true;
}

function initializeReferenceUI() {
  const subjects = document.getElementById('reference-subjects');
  const labels = ['Obras Viales (VIA-402)', 'Construcción Industrializada (IND-401)', 'Obras Civiles (CIV-403)',
    'Admin. Contratos (DIP-02)', 'Gestión Proyectos (DIP-01)', 'Google IA & Multimodal'];
  REFERENCE_SUBJECTS.forEach((key, index) => {
    const button = referenceButton('', () => chooseAcademicSubject(key), 'reference-subject');
    button.dataset.subject = key;
    button.append(createTextElement('span', 'reference-org org-' + (index < 3 ? 'iplacex' : index < 5 ? 'uc' : 'global'),
      index < 3 ? 'IPLACEX' : index < 5 ? 'UC' : 'GLOBAL'), createTextElement('span', '', labels[index]));
    subjects.append(button);
  });
  document.querySelector('.app-subtitle').textContent = 'SUITE DOCTORAL OMEN AG-41 · DIRECCIÓN & ITO PERICIAL';
  document.querySelector('#btn-toggle-voice .btn-text').textContent = 'VOZ';
  document.querySelectorAll('.triad-card').forEach((card, index) => {
    const agents = ['OMEN AG-41 (DOCTORAL)', 'AGENTE ATLAS (NORMATIVA)', 'ITO AUDITOR (TERRENO)'];
    card.querySelector('.agent-name').textContent = agents[index];
    const button = referenceButton('📋', async () => {
      const content = card.querySelector('.triad-card-content').innerText;
      try { await navigator.clipboard.writeText(content); button.textContent = '✓'; }
      catch { button.textContent = 'Seleccione el texto para copiar'; }
    }, 'reference-copy');
    button.setAttribute('aria-label', 'Copiar tarjeta ' + agents[index]);
    card.querySelector('.triad-card-header').append(button);
  });
  const tools = document.createElement('details');
  tools.className = 'reference-tools';
  tools.append(createTextElement('summary', '', 'Herramientas de estudio · PDF, repaso FSRS y YouTube'));
  const quickTools = document.querySelector('.quick-tools');
  const fsrsStatus = document.querySelector('.cognitive-status-card');
  tools.append(quickTools, fsrsStatus);
  document.querySelector('.workspace-viewport').append(tools);
  createStudyMaterialDialog();
  const savedSubject = AppState.activeSubject;
  const savedModule = Number(AppState.activeModule);
  if (ACADEMIC_CURRICULUM[savedSubject]?.modules[savedModule]) {
    selectSubject(savedSubject, savedModule);
  } else {
    AppState.activeModule = null;
    SelectedAcademicSubject = null;
    renderModuleButtons();
    syncReferenceSubjects();
  }
}

function createStudyMaterialDialog() {
  const root = document.createElement('div');
  root.id = 'reference-material-modal';
  root.className = 'modal-backdrop hidden';
  const dialog = document.createElement('section');
  dialog.className = 'modal-container';
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('aria-labelledby', 'reference-material-title');
  const header = document.createElement('div');
  header.className = 'modal-header';
  const title = createTextElement('h2', '', 'Cargar apunte / URL');
  title.id = 'reference-material-title';
  const close = referenceButton('✕', () => closeAccessibleLayer(root.id), 'btn-close-modal');
  close.setAttribute('aria-label', 'Cerrar apuntes');
  header.append(title, close);
  const body = document.createElement('div');
  body.className = 'modal-body reference-material-body';
  body.append(referenceButton('Seleccionar PDF local', () => {
    closeAccessibleLayer(root.id);
    triggerPdfUpload();
  }));
  const textLabel = createTextElement('label', '', 'Texto del apunte');
  textLabel.htmlFor = 'reference-note-text';
  const text = document.createElement('textarea');
  text.id = 'reference-note-text';
  text.rows = 8;
  text.maxLength = 14000;
  const urlLabel = createTextElement('label', '', 'URL de referencia (opcional)');
  urlLabel.htmlFor = 'reference-note-url';
  const url = document.createElement('input');
  url.id = 'reference-note-url';
  url.type = 'url';
  url.placeholder = 'https://';
  body.append(textLabel, text, urlLabel, url,
    createTextElement('p', '', 'La URL se adjunta como referencia; pegue el texto para analizar su contenido. Con IA activa, el apunte se envía a Google al consultar. Se conserva solo durante esta sesión.'));
  const status = createTextElement('p', '', '');
  status.id = 'reference-note-status';
  status.setAttribute('role', 'status');
  body.append(status, referenceButton('Usar este apunte', () => {
    let reference = '';
    if (url.value.trim()) {
      try {
        const parsed = new URL(url.value.trim());
        if (!['https:', 'http:'].includes(parsed.protocol)) throw Error();
        reference = parsed.href;
      } catch { status.textContent = 'Ingrese una URL http o https válida.'; return; }
    }
    StudyMaterial.url = reference;
    StudyMaterial.text = text.value.trim() + (reference ? '\nURL de referencia (contenido no extraído): ' + reference : '');
    status.textContent = 'Apunte incorporado al contexto de las próximas consultas.';
  }, 'btn-primary-glow'));
  dialog.append(header, body);
  root.append(dialog);
  document.body.append(root);
}

function openStudyMaterial() {
  const root = document.getElementById('reference-material-modal');
  root.classList.remove('hidden');
  activateAccessibleLayer(root, root.querySelector('[role="dialog"]'), 'modal', document.activeElement);
}

function exportStudyModule() {
  if (!AppState.activeModule) return;
  switchPedagogicalMode('triad');
  window.print();
}

