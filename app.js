/**
 * ==========================================================================
 * ESTUDIO INTELIGENTE 2.0 · MOTOR COGNITIVO & LÓGICA DE APLICACIÓN
 * Autoridad: J. Esteban Mella Gallardo (CEO & Fundador)
 * Arquitectura: Antigravity 2.0 Engine & Local-First (Panacea Sentinel)
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. BASE DE CONOCIMIENTO ACADÉMICA (MATRIZ TRÍADA: OMEN + ATLAS + ITO)
// --------------------------------------------------------------------------
const ACADEMIC_DATABASE = {
  industrializada: {
    code: 'IPLACEX · IND-401',
    name: 'Construcción Industrializada',
    lessonTitle: 'Módulo 03: Hormigón Prefabricado & Montaje Industrializado',
    retention: 78,
    omen: `
      <p><strong>Fundamento Elemental:</strong> La industrialización reemplaza el hormigonado tradicional en obra por componentes premoldeados bajo ambiente controlado en planta.</p>
      <div class="formula-block">
        R_{28} = R_{7} + k \\cdot \\ln(t) \\quad \\text{[Madurez de Curado Acelerado por Vapor]}
      </div>
      <p>Al curar al vapor a 65°C, la ganancia de resistencia a 18 horas alcanza el 70% del f'c, permitiendo el desmolde y tensado temprano de torones de pretensado.</p>
      <div class="key-takeaway">
        <span class="takeaway-label">CLAVE DOCTORAL:</span> El punto de fallo en estructuras industrializadas casi nunca es el elemento prefabricado; es la conexión húmeda (grout) en terreno.
      </div>
    `,
    atlas: `
      <p><strong>Marco Normativo Vinculante:</strong></p>
      <ul class="normative-list">
        <li><strong>NCh 170:2016:</strong> Hormigón - Requisitos generales (curado y tolerancias de colocación).</li>
        <li><strong>NCh 430:2008:</strong> Hormigón armado - Requisitos de diseño y cálculo antisísmico.</li>
        <li><strong>NCh 1534:</strong> Mecánica de suelos - Densidad en terreno y nivelación de fundaciones.</li>
      </ul>
      <div class="field-warning-box">
        <strong>⚠️ ALERTA DE FAENA:</strong> En montajes de pilares prefabricados con vainas de anclaje, el mortero de relleno (Grout) debe ser sin retracción (ASTM C1107) con resistencia mínima ≥ <strong>60 MPa</strong>.
      </div>
    `,
    ito: `
      <div class="book-folio-header">
        <span>LIBRO DE OBRAS DIGITAL · FOLIO #ITO-IND-084</span>
        <span class="status-pill status-hold">RETENCIÓN TÉCNICA</span>
      </div>
      <p><strong>Criterio de Recepción en Obra:</strong></p>
      <ol class="action-steps">
        <li>Verificar verticalidad de pilares mediante estación total con tolerancia de ±5 mm en altura total.</li>
        <li>Muestrear 3 cubos de 5x5 cm de mortero grout por cada jornada de inyección.</li>
        <li><strong>Dictamen Pericial:</strong> No autorizar colocación de vigas superiores hasta que el ensayo a compresión del grout certifique al menos el 80% de la resistencia proyectada.</li>
      </ol>
      <button class="btn-micro-folio" onclick="openFolioTemplate('industrializada')">Descargar Minuta de Rechazo / Aprobación</button>
    `,
    astraScenario: {
      title: 'Montaje de Vigas Prefabricadas de 28 Metros en Viaducto Vial',
      body: 'El contratista posiciona la grúa móvil de 120 toneladas sobre el terraplén de acceso para izar una viga pretensada de 34 toneladas. El anemómetro registra ráfagas de 38 km/h. La constructora solicita autorización para izar antes del anochecer.',
      question: 'Como Jefe de ITO, ¿cuál es tu dictamen inmediato conforme a la normativa chilena de izajes y seguridad (DS 594)?',
      options: [
        { text: 'Autorizar el izaje con escolta de vientos manuales terrestres si la carga está amarrada en 4 puntos.', correct: false, reason: 'Incorrecto. Con ráfagas >35 km/h el efecto vela sobre vigas esbeltas es incontrolable manualmente.' },
        { text: 'Paralizar inmediatamente la maniobra por superar el umbral crítico de viento (>35 km/h) y exigir certificado de sustentación de los pads de apoyo de la grúa sobre el terraplén.', correct: true, reason: '¡Correcto! Cumplimiento estricto de DS 594. Por encima de 35 km/h la maniobra de izaje de vigas queda estrictamente prohibida.' },
        { text: 'Permitir la maniobra siempre que el contratista firme una carta de asunción de responsabilidad.', correct: false, reason: 'Incorrecto. La responsabilidad legal y técnica del ITO es indelegable por ley.' }
      ]
    }
  },

  viales: {
    code: 'IPLACEX · VIA-402',
    name: 'Obras Viales',
    lessonTitle: 'Módulo 03: Estructuración y Control de Pavimentos Asfálticos',
    retention: 64,
    omen: `
      <p><strong>Fundamento Elemental:</strong> El paquete estructural de un pavimento flexible transfiere cargas vehiculares al terreno mediante capas granulares (Subbase, Base) y una carpeta de rodadura asfáltica viscoelástica.</p>
      <div class="formula-block">
        ESAL = \\sum (N_i \\cdot F_i) \\quad \\text{[Ejes Equivalentes de 8.2 Toneladas]}
      </div>
      <p>La susceptibilidad térmica del cemento asfáltico exige controlar la viscosidad durante el mezclado en planta y el rodillado en faena.</p>
      <div class="key-takeaway">
        <span class="takeaway-label">CLAVE DOCTORAL:</span> La compactación después de que la mezcla cae por debajo de los 85°C solo fractura los áridos y no incrementa la densidad.
      </div>
    `,
    atlas: `
      <p><strong>Marco Normativo MOP & NCh:</strong></p>
      <ul class="normative-list">
        <li><strong>Manual de Carreteras MOP Vol. 5:</strong> Sección 5.408 (Mezclas asfálticas en caliente).</li>
        <li><strong>NCh 1534/2:</strong> Mecánica de suelos - Ensayo de compactación Proctor Modificado.</li>
        <li><strong>Método Marshall (ASTM D6926):</strong> Estabilidad, flujo y porcentaje de vacíos con aire (3-5%).</li>
      </ul>
      <div class="field-warning-box">
        <strong>⚠️ ALERTA DE FAENA:</strong> La temperatura de descarga de tolva debe estar entre 135°C y 160°C. Si el camión llega a menos de 125°C, la carga debe ser rechazada inmediatamente.
      </div>
    `,
    ito: `
      <div class="book-folio-header">
        <span>LIBRO DE OBRAS DIGITAL · FOLIO #ITO-VIA-112</span>
        <span class="status-pill status-hold">CONTROL DENSIDAD</span>
      </div>
      <p><strong>Protocolo de Fiscalización en Pista:</strong></p>
      <ol class="action-steps">
        <li>Medición continua de temperatura en masa con termómetro de punzón digital calibrado.</li>
        <li>Trazabilidad de compactación: Rodillo liso vibratorio (fase inicial) seguido de rodillo neumático oscilante.</li>
        <li><strong>Dictamen Pericial:</strong> Exigir testigo diamantado cada 250 m lineales. La densidad en pista debe ser ≥ 97% de la densidad Marshall del laboratorio patrón.</li>
      </ol>
      <button class="btn-micro-folio" onclick="openFolioTemplate('viales')">Descargar Acta de Recepción de Pista</button>
    `,
    astraScenario: {
      title: 'Control de Espesor y Densidad en Carpeta Asfáltica Autopista Troncal',
      body: 'La constructora terminó la colocación de 1.200 metros de carpeta asfáltica de 5 cm. El ensayo con densímetro nuclear arroja un promedio de 95.8% de compactación Marshall (el pliego exige 97.0%). El contratista argumenta que el tráfico rodante aportará la densidad faltante.',
      question: '¿Cuál es la instrucción pericial que el Jefe de ITO debe estampar en el Libro de Obras?',
      options: [
        { text: 'Aceptar el argumento si el contratista extiende la garantía de conservación a 3 años.', correct: false, reason: 'Incorrecto. El tráfico vehicular genera ahuellamiento prematuro en mezclas sub-compactadas.' },
        { text: 'Rechazar formalmente el tramo por incumplimiento del MC-V5. Ordenar extracción de testigos de contraste y retener el 100% de la partida en el Estado de Pago N°4.', correct: true, reason: '¡Correcto! Se retiene el ítem de asfalto y se exige fresado y reposición o aplicación de penalidades contractuales.' },
        { text: 'Permitir el pago descontando solo un 10% de multa.', correct: false, reason: 'Incorrecto. La pérdida de densidad reduce la vida útil en más del 40%.' }
      ]
    }
  },

  civiles: {
    code: 'IPLACEX · CIV-403',
    name: 'Obras Civiles',
    lessonTitle: 'Módulo 04: Fundaciones Especiales & Hormigón Masivo',
    retention: 89,
    omen: `
      <p><strong>Fundamento Elemental:</strong> En hormigones masivos (zapatas de gran espesor o cepas de puentes), el calor de hidratación exotérmico del cemento genera un gradiente térmico entre el núcleo y la superficie.</p>
      <div class="formula-block">
        \\Delta T = T_{\\text{núcleo}} - T_{\\text{superficie}} \\le 20^\\circ\\text{C}
      </div>
      <p>Si el gradiente supera los 20°C, las tensiones de tracción superan la resistencia incipiente del hormigón, produciendo fisuración térmica pasante.</p>
    `,
    atlas: `
      <p><strong>Marco Normativo:</strong></p>
      <ul class="normative-list">
        <li><strong>NCh 170:2016:</strong> Cláusulas sobre control de temperatura en hormigones masivos.</li>
        <li><strong>ACI 207.1R:</strong> Guía de diseño y monitoreo térmico en hormigón masivo.</li>
      </ul>
      <div class="field-warning-box">
        <strong>⚠️ ALERTA DE FAENA:</strong> Uso obligatorio de termocuplas en núcleo, zona media y superficie con registro continuo cada 2 horas durante los primeros 7 días.
      </div>
    `,
    ito: `
      <div class="book-folio-header">
        <span>LIBRO DE OBRAS DIGITAL · FOLIO #ITO-CIV-045</span>
        <span class="status-pill" style="background:#10B981; color:#000;">RECEPCIONADO</span>
      </div>
      <p><strong>Acción de ITO:</strong> Inspeccionar aislamiento térmico con geotextil y polietileno para evitar choque térmico por viento nocturno en faena.</p>
    `,
    astraScenario: {
      title: 'Monitoreo de Termocuplas en Zapata de Edificio de 22 Pisos',
      body: 'A las 48 horas de hormigonada una zapata de 2.20 m de espesor, la termocupla central marca 68°C y la perimetral marca 42°C (Gradiente = 26°C). Se observa inicio de microfisuración superficial.',
      question: '¿Qué acción correctiva inmediata debe ordenar el ITO Auditor?',
      options: [
        { text: 'Regar con agua fría la superficie para bajar la temperatura rápidamente.', correct: false, reason: '¡Peligro crítico! Regar con agua fría aumentaría el choque térmico y abriría fisuras estructurales catastróficas.' },
        { text: 'Colocar mantas aislantes térmicas sobre la superficie para reducir la disipación superficial hasta que el gradiente sea ≤ 20°C.', correct: true, reason: '¡Correcto! Se debe conservar el calor superficial para que el núcleo y la cara se enfríen al mismo ritmo.' },
        { text: 'Ignorar el gradiente porque 68°C está dentro del límite de hidratación.', correct: false, reason: 'Incorrecto. Lo que destruye el hormigón no es la temperatura absoluta, sino el gradiente térmico.' }
      ]
    }
  },

  contratos_uc: {
    code: 'UC · DIP-02',
    name: 'Administración de Contratos',
    lessonTitle: 'Módulo 02: Controversias, Claims Contractuales & Ampliación de Plazo',
    retention: 41,
    omen: `
      <p><strong>Fundamento Elemental:</strong> Un reclamo (*Claim*) es una petición formal de compensación en plazo, costo o ambos, originada por hechos sobrevinientes ajenos a la responsabilidad del contratista.</p>
      <div class="key-takeaway">
        <span class="takeaway-label">DOCTRINA UC:</span> Para que un claim de plazo prospere, el contratista debe demostrar fehacientemente que la actividad afectada impactó la <strong>Ruta Crítica (CPM)</strong> vigente y aprobada.
      </div>
    `,
    atlas: `
      <p><strong>Estructura Contractual Chilena:</strong></p>
      <ul class="normative-list">
        <li><strong>Bases Administrativas Generales (BAG):</strong> Procedimiento de notificación de eventos compensables (plazo fatal de 5 a 10 días).</li>
        <li><strong>Código Civil Chileno:</strong> Art. 1545 (El contrato es ley para los contratantes) y Art. 1546 (Buena fe contractual).</li>
      </ul>
    `,
    ito: `
      <div class="book-folio-header">
        <span>LIBRO DE OBRAS DIGITAL · FOLIO #ITO-CON-077</span>
        <span class="status-pill status-hold">CLAIM RECHAZADO</span>
      </div>
      <p><strong>Dictamen de ITO en Reclamo de Plazo:</strong></p>
      <p>Rechazar la carta del contratista por <em>extemporaneidad</em>: La interferencia en redes de gas ocurrió el 12 de septiembre y el reclamo fue notificado 24 días después, vencido el plazo fatal de 7 días fijado en las BAG.</p>
    `,
    astraScenario: {
      title: 'Reclamo por Hallazgo de Red de Media Tensión no Catastrada',
      body: 'Durante las excavaciones de un paso bajo nivel, la retroexcavadora encuentra una línea eléctrica subterránea no señalada en los planos. El contratista suspende el frente de excavación y exige 35 días de aumento de plazo y costos indirectos.',
      question: 'Como ITO Administrador de Contrato, ¿cuál es el primer paso de auditoría forense que debes ejecutar?',
      options: [
        { text: 'Aprobar de inmediato los 35 días para evitar paralizaciones judiciales.', correct: false, reason: 'Incorrecto. No se aprueban días sin cruce analítico de Carta Gantt.' },
        { text: 'Auditar la Carta Gantt vigente: Verificar si la excavación de ese sector consume holgura total o si altera la Ruta Crítica, exigiendo el Libro de Obra digital como evidencia primaria.', correct: true, reason: '¡Impecable! La interferencia puede reasignarse a otro sector sin alterar la fecha de término global si existía holgura libre.' },
        { text: 'Desestimar el reclamo argumentando que el contratista debió prever todo en su oferta a suma alzada.', correct: false, reason: 'Incorrecto. Las interferencias no catastradas en planos de licitación constituyen riesgo del mandante.' }
      ]
    }
  },

  proyectos_uc: {
    code: 'UC · DIP-01',
    name: 'Gestión de Proyectos',
    lessonTitle: 'Módulo 04: Control de Costos y Valor Ganado (EVM)',
    retention: 76,
    omen: `
      <p><strong>Fundamento Elemental:</strong> El método de Valor Ganado integra alcance, cronograma y costo en una única matriz objetiva de desempeño.</p>
      <div class="formula-block">
        \\text{CPI} = \\frac{EV}{AC} \\quad ; \\quad \\text{SPI} = \\frac{EV}{PV}
      </div>
      <p>Un CPI < 1.0 indica sobrecosto respecto al presupuesto; un SPI < 1.0 indica atraso físico respecto a la línea base planificada.</p>
    `,
    atlas: `
      <p><strong>Aplicación en Obras Civiles:</strong></p>
      <p>Cruce directo con la Curva S física de faena y el Estado de Pago mensual. Permite proyectar el Costo Final a la Conclusión (EAC).</p>
    `,
    ito: `
      <div class="book-folio-header">
        <span>ESTADO DE PAGO N° 6 · ÍNDICE EVM</span>
        <span class="status-pill status-hold">SPI: 0.88 (ATRASO)</span>
      </div>
      <p><strong>Exigencia del ITO:</strong> Intimar a la empresa constructora a presentar un Plan de Aceleración con turnos dobles sin costo adicional para el mandante.</p>
    `,
    astraScenario: {
      title: 'Auditoría de Curva S en Hospital de Alta Complejidad',
      body: 'Al mes 8, el proyecto registra: PV = $4.500M, EV = $3.900M, AC = $4.200M. El contratista asegura que el proyecto está al día y solicita el pago total.',
      question: '¿Cuál es el diagnóstico financiero exacto del proyecto?',
      options: [
        { text: 'El proyecto está adelantado porque el costo real es menor que el valor planificado.', correct: false, reason: 'Incorrecto. Comparar AC con PV es un error clásico de novatos en gestión.' },
        { text: 'El proyecto está atrasado (SPI = 0.86) y con sobrecosto (CPI = 0.92). Se debe exigir plan de mitigación.', correct: true, reason: '¡Correcto! SPI = 3900/4500 = 0.86 (< 1.0 atraso) y CPI = 3900/4200 = 0.92 (< 1.0 sobrecosto).' },
        { text: 'El proyecto tiene desempeño perfecto porque el valor ganado supera los $3.000 millones.', correct: false, reason: 'Incorrecto. No se evalúan montos absolutos sin comparar con la línea base.' }
      ]
    }
  },

  google_ia: {
    code: 'GLOBAL · GGL-AI',
    name: 'Google IA & Multimodal',
    lessonTitle: 'Módulo 02: Modelos Multimodales Gemini & RAG de Obra',
    retention: 92,
    omen: `
      <p><strong>Fundamento Elemental:</strong> Los modelos multimodales nativos procesan texto, imágenes fotográficas de terreno, audio y video en un mismo espacio latente sin traductores intermedios.</p>
    `,
    atlas: `
      <p><strong>Aplicación en ITO:</strong> Análisis automatizado de enfierraduras mediante Computer Vision cruzado con planos estructurales DWG/PDF.</p>
    `,
    ito: `
      <p><strong>Dictamen:</strong> Sellado SHA-256 en cliente de fotografías periciales antes de enviar al modelo de inferencia.</p>
    `,
    astraScenario: {
      title: 'Validación de Enfierradura con Modelo Multimodal',
      body: 'Se captura una foto de la armadura de una viga de fundación con celular Xiaomi. El modelo detecta que la separación de estribos es de 22 cm, pero la EETT exige 15 cm en zona de confinamiento sísmico.',
      question: '¿Cómo debe proceder el ITO?',
      options: [
        { text: 'Ignorar la IA y autorizar la hormigonada si el enfierrador dice que está bien.', correct: false, reason: 'La evidencia fotográfica manda.' },
        { text: 'Verificar físicamente con huincha metálica, rechazar la enfierradura en el Libro de Obra y adjuntar la foto con estampa ISO.', correct: true, reason: '¡Correcto! La IA actúa como filtro de alerta temprana pericial.' }
      ]
    }
  },

  palermo_contech: {
    code: 'GLOBAL · PAL-01',
    name: 'IA en Construcción (U. Palermo)',
    lessonTitle: 'Módulo 03: Gemelos Digitales BIM & ConTech 4.0',
    retention: 84,
    omen: `<p>Integración de nubes de puntos de drones con modelos BIM 4D para control de avance volumétrico.</p>`,
    atlas: `<p>Tolerancias fotogramétricas según estándares de topografía satelital WGS84.</p>`,
    ito: `<p>Contraste de cubicación certificada para aprobación de Estados de Pago.</p>`,
    astraScenario: {
      title: 'Cubicación de Movimiento de Tierras con Drone',
      body: 'El vuelo de drone calcula 14.500 m3 de corte. El contratista cobra 18.200 m3.',
      question: '¿Qué acción toma el ITO?',
      options: [
        { text: 'Pagar los 18.200 m3 para no generar conflictos.', correct: false, reason: 'Daño patrimonial grave al mandante.' },
        { text: 'Aprobar solo los 14.500 m3 certificados por la nube de puntos y solicitar topografía conjunta de contraste.', correct: true, reason: '¡Correcto! Protección del patrimonio del mandante.' }
      ]
    }
  }
};

// --------------------------------------------------------------------------
// 2. ESTADO DE APLICACIÓN Y PERSISTENCIA (PANACEA SENTINEL LOCAL-FIRST)
// --------------------------------------------------------------------------
let AppState = {
  activeSubject: 'industrializada',
  pedagogicalMode: 'triad',
  streakDays: 14,
  panaceaStatus: 'ONLINE 24/7',
  audioPlaying: false,
  audioPreset: 'alpha',
  fsrsCardsReviewedToday: 4,
  duolingoScore: 0,
  duolingoLives: 3,
  duolingoCurrentIndex: 0
};

let FsrsSession = {
  cards: [],
  currentIndex: 0,
  answerVisible: false
};

// Recuperar estado desde localStorage
function initLocalPersistence() {
  try {
    const saved = localStorage.getItem('EstudioInteligenteDB_v2');
    if (saved) {
      const parsed = JSON.parse(saved);
      AppState = { ...AppState, ...parsed };
      console.log('✅ [Panacea Sentinel]: Estado restaurado con éxito desde almacenamiento local.');
    }
  } catch (err) {
    console.warn('⚠️ [Panacea Sentinel]: Iniciando con estado fresco en memoria.');
  }

  // Guardado automático centinela cada 15 segundos
  setInterval(() => {
    try {
      localStorage.setItem('EstudioInteligenteDB_v2', JSON.stringify(AppState));
      const badge = document.getElementById('panacea-status');
      if (badge) {
        badge.textContent = 'SYNC OK (' + new Date().toLocaleTimeString().slice(0, 5) + ')';
      }
    } catch (e) {
      console.error('Error al persistir en Panacea:', e);
    }
  }, 15000);
}

// --------------------------------------------------------------------------
// 3. NAVEGACIÓN Y SELECCIÓN DE ASIGNATURAS
// --------------------------------------------------------------------------
function selectSubject(subjectKey, moduleIndex = 1) {
  if (!ACADEMIC_DATABASE[subjectKey]) return;
  if (typeof prepareStudyModule === 'function' && ACADEMIC_CURRICULUM[subjectKey]) {
    if (!prepareStudyModule(subjectKey, moduleIndex)) return;
  }
  AppState.activeSubject = subjectKey;
  closeSidebarDrawer();

  // Actualizar botones de la barra lateral
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-subject') === subjectKey) {
      item.classList.add('active');
      item.setAttribute('aria-current', 'true');
    } else {
      item.removeAttribute('aria-current');
    }
  });

  const data = ACADEMIC_DATABASE[subjectKey];

  // Actualizar encabezado de la sesión
  document.getElementById('current-subject-badge').textContent = data.code;
  document.getElementById('current-lesson-title').textContent = data.lessonTitle;

  // Actualizar contenido de la Tríada
  renderStudyMarkup(document.getElementById('omen-content-box'), data.omen);
  renderStudyMarkup(document.getElementById('atlas-content-box'), data.atlas);
  renderStudyMarkup(document.getElementById('ito-content-box'), data.ito);

  const feynmanH3 = document.querySelector('.feynman-prompt-card h3');
  if (feynmanH3 && data.feynmanPrompt) {
    feynmanH3.textContent = data.feynmanPrompt;
  }

  // Actualizar Astra AI Scenario
  if (data.astraScenario) {
    document.querySelector('.scenario-title').textContent = data.astraScenario.title;
    document.querySelector('.scenario-body').textContent = data.astraScenario.body;
    document.getElementById('checkpoint-text').textContent = data.astraScenario.question;
    
    // Renderizar opciones
    const optsContainer = document.getElementById('checkpoint-options-grid');
    optsContainer.replaceChildren();
    data.astraScenario.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'opt-btn';
      btn.onclick = () => submitAstraAnswer(idx);
      btn.append(createTextElement('span', 'opt-letter', String.fromCharCode(65 + idx)),
        createTextElement('span', 'opt-text', opt.text));
      optsContainer.appendChild(btn);
    });

    document.getElementById('checkpoint-feedback-box').classList.add('hidden');
  }

  // Notificar al audio si está activo
  console.log(`[Cerebro Gemini Argon]: Asignatura activa cambiada a ${data.name}`);
}

function switchPedagogicalMode(modeKey) {
  document.getElementById('study-session-view')?.classList.remove('hidden');
  document.getElementById('reference-welcome')?.classList.add('hidden');
  AppState.pedagogicalMode = modeKey;

  // Actualizar pestañas
  document.querySelectorAll('.mode-tab').forEach(t => {
    const selected = t.id === 'tab-mode-' + modeKey;
    t.classList.toggle('active', selected);
    t.setAttribute('aria-selected', String(selected));
    t.tabIndex = selected ? 0 : -1;
  });
  const activeTab = document.getElementById(`tab-mode-${modeKey}`);
  if (activeTab) activeTab.classList.add('active');

  // Actualizar paneles
  document.querySelectorAll('.pedagogical-panel').forEach(p => p.classList.remove('active'));
  const activePanel = document.getElementById(`panel-${modeKey}`);
  if (activePanel) activePanel.classList.add('active');
}

function toggleGroup(groupId) {
  const grp = document.getElementById(groupId);
  if (grp) {
    const expanded = grp.classList.toggle('open');
    grp.querySelector('.group-header')?.setAttribute('aria-expanded', String(expanded));
    const items = grp.querySelector('.group-items');
    if (items) items.hidden = !expanded;
  }
}

function startSprint(subjectKey) {
  selectSubject(subjectKey);
  switchPedagogicalMode('astra');
  document.getElementById('study-session-view')?.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    block: 'start'
  });
}

// --------------------------------------------------------------------------
// 4. MOTOR SOCRÁTICO ASTRA AI
// --------------------------------------------------------------------------
function submitAstraAnswer(optionIndex) {
  const subject = ACADEMIC_DATABASE[AppState.activeSubject];
  if (!subject || !subject.astraScenario) return;

  const selectedOpt = subject.astraScenario.options[optionIndex];
  const feedbackBox = document.getElementById('checkpoint-feedback-box');
  const title = document.getElementById('feedback-title');
  const body = document.getElementById('feedback-body');

  feedbackBox.classList.remove('hidden');

  if (selectedOpt.correct) {
    feedbackBox.style.background = 'rgba(16, 185, 129, 0.15)';
    feedbackBox.style.borderColor = 'var(--color-emerald)';
    title.textContent = '¡CORRECTO! FUNDAMENTO PERICIAL IMPECABLE';
    title.style.color = 'var(--color-emerald)';
    body.textContent = selectedOpt.reason;
    playSuccessChime();
  } else {
    feedbackBox.style.background = 'rgba(239, 68, 68, 0.15)';
    feedbackBox.style.borderColor = 'var(--color-red)';
    title.textContent = '⚠️ OBSERVACIÓN TÉCNICA · DECISIÓN VULNERABLE';
    title.style.color = 'var(--color-red)';
    body.textContent = selectedOpt.reason;
  }
}

function nextAstraStep() {
  alert('¡Paso 2 completado! Avanzando al Paso 3: Protocolo de verificación y recepción final de la partida.');
  document.getElementById('checkpoint-feedback-box').classList.add('hidden');
}

// --------------------------------------------------------------------------
// 5. VALIDADOR FEYNMAN INVERSO & RADAR DE ERRORES (POTENCIADO POR GEMINI 2.0)
// --------------------------------------------------------------------------
function appendAuditList(parent, title, items, color) {
  const section = document.createElement('section');
  section.style.marginTop = '12px';

  const heading = document.createElement('strong');
  heading.style.color = color;
  heading.textContent = title;
  section.appendChild(heading);

  const list = document.createElement('ul');
  list.style.margin = '7px 0 0';
  (items || []).forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
  });
  section.appendChild(list);
  parent.appendChild(section);
}

function renderStructuredAudit(container, result, compact = false) {
  if (!container || !result) return;
  container.replaceChildren();

  const header = document.createElement('div');
  header.style.cssText = 'display:flex;justify-content:space-between;gap:12px;align-items:center;margin-bottom:10px;';
  const status = document.createElement('strong');
  status.style.color = result.verified ? 'var(--color-emerald)' : 'var(--color-amber)';
  status.textContent = result.verified ? '✓ EVIDENCIA NORMATIVA VERIFICADA' : '⚠ ABSTENCIÓN NORMATIVA ACTIVA';
  const score = document.createElement('span');
  score.style.cssText = 'font-family:var(--font-mono);font-weight:700;color:var(--color-cyan);';
  score.textContent = `${result.concept_score}%`;
  header.append(status, score);
  container.appendChild(header);

  appendAuditList(container, 'ASPECTOS CORRECTOS', result.correct_aspects, '#10B981');
  appendAuditList(container, 'LAGUNAS Y OMISIONES', result.gaps_and_omissions, '#EF4444');

  const citation = document.createElement('section');
  citation.style.cssText = 'margin-top:12px;padding:10px;border-left:3px solid #FF5E00;background:rgba(255,94,0,.07);white-space:pre-wrap;';
  const citationTitle = document.createElement('strong');
  citationTitle.style.color = '#FF5E00';
  citationTitle.textContent = 'RESPALDO NORMATIVO';
  const citationText = document.createElement('div');
  citationText.style.marginTop = '5px';
  citationText.textContent = result.normative_citation;
  citation.append(citationTitle, citationText);
  container.appendChild(citation);

  const triad = document.createElement('section');
  triad.style.cssText = compact
    ? 'margin-top:12px;display:grid;gap:6px;'
    : 'margin-top:12px;display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:8px;';
  [['OMEN', result.triada_verdict.omen], ['ATLAS', result.triada_verdict.atlas], ['ITO', result.triada_verdict.ito]]
    .forEach(([agent, verdict]) => {
      const card = document.createElement('div');
      card.style.cssText = 'padding:9px;border:1px solid var(--border-subtle);border-radius:6px;background:rgba(15,23,42,.55);';
      const agentName = document.createElement('strong');
      agentName.style.color = 'var(--color-cyan)';
      agentName.textContent = `${agent}: `;
      const verdictText = document.createElement('span');
      verdictText.textContent = verdict;
      card.append(agentName, verdictText);
      triad.appendChild(card);
    });
  container.appendChild(triad);
}

function renderGeminiLoading(container, message) {
  if (!container) return;
  const loading = document.createElement('div');
  loading.style.cssText = 'padding:16px;text-align:center;color:var(--color-cyan);font-family:var(--font-mono);font-size:12px;border:1px solid var(--color-cyan);border-radius:8px;';
  loading.textContent = message;
  container.replaceChildren(loading);
}

async function evaluateFeynmanExplanation() {
  const text = document.getElementById('feynman-user-input').value.trim();
  if (!text || text.length < 20) {
    alert('Por favor redacta una explicación con mayor detalle para poder ejecutar la radiografía conceptual.');
    return;
  }

  const markupBox = document.getElementById('feynman-analyzed-markup');
  const activeSubject = ACADEMIC_DATABASE[AppState.activeSubject] || { name: 'Construcción' };

  renderGeminiLoading(markupBox, 'Auditando con la Tríada OMEN + ATLAS + ITO...');
  const systemInstruction = [
    'Evalúa la explicación mediante técnica Feynman.',
    'Distingue aciertos demostrables, lagunas conceptuales y acciones verificables en terreno.',
    'No valides ninguna cita que no esté contenida en la evidencia normativa inyectada.'
  ].join(' ');
  const context = `${activeSubject.name || 'Construcción'} · ${activeSubject.lessonTitle || 'Partida en estudio'}`;
  const result = await callGeminiApi(text, systemInstruction, context);
  renderStructuredAudit(markupBox, result);
  if (result.concept_score >= 70) playSuccessChime();
  console.log('[OMEN Feynman]: Radiografía estructurada completada.');
}

function showFeynmanReview() {
  switchPedagogicalMode('feynman');
  document.getElementById('study-session-view')?.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    block: 'start'
  });
}

// --------------------------------------------------------------------------
// 6. MOTOR DE AUDIO INTERACTIVO (NOTEBOOKLM DIALOGUE BIDIRECCIONAL)
// --------------------------------------------------------------------------
let speechSynthesisInstance = window.speechSynthesis;
let isSpeaking = false;
let voiceRecognitionActive = false;
let activeVoiceRecognition = null;

function speakUtterance(text, onFinished) {
  if (!('speechSynthesis' in window)) {
    if (onFinished) onFinished();
    return;
  }
  speechSynthesisInstance.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'es-CL';
  utterance.rate = 1.05;
  utterance.onend = () => {
    isSpeaking = false;
    if (onFinished) onFinished();
  };
  utterance.onerror = () => {
    isSpeaking = false;
    if (onFinished) onFinished();
  };
  isSpeaking = true;
  speechSynthesisInstance.speak(utterance);
}

function startListeningNotebookLM() {
  if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    alert('Reconocimiento de voz por hardware no soportado en este navegador.');
    resetVoiceButtonState();
    return;
  }
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  const rec = new SpeechRec();
  activeVoiceRecognition = rec;
  rec.lang = 'es-CL';
  rec.continuous = false;
  rec.interimResults = false;

  const voiceBtn = document.getElementById('btn-toggle-voice');
  const btnText = voiceBtn?.querySelector('.btn-text');

  rec.onstart = () => {
    voiceRecognitionActive = true;
    if (voiceBtn) {
      voiceBtn.style.background = 'rgba(239, 68, 68, 0.25)';
      voiceBtn.style.borderColor = '#EF4444';
      voiceBtn.style.color = '#EF4444';
    }
    if (btnText) btnText.textContent = '🎙️ TE ESCUCHO...';
  };

  rec.onresult = async (event) => {
    const query = event.results[0][0].transcript;
    if (btnText) btnText.textContent = '🧠 PROCESANDO...';
    if (voiceBtn) {
      voiceBtn.style.background = 'rgba(0, 240, 255, 0.2)';
      voiceBtn.style.borderColor = 'var(--color-cyan)';
      voiceBtn.style.color = 'var(--color-cyan)';
    }

    try {
      const subject = ACADEMIC_DATABASE[AppState.activeSubject];
      const lessonTitle = subject?.lessonTitle || 'Ingeniería en Construcción';
      const prompt = `El CEO J. Esteban Mella Gallardo te consulta de viva voz en modo diálogo NotebookLM: "${query}". Responde como OMEN AG-41 y Mentor Doctoral. Sé muy conciso (máximo 2 a 3 oraciones periciales habladas) para ser reproducido por voz alta en terreno. Enfócate en la materia: ${lessonTitle}.`;
      const res = await callGeminiApi(prompt, 'Modo audio NotebookLM: conciso, hablado y pericial.');
      const reply = res.triada_verdict?.omen || res.omen || 'Entendido, Comandante. Procedemos con la verificación técnica.';
      
      if (btnText) btnText.textContent = '🗣️ OMEN RESPONDE';
      speakUtterance(reply, () => {
        if (voiceRecognitionActive) {
          startListeningNotebookLM();
        } else {
          resetVoiceButtonState();
        }
      });
    } catch (e) {
      speakUtterance('Comandante, hubo una interferencia en el enlace. Reintente por favor.', () => {
        resetVoiceButtonState();
      });
    }
  };

  rec.onerror = () => {
    resetVoiceButtonState();
  };

  rec.onend = () => {
    if (!isSpeaking && !voiceRecognitionActive) {
      resetVoiceButtonState();
    }
  };

  rec.start();
}

function resetVoiceButtonState() {
  voiceRecognitionActive = false;
  isSpeaking = false;
  const voiceBtn = document.getElementById('btn-toggle-voice');
  const btnText = voiceBtn?.querySelector('.btn-text');
  if (voiceBtn) {
    voiceBtn.style.background = 'rgba(0, 240, 255, 0.1)';
    voiceBtn.style.borderColor = 'var(--color-cyan)';
    voiceBtn.style.color = 'var(--color-cyan)';
    voiceBtn.setAttribute('aria-pressed', 'false');
  }
  if (btnText) btnText.textContent = 'VOICE RAG';
}

function toggleVoiceInteractive() {
  const voiceBtn = document.getElementById('btn-toggle-voice');

  if (isSpeaking || voiceRecognitionActive) {
    if (speechSynthesisInstance) speechSynthesisInstance.cancel();
    if (activeVoiceRecognition) {
      try { activeVoiceRecognition.stop(); } catch(e){}
    }
    resetVoiceButtonState();
    return;
  }

  const subject = ACADEMIC_DATABASE[AppState.activeSubject];
  const lesson = subject?.lessonTitle || subject?.name || 'la materia';
  const welcomeText = `Comandante Esteban, te habla OMEN AG-41. Estamos en ${lesson}. Cuéntame tu duda técnica o explícame el concepto clave. Te escucho.`;

  if (voiceBtn) voiceBtn.setAttribute('aria-pressed', 'true');
  speakUtterance(welcomeText, () => {
    startListeningNotebookLM();
  });
}

function toggleVoiceInput(targetTextareaId) {
  if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    alert('El reconocimiento de voz por hardware no está soportado en este navegador. Puedes escribir directamente.');
    return;
  }

  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRec();
  recognition.lang = 'es-CL';
  recognition.continuous = false;

  recognition.onstart = () => {
    console.log('🎙️ [Micrófono]: Escuchando respuesta del CEO...');
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    const textarea = document.getElementById(targetTextareaId);
    if (textarea) {
      textarea.value += ' ' + transcript;
    }
  };

  recognition.start();
}

// --------------------------------------------------------------------------
// 7. JWROSE AUDIO LOUNGE (YOUTUBE MUSIC INTEGRATION REAL)
// --------------------------------------------------------------------------
const JWROSE_YOUTUBE_CHANNELS = {
  gnr: {
    name: "Guns N' Roses & Hard Rock Focus",
    url: "https://music.youtube.com/search?q=guns+n+roses+instrumental+rock+focus"
  },
  vangelis: {
    name: "Vangelis & Sci-Fi Synth Ambience",
    url: "https://music.youtube.com/search?q=vangelis+blade+runner+ambient+study"
  },
  classical: {
    name: "Música Clásica (Bach & Mozart)",
    url: "https://music.youtube.com/search?q=bach+mozart+study+concentration"
  },
  alpha: {
    name: "Ondas Alfa 432Hz (Deep Study)",
    url: "https://music.youtube.com/search?q=432hz+alpha+waves+deep+study"
  },
  lofi: {
    name: "Lo-Fi ConTech (Estudio Nocturno)",
    url: "https://music.youtube.com/search?q=lofi+contech+study+beats"
  }
};

function changeJwrosePreset(presetKey) {
  const channel = JWROSE_YOUTUBE_CHANNELS[presetKey] || JWROSE_YOUTUBE_CHANNELS.gnr;
  console.log(`[JWROSE 39]: Canal seleccionado: ${channel.name}`);
  if (AppState.audioPlaying) {
    window.open(channel.url, '_blank');
  }
}

function toggleJwroseAudio() {
  const btn = document.getElementById('btn-toggle-audio');
  const selector = document.getElementById('audio-preset-select');
  const bars = document.querySelectorAll('.soundwave-bars span');
  const preset = selector ? selector.value : 'gnr';
  const channel = JWROSE_YOUTUBE_CHANNELS[preset] || JWROSE_YOUTUBE_CHANNELS.gnr;

  if (AppState.audioPlaying) {
    AppState.audioPlaying = false;
    btn.textContent = '▶';
    bars.forEach(b => b.style.animationPlayState = 'paused');
  } else {
    AppState.audioPlaying = true;
    btn.textContent = '❚❚';
    bars.forEach(b => b.style.animationPlayState = 'running');
    // Abre directamente la emisora curada en YouTube Music
    window.open(channel.url, '_blank');
  }
}

// Chime de éxito con Web Audio API
function playSuccessChime() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5
    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.3);
  } catch(e){}
}

// --------------------------------------------------------------------------
// 8. MÓDULO DUOLINGO ENGLISH SPRINT (5 MINUTOS)
// --------------------------------------------------------------------------
const DUOLINGO_QUESTIONS = [
  {
    phrase: "«The Engineer issued a Taking-Over Certificate with minor outstanding punch-list items.»",
    options: [
      "El Ingeniero emitió el Certificado de Recepción Provisoria con observaciones menores pendientes de la lista de remates.",
      "El Contratista presentó un reclamo de costos por obras adicionales no contempladas en las bases.",
      "El ITO ordenó paralizar la obra por rotura de matriz de agua potable."
    ],
    correct: 0,
    explanation: "¡Correcto! Taking-Over Certificate = Recepción Provisoria en contratos estándar internacionales FIDIC (Red Book)."
  },
  {
    phrase: "«Liquidated damages for delay shall be deducted from the interim payment certificate.»",
    options: [
      "Los honorarios del proyectista se cancelarán mediante boleta de garantía bancaria.",
      "Las multas e indemnizaciones por atraso serán retenidas del estado de pago provisorio.",
      "El mandante liquidará la póliza de seguro todo riesgo de construcción."
    ],
    correct: 1,
    explanation: "¡Exacto! Liquidated damages = Multas/indemnizaciones tarifadas por atraso imputables al contratista."
  },
  {
    phrase: "«The curing membrane must achieve at least 95% moisture retention efficiency.»",
    options: [
      "La membrana de curado debe alcanzar al menos un 95% de eficiencia en la retención de humedad.",
      "El ensayo de probetas de hormigón debe realizarse a los 28 días con rotura a compresión.",
      "El mortero de nivelación debe fraguar bajo agua en un lapso máximo de 4 horas."
    ],
    correct: 0,
    explanation: "¡Impecable! Curing membrane = Membrana de curado para evitar la evaporación de agua en NCh170."
  },
  {
    phrase: "«The partnering agreement established clear shared goals based on mutual trust, without reducing baseline costs directly.»",
    options: [
      "El acuerdo de partnering fijó objetivos compartidos basados en confianza mutua, sin reducir costos base de forma directa.",
      "El contrato a suma alzada redujo un 30% los costos mediante la eliminación de la prima de riesgo.",
      "El subcontratista asumió la totalidad de los reclamos y multas por demoras operacionales."
    ],
    correct: 0,
    explanation: "¡Excelente! Partnering = Acuerdo de colaboración y beneficio mutuo (IPA confirma que no busca primordialmente abaratar costos sino alinear objetivos)."
  },
  {
    phrase: "«Under the Early Contractor Involvement (ECI) model, the contractor joined during feasibility and mutated to EPC lump-sum at 80% detailed engineering.»",
    options: [
      "El contratista participó desde la factibilidad y mutó a EPC suma alzada al 80% de ingeniería de detalle.",
      "El mandante canceló la licitación por falta de financiamiento en el estudio de impacto ambiental.",
      "El consorcio subcontrató la ingeniería de detalle a un agente EPCM internacional."
    ],
    correct: 0,
    explanation: "¡Brillante! ECI = Involucramiento temprano del constructor para inyectar constructibilidad antes de congelar el precio."
  },
  {
    phrase: "«The Dispute Review Board issued a non-binding technical recommendation that prevented formal arbitration.»",
    options: [
      "El Panel Técnico de Controversias (Dispute Board) emitió una recomendación técnica no vinculante que evitó el arbitraje formal.",
      "El tribunal ordinario de justicia dictó sentencia condenatoria contra el consorcio de ingeniería.",
      "El mandante cobró la boleta de garantía bancaria por abandono intempestivo de las faenas."
    ],
    correct: 0,
    explanation: "¡Impecable! Dispute Boards = Paneles tempranos en obra que resuelven pacíficamente más del 95% de las diferencias técnicas."
  }
];

function openDuolingoModal() {
  AppState.duolingoCurrentIndex = 0;
  AppState.duolingoLives = 3;
  renderDuolingoQuestion();
  openAccessibleModal('modal-duolingo');
}

function closeDuolingoModal() {
  closeAccessibleLayer('modal-duolingo');
}

function renderDuolingoQuestion() {
  const q = DUOLINGO_QUESTIONS[AppState.duolingoCurrentIndex];
  document.querySelector('.duo-target-phrase').textContent = q.phrase;
  document.getElementById('duo-feedback').classList.add('hidden');
  
  const optsContainer = document.getElementById('duo-options-container');
  optsContainer.innerHTML = '';
  q.options.forEach((optText, idx) => {
    const btn = document.createElement('button');
    btn.className = 'duo-opt-btn';
    btn.textContent = optText;
    btn.onclick = () => checkDuolingoAnswer(idx);
    optsContainer.appendChild(btn);
  });

  const progress = ((AppState.duolingoCurrentIndex + 1) / DUOLINGO_QUESTIONS.length) * 100;
  document.getElementById('duo-progress').style.width = progress + '%';
  if (AccessibilityState.layer?.root.id === 'modal-duolingo') {
    const heading = document.querySelector('.duo-target-phrase');
    heading.tabIndex = -1;
    heading.focus();
  }
}

function checkDuolingoAnswer(idx) {
  const q = DUOLINGO_QUESTIONS[AppState.duolingoCurrentIndex];
  const feedbackBar = document.getElementById('duo-feedback');
  const feedbackText = document.getElementById('duo-feedback-text');

  feedbackBar.classList.remove('hidden');

  if (idx === q.correct) {
    feedbackBar.style.background = 'rgba(16, 185, 129, 0.2)';
    feedbackBar.style.borderColor = 'var(--color-emerald)';
    feedbackText.textContent = q.explanation;
    playSuccessChime();
  } else {
    AppState.duolingoLives--;
    feedbackBar.style.background = 'rgba(239, 68, 68, 0.2)';
    feedbackBar.style.borderColor = 'var(--color-red)';
    feedbackText.textContent = '❌ Respuesta incorrecta. Revisa el vocabulario técnico de contratos.';
    document.querySelector('.duo-lives').textContent = '❤️'.repeat(Math.max(0, AppState.duolingoLives));
  }
}

function nextDuolingoQuestion() {
  if (AppState.duolingoCurrentIndex < DUOLINGO_QUESTIONS.length - 1) {
    AppState.duolingoCurrentIndex++;
    renderDuolingoQuestion();
  } else {
    alert('🎉 ¡Sprint completado con éxito! Se han sumado 5 minutos a tu racha de hoy.');
    closeDuolingoModal();
  }
}

// --------------------------------------------------------------------------
// 9. RESUMIDOR DE YOUTUBE & CRONOGRAMA DE CALENDARIO
// --------------------------------------------------------------------------
function openYoutubeModal() {
  openAccessibleModal('modal-youtube');
}

function closeYoutubeModal() {
  closeAccessibleLayer('modal-youtube');
}

function processYoutubeUrl() {
  const url = document.getElementById('yt-url-input').value;
  if (!url) {
    alert('Por favor ingresa una URL de YouTube válida.');
    return;
  }
  document.getElementById('yt-result-box').classList.remove('hidden');
}

async function addYtCardsToFsrs() {
  const cards = [
    { subject: 'Obras Viales', prompt: '¿Qué representa el ensayo Marshall en una mezcla asfáltica?', answer: 'Relaciona estabilidad, flujo y vacíos para controlar el desempeño de la mezcla compactada.' },
    { subject: 'Obras Viales', prompt: '¿Qué debe registrar el ITO al recibir mezcla asfáltica en obra?', answer: 'La trazabilidad del camión, hora, temperatura y aceptación o rechazo conforme a las EETT.' },
    { subject: 'Obras Viales', prompt: '¿Cuál es el propósito del Proctor Modificado?', answer: 'Determinar la relación humedad-densidad y la densidad seca máxima de referencia.' },
    { subject: 'Obras Viales', prompt: '¿Por qué debe mantenerse la ventana térmica de compactación?', answer: 'Porque fuera de ella la mezcla pierde trabajabilidad y no alcanza la densidad especificada sin dañarse.' },
    { subject: 'Obras Viales', prompt: '¿Qué evidencia debe respaldar la recepción de una capa compactada?', answer: 'Resultados trazables de densidad, espesor, nivelación y cumplimiento de la especificación aplicable.' }
  ];

  try {
    await FSRSEngine.addCards(cards);
    await refreshFsrsDashboard();
    closeYoutubeModal();
    alert('✅ 5 tarjetas persistentes agregadas al repaso FSRS de Obras Viales.');
  } catch (error) {
    console.error('[FSRS] No fue posible agregar las tarjetas:', error);
    alert(`No fue posible guardar las tarjetas: ${error.message}`);
  }
}

function renderCalendarModalEvents() {
  const container = document.getElementById('calendar-events-list');
  if (!container) return;
  container.innerHTML = '';

  CALENDAR_EVENTS.forEach(ev => {
    const card = document.createElement('div');
    card.className = `cal-event-card ${ev.type}-event`;

    const parts = ev.date.split('-');
    const dayNum = parts[2];
    const monthNum = parseInt(parts[1], 10);
    const monthShort = MONTH_NAMES[monthNum - 1] ? MONTH_NAMES[monthNum - 1].slice(0, 3) : 'OCT';

    // Cálculo dinámico de días faltantes respecto al sistema local
    const today = startOfLocalDay(new Date());
    const evDate = new Date(parseInt(parts[0], 10), monthNum - 1, parseInt(dayNum, 10));
    const diffTime = evDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let countdownText = 'Hoy';
    let countdownClass = 'alert-tag';
    if (diffDays > 0) {
      countdownText = `En ${diffDays} día${diffDays > 1 ? 's' : ''}`;
      countdownClass = diffDays <= 5 ? 'alert-tag' : 'normal-tag';
    } else if (diffDays < 0) {
      countdownText = 'Finalizado';
      countdownClass = 'normal-tag';
    }

    let tagText = 'TIME-BLOCKING';
    let tagClass = 'tag-class';
    if (ev.type === 'exam') {
      tagText = '🔴 EVALUACIÓN SUMATIVA';
      tagClass = 'tag-exam';
    } else if (ev.type === 'class') {
      tagText = '🔵 CLASE ONLINE EN VIVO';
      tagClass = 'tag-class';
    }

    const dateBox = document.createElement('div');
    dateBox.className = 'cal-event-date';
    dateBox.append(
      createTextElement('span', 'day', dayNum),
      createTextElement('span', 'month', monthShort)
    );
    const details = document.createElement('div');
    details.className = 'cal-event-details';
    details.append(
      createTextElement('span', `event-tag ${tagClass}`, tagText),
      createTextElement('h4', '', ev.title),
      createTextElement('p', '', `${ev.desc} · Cierre: ${ev.time}`)
    );
    const actions = document.createElement('div');
    actions.className = 'cal-event-actions';
    actions.appendChild(createTextElement('span', `countdown-tag ${countdownClass}`, countdownText));
    card.append(dateBox, details, actions);
    container.appendChild(card);
  });
}

function createTextElement(tagName, className, text) {
  const node = document.createElement(tagName);
  if (className) node.className = className;
  node.textContent = String(text ?? '');
  return node;
}

function openCalendarModal() {
  renderCalendarModalEvents();
  openAccessibleModal('modal-calendar');
}

function closeCalendarModal() {
  closeAccessibleLayer('modal-calendar');
}

function syncWithGoogleCalendar() {
  // No existe integración OAuth ni API de Google Calendar: intercambio por ICS.
  downloadIcsCalendar();
  closeCalendarModal();
}

// --------------------------------------------------------------------------
// 10. INGESTA DE PDF Y CHAT SPLIT-SCREEN
// --------------------------------------------------------------------------
function triggerPdfUpload() {
  closeSidebarDrawer();
  document.getElementById('pdf-file-input').click();
}

async function handlePdfUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  switchPedagogicalMode('pdf');
  try {
    const result = await PDFViewer.loadFile(file);
    appendPdfSystemMessage(
      result.textPages
        ? `Documento local listo: ${result.pages} páginas; se extrajo texto de ${result.textPages}. OMEN ya puede responder usando su contenido real.`
        : `Documento renderizado (${result.pages} páginas), pero no contiene texto seleccionable. Para consultarlo se requiere una versión con OCR.`
    );
  } catch (error) {
    console.error('[PDFViewer] Error de carga:', error);
    appendPdfSystemMessage(`No fue posible procesar el PDF: ${error.message}`, true);
  } finally {
    event.target.value = '';
  }
}

async function changePdfPage(delta) {
  try {
    await PDFViewer.changePage(delta);
  } catch (error) {
    appendPdfSystemMessage(error.message, true);
  }
}

function appendPdfSystemMessage(message, isError = false) {
  const container = document.getElementById('pdf-chat-messages');
  if (!container) return;
  const messageBox = document.createElement('div');
  messageBox.className = 'chat-msg ai-msg';
  const sender = document.createElement('div');
  sender.className = 'msg-sender';
  sender.textContent = isError ? 'VISOR PDF · ALERTA' : 'OMEN · DOCUMENTO LOCAL';
  if (isError) sender.style.color = 'var(--color-red)';
  const text = document.createElement('div');
  text.className = 'msg-text';
  text.textContent = message;
  messageBox.append(sender, text);
  container.appendChild(messageBox);
  container.scrollTop = container.scrollHeight;
}

async function sendPdfChatMessage() {
  const input = document.getElementById('pdf-chat-input');
  const text = input.value.trim();
  if (!text) return;

  const container = document.getElementById('pdf-chat-messages');
  
  // Mensaje usuario
  const userDiv = document.createElement('div');
  userDiv.className = 'chat-msg';
  userDiv.style.background = 'rgba(255, 94, 0, 0.1)';
  userDiv.style.border = '1px solid var(--border-orange)';
  // SECURITY FIX (Fase 2): texto de usuario sanitizado antes de insertar en DOM
  const senderEl = document.createElement('div');
  senderEl.className = 'msg-sender';
  senderEl.style.color = 'var(--color-orange)';
  senderEl.textContent = 'J. ESTEBAN MELLA (CEO)';
  const textEl = document.createElement('div');
  textEl.className = 'msg-text';
  textEl.textContent = text; // textContent escapa automáticamente — cero XSS
  userDiv.appendChild(senderEl);
  userDiv.appendChild(textEl);
  container.appendChild(userDiv);

  input.value = '';

  const aiDiv = document.createElement('div');
  aiDiv.className = 'chat-msg ai-msg';
  container.appendChild(aiDiv);
  renderGeminiLoading(aiDiv, 'OMEN y ATLAS contrastan la consulta con el corpus...');
  container.scrollTop = container.scrollHeight;

  const activeSubject = ACADEMIC_DATABASE[AppState.activeSubject] || { name: 'Construcción' };
  const documentContext = PDFViewer.hasDocument()
    ? PDFViewer.getChatContext(text)
    : 'No hay un PDF local cargado; informa esta limitación con claridad.';
  const context = [
    `${activeSubject.name || 'Construcción'} · ${activeSubject.lessonTitle || 'Documento en revisión'}`,
    'CONTENIDO EXTRAÍDO DEL PDF LOCAL (incluye la página visible y las páginas más pertinentes):',
    documentContext
  ].join('\n\n');
  const systemInstruction = [
    'Responde la consulta socrática usando el texto real extraído del documento local.',
    'Indica el número de página cuando el fragmento suministrado lo permita y no atribuyas al PDF contenido ausente.',
    'Separa comprensión conceptual, evidencia normativa y acción concreta del ITO.',
    'Si el corpus no respalda la afirmación, abstente expresamente.'
  ].join(' ');
  const result = await callGeminiApi(text, systemInstruction, context);

  renderStructuredAudit(aiDiv, result, true);
  container.scrollTop = container.scrollHeight;
}

function openFolioTemplate(subject) {
  alert(`Descargando Minuta Pericial Oficial de Libro de Obras para ${subject}.`);
}

async function initializeFsrs() {
  try {
    await FSRSEngine.init();
    await refreshFsrsDashboard();
  } catch (error) {
    console.error('[FSRS] Inicialización fallida:', error);
    const dueLabel = document.getElementById('fsrs-due-count');
    if (dueLabel) dueLabel.textContent = 'FSRS no disponible';
  }
}

async function refreshFsrsDashboard() {
  const stats = await FSRSEngine.getStats();
  const dueLabel = document.getElementById('fsrs-due-count');
  const retentionPercent = document.getElementById('retention-percent');
  const retentionBar = document.getElementById('retention-bar');
  if (dueLabel) dueLabel.textContent = `FSRS: ${stats.dueCount} tarjeta${stats.dueCount === 1 ? '' : 's'} para hoy`;
  if (retentionPercent) retentionPercent.textContent = `${stats.retention.toFixed(1)}%`;
  if (retentionBar) retentionBar.style.width = `${Math.max(0, Math.min(100, stats.retention))}%`;
}

async function openCardsModal() {
  const modal = document.getElementById('modal-fsrs');
  if (!modal) return;
  openAccessibleModal('modal-fsrs');
  const status = document.getElementById('fsrs-session-status');
  if (status) status.textContent = 'Cargando tarjetas persistentes…';
  try {
    FsrsSession.cards = await FSRSEngine.getDueCards();
    FsrsSession.currentIndex = 0;
    FsrsSession.answerVisible = false;
    renderFsrsCard();
  } catch (error) {
    if (status) status.textContent = `No fue posible abrir IndexedDB: ${error.message}`;
  }
}

function closeFsrsModal() {
  closeAccessibleLayer('modal-fsrs');
}

function renderFsrsCard() {
  const status = document.getElementById('fsrs-session-status');
  const subject = document.getElementById('fsrs-card-subject');
  const prompt = document.getElementById('fsrs-card-question');
  const answer = document.getElementById('fsrs-card-answer');
  const reveal = document.getElementById('fsrs-reveal-answer');
  const schedule = document.getElementById('fsrs-schedule-result');
  const ratingButtons = document.querySelectorAll('#modal-fsrs [data-fsrs-rating]');
  const card = FsrsSession.cards[FsrsSession.currentIndex];

  if (!card) {
    if (status) status.textContent = 'Repaso diario completado · no quedan tarjetas vencidas.';
    if (subject) subject.textContent = 'FSRS AL DÍA';
    if (prompt) prompt.textContent = 'La próxima sesión aparecerá automáticamente cuando una tarjeta llegue a su fecha programada.';
    if (answer) {
      answer.textContent = '';
      answer.classList.add('hidden');
    }
    if (reveal) reveal.classList.add('hidden');
    ratingButtons.forEach((button) => { button.disabled = true; });
    return;
  }

  if (status) status.textContent = `Tarjeta ${FsrsSession.currentIndex + 1} de ${FsrsSession.cards.length}`;
  if (subject) subject.textContent = card.subject;
  if (prompt) prompt.textContent = card.prompt;
  if (answer) {
    answer.textContent = card.answer;
    answer.classList.toggle('hidden', !FsrsSession.answerVisible);
  }
  if (reveal) {
    reveal.classList.toggle('hidden', FsrsSession.answerVisible);
    reveal.disabled = false;
  }
  ratingButtons.forEach((button) => { button.disabled = !FsrsSession.answerVisible; });
  if (schedule) schedule.textContent = 'Revela la respuesta y califica tu recuperación, no la dificultad del tema.';
}

function revealFsrsAnswer() {
  FsrsSession.answerVisible = true;
  renderFsrsCard();
  document.querySelector('#modal-fsrs [data-fsrs-rating]:not(:disabled)')?.focus();
}

async function rateFsrsCard(rating) {
  const card = FsrsSession.cards[FsrsSession.currentIndex];
  if (!card || !FsrsSession.answerVisible) return;
  const ratingButtons = document.querySelectorAll('#modal-fsrs [data-fsrs-rating]');
  ratingButtons.forEach((button) => { button.disabled = true; });
  try {
    const reviewed = await FSRSEngine.reviewCard(card.id, rating, new Date());
    const due = new Date(reviewed.dueDate).toLocaleString('es-CL', { dateStyle: 'medium', timeStyle: 'short' });
    const calibration = document.getElementById('fsrs-calibration-text');
    if (calibration) {
      calibration.textContent = `Dificultad ${reviewed.difficulty.toFixed(2)}/10 · Estabilidad ${reviewed.stability.toFixed(2)} días · próximo repaso ${due}.`;
    }
    FsrsSession.cards.splice(FsrsSession.currentIndex, 1);
    FsrsSession.answerVisible = false;
    await refreshFsrsDashboard();
    renderFsrsCard();
    if (AccessibilityState.layer?.root.id === 'modal-fsrs') {
      const question = document.getElementById('fsrs-card-question');
      question.tabIndex = -1;
      question.focus();
    }
  } catch (error) {
    const schedule = document.getElementById('fsrs-schedule-result');
    if (schedule) schedule.textContent = `No se pudo guardar la revisión: ${error.message}`;
    ratingButtons.forEach((button) => { button.disabled = false; });
  }
}

// --------------------------------------------------------------------------
// 11. MAPA DE CALOR GITHUB-STYLE (CANVAS O DIV MATRIX)
// --------------------------------------------------------------------------
function renderGitHubHeatmap() {
  const container = document.getElementById('github-heatmap-container');
  if (!container) return;

  container.innerHTML = '';
  // 14 columnas x 7 días = 98 celdas de las últimas 14 semanas
  const sampleIntensities = [
    0, 1, 2, 3, 2, 3, 1, 0, 2, 3, 3, 2, 1, 3,
    1, 2, 3, 3, 3, 2, 0, 1, 2, 3, 3, 1, 2, 3,
    2, 3, 2, 1, 0, 3, 2, 2, 3, 3, 1, 2, 3, 3,
    3, 2, 1, 3, 3, 2, 1, 3, 3, 2, 3, 3, 2, 3,
    1, 3, 3, 2, 3, 1, 2, 3, 3, 2, 1, 0, 3, 3,
    2, 3, 2, 3, 3, 2, 1, 2, 3, 3, 3, 2, 1, 3,
    3, 3, 2, 3, 3, 3, 2, 3, 3, 2, 3, 3, 3, 3
  ];

  sampleIntensities.forEach((level) => {
    const box = document.createElement('div');
    box.className = `heat-box box-${level}`;
    box.title = `Sesión de estudio pericial · Nivel ${level}/3`;
    container.appendChild(box);
  });
}

// --------------------------------------------------------------------------
// 12. RADAR CANVAS (RADAR DE ASIGNATURAS CRÍTICAS)
// --------------------------------------------------------------------------
function renderSubjectRadar() {
  const canvas = document.getElementById('subjectRadarCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = 65;

  ctx.clearRect(0, 0, width, height);

  const subjects = [
    { name: 'Industrializada', val: 0.78 },
    { name: 'Obras Viales', val: 0.64 },
    { name: 'Obras Civiles', val: 0.89 },
    { name: 'Contratos UC', val: 0.41 },
    { name: 'Proyectos UC', val: 0.76 }
  ];

  const total = subjects.length;
  const angleStep = (Math.PI * 2) / total;

  // Dibujar anillos concéntricos
  for (let r = 0.25; r <= 1.0; r += 0.25) {
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    for (let i = 0; i < total; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + Math.cos(angle) * (radius * r);
      const y = centerY + Math.sin(angle) * (radius * r);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  }

  // Dibujar polígono de datos
  ctx.beginPath();
  ctx.strokeStyle = '#FF5E00';
  ctx.fillStyle = 'rgba(255, 94, 0, 0.25)';
  ctx.lineWidth = 2;

  subjects.forEach((s, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const currentRadius = radius * s.val;
    const x = centerX + Math.cos(angle) * currentRadius;
    const y = centerY + Math.sin(angle) * currentRadius;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });

  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Puntos en los vértices
  subjects.forEach((s, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const currentRadius = radius * s.val;
    const x = centerX + Math.cos(angle) * currentRadius;
    const y = centerY + Math.sin(angle) * currentRadius;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fillStyle = s.val < 0.5 ? '#EF4444' : '#00F0FF';
    ctx.fill();
  });
}

// --------------------------------------------------------------------------
// 13. MOTOR DE CALENDARIO VISUAL INTERACTIVO & EXPORTACIÓN .ICS
// --------------------------------------------------------------------------
let CALENDAR_EVENTS = [];

function startOfLocalDay(value) {
  const date = value instanceof Date ? new Date(value) : new Date(value);
  date.setHours(0, 0, 0, 0);
  return date;
}

function toLocalDateKey(value) {
  const date = value instanceof Date ? value : new Date(value);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function addCalendarDays(value, days) {
  const date = startOfLocalDay(value);
  date.setDate(date.getDate() + days);
  return date;
}

function weekdayLabel(value) {
  const label = value.toLocaleDateString('es-CL', { weekday: 'long' });
  return `${label.charAt(0).toUpperCase()}${label.slice(1)}`;
}

function createCalendarEvents(referenceDate = new Date()) {
  const day = (offset) => addCalendarDays(referenceDate, offset);
  const eventDate = (offset) => toLocalDateKey(day(offset));
  return [
    { id: 1, date: eventDate(0), type: 'study', title: 'Time-Blocking Mentor EMG: Obras Civiles & Viales', time: '21:00 - 21:45', desc: 'Repaso intensivo de Ensayos Marshall, Densidades Proctor y Fundaciones' },
    { id: 2, date: eventDate(3), type: 'exam', title: '🔴 Evaluación Sumativa: Obras Civiles (IPLACEX)', time: `${weekdayLabel(day(3))} 23:59 Cierre`, desc: 'Plataforma IPLACEX · Módulo 03: Fundaciones Especiales & Hormigón Masivo (30%)' },
    { id: 3, date: eventDate(4), type: 'exam', title: '🔴 Evaluación Sumativa: Construcción Industrializada (IPLACEX)', time: `${weekdayLabel(day(4))} 23:59 Cierre`, desc: 'Plataforma IPLACEX · Módulo 03: Hormigón Prefabricado y Conexiones Húmedas Grout (30%)' },
    { id: 4, date: eventDate(5), type: 'exam', title: '🔴 Evaluación Sumativa: Obras Viales (IPLACEX)', time: `${weekdayLabel(day(5))} 23:59 Cierre`, desc: 'Plataforma IPLACEX · Módulo 03: Estructuración y Control de Pavimentos Asfálticos (30%)' },
    { id: 5, date: eventDate(6), type: 'class', title: '🔵 Clase Online en Vivo: Claims FIDIC (UC)', time: `${weekdayLabel(day(6))} 19:00 - 21:30`, desc: 'Diplomados UC · Taller con Caso Práctico de Reclamaciones Contractuales' },
    { id: 6, date: eventDate(8), type: 'class', title: '🔵 Clase Online: Montaje Industrializado (IPLACEX)', time: `${weekdayLabel(day(8))} 20:00 - 21:30`, desc: 'IPLACEX · Sesión de Acompañamiento Docente en Vivo' },
    { id: 7, date: eventDate(19), type: 'exam', title: '🔴 Evaluación Final: Gestión de Proyectos (UC)', time: `${weekdayLabel(day(19))} 23:59 Cierre`, desc: 'Diplomados UC · Entrega de Matriz EVM y Curva S' }
  ];
}

const calendarToday = new Date();
let CalendarState = {
  year: calendarToday.getFullYear(),
  month: calendarToday.getMonth(),
  selectedDate: toLocalDateKey(calendarToday),
  filter: 'all'
};

const MONTH_NAMES = [
  'ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO',
  'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'
];

function initVisualCalendar() {
  CALENDAR_EVENTS = createCalendarEvents(new Date());
  updateDynamicStudyRecommendation();
  renderCalendarMatrix();
  renderAgendaItems();
}

function updateDynamicStudyRecommendation() {
  const exams = CALENDAR_EVENTS.filter((event) => event.type === 'exam').slice(0, 3);
  const badge = document.getElementById('next-exam-badge');
  const heroDate = document.getElementById('hero-exam-date');
  const heroDescription = document.getElementById('hero-exam-description');
  const format = (date) => new Date(`${date}T12:00:00`).toLocaleDateString('es-CL', { day: 'numeric', month: 'short' });
  const dates = exams.map((event) => format(event.date));
  if (badge) badge.textContent = `${exams.length} PRUEBAS · ${dates.join(' · ').toLocaleUpperCase('es-CL')}`;
  if (heroDate) heroDate.textContent = dates.join(', ');
  if (heroDescription) {
    heroDescription.textContent = exams.map((event) => `${format(event.date)} · ${event.title.replace(/^🔴\s*/, '')}`).join('  •  ');
  }
}

function renderCalendarMatrix() {
  const grid = document.getElementById('cal-interactive-grid');
  const title = document.getElementById('cal-month-title');
  if (!grid || !title) return;

  grid.innerHTML = '';
  title.textContent = `${MONTH_NAMES[CalendarState.month]} ${CalendarState.year}`;

  const firstDay = new Date(CalendarState.year, CalendarState.month, 1);
  const lastDay = new Date(CalendarState.year, CalendarState.month + 1, 0);
  
  // En Chile / ISO lunes es día 1, domingo día 7
  let startOffset = firstDay.getDay() - 1;
  if (startOffset === -1) startOffset = 6;

  // Días del mes anterior (padding)
  const prevMonthLastDay = new Date(CalendarState.year, CalendarState.month, 0).getDate();
  for (let i = startOffset - 1; i >= 0; i--) {
    const cell = document.createElement('div');
    cell.className = 'cal-day-cell inactive-month';
    cell.appendChild(createTextElement('span', 'day-num', prevMonthLastDay - i));
    grid.appendChild(cell);
  }

  // Días del mes actual
  const todayStr = toLocalDateKey(new Date());
  for (let d = 1; d <= lastDay.getDate(); d++) {
    const dayStr = `${CalendarState.year}-${String(CalendarState.month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const cell = document.createElement('div');
    cell.className = 'cal-day-cell';
    cell.tabIndex = 0;
    cell.setAttribute('role', 'button');
    cell.dataset.date = dayStr;
    cell.setAttribute('aria-pressed', String(dayStr === CalendarState.selectedDate));
    if (dayStr === todayStr) cell.setAttribute('aria-current', 'date');
    
    if (dayStr === todayStr) cell.classList.add('is-today');
    if (dayStr === CalendarState.selectedDate) cell.classList.add('is-selected');

    // Eventos de este día
    const dayEvents = CALENDAR_EVENTS.filter(e => e.date === dayStr);
    const dateLabel = new Date(CalendarState.year, CalendarState.month, d)
      .toLocaleDateString('es-CL', { dateStyle: 'full' });
    cell.setAttribute('aria-label', dateLabel + (dayEvents.length ? ': ' + dayEvents.map(e => e.title).join('; ') : ': sin eventos'));
    const dots = document.createElement('div');
    dots.className = 'day-event-dots';
    dayEvents.forEach(e => {
      const dot = document.createElement('span');
      dot.className = `dot-${e.type}`;
      dot.title = e.title;
      dots.appendChild(dot);
    });
    cell.append(createTextElement('span', 'day-num', d), dots);

    cell.onclick = () => {
      const hadFocus = document.activeElement === cell;
      CalendarState.selectedDate = dayStr;
      renderCalendarMatrix();
      renderAgendaItems();
      if (hadFocus) grid.querySelector('[data-date="' + dayStr + '"]')?.focus();
    };

    grid.appendChild(cell);
  }

  // Padding final para completar 35 o 42 celdas
  const totalRendered = startOffset + lastDay.getDate();
  const nextPadding = (7 - (totalRendered % 7)) % 7;
  for (let n = 1; n <= nextPadding; n++) {
    const cell = document.createElement('div');
    cell.className = 'cal-day-cell inactive-month';
    cell.appendChild(createTextElement('span', 'day-num', n));
    grid.appendChild(cell);
  }
}

