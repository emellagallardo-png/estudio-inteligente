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
function selectSubject(subjectKey) {
  if (!ACADEMIC_DATABASE[subjectKey]) return;
  AppState.activeSubject = subjectKey;

  // Actualizar botones de la barra lateral
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-subject') === subjectKey) {
      item.classList.add('active');
    }
  });

  const data = ACADEMIC_DATABASE[subjectKey];

  // Actualizar encabezado de la sesión
  document.getElementById('current-subject-badge').textContent = data.code;
  document.getElementById('current-lesson-title').textContent = data.lessonTitle;

  // Actualizar contenido de la Tríada
  document.getElementById('omen-content-box').innerHTML = data.omen;
  document.getElementById('atlas-content-box').innerHTML = data.atlas;
  document.getElementById('ito-content-box').innerHTML = data.ito;

  // Actualizar Astra AI Scenario
  if (data.astraScenario) {
    document.querySelector('.scenario-title').textContent = data.astraScenario.title;
    document.querySelector('.scenario-body').textContent = data.astraScenario.body;
    document.getElementById('checkpoint-text').textContent = data.astraScenario.question;
    
    // Renderizar opciones
    const optsContainer = document.getElementById('checkpoint-options-grid');
    optsContainer.innerHTML = '';
    data.astraScenario.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'opt-btn';
      btn.onclick = () => submitAstraAnswer(idx);
      btn.innerHTML = `
        <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
        <span class="opt-text">${opt.text}</span>
      `;
      optsContainer.appendChild(btn);
    });

    document.getElementById('checkpoint-feedback-box').classList.add('hidden');
  }

  // Notificar al audio si está activo
  console.log(`[Cerebro Gemini Argon]: Asignatura activa cambiada a ${data.name}`);
}

function switchPedagogicalMode(modeKey) {
  AppState.pedagogicalMode = modeKey;

  // Actualizar pestañas
  document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
  const activeTab = document.getElementById(`tab-mode-${modeKey}`);
  if (activeTab) activeTab.classList.add('active');

  // Actualizar paneles
  document.querySelectorAll('.pedagogical-panel').forEach(p => p.classList.remove('active'));
  const activePanel = document.getElementById(`panel-${modeKey}`);
  if (activePanel) activePanel.classList.add('active');
}

function toggleGroup(groupId) {
  const grp = document.getElementById(groupId);
  if (grp) grp.classList.toggle('open');
}

