/**
 * ESTUDIO INTELIGENTE 2.0 · DIVISIÓN DE SOFTWARE & CONTECH
 * CONTROLADOR DE INTERFAZ: MÓDULO NOTAS DE ESTUDIO (5 PESTAÑAS)
 * Autoridad: J. Esteban Mella Gallardo · CEO & Jefe de ITO
 * Arquitectura: OMEN AG-41 + Mentor EMG + Agente MEGA 2.0
 */

(function () {
  'use strict';

  // ESTADO INTERNO DEL MÓDULO
  const NotesState = {
    activeTab: 'tab-notes', // 'tab-notes' | 'tab-audios' | 'tab-english' | 'tab-quiz' | 'tab-forum'
    activeTag: 'all',
    searchQuery: '',
    audioFilter: 'all', // 'all' | 'professor' | 'esteban'
    currentPlayingAudio: null,
    audioIntervals: {},
    audioPlaybacks: {},
    englishViewMode: 'flashcards', // 'flashcards' | 'table'
    activeCardIndex: 0,
    flippedCards: {},
    quizAnswers: {}, // { qId: [selectedIndices] }
    quizSubmitted: {}, // { qId: boolean }
    quizScore: 0
  };

  // INICIALIZACIÓN AL CARGAR EL DOM
  function initStudyNotes() {
    renderStudyNotesContainer();
    setupEventListeners();
  }

  // ABRIR O CONMUTAR A LA VISTA DE NOTAS DE ESTUDIO
  window.openStudyNotesView = function () {
    const welcomeSec = document.getElementById('reference-welcome');
    const sessionView = document.getElementById('study-session-view');
    const notesView = document.getElementById('view-study-notes');

    if (welcomeSec) welcomeSec.classList.add('hidden');
    if (sessionView) sessionView.classList.add('hidden');
    if (notesView) {
      notesView.classList.remove('hidden');
      notesView.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Actualizar botón activo en navbar si existe
    document.querySelectorAll('.nav-btn-highlight').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById('btn-nav-study-notes');
    if (btn) btn.classList.add('active');
  };

  // CERRAR O VOLVER AL DASHBOARD GENERAL
  window.closeStudyNotesView = function () {
    const notesView = document.getElementById('view-study-notes');
    const sessionView = document.getElementById('study-session-view');
    if (notesView) notesView.classList.add('hidden');
    if (sessionView) sessionView.classList.remove('hidden');
  };

  // RENDERIZADO DEL CONTENEDOR PRINCIPAL
  function renderStudyNotesContainer() {
    const mainViewport = document.querySelector('.workspace-viewport');
    if (!mainViewport) return;

    let notesView = document.getElementById('view-study-notes');
    if (!notesView) {
      notesView = document.createElement('div');
      notesView.id = 'view-study-notes';
      notesView.className = 'study-notes-view hidden';
      // Insertar después del Decision Hero Grid
      const heroGrid = document.querySelector('.decision-hero-grid');
      if (heroGrid && heroGrid.nextSibling) {
        mainViewport.insertBefore(notesView, heroGrid.nextSibling);
      } else {
        mainViewport.appendChild(notesView);
      }
    }

    const data = window.STUDY_NOTES_DATA || {};
    const curr = data.curriculum || {};

    notesView.innerHTML = `
      <!-- ENCABEZADO TÁCTICO & SELECTOR JERÁRQUICO -->
      <div class="notes-header-card">
        <div class="notes-header-top">
          <div class="notes-breadcrumb">
            <span class="badge-diploma">🏛️ DIPLOMADO UC</span>
            <span class="breadcrumb-sep">▸</span>
            <span class="breadcrumb-item">${curr.course}</span>
            <span class="breadcrumb-sep">▸</span>
            <span class="breadcrumb-active">${curr.lesson}</span>
          </div>
          <div class="notes-header-actions">
            <button type="button" class="btn-micro-folio" onclick="openStudyNotesView()">⚡ RECARGAR NOTAS</button>
            <button type="button" class="btn-close-modal" aria-label="Volver al panel general" onclick="closeStudyNotesView()">✕</button>
          </div>
        </div>

        <div class="notes-meta-row">
          <div>
            <h2 class="notes-main-title">NOTAS DE ESTUDIO · DOCTRINA Y CONTRATOS</h2>
            <p class="notes-sub-title">Cátedra Oficial: <strong>${curr.professor}</strong> | <strong>${curr.hours}</strong> | Versión Certificada <strong>${curr.version}</strong></p>
          </div>
          <!-- Selector Jerárquico Escalable -->
          <div class="notes-hierarchical-selector">
            <label class="sr-only" for="selector-clase-uc">Seleccionar Clase</label>
            <select id="selector-clase-uc" class="hierarchy-select" onchange="handleClassChange(this.value)">
              <option value="clase-3" selected>📚 Clase 3: El Contrato y Modalidades (Activa)</option>
              <option value="clase-1">Clase 1: Introducción a la Estrategia Contractual</option>
              <option value="clase-2">Clase 2: Asignación de Riesgos & Bases</option>
              <option value="clase-4">Clase 4: Ejecución, Claims y Término de Contrato</option>
            </select>
          </div>
        </div>

        <!-- 5 PESTAÑAS DE NAVEGACIÓN INTERACTIVA -->
        <nav class="notes-tabs-bar" role="tablist" aria-label="Módulos de la Clase 3">
          <button type="button" class="notes-tab-btn active" role="tab" id="btn-tab-notes" aria-selected="true" onclick="switchNotesTab('tab-notes')">
            <span class="tab-icon">📖</span> Mis Notas (Lectura)
          </button>
          <button type="button" class="notes-tab-btn" role="tab" id="btn-tab-audios" aria-selected="false" onclick="switchNotesTab('tab-audios')">
            <span class="tab-icon">🎙️</span> Énfasis del Profesor & Terreno
          </button>
          <button type="button" class="notes-tab-btn" role="tab" id="btn-tab-english" aria-selected="false" onclick="switchNotesTab('tab-english')">
            <span class="tab-icon">🇬🇧</span> Inglés Técnico & ConTech
          </button>
          <button type="button" class="notes-tab-btn" role="tab" id="btn-tab-quiz" aria-selected="false" onclick="switchNotesTab('tab-quiz')">
            <span class="tab-icon">🎯</span> Simulador Quiz UC (14 Preguntas)
          </button>
          <button type="button" class="notes-tab-btn" role="tab" id="btn-tab-forum" aria-selected="false" onclick="switchNotesTab('tab-forum')">
            <span class="tab-icon">💬</span> Laboratorio de Foro (ERNC)
          </button>
        </nav>
      </div>

      <!-- CONTENEDOR DE PANELES DE CONTENIDO -->
      <div class="notes-tab-content-wrapper">
        <!-- PESTAÑA 1: MIS NOTAS -->
        <section class="notes-tab-panel active" id="panel-tab-notes" role="tabpanel">
          ${renderNotesTabHtml(data.notes || [])}
        </section>

        <!-- PESTAÑA 2: ÉNFASIS DEL PROFESOR Y TERRENO -->
        <section class="notes-tab-panel hidden" id="panel-tab-audios" role="tabpanel">
          ${renderAudiosTabHtml(data.audios || [])}
        </section>

        <!-- PESTAÑA 3: INGLÉS TÉCNICO CONTRACTUAL & CONTECH -->
        <section class="notes-tab-panel hidden" id="panel-tab-english" role="tabpanel">
          ${renderEnglishTabHtml(data.glossary || [])}
        </section>

        <!-- PESTAÑA 4: SIMULADOR DE QUIZ UC -->
        <section class="notes-tab-panel hidden" id="panel-tab-quiz" role="tabpanel">
          ${renderQuizTabHtml(data.questions || [])}
        </section>

        <!-- PESTAÑA 5: LABORATORIO DE FORO -->
        <section class="notes-tab-panel hidden" id="panel-tab-forum" role="tabpanel">
          ${renderForumTabHtml(data.forum || {})}
        </section>
      </div>
    `;
  }

  // ==========================================================================
  // RENDER PESTAÑA 1: MIS NOTAS (LECTURA ESTRUCTURADA CON FILTROS)
  // ==========================================================================
  function renderNotesTabHtml(notes) {
    const allTags = [
      '#Clasificacion',
      '#Prelacion',
      '#Modalidades',
      '#Asociatividad',
      '#Figura1',
      '#Incentivos',
      '#EPCM',
      '#ProjectFinance',
      '#ConcesionesBOT'
    ];

    const tagFiltersHtml = allTags
      .map(tag => `<button type="button" class="tag-filter-pill ${NotesState.activeTag === tag ? 'active' : ''}" onclick="filterNotesByTag('${tag}')">${tag}</button>`)
      .join(' ');

    const cardsHtml = notes
      .map((note, idx) => {
        const isVisible = NotesState.activeTag === 'all' || note.tags.includes(NotesState.activeTag);
        return `
          <div class="collapsible-note-card ${isVisible ? '' : 'hidden'}" id="${note.id}">
            <div class="note-card-header" onclick="toggleNoteCard('${note.id}')">
              <div class="note-card-title-group">
                <span class="note-number-badge">${idx + 1}</span>
                <h3 class="note-card-title">${note.section}</h3>
              </div>
              <div class="note-card-meta">
                <div class="note-tags-row">
                  ${note.tags.map(t => `<span class="note-tag">${t}</span>`).join('')}
                </div>
                <span class="note-chevron" id="chevron-${note.id}">▾</span>
              </div>
            </div>
            <div class="note-card-summary">
              <p>${note.summary}</p>
            </div>
            <div class="note-card-body open" id="body-${note.id}">
              ${note.content}
            </div>
          </div>
        `;
      })
      .join('');

    return `
      <div class="notes-toolbar">
        <div class="search-input-wrapper">
          <span class="search-icon">🔍</span>
          <input type="text" id="notes-search-field" class="notes-search-input" placeholder="Buscar en apuntes (#EPCM, BOT, Prelación, Cláusulas...)" onkeyup="handleNotesSearch(this.value)">
        </div>
        <div class="notes-tag-filters">
          <button type="button" class="tag-filter-pill ${NotesState.activeTag === 'all' ? 'active' : ''}" onclick="filterNotesByTag('all')">Todos</button>
          ${tagFiltersHtml}
        </div>
      </div>
      <div class="notes-cards-container" id="notes-cards-list">
        ${cardsHtml}
      </div>
    `;
  }

  // ==========================================================================
  // RENDER PESTAÑA 2: ÉNFASIS DEL PROFESOR & AUDIOS DE TERRENO
  // ==========================================================================
  function renderAudiosTabHtml(audios) {
    const cardsHtml = audios
      .map((audio, idx) => {
        const isVisible =
          NotesState.audioFilter === 'all' ||
          (NotesState.audioFilter === 'professor' && audio.sourceType === 'professor') ||
          (NotesState.audioFilter === 'esteban' && audio.sourceType === 'esteban');

        const isProfessor = audio.sourceType === 'professor';

        return `
          <div class="audio-emphasis-card ${isProfessor ? 'source-professor' : 'source-esteban'} ${isVisible ? '' : 'hidden'}" id="${audio.id}">
            <div class="audio-card-topbar">
              <div class="audio-author-info">
                <span class="author-avatar">${isProfessor ? '🎓' : '👷'}</span>
                <div>
                  <span class="author-name">${audio.authorName}</span>
                  <span class="author-role">${audio.authorRole}</span>
                </div>
              </div>
              <div class="audio-badges">
                <span class="badge-priority">${audio.badge}</span>
                <span class="audio-duration">⏱️ ${audio.duration}</span>
              </div>
            </div>

            <h3 class="audio-card-title">${audio.title}</h3>
            <p class="audio-card-summary">${audio.summary}</p>

            <!-- SIMULADOR DE REPRODUCTOR DE AUDIO PERICIAL -->
            <div class="audio-player-box">
              <div class="player-controls">
                <button type="button" class="btn-play-pause" id="play-btn-${audio.id}" onclick="togglePlayAudio('${audio.id}')" aria-label="Reproducir audio">
                  ▶
                </button>
                <div class="audio-timeline-wrapper">
                  <div class="audio-timeline-track">
                    <div class="audio-timeline-fill" id="fill-${audio.id}"></div>
                  </div>
                  <div class="audio-time-row">
                    <span id="time-cur-${audio.id}">00:00</span>
                    <span id="time-tot-${audio.id}">${audio.duration}</span>
                  </div>
                </div>
                <div class="audio-speed-selector">
                  <button type="button" class="btn-speed active" onclick="setAudioSpeed('${audio.id}', 1.0)">1x</button>
                  <button type="button" class="btn-speed" onclick="setAudioSpeed('${audio.id}', 1.5)">1.5x</button>
                  <button type="button" class="btn-speed" onclick="setAudioSpeed('${audio.id}', 2.0)">2x</button>
                </div>
              </div>
              <!-- Animación de onda sonora cuando esté en reproducción -->
              <div class="soundwave-bar hidden" id="wave-${audio.id}">
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
              </div>
            </div>

            <!-- TRANSCRIPCIÓN LITERAL CON ENFOQUE PEDAGÓGICO -->
            <div class="audio-transcript-container">
              <div class="transcript-header">
                <span class="transcript-label">Transcripción Literal Verificada:</span>
                <button type="button" class="btn-copy-mini" onclick="copyAudioText('${audio.id}')">Copiar Texto</button>
              </div>
              <blockquote class="audio-literal-quote">
                ${audio.literalText}
              </blockquote>
            </div>

            <!-- APORTE PERICIAL ITO / REFLEXIÓN DE TERRENO -->
            <div class="ito-insight-box">
              <span class="insight-label">🔬 Veredicto y Experiencia de Terreno ITO (J. Esteban Mella):</span>
              <p>${audio.itoFieldInsight}</p>
            </div>
          </div>
        `;
      })
      .join('');

    return `
      <div class="audios-toolbar">
        <div class="audios-filter-pills">
          <span class="filter-caption">Filtrar por Emisor:</span>
          <button type="button" class="filter-pill ${NotesState.audioFilter === 'all' ? 'active' : ''}" onclick="filterAudios('all')">Todos los Audios (8)</button>
          <button type="button" class="filter-pill ${NotesState.audioFilter === 'professor' ? 'active' : ''}" onclick="filterAudios('professor')">🎓 Cátedra Prof. Germán Millán</button>
          <button type="button" class="filter-pill ${NotesState.audioFilter === 'esteban' ? 'active' : ''}" onclick="filterAudios('esteban')">👷 Experiencia ITO Terreno (CEO EMG)</button>
        </div>
      </div>
      <div class="audios-list-container">
        ${cardsHtml}
      </div>
    `;
  }

  // ==========================================================================
  // RENDER PESTAÑA 3: INGLÉS TÉCNICO CONTRACTUAL & CONTECH
  // ==========================================================================
  function renderEnglishTabHtml(glossary) {
    const isFlashcards = NotesState.englishViewMode === 'flashcards';

    // RENDER MODO FLIP FLASHCARDS
    const flashcardsHtml = glossary
      .map((item, idx) => {
        const isFlipped = NotesState.flippedCards[item.id] ? 'flipped' : '';
        return `
          <div class="flip-card-wrapper" onclick="toggleCardFlip('${item.id}')" title="Haz clic para voltear tarjeta">
            <div class="flip-card-inner ${isFlipped}" id="card-inner-${item.id}">
              <!-- CARA FRONTAL -->
              <div class="flip-card-front">
                <div class="card-front-header">
                  <span class="contech-flag">🇬🇧</span>
                  <span class="card-step-num">Término ${idx + 1} de ${glossary.length}</span>
                </div>
                <h3 class="card-front-term">${item.term}</h3>
                <p class="card-front-etymology"><em>${item.etymology}</em></p>
                <div class="flip-cue">
                  <span>🔄 Clic para girar y ver significado UC & Alerta</span>
                </div>
              </div>

              <!-- CARA POSTERIOR -->
              <div class="flip-card-back">
                <div class="card-back-header">
                  <span class="back-term-title">${item.term}</span>
                  <span class="back-tag">DOCTRINA UC & ITO</span>
                </div>
                <div class="card-back-meaning">
                  <strong>Definición Técnica:</strong>
                  <p>${item.meaning}</p>
                </div>
                <div class="card-back-alert">
                  <span class="alert-icon">⚠️</span>
                  <p>${item.examAlert}</p>
                </div>
              </div>
            </div>
          </div>
        `;
      })
      .join('');

    // RENDER MODO TABLA COMPARATIVA
    const tableRowsHtml = glossary
      .map((item, idx) => `
        <tr>
          <td class="col-term"><strong>${item.term}</strong></td>
          <td class="col-etym">${item.etymology}</td>
          <td class="col-mean">${item.meaning}</td>
          <td class="col-alert"><span class="table-alert-text">${item.examAlert}</span></td>
        </tr>
      `)
      .join('');

    return `
      <div class="english-toolbar">
        <div class="english-mode-switch">
          <button type="button" class="btn-toggle-mode ${isFlashcards ? 'active' : ''}" onclick="setEnglishViewMode('flashcards')">
            🎴 Modo Flip Flashcards (Interactivo)
          </button>
          <button type="button" class="btn-toggle-mode ${!isFlashcards ? 'active' : ''}" onclick="setEnglishViewMode('table')">
            📋 Modo Tabla Comparativa
          </button>
        </div>
        <div class="english-sprint-action">
          <button type="button" class="btn-primary-glow" onclick="openDuolingoModal()">
            <span>🇬🇧 LANZAR SPRINT DUOLINGO CONTECH</span>
          </button>
        </div>
      </div>

      <div class="english-content-container">
        ${
          isFlashcards
            ? `<div class="flashcards-grid">${flashcardsHtml}</div>`
            : `
              <div class="table-responsive-wrapper">
                <table class="english-doctrine-table">
                  <thead>
                    <tr>
                      <th>Término en Inglés</th>
                      <th>Etimología / Traducción</th>
                      <th>Significado Doctrina UC</th>
                      <th>Alerta de Examen / Riesgo en Terreno</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${tableRowsHtml}
                  </tbody>
                </table>
              </div>
            `
        }
      </div>
    `;
  }

  // ==========================================================================
  // RENDER PESTAÑA 4: SIMULADOR OFICIAL DE QUIZ UC (14 PREGUNTAS)
  // ==========================================================================
  function renderQuizTabHtml(questions) {
    const totalQuestions = questions.length;
    let answeredCount = 0;
    let correctCount = 0;

    questions.forEach(q => {
      if (NotesState.quizSubmitted[q.id]) {
        answeredCount++;
        const userAns = NotesState.quizAnswers[q.id] || [];
        if (q.type === 'single') {
          if (userAns[0] === q.correctIndex) correctCount++;
        } else {
          const sortedUser = [...userAns].sort().join(',');
          const sortedCorrect = [...q.correctIndexes].sort().join(',');
          if (sortedUser === sortedCorrect) correctCount++;
        }
      }
    });

    const scorePercentage = answeredCount > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

    const questionsHtml = questions
      .map((q, qIdx) => {
        const isSubmitted = NotesState.quizSubmitted[q.id];
        const userAns = NotesState.quizAnswers[q.id] || [];
        const isMultiple = q.type === 'multiple';

        const optionsHtml = q.options
          .map((opt, oIdx) => {
            const isSelected = userAns.includes(oIdx);
            let optionClass = 'quiz-opt-btn';

            if (isSubmitted) {
              const isCorrectOpt = isMultiple
                ? q.correctIndexes.includes(oIdx)
                : q.correctIndex === oIdx;

              if (isCorrectOpt) {
                optionClass += ' opt-correct';
              } else if (isSelected && !isCorrectOpt) {
                optionClass += ' opt-wrong';
              }
            } else if (isSelected) {
              optionClass += ' opt-selected';
            }

            return `
              <button type="button" class="${optionClass}" onclick="handleQuizOptionClick('${q.id}', ${oIdx}, ${isMultiple})" ${isSubmitted ? 'disabled' : ''}>
                <span class="opt-prefix">${isMultiple ? (isSelected ? '☑' : '☐') : (isSelected ? '🔘' : '⚪')}</span>
                <span class="opt-text">${opt}</span>
              </button>
            `;
          })
          .join('');

        return `
          <div class="quiz-question-card ${isSubmitted ? 'question-resolved' : ''}" id="quiz-card-${q.id}">
            <div class="question-header">
              <span class="question-pill">Pregunta ${qIdx + 1} de ${totalQuestions}</span>
              <span class="question-type-badge">${isMultiple ? 'Múltiples Respuestas Correctas' : 'Selección Única'}</span>
            </div>

            <h3 class="question-text">${q.text}</h3>

            <div class="quiz-options-list">
              ${optionsHtml}
            </div>

            <div class="quiz-card-footer">
              ${
                !isSubmitted
                  ? `
                    <button type="button" class="btn-submit-answer" onclick="submitQuizAnswer('${q.id}')">
                      Validar Respuesta con OMEN
                    </button>
                  `
                  : `
                    <div class="quiz-feedback-box">
                      <div class="feedback-doctrine">
                        <strong>📖 Justificación Doctrinaria UC:</strong>
                        <p>${q.doctrineExplanation}</p>
                      </div>
                      <div class="feedback-trap-alert">
                        <strong>⚠️ Desglose de Trampa en Distractores:</strong>
                        <p>${q.examTrapWarning}</p>
                      </div>
                    </div>
                  `
              }
            </div>
          </div>
        `;
      })
      .join('');

    return `
      <div class="quiz-telemetry-header">
        <div class="telemetry-stat-card">
          <span class="stat-caption">Progreso</span>
          <span class="stat-number">${answeredCount} / ${totalQuestions}</span>
        </div>
        <div class="telemetry-stat-card">
          <span class="stat-caption">Respuestas Correctas</span>
          <span class="stat-number text-success">${correctCount}</span>
        </div>
        <div class="telemetry-stat-card">
          <span class="stat-caption">Efectividad UC</span>
          <span class="stat-number ${scorePercentage >= 80 ? 'text-success' : 'text-warning'}">${scorePercentage}%</span>
        </div>
        <div class="telemetry-actions">
          <button type="button" class="btn-secondary" onclick="resetQuizSimulator()">🔄 Reiniciar Simulador</button>
        </div>
      </div>

      <div class="quiz-questions-grid">
        ${questionsHtml}
      </div>
    `;
  }

  // ==========================================================================
  // RENDER PESTAÑA 5: LABORATORIO DE FORO (CASO ERNC)
  // ==========================================================================
  function renderForumTabHtml(forum) {
    return `
      <div class="forum-laboratory-card">
        <div class="forum-case-header">
          <span class="case-badge">CASO REAL EVALUADO UC · FORO 2</span>
          <h3 class="case-headline">${forum.caseTitle}</h3>
          <p class="case-context-text"><strong>Contexto de la Controversia:</strong> ${forum.context}</p>
        </div>

        <div class="forum-actions-bar">
          <span class="forum-subject-tag">Asunto: ${forum.subject}</span>
          <button type="button" class="btn-primary-glow" onclick="copyForumResponse()">
            <span>📋 COPIAR RESPUESTA COMPLETA AL PORTAPAPELES</span>
          </button>
        </div>

        <div class="forum-resolution-wrapper" id="forum-response-content">
          ${forum.academicResponse}
        </div>
      </div>
    `;
  }

  // ==========================================================================
  // MANEJADORES DE EVENTOS E INTERACCIÓN
  // ==========================================================================
  window.switchNotesTab = function (tabId) {
    NotesState.activeTab = tabId;
    document.querySelectorAll('.notes-tab-btn').forEach(btn => {
      const isTarget = btn.id === `btn-${tabId}`;
      btn.classList.toggle('active', isTarget);
      btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
    });

    document.querySelectorAll('.notes-tab-panel').forEach(panel => {
      panel.classList.toggle('hidden', panel.id !== `panel-${tabId}`);
      panel.classList.toggle('active', panel.id !== `panel-${tabId}`);
    });
  };

  window.toggleNoteCard = function (cardId) {
    const body = document.getElementById(`body-${cardId}`);
    const chevron = document.getElementById(`chevron-${cardId}`);
    if (body) {
      body.classList.toggle('open');
      if (chevron) {
        chevron.textContent = body.classList.contains('open') ? '▾' : '▸';
      }
    }
  };

  window.filterNotesByTag = function (tag) {
    NotesState.activeTag = tag;
    const notesView = document.getElementById('view-study-notes');
    if (!notesView) return;
    const panel = document.getElementById('panel-tab-notes');
    if (panel) {
      panel.innerHTML = renderNotesTabHtml(window.STUDY_NOTES_DATA.notes || []);
    }
  };

  window.handleNotesSearch = function (query) {
    const q = query.toLowerCase().trim();
    const cards = document.querySelectorAll('.collapsible-note-card');
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.classList.toggle('hidden', q !== '' && !text.includes(q));
    });
  };

  window.filterAudios = function (filterType) {
    NotesState.audioFilter = filterType;
    const panel = document.getElementById('panel-tab-audios');
    if (panel) {
      panel.innerHTML = renderAudiosTabHtml(window.STUDY_NOTES_DATA.audios || []);
    }
  };

  window.togglePlayAudio = function (audioId) {
    const btn = document.getElementById(`play-btn-${audioId}`);
    const wave = document.getElementById(`wave-${audioId}`);
    const fill = document.getElementById(`fill-${audioId}`);
    const timeCur = document.getElementById(`time-cur-${audioId}`);

    if (NotesState.currentPlayingAudio === audioId) {
      // Pausar
      clearInterval(NotesState.audioIntervals[audioId]);
      NotesState.currentPlayingAudio = null;
      if (btn) btn.textContent = '▶';
      if (wave) wave.classList.add('hidden');
    } else {
      // Detener audio previo si había
      if (NotesState.currentPlayingAudio) {
        window.togglePlayAudio(NotesState.currentPlayingAudio);
      }

      NotesState.currentPlayingAudio = audioId;
      if (btn) btn.textContent = '⏸';
      if (wave) wave.classList.remove('hidden');

      let progress = NotesState.audioPlaybacks[audioId] || 0;
      const speed = 1.0;

      NotesState.audioIntervals[audioId] = setInterval(() => {
        progress += 1 * speed;
        NotesState.audioPlaybacks[audioId] = progress;

        const minutes = Math.floor(progress / 60);
        const seconds = Math.floor(progress % 60);
        if (timeCur) {
          timeCur.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }

        if (fill) {
          fill.style.width = `${Math.min(100, (progress / 150) * 100)}%`;
        }

        if (progress >= 150) {
          clearInterval(NotesState.audioIntervals[audioId]);
          NotesState.currentPlayingAudio = null;
          NotesState.audioPlaybacks[audioId] = 0;
          if (btn) btn.textContent = '▶';
          if (wave) wave.classList.add('hidden');
          if (fill) fill.style.width = '0%';
        }
      }, 1000);
    }
  };

  window.setAudioSpeed = function (audioId, speed) {
    const card = document.getElementById(audioId);
    if (!card) return;
    card.querySelectorAll('.btn-speed').forEach(b => {
      b.classList.toggle('active', b.textContent === `${speed}x`);
    });
  };

  window.copyAudioText = function (audioId) {
    const audio = (window.STUDY_NOTES_DATA.audios || []).find(a => a.id === audioId);
    if (audio && navigator.clipboard) {
      navigator.clipboard.writeText(audio.literalText).then(() => {
        alert('Transcripción literal copiada al portapapeles.');
      });
    }
  };

  window.setEnglishViewMode = function (mode) {
    NotesState.englishViewMode = mode;
    const panel = document.getElementById('panel-tab-english');
    if (panel) {
      panel.innerHTML = renderEnglishTabHtml(window.STUDY_NOTES_DATA.glossary || []);
    }
  };

  window.toggleCardFlip = function (cardId) {
    NotesState.flippedCards[cardId] = !NotesState.flippedCards[cardId];
    const inner = document.getElementById(`card-inner-${cardId}`);
    if (inner) {
      inner.classList.toggle('flipped', NotesState.flippedCards[cardId]);
    }
  };

  window.handleQuizOptionClick = function (qId, optionIdx, isMultiple) {
    if (NotesState.quizSubmitted[qId]) return;

    if (!NotesState.quizAnswers[qId]) {
      NotesState.quizAnswers[qId] = [];
    }

    if (isMultiple) {
      const idx = NotesState.quizAnswers[qId].indexOf(optionIdx);
      if (idx > -1) {
        NotesState.quizAnswers[qId].splice(idx, 1);
      } else {
        NotesState.quizAnswers[qId].push(optionIdx);
      }
    } else {
      NotesState.quizAnswers[qId] = [optionIdx];
    }

    // Actualizar visualmente la tarjeta de la pregunta
    const panel = document.getElementById('panel-tab-quiz');
    if (panel) {
      panel.innerHTML = renderQuizTabHtml(window.STUDY_NOTES_DATA.questions || []);
    }
  };

  window.submitQuizAnswer = function (qId) {
    const ans = NotesState.quizAnswers[qId];
    if (!ans || ans.length === 0) {
      alert('Por favor selecciona una alternativa antes de validar.');
      return;
    }

    NotesState.quizSubmitted[qId] = true;
    const panel = document.getElementById('panel-tab-quiz');
    if (panel) {
      panel.innerHTML = renderQuizTabHtml(window.STUDY_NOTES_DATA.questions || []);
    }
  };

  window.resetQuizSimulator = function () {
    NotesState.quizAnswers = {};
    NotesState.quizSubmitted = {};
    const panel = document.getElementById('panel-tab-quiz');
    if (panel) {
      panel.innerHTML = renderQuizTabHtml(window.STUDY_NOTES_DATA.questions || []);
    }
  };

  window.copyForumResponse = function () {
    const forum = window.STUDY_NOTES_DATA.forum || {};
    const plainText = `ASUNTO: ${forum.subject}\n\n${forum.academicResponse.replace(/<[^>]+>/g, '').trim()}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(plainText).then(() => {
        alert('Respuesta para el Foro de la UC copiada exitosamente al portapapeles.');
      });
    }
  };

  window.handleClassChange = function (val) {
    if (val !== 'clase-3') {
      alert('Las clases 1, 2 y 4 se encuentran en proceso de compilación doctoral. Desplegando Clase 3 activa.');
    }
  };

  function setupEventListeners() {
    // Si ya existe el contenedor o el DOM está cargado
  }

  // AUTO-INICIALIZACIÓN
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStudyNotes);
  } else {
    initStudyNotes();
  }
})();