function navigateCalendarMonth(delta) {
  CalendarState.month += delta;
  if (CalendarState.month < 0) {
    CalendarState.month = 11;
    CalendarState.year--;
  } else if (CalendarState.month > 11) {
    CalendarState.month = 0;
    CalendarState.year++;
  }
  renderCalendarMatrix();
}

function filterCalendarEvents(type) {
  CalendarState.filter = type;
  document.querySelectorAll('.cal-filter-pills .filter-pill').forEach(p => p.classList.remove('active'));
  
  if (type === 'all') document.querySelector('.cal-filter-pills .filter-pill:nth-child(1)').classList.add('active');
  if (type === 'exam') document.querySelector('.pill-exam').classList.add('active');
  if (type === 'class') document.querySelector('.pill-class').classList.add('active');
  if (type === 'study') document.querySelector('.pill-study').classList.add('active');

  renderAgendaItems();
}

function renderAgendaItems() {
  const container = document.getElementById('agenda-items-list');
  const countBadge = document.getElementById('agenda-event-count');
  if (!container) return;

  container.innerHTML = '';
  let filtered = CALENDAR_EVENTS;

  if (CalendarState.filter !== 'all') {
    filtered = filtered.filter(e => e.type === CalendarState.filter);
  }

  countBadge.textContent = `${filtered.length} Eventos Programados`;

  filtered.forEach(ev => {
    const card = document.createElement('div');
    card.className = `agenda-item-card type-${ev.type}`;
    
    let tagText = 'TIME-BLOCKING';
    let tagClass = 'tag-study';
    if (ev.type === 'exam') { tagText = 'PRUEBA / EXAMEN'; tagClass = 'tag-exam'; }
    if (ev.type === 'class') { tagText = 'CLASE EN VIVO'; tagClass = 'tag-class'; }

    const top = document.createElement('div');
    top.className = 'agenda-item-top';
    top.append(
      createTextElement('span', 'agenda-item-date', `${ev.date} · ${ev.time}`),
      createTextElement('span', `agenda-item-tag ${tagClass}`, tagText)
    );
    card.append(
      top,
      createTextElement('div', 'agenda-item-title', ev.title),
      createTextElement('div', 'agenda-item-desc', ev.desc)
    );

    container.appendChild(card);
  });
}