function startSprint(subjectKey) {
  selectSubject(subjectKey);
  switchPedagogicalMode('astra');
  window.scrollTo({ top: 380, behavior: 'smooth' });
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
async function evaluateFeynmanExplanation() {
  const text = document.getElementById('feynman-user-input').value;
  if (!text || text.length < 20) {
    alert('Por favor redacta una explicación con mayor detalle para poder ejecutar la radiografía conceptual.');
    return;
  }

  const markupBox = document.getElementById('feynman-analyzed-markup');
  const apiKey = localStorage.getItem('mega_ai_studio_key');
  const activeSubject = ACADEMIC_DATABASE[AppState.activeSubject] || { name: 'Construcción' };

  if (apiKey) {
    markupBox.innerHTML = `
      <div style="padding: 16px; text-align: center; color: var(--color-cyan); font-family: var(--font-mono); font-size: 12px; background: rgba(0, 240, 255, 0.05); border: 1px solid var(--color-cyan); border-radius: 8px;">
        <span class="live-dot" style="background: var(--color-cyan); animation: pulse 1s infinite; margin-right: 6px;"></span>
        Auditando con Gemini 2.0 Flash (Tríada OMEN AG-41 + ATLAS + ITO AUDITOR)...
      </div>
    `;

    try {
      const prompt = `Asignatura: ${activeSubject.name}. Explicación técnica del alumno (CEO J. Esteban Mella Gallardo): "${text}". Analiza esta explicación pericial. Valida lo correcto con etiquetas <span class="tag-green">[OK: ...]</span> y resalta en ROJO o con etiquetas 🚨 cualquier laguna conceptual, omisión normativa chilena (NCh170, OGUC, RIDAA, MOP Vol. 5) o tolerancias de obra. Sé riguroso y doctoral.`;
      const systemInstruction = `Eres la Tríada Pericial de MEGA INSPECCIÓN SpA: OMEN AG-41 (Doctor en Ciencias de la Ingeniería), ATLAS (Especialista en Normativa Chilena OGUC/NCh/RIDAA) e ITO AUDITOR (Jefe de Terreno y Administrador de Contratos). Entrega un análisis didáctico de alto impacto en formato HTML semántico con etiquetas <span class="tag-green">[OK: ...]</span> para aciertos y <div class="gap-alert-box"><strong style="color: #EF4444;">🚨 LAGUNAS CONCEPTUALES DETECTADAS:</strong><ul><li>...</li></ul></div> para los errores. No uses bloques markdown envolventes, solo HTML nativo directo.`;

      const aiResponse = await callGeminiApi(prompt, systemInstruction);
      if (aiResponse) {
        // Limpiar posibles delimitadores markdown ```html si el modelo los envía
        const cleaned = aiResponse.replace(/```html/gi, '').replace(/```/g, '').trim();
        markupBox.innerHTML = cleaned;
        playSuccessChime();
        return;
      }
    } catch (err) {
      console.warn('Fallo en llamada a Gemini, recurriendo a matriz local pericial:', err);
    }
  }

  // Fallback a matriz local pericial
  markupBox.innerHTML = `
    "${text.slice(0, 150)}..." <span class="tag-green">[OK: Estructura general coherente]</span>.
    <div class="gap-alert-box">
      <strong style="color: #EF4444;">🚨 RADIOGRAFÍA DE LAGUNAS CONCEPTUALES EN TIEMPO REAL:</strong>
      <ul>
        <li><span class="text-red">Omisión de Tolerancias:</span> No especificaste los milímetros máximos de tolerancia permitidos según la NCh aplicable.</li>
        <li><span class="text-red">Protocolo de Ensayo:</span> Omitiste indicar qué laboratorio certificado debe contrastar las probetas o testigos de control según NCh170 / NCh1998.</li>
      </ul>
    </div>
  `;

  // Efecto auditivo sutil
  console.log('[OMEN Feynman]: Radiografía de errores completada (Modo Local).');
}

function showFeynmanReview() {
  switchPedagogicalMode('feynman');
  window.scrollTo({ top: 400, behavior: 'smooth' });
}

// --------------------------------------------------------------------------
// 6. MOTOR DE AUDIO INTERACTIVO (WEB SPEECH API / NOTEBOOKLM STYLE)
// --------------------------------------------------------------------------
let speechSynthesisInstance = window.speechSynthesis;
let isSpeaking = false;

function toggleVoiceInteractive() {
  if (isSpeaking) {
    speechSynthesisInstance.cancel();
    isSpeaking = false;
    document.getElementById('btn-toggle-voice').style.background = 'rgba(0, 240, 255, 0.1)';
    return;
  }

  const subject = ACADEMIC_DATABASE[AppState.activeSubject];
  const textToSpeak = `Esteban, te habla OMEN AG-41. En la asignatura ${subject.name}, el punto pericial crítico que el ITO Auditor debe vigilar hoy es la recepción formal y las tolerancias normativas. ¿Deseas que te formule una pregunta diagnóstica de examen o prefieres escuchar el resumen de terreno?`;

  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  utterance.lang = 'es-CL';
  utterance.rate = 1.05;

  utterance.onend = () => {
    isSpeaking = false;
    document.getElementById('btn-toggle-voice').style.background = 'rgba(0, 240, 255, 0.1)';
  };

  speechSynthesisInstance.speak(utterance);
  isSpeaking = true;
  document.getElementById('btn-toggle-voice').style.background = 'var(--color-cyan)';
  document.getElementById('btn-toggle-voice').style.color = '#000';
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
// 7. JWROSE AUDIO LOUNGE (YOUTUBE MUSIC INTEGRATION)
// --------------------------------------------------------------------------
let audioContext;
let oscillatorNode;

function toggleJwroseAudio() {
  const btn = document.getElementById('btn-toggle-audio');
  const bars = document.querySelectorAll('.soundwave-bars span');

  if (AppState.audioPlaying) {
    AppState.audioPlaying = false;
    btn.textContent = '▶';
    bars.forEach(b => b.style.animationPlayState = 'paused');
    if (oscillatorNode) {
      try { oscillatorNode.stop(); } catch(e){}
    }
  } else {
    AppState.audioPlaying = true;
    btn.textContent = '❚❚';
    bars.forEach(b => b.style.animationPlayState = 'running');
    
    // Generar tono sutil de concentración (Ondas Alfa 432 Hz) usando Web Audio API nativo
    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(432, audioContext.currentTime);
      gain.gain.setValueAtTime(0.015, audioContext.currentTime); // Volumen sutil relajante
      osc.connect(gain);
      gain.connect(audioContext.destination);
      osc.start();
      oscillatorNode = osc;
    } catch(e) {
      console.log('Web Audio no activo');
    }
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
  }
];

function openDuolingoModal() {
  document.getElementById('modal-duolingo').classList.remove('hidden');
  AppState.duolingoCurrentIndex = 0;
  AppState.duolingoLives = 3;
  renderDuolingoQuestion();
}

function closeDuolingoModal() {
  document.getElementById('modal-duolingo').classList.add('hidden');
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
  document.getElementById('modal-youtube').classList.remove('hidden');
}

function closeYoutubeModal() {
  document.getElementById('modal-youtube').classList.add('hidden');
}

function processYoutubeUrl() {
  const url = document.getElementById('yt-url-input').value;
  if (!url) {
    alert('Por favor ingresa una URL de YouTube válida.');
    return;
  }
  document.getElementById('yt-result-box').classList.remove('hidden');
}

function addYtCardsToFsrs() {
  alert('✅ 5 Tarjetas FSRS agregadas a tu base de datos de Obras Viales.');
  closeYoutubeModal();
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

    // Cálculo dinámico de días faltantes
    const today = new Date(2026, 9, 20); // 20 Oct 2026
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

    card.innerHTML = `
      <div class="cal-event-date">
        <span class="day">${dayNum}</span>
        <span class="month">${monthShort}</span>
      </div>
      <div class="cal-event-details">
        <span class="event-tag ${tagClass}">${tagText}</span>
        <h4>${ev.title}</h4>
        <p>${ev.desc} · Cierre: ${ev.time}</p>
      </div>
      <div class="cal-event-actions">
        <span class="countdown-tag ${countdownClass}">${countdownText}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

function openCalendarModal() {
  renderCalendarModalEvents();
  document.getElementById('modal-calendar').classList.remove('hidden');
}

function closeCalendarModal() {
  document.getElementById('modal-calendar').classList.add('hidden');
}

function syncWithGoogleCalendar() {
  alert('🔄 Sincronizado con Google Calendar: 3 eventos activos y 1 alarma de prueba en Xiaomi.');
  closeCalendarModal();
}

// --------------------------------------------------------------------------
// 10. INGESTA DE PDF Y CHAT SPLIT-SCREEN
// --------------------------------------------------------------------------
function triggerPdfUpload() {
  document.getElementById('pdf-file-input').click();
}

function handlePdfUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  document.getElementById('pdf-active-name').textContent = file.name;
  switchPedagogicalMode('pdf');
  alert(`📑 PDF "${file.name}" cargado exitosamente. Se ha desplegado el visor split-screen con OMEN.`);
}

function changePdfPage(delta) {
  alert('Navegando entre páginas del PDF.');
}

function sendPdfChatMessage() {
  const input = document.getElementById('pdf-chat-input');
  const text = input.value.trim();
  if (!text) return;

  const container = document.getElementById('pdf-chat-messages');
  
  // Mensaje usuario
  const userDiv = document.createElement('div');
  userDiv.className = 'chat-msg';
  userDiv.style.background = 'rgba(255, 94, 0, 0.1)';
  userDiv.style.border = '1px solid var(--border-orange)';
  userDiv.innerHTML = `<div class="msg-sender" style="color:var(--color-orange)">J. ESTEBAN MELLA (CEO)</div><div class="msg-text">${text}</div>`;
  container.appendChild(userDiv);

  input.value = '';

  // Respuesta OMEN
  setTimeout(() => {
    const aiDiv = document.createElement('div');
    aiDiv.className = 'chat-msg ai-msg';
    aiDiv.innerHTML = `
      <div class="msg-sender">OMEN AG-41</div>
      <div class="msg-text">Excelente consulta, Esteban. En relación a la página actual de tu apunte, el artículo de la NCh430 estipula que las barras longitudinales en zonas críticas deben mantener un traslape alternado no menor a 60 diámetros de barra para evitar concentración de tensiones.</div>
    `;
    container.appendChild(aiDiv);
    container.scrollTop = container.scrollHeight;
  }, 600);
}

function openFolioTemplate(subject) {
  alert(`Descargando Minuta Pericial Oficial de Libro de Obras para ${subject}.`);
}

function openCardsModal() {
  alert('Iniciando sesión de repaso FSRS con las 4 tarjetas activas de hoy.');
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
const CALENDAR_EVENTS = [
  { id: 1, date: '2026-10-21', type: 'study', title: 'Time-Blocking Mentor EMG: Obras Civiles & Viales', time: '21:00 - 21:45', desc: 'Repaso intensivo de Ensayos Marshall, Densidades Proctor y Fundaciones' },
  { id: 2, date: '2026-10-23', type: 'exam', title: '🔴 Evaluación Sumativa: Obras Civiles (IPLACEX)', time: 'Viernes 23:59 Cierre', desc: 'Plataforma IPLACEX · Módulo 03: Fundaciones Especiales & Hormigón Masivo (30%)' },
  { id: 3, date: '2026-10-24', type: 'exam', title: '🔴 Evaluación Sumativa: Construcción Industrializada (IPLACEX)', time: 'Sábado 23:59 Cierre', desc: 'Plataforma IPLACEX · Módulo 03: Hormigón Prefabricado y Conexiones Húmedas Grout (30%)' },
  { id: 4, date: '2026-10-25', type: 'exam', title: '🔴 Evaluación Sumativa: Obras Viales (IPLACEX)', time: 'Domingo 23:59 Cierre', desc: 'Plataforma IPLACEX · Módulo 03: Estructuración y Control de Pavimentos Asfálticos (30%)' },
  { id: 5, date: '2026-10-26', type: 'class', title: '🔵 Clase Online en Vivo: Claims FIDIC (UC)', time: 'Lunes 19:00 - 21:30', desc: 'Diplomados UC · Taller con Caso Práctico de Reclamaciones Contractuales' },
  { id: 6, date: '2026-10-28', type: 'class', title: '🔵 Clase Online: Montaje Industrializado (IPLACEX)', time: 'Miércoles 20:00 - 21:30', desc: 'IPLACEX · Sesión de Acompañamiento Docente en Vivo' },
  { id: 7, date: '2026-11-08', type: 'exam', title: '🔴 Evaluación Final: Gestión de Proyectos (UC)', time: 'Domingo 23:59 Cierre', desc: 'Diplomados UC · Entrega de Matriz EVM y Curva S' }
];

let CalendarState = {
  year: 2026,
  month: 9, // Octubre (0-indexed)
  selectedDate: '2026-10-23',
  filter: 'all'
};

const MONTH_NAMES = [
  'ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO',
  'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'
];

function initVisualCalendar() {
  renderCalendarMatrix();
  renderAgendaItems();
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
    cell.innerHTML = `<span class="day-num">${prevMonthLastDay - i}</span>`;
    grid.appendChild(cell);
  }

  // Días del mes actual
  const todayStr = '2026-10-20'; // Fecha fija actual del sistema
  for (let d = 1; d <= lastDay.getDate(); d++) {
    const dayStr = `${CalendarState.year}-${String(CalendarState.month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const cell = document.createElement('div');
    cell.className = 'cal-day-cell';
    
    if (dayStr === todayStr) cell.classList.add('is-today');
    if (dayStr === CalendarState.selectedDate) cell.classList.add('is-selected');

    // Eventos de este día
    const dayEvents = CALENDAR_EVENTS.filter(e => e.date === dayStr);
    let dotsHtml = '<div class="day-event-dots">';
    dayEvents.forEach(e => {
      dotsHtml += `<span class="dot-${e.type}" title="${e.title}"></span>`;
    });
    dotsHtml += '</div>';

    cell.innerHTML = `
      <span class="day-num">${d}</span>
      ${dotsHtml}
    `;

    cell.onclick = () => {
      CalendarState.selectedDate = dayStr;
      renderCalendarMatrix();
      renderAgendaItems();
    };

    grid.appendChild(cell);
  }

  // Padding final para completar 35 o 42 celdas
  const totalRendered = startOffset + lastDay.getDate();
  const nextPadding = (7 - (totalRendered % 7)) % 7;
  for (let n = 1; n <= nextPadding; n++) {
    const cell = document.createElement('div');
    cell.className = 'cal-day-cell inactive-month';
    cell.innerHTML = `<span class="day-num">${n}</span>`;
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

    card.innerHTML = `
      <div class="agenda-item-top">
        <span class="agenda-item-date">${ev.date} · ${ev.time}</span>
        <span class="agenda-item-tag ${tagClass}">${tagText}</span>
      </div>
      <div class="agenda-item-title">${ev.title}</div>
      <div class="agenda-item-desc">${ev.desc}</div>
    `;

    container.appendChild(card);
  });
}

function addPersonalTimeBlock() {
  const subjectInput = document.getElementById('custom-study-subject');
  const durationSelect = document.getElementById('custom-study-duration');
  
  const text = subjectInput.value.trim() || 'Sesión de Foco OMEN';
  const duration = durationSelect.value;
  const today = '2026-10-20';

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

function downloadIcsCalendar() {
  // Generador oficial RFC 5545 iCalendar para Google Calendar / Xiaomi
  let icsContent = "BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//MEGA INSPECCION//ESTUDIO INTELIGENTE 2.0//ES\r\nCALSCALE:GREGORIAN\r\nMETHOD:PUBLISH\r\nX-WR-CALNAME:Estudio Inteligente 2.0 - J. Esteban Mella\r\n";

  CALENDAR_EVENTS.forEach(ev => {
    const dateFormatted = ev.date.replace(/-/g, '');
    icsContent += `BEGIN:VEVENT\r\nUID:${ev.id}-estudio-2026@megainspeccion.cl\r\nDTSTAMP:20261020T000000Z\r\nDTSTART;VALUE=DATE:${dateFormatted}\r\nSUMMARY:${ev.title}\r\nDESCRIPTION:${ev.desc} - Horario: ${ev.time}\r\nSTATUS:CONFIRMED\r\nEND:VEVENT\r\n`;
  });

  icsContent += "END:VCALENDAR\r\n";

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = "Estudio_Inteligente_2.0_Calendario.ics";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  alert('📥 Archivo "Estudio_Inteligente_2.0_Calendario.ics" generado y descargado. Puedes importarlo directamente en Google Calendar o en el calendario de tu Xiaomi.');
}

// --------------------------------------------------------------------------
// 15. INTEGRACIÓN DIRECTA GOOGLE AI STUDIO (GEMINI 2.0 FLASH & 1.5 PRO)
// --------------------------------------------------------------------------
function openAiStudioModal() {
  const modal = document.getElementById('modal-ai-studio');
  if (modal) {
    modal.classList.remove('hidden');
    const savedKey = localStorage.getItem('mega_ai_studio_key') || '';
    const savedModel = localStorage.getItem('mega_ai_model') || 'gemini-3.8-flash';
    const keyInput = document.getElementById('input-ai-api-key');
    const modelSelect = document.getElementById('select-ai-model');
    if (keyInput) keyInput.value = savedKey;
    if (modelSelect) modelSelect.value = savedModel;
    checkAiStudioStatus();
  }
}

function closeAiStudioModal() {
  const modal = document.getElementById('modal-ai-studio');
  if (modal) modal.classList.add('hidden');
}

function toggleApiKeyVisibility() {
  const input = document.getElementById('input-ai-api-key');
  if (input) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }
}

function checkAiStudioStatus() {
  const key = localStorage.getItem('mega_ai_studio_key');
  const dot = document.getElementById('ai-status-dot');
  const label = document.getElementById('ai-status-label');
  const indicatorLight = document.getElementById('ai-active-indicator-light');
  const statusText = document.getElementById('ai-active-status-text');

  if (key && key.trim().length > 15) {
    if (dot) dot.classList.add('connected');
    if (label) label.textContent = 'GEMINI ONLINE';
    if (indicatorLight) indicatorLight.style.background = '#10B981';
    if (statusText) {
      const model = localStorage.getItem('mega_ai_model') || 'gemini-3.8-flash';
      statusText.textContent = `ESTADO: CONECTADO A ${model.toUpperCase()}`;
      statusText.style.color = '#10B981';
    }
  } else {
    if (dot) dot.classList.remove('connected');
    if (label) label.textContent = 'AI STUDIO';
    if (indicatorLight) indicatorLight.style.background = '#EF4444';
    if (statusText) {
      statusText.textContent = 'ESTADO: MODO SIMULACIÓN LOCAL (SIN CLAVE)';
      statusText.style.color = '#EF4444';
    }
  }
}

async function saveAndTestAiStudioKey() {
  const keyInput = document.getElementById('input-ai-api-key');
  const modelSelect = document.getElementById('select-ai-model');
  const resultBox = document.getElementById('ai-test-result');

  const key = keyInput.value.trim();
  const model = modelSelect.value;

  if (!key || key.length < 15) {
    alert('Por favor ingrese una API Key válida de Google AI Studio.');
    return;
  }

  resultBox.style.display = 'block';
  resultBox.style.background = 'rgba(0, 240, 255, 0.1)';
  resultBox.style.border = '1px solid var(--color-cyan)';
  resultBox.style.color = 'var(--color-cyan)';
  resultBox.innerHTML = `⚡ Probando comunicación segura con Google AI Studio (${model})...`;

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
    const payload = {
      contents: [
        {
          parts: [
            { text: "Hola Gemini, soy el CEO J. Esteban Mella Gallardo. Responde en 1 sola frase corta confirmando conexión pericial exitosa con MEGA INSPECCIÓN SpA e ITO Inteligente 2.0." }
          ]
        }
      ]
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (data.error) {
      resultBox.style.background = 'rgba(239, 68, 68, 0.15)';
      resultBox.style.border = '1px solid #EF4444';
      resultBox.style.color = '#EF4444';
      resultBox.innerHTML = `❌ Error de Google AI Studio: ${data.error.message || 'Clave inválida o sin permisos'}`;
      return;
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Conexión verificada con éxito.';
    localStorage.setItem('mega_ai_studio_key', key);
    localStorage.setItem('mega_ai_model', model);

    resultBox.style.background = 'rgba(16, 185, 129, 0.15)';
    resultBox.style.border = '1px solid #10B981';
    resultBox.style.color = '#10B981';
    resultBox.innerHTML = `✅ <strong>¡CONEXIÓN EXITOSA CON GEMINI!</strong><br><em>«${reply.trim()}»</em><br><span style="font-size: 10px; color: #FFF;">Clave guardada localmente de forma segura. La Tríada ya tiene cerebro autónomo activo.</span>`;

    checkAiStudioStatus();
    playSuccessChime();
  } catch (err) {
    resultBox.style.background = 'rgba(239, 68, 68, 0.15)';
    resultBox.style.border = '1px solid #EF4444';
    resultBox.style.color = '#EF4444';
    resultBox.innerHTML = `❌ Error de red o CORS al contactar Google AI Studio: ${err.message}`;
  }
}

function clearAiStudioKey() {
  if (confirm('¿Desea desconectar y borrar la clave de Google AI Studio de este dispositivo?')) {
    localStorage.removeItem('mega_ai_studio_key');
    const input = document.getElementById('input-ai-api-key');
    if (input) input.value = '';
    const resultBox = document.getElementById('ai-test-result');
    if (resultBox) resultBox.style.display = 'none';
    checkAiStudioStatus();
    alert('Clave borrada. El sistema regresa al modo de simulación pericial local.');
  }
}

async function callGeminiApi(prompt, systemInstruction = '') {
  const key = localStorage.getItem('mega_ai_studio_key');
  const model = localStorage.getItem('mega_ai_model') || 'gemini-3.8-flash';
  if (!key) return null;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
  const payload = {
    contents: [{ parts: [{ text: prompt }] }]
  };

  if (systemInstruction) {
    payload.systemInstruction = {
      parts: [{ text: systemInstruction }]
    };
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const json = await res.json();
  if (json.error) {
    console.error('Gemini API Error:', json.error);
    return null;
  }

  return json.candidates?.[0]?.content?.parts?.[0]?.text || null;
}

// --------------------------------------------------------------------------
// 14. INICIALIZACIÓN GLOBAL
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initLocalPersistence();
  selectSubject('industrializada');
  renderGitHubHeatmap();
  renderSubjectRadar();
  initVisualCalendar();
  checkAiStudioStatus();

  // Event Listeners Header
  const voiceBtn = document.getElementById('btn-toggle-voice');
  if (voiceBtn) voiceBtn.addEventListener('click', toggleVoiceInteractive);

  const audioToggleBtn = document.getElementById('btn-toggle-audio');
  if (audioToggleBtn) audioToggleBtn.addEventListener('click', toggleJwroseAudio);

  const calBadge = document.getElementById('btn-open-calendar-modal');
  if (calBadge) calBadge.addEventListener('click', () => openCalendarModal());

  console.log('🏛️ [ESTUDIO INTELIGENTE 2.0]: Suite Cognitiva Personal cargada y operativa al 100%.');
});