function addPersonalTimeBlock() {
  const subjectInput = document.getElementById('custom-study-subject');
  const durationSelect = document.getElementById('custom-study-duration');
  
  const text = subjectInput.value.trim() || 'Sesión de Foco OMEN';
  const duration = durationSelect.value;
  const today = toLocalDateKey(new Date());

  CALENDAR_EVENTS.push({
    id: Date.now(),
    date: today,
    type: 'study',
    title: `Santuario Deep Work (${duration} min)`,
    time: 'Hoy 21:00 hrs',
    desc: `Materia reservada: ${text}`
  });

  renderCalendarMatrix();
  renderAgendaItems();
  alert(`⚡ Bloque de estudio de ${duration} min reservado exitosamente para hoy a las 21:00 hrs.`);
}

function escapeIcsText(value) {
  return String(value || '')
    .replace(/\\/g, '\\\\')
    .replace(/\r\n|\r|\n/g, '\\n')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,');
}

function formatIcsTimestamp(value = new Date()) {
  return value.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
}

function foldIcsLine(value) {
  const encoder = new TextEncoder();
  const lines = [];
  let line = '';
  let bytes = 0;
  for (const character of String(value)) {
    const size = encoder.encode(character).length;
    if (bytes + size > 75) {
      lines.push(line);
      line = ' ';
      bytes = 1;
    }
    line += character;
    bytes += size;
  }
  lines.push(line);
  return lines.join('\r\n');
}

function downloadIcsCalendar() {
  // RFC 5545 exige líneas separadas por CRLF, incluida la línea final.
  const CRLF = '\r\n';
  const generatedAt = formatIcsTimestamp(new Date());
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//MEGA INSPECCION//ESTUDIO INTELIGENTE 2.0//ES',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:Estudio Inteligente 2.0 - J. Esteban Mella'
  ];

  CALENDAR_EVENTS.forEach((event) => {
    const dateFormatted = event.date.replace(/-/g, '');
    const endDate = toLocalDateKey(addCalendarDays(`${event.date}T12:00:00`, 1)).replace(/-/g, '');
    lines.push(
      'BEGIN:VEVENT',
      `UID:${event.id}-${dateFormatted}@megainspeccion.cl`,
      `DTSTAMP:${generatedAt}`,
      `DTSTART;VALUE=DATE:${dateFormatted}`,
      `DTEND;VALUE=DATE:${endDate}`,
      `SUMMARY:${escapeIcsText(event.title)}`,
      `DESCRIPTION:${escapeIcsText(`${event.desc} - Horario: ${event.time}`)}`,
      'STATUS:CONFIRMED',
      'END:VEVENT'
    );
  });

  lines.push('END:VCALENDAR');
  const icsContent = lines.map(foldIcsLine).join(CRLF) + CRLF;

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Estudio_Inteligente_2.0_Calendario.ics';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  alert('📥 Archivo "Estudio_Inteligente_2.0_Calendario.ics" generado y descargado. Puedes importarlo directamente en Google Calendar o en el calendario de tu Xiaomi.');
}

// --------------------------------------------------------------------------
// 15. INTEGRACIÓN GOOGLE AI STUDIO (GEMINI 2.0 FLASH & 1.5 FLASH)
// --------------------------------------------------------------------------
function openAiStudioModal() {
  const modal = document.getElementById('modal-ai-studio');
  if (modal) {
    const keyInput = document.getElementById('input-ai-api-key');
    const modelSelect = document.getElementById('select-ai-model');
    if (keyInput) {
      keyInput.value = '';
      keyInput.type = 'password';
    }
    document.getElementById('api-key-visibility')?.setAttribute('aria-pressed', 'false');
    if (modelSelect) modelSelect.value = SecureVault.getModel();
    checkAiStudioStatus();
    openAccessibleModal('modal-ai-studio');
  }
}

function closeAiStudioModal() {
  closeAccessibleLayer('modal-ai-studio');
}

function toggleApiKeyVisibility() {
  const input = document.getElementById('input-ai-api-key');
  if (input) {
    input.type = input.type === 'password' ? 'text' : 'password';
    document.getElementById('api-key-visibility')?.setAttribute('aria-pressed', String(input.type === 'text'));
  }
}

function checkAiStudioStatus() {
  // SECURITY FIX (Fase 2): leer desde SecureVault, no desde localStorage
  const hasKey = SecureVault.hasKey();
  document.getElementById('btn-open-ai-modal')?.setAttribute('aria-label',
    hasKey ? 'Configurar Google AI Studio: GEMINI ONLINE' : 'Configurar conexión Google AI Studio');
  const dot = document.getElementById('ai-status-dot');
  const label = document.getElementById('ai-status-label');
  const indicatorLight = document.getElementById('ai-active-indicator-light');
  const statusText = document.getElementById('ai-active-status-text');
  const aiBtn = document.getElementById('btn-open-ai-modal');

  if (hasKey) {
    if (dot) dot.classList.add('connected');
    if (label) label.textContent = 'GEMINI ONLINE';
    if (aiBtn) aiBtn.classList.add('gemini-connected');
    if (indicatorLight) indicatorLight.style.background = '#10B981';
    if (statusText) {
      const model = SecureVault.getModel();
      statusText.textContent = `ESTADO: CONECTADO A ${model.toUpperCase()}`;
      statusText.style.color = 'var(--color-emerald)';
    }
  } else {
    if (dot) dot.classList.remove('connected');
    if (label) label.textContent = 'AI STUDIO';
    if (aiBtn) aiBtn.classList.remove('gemini-connected');
    if (indicatorLight) indicatorLight.style.background = '#EF4444';
    if (statusText) {
      statusText.textContent = 'ESTADO: MODO SIMULACIÓN LOCAL (SIN CLAVE)';
      statusText.style.color = 'var(--color-red)';
    }
  }
}

async function saveAndTestAiStudioKey() {
  const keyInput = document.getElementById('input-ai-api-key');
  const modelSelect = document.getElementById('select-ai-model');
  const resultBox = document.getElementById('ai-test-result');

  const key = keyInput?.value.trim() || '';
  const model = modelSelect?.value || 'gemini-2.0-flash';

  if (!key || key.length < 15) {
    alert('Por favor ingrese una API Key válida de Google AI Studio.');
    return;
  }

  resultBox.style.display = 'block';
  resultBox.style.background = 'rgba(0, 240, 255, 0.1)';
  resultBox.style.border = '1px solid var(--color-cyan)';
  resultBox.style.color = 'var(--color-cyan)';
  resultBox.textContent = `⚡ Probando comunicación segura con Google AI Studio (${model})...`;

  try {
    const result = await GeminiClient.testConnection(key, model);

    SecureVault.setKey(key);
    SecureVault.setModel(model);
    keyInput.value = '';

    resultBox.style.background = 'rgba(16, 185, 129, 0.15)';
    resultBox.style.border = '1px solid #10B981';
    resultBox.style.color = 'var(--color-emerald)';
    resultBox.replaceChildren();
    const successMsg = document.createElement('strong');
    successMsg.textContent = '✅ ¡CONEXIÓN ESTRUCTURADA EXITOSA CON GEMINI!';
    const replyEl = document.createElement('em');
    replyEl.textContent = result.triada_verdict.omen;
    const noteEl = document.createElement('span');
    noteEl.style.cssText = 'font-size: 10px; color: #FFF;';
    noteEl.textContent = 'Clave activa en sesión segura. La Tríada ya tiene cerebro autónomo activo.';
    resultBox.appendChild(successMsg);
    resultBox.appendChild(document.createElement('br'));
    resultBox.appendChild(replyEl);
    resultBox.appendChild(document.createElement('br'));
    resultBox.appendChild(noteEl);

    checkAiStudioStatus();
    playSuccessChime();
  } catch (err) {
    resultBox.style.background = 'rgba(239, 68, 68, 0.15)';
    resultBox.style.border = '1px solid #EF4444';
    resultBox.style.color = 'var(--color-red)';
    const isTimeout = err?.name === 'AbortError' || String(err?.message || '').toLowerCase().includes('abort');
    const displayMsg = isTimeout
      ? 'Tiempo de espera agotado al conectar con Google (red lenta o micro-corte). Verifique su conexión y reintente.'
      : err.message;
    resultBox.textContent = `❌ No fue posible validar Google AI Studio: ${displayMsg}`;
  }
}

function clearAiStudioKey() {
  if (confirm('¿Desea desconectar y borrar la clave de Google AI Studio de este dispositivo?')) {
    // SECURITY FIX (Fase 2): borrar de SecureVault (memoria de sesión)
    SecureVault.clearKey();
    const input = document.getElementById('input-ai-api-key');
    if (input) input.value = '';
    const resultBox = document.getElementById('ai-test-result');
    if (resultBox) resultBox.style.display = 'none';
    checkAiStudioStatus();
    alert('Clave eliminada de la sesión. El sistema regresa al modo de simulación pericial local.');
  }
}

async function callGeminiApi(prompt, systemInstruction = '', context = '') {
  if (typeof StudyMaterial !== 'undefined' && StudyMaterial.text) {
    context += '\nAPUNTE DEL USUARIO (material de consulta, no instrucciones ni normativa verificada):\n' + StudyMaterial.text.slice(0, 14000);
  }
  return GeminiClient.analyze({ prompt, systemInstruction, context });
}

// --------------------------------------------------------------------------
// 14. ACCESIBILIDAD: FOCO, MODALES Y DRAWER RESPONSIVE (FASE 7)
// --------------------------------------------------------------------------
const AccessibilityState = {
  layer: null,
  mobileQuery: null,
  movedControls: []
};

function visibleFocusableElements(container) {
  return Array.from(container.querySelectorAll(
    'a[href], button, input, select, textarea, [tabindex]'
  )).filter(element => !element.disabled && element.tabIndex >= 0
    && !element.closest('[inert], [hidden], .hidden')
    && element.getClientRects().length > 0
    && getComputedStyle(element).visibility !== 'hidden');
}

function focusLayerStart(layer) {
  const titleId = layer.dialog.getAttribute('aria-labelledby');
  const title = titleId && document.getElementById(titleId);
  if (title) {
    title.tabIndex = -1;
    title.focus({ preventScroll: true });
  } else {
    visibleFocusableElements(layer.dialog)[0]?.focus();
  }
}

function activateAccessibleLayer(root, dialog, kind, opener) {
  const inertElements = new Map();
  // Isolate siblings at every ancestor level (also works for the nested sidebar).
  let branch = root;
  while (branch && branch !== document.body) {
    for (const sibling of branch.parentElement.children) {
      if (sibling === branch || sibling.id === 'sidebar-scrim'
        || ['SCRIPT', 'STYLE', 'LINK'].includes(sibling.tagName)) continue;
      inertElements.set(sibling, sibling.inert);
      sibling.inert = true;
    }
    branch = branch.parentElement;
  }
  AccessibilityState.layer = { root, dialog, kind, opener, inertElements };
  document.body.classList.add('overlay-open');
  focusLayerStart(AccessibilityState.layer);
}

function openAccessibleModal(id) {
  const root = document.getElementById(id);
  const dialog = root?.querySelector('[role="dialog"]');
  if (!root || !dialog || AccessibilityState.layer?.root === root) return;
  const opener = AccessibilityState.layer?.opener || document.activeElement;
  if (AccessibilityState.layer) closeAccessibleLayer(AccessibilityState.layer.root.id, false);
  root.classList.remove('hidden');
  activateAccessibleLayer(root, dialog, 'modal', opener);
}

function closeAccessibleLayer(id, restoreFocus = true) {
  const layer = AccessibilityState.layer;
  if (!layer || layer.root.id !== id) return;
  AccessibilityState.layer = null;
  layer.inertElements.forEach((wasInert, element) => { element.inert = wasInert; });
  if (layer.kind === 'drawer') {
    layer.root.classList.remove('drawer-open');
    layer.root.removeAttribute('role');
    layer.root.removeAttribute('aria-modal');
    document.getElementById('sidebar-toggle')?.setAttribute('aria-expanded', 'false');
    document.getElementById('sidebar-scrim')?.classList.add('hidden');
  } else {
    layer.root.classList.add('hidden');
  }
  document.body.classList.remove('overlay-open');
  if (layer.kind === 'drawer') layer.root.inert = Boolean(AccessibilityState.mobileQuery?.matches);
  if (restoreFocus) {
    const target = layer.opener;
    if (target?.isConnected && !target.closest('[inert], .hidden')
      && target.getClientRects().length && getComputedStyle(target).visibility !== 'hidden') {
      target.focus({ preventScroll: true });
    } else {
      const fallback = AccessibilityState.mobileQuery?.matches
        ? document.getElementById('sidebar-toggle')
        : document.getElementById('study-session-view');
      fallback?.focus({ preventScroll: true });
    }
  }
}

function toggleSidebarDrawer() {
  if (!AccessibilityState.mobileQuery?.matches) return;
  if (AccessibilityState.layer?.kind === 'drawer') {
    closeSidebarDrawer();
    return;
  }
  if (AccessibilityState.layer) closeAccessibleLayer(AccessibilityState.layer.root.id, false);
  const sidebar = document.getElementById('sidebar-nav');
  if (!sidebar) return;
  sidebar.inert = false;
  sidebar.classList.add('drawer-open');
  sidebar.setAttribute('role', 'dialog');
  sidebar.setAttribute('aria-modal', 'true');
  document.getElementById('sidebar-toggle')?.setAttribute('aria-expanded', 'true');
  document.getElementById('sidebar-scrim')?.classList.remove('hidden');
  activateAccessibleLayer(sidebar, sidebar, 'drawer', document.getElementById('sidebar-toggle'));
}

function closeSidebarDrawer() {
  if (AccessibilityState.layer?.kind === 'drawer') closeAccessibleLayer('sidebar-nav');
}

function syncMobileLayout() {
  if (document.body.classList.contains('reference-layout')) {
    document.getElementById('sidebar-nav').inert = true;
    return;
  }
  const mobile = AccessibilityState.mobileQuery.matches;
  const modalLayer = AccessibilityState.layer?.kind === 'modal' ? AccessibilityState.layer : null;
  if (modalLayer) closeAccessibleLayer(modalLayer.root.id, false);
  closeSidebarDrawer();
  const sidebar = document.getElementById('sidebar-nav');
  if (sidebar) sidebar.inert = mobile;
  const slot = document.getElementById('drawer-utility-controls');
  AccessibilityState.movedControls.forEach(({ element, placeholder }) => {
    if (mobile) slot?.appendChild(element);
    else placeholder.after(element);
  });
  // Rebuild isolation after moving controls so rotation cannot leave stale inert state.
  if (modalLayer) {
    modalLayer.root.classList.remove('hidden');
    activateAccessibleLayer(modalLayer.root, modalLayer.dialog, 'modal', modalLayer.opener);
  } else if (mobile && document.activeElement?.closest('[inert]')) {
    document.getElementById('sidebar-toggle')?.focus();
  }
}

function toggleSunlightMode() {
  const enabled = document.body.classList.toggle('sunlight-mode');
  document.getElementById('sunlight-toggle')?.setAttribute('aria-pressed', String(enabled));
}

function handleAccessibleKeydown(event) {
  const layer = AccessibilityState.layer;
  if (event.key === 'Escape' && layer) {
    event.preventDefault();
    closeAccessibleLayer(layer.root.id);
    return;
  }
  if (event.key === 'Tab' && layer) {
    const focusable = visibleFocusableElements(layer.dialog);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;
    if (!first) {
      event.preventDefault();
      focusLayerStart(layer);
    } else if (!focusable.includes(active)) {
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
    } else if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }
  const buttonLike = event.target.closest('[role="button"]');
  if (buttonLike && !buttonLike.matches('button, input')
    && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault();
    if (!event.repeat) buttonLike.click();
  }
  const tab = event.target.closest('[role="tab"]');
  if (tab && ['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
    event.preventDefault();
    const tabs = Array.from(tab.parentElement.querySelectorAll('[role="tab"]'));
    const direction = event.key === 'ArrowLeft' ? -1 : 1;
    const index = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1
      : (tabs.indexOf(tab) + direction + tabs.length) % tabs.length;
    tabs[index].click();
    tabs[index].focus();
  }
}

function initAccessibility() {
  AccessibilityState.mobileQuery = window.matchMedia('(max-width: 860px)');
  const controls = [document.querySelector('.header-center'),
    document.getElementById('jwrose-audio-widget'), document.getElementById('btn-toggle-voice')];
  AccessibilityState.movedControls = controls.filter(Boolean).map(element => {
    const placeholder = document.createComment('Desktop control position');
    element.before(placeholder);
    return { element, placeholder };
  });
  syncMobileLayout();
  AccessibilityState.mobileQuery.addEventListener('change', syncMobileLayout);
  document.getElementById('sidebar-scrim')?.addEventListener('click', closeSidebarDrawer);
  if (window.matchMedia('(prefers-contrast: more)').matches) toggleSunlightMode();
  document.addEventListener('keydown', handleAccessibleKeydown);
  document.addEventListener('focusin', event => {
    const layer = AccessibilityState.layer;
    if (layer && !layer.dialog.contains(event.target)) focusLayerStart(layer);
  });
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', event => {
      if (event.target === backdrop) closeAccessibleLayer(backdrop.id);
    });
  });
  document.querySelectorAll('.mode-tab').forEach(tab => {
    const mode = tab.id.replace('tab-mode-', '');
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', 'panel-' + mode);
    const panel = document.getElementById('panel-' + mode);
    panel?.setAttribute('role', 'tabpanel');
    panel?.setAttribute('aria-labelledby', tab.id);
  });
  const tablist = document.querySelector('.pedagogical-mode-tabs');
  tablist?.setAttribute('role', 'tablist');
  tablist?.setAttribute('aria-label', 'Modo de estudio');
}

// Inicialización global.
document.addEventListener('DOMContentLoaded', () => {
  initAccessibility();
  try {
    migrateAndClearLegacyKeys();
  } catch {
    console.warn('[SecureVault] El navegador no permite limpiar el almacenamiento heredado.');
  }
  initLocalPersistence();
  initializeReferenceUI();
  switchPedagogicalMode(document.getElementById('panel-' + AppState.pedagogicalMode)
    ? AppState.pedagogicalMode : 'triad');
  if (!AppState.activeModule) {
    document.getElementById('study-session-view').classList.add('hidden');
    document.getElementById('reference-welcome').classList.remove('hidden');
  }
  renderGitHubHeatmap();
  renderSubjectRadar();
  initVisualCalendar();
  initializeFsrs();
  try {
    PDFViewer.init();
  } catch (error) {
    console.error('[PDFViewer] Inicialización fallida:', error);
    const status = document.getElementById('pdf-extraction-status');
    if (status) {
      status.textContent = error.message;
      status.dataset.status = 'warning';
    }
  }
  checkAiStudioStatus();

  // Event Listeners Header
  const voiceBtn = document.getElementById('btn-toggle-voice');
  if (voiceBtn) voiceBtn.addEventListener('click', toggleVoiceInteractive);

  const audioToggleBtn = document.getElementById('btn-toggle-audio');
  if (audioToggleBtn) audioToggleBtn.addEventListener('click', toggleJwroseAudio);

  const calBadge = document.getElementById('btn-open-calendar-modal');
  if (calBadge) calBadge.addEventListener('click', () => openCalendarModal());

  const pdfChatInput = document.getElementById('pdf-chat-input');
  if (pdfChatInput) {
    pdfChatInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendPdfChatMessage();
      }
    });
  }

  console.log('🏛️ [ESTUDIO INTELIGENTE 2.0]: Suite Cognitiva Personal cargada y operativa al 100%.');
});
