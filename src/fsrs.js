/**
 * FSRSEngine · Fase 6 Plan Luna 5.6
 * Implementación browser de FSRS v4 con persistencia IndexedDB.
 */
const FSRSEngine = (() => {
  'use strict';

  const DB_NAME = 'EstudioInteligenteDB';
  const STORE_NAME = 'fsrs_cards';
  const DAY_MS = 86400000;
  const DESIRED_RETENTION = 0.9;
  const RATINGS = Object.freeze({ AGAIN: 1, HARD: 2, GOOD: 3, EASY: 4 });
  const WEIGHTS = Object.freeze([
    0.4, 0.6, 2.4, 5.8, 4.93, 0.94, 0.86, 0.01, 1.49,
    0.14, 0.94, 2.18, 0.05, 0.34, 1.26, 0.29, 2.61
  ]);

  let databasePromise = null;

  function clamp(value, minimum, maximum) {
    return Math.min(maximum, Math.max(minimum, value));
  }

  function round(value, decimals = 4) {
    const factor = 10 ** decimals;
    return Math.round(value * factor) / factor;
  }

  function initialStability(rating) {
    return WEIGHTS[clamp(Number(rating), 1, 4) - 1];
  }

  function initialDifficulty(rating) {
    return clamp(WEIGHTS[4] - (Number(rating) - 3) * WEIGHTS[5], 1, 10);
  }

  function nextDifficulty(difficulty, rating) {
    const adjusted = Number(difficulty) - WEIGHTS[6] * (Number(rating) - 3);
    const reverted = WEIGHTS[7] * initialDifficulty(RATINGS.GOOD) + (1 - WEIGHTS[7]) * adjusted;
    return clamp(reverted, 1, 10);
  }

  function retrievability(elapsedDays, stability) {
    const safeStability = Math.max(0.01, Number(stability) || 0.01);
    return (1 + Math.max(0, Number(elapsedDays) || 0) / (9 * safeStability)) ** -1;
  }

  function stabilityAfterRecall(stability, difficulty, recall, rating) {
    const hardPenalty = Number(rating) === RATINGS.HARD ? WEIGHTS[15] : 1;
    const easyBonus = Number(rating) === RATINGS.EASY ? WEIGHTS[16] : 1;
    const growth = Math.exp(WEIGHTS[8])
      * (11 - difficulty)
      * (stability ** -WEIGHTS[9])
      * (Math.exp(WEIGHTS[10] * (1 - recall)) - 1)
      * hardPenalty
      * easyBonus;
    return Math.max(0.01, stability * (1 + growth));
  }

  function stabilityAfterForget(stability, difficulty, recall) {
    return Math.max(
      0.01,
      WEIGHTS[11]
        * (difficulty ** -WEIGHTS[12])
        * ((stability + 1) ** WEIGHTS[13] - 1)
        * Math.exp(WEIGHTS[14] * (1 - recall))
    );
  }

  function intervalFor(stability, desiredRetention = DESIRED_RETENTION) {
    const retention = clamp(Number(desiredRetention) || DESIRED_RETENTION, 0.7, 0.99);
    return Math.max(1, Math.round(9 * stability * (1 / retention - 1)));
  }

  function isoDate(value = new Date()) {
    const date = value instanceof Date ? value : new Date(value);
    return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
  }

  function defaultCards(now = new Date()) {
    const dueDate = isoDate(now);
    return [
      {
        id: 'fsrs-ind-001', subject: 'Construcción Industrializada',
        prompt: '¿Qué condición debe verificarse antes de autorizar la carga sobre una conexión húmeda con grout?',
        answer: 'La resistencia especificada y la trazabilidad del ensayo deben estar acreditadas antes de liberar la etapa siguiente.',
        dueDate
      },
      {
        id: 'fsrs-via-001', subject: 'Obras Viales',
        prompt: '¿Qué evidencia debe contrastar el ITO para aceptar la compactación de una carpeta asfáltica?',
        answer: 'Los resultados de densidad en terreno deben contrastarse con la densidad patrón y con la exigencia de las EETT aplicables.',
        dueDate
      },
      {
        id: 'fsrs-civ-001', subject: 'Obras Civiles',
        prompt: '¿Por qué se controla el gradiente térmico en un elemento de hormigón masivo?',
        answer: 'Para limitar tensiones internas por diferencias de temperatura que pueden producir fisuración térmica temprana.',
        dueDate
      },
      {
        id: 'fsrs-con-001', subject: 'Administración de Contratos',
        prompt: '¿Qué debe probar un claim de plazo antes de recomendar una ampliación?',
        answer: 'Debe acreditar causal, oportunidad de aviso, responsabilidad y efecto demostrable sobre la ruta crítica vigente.',
        dueDate
      }
    ].map(normalizeCard);
  }

  function normalizeCard(card) {
    const createdAt = card.createdAt || isoDate();
    return {
      id: String(card.id),
      subject: String(card.subject || 'Estudio general'),
      prompt: String(card.prompt || ''),
      answer: String(card.answer || ''),
      stability: Math.max(0, Number(card.stability) || 0),
      difficulty: clamp(Number(card.difficulty) || 5, 1, 10),
      lastReview: card.lastReview ? isoDate(card.lastReview) : null,
      dueDate: isoDate(card.dueDate || createdAt),
      streak: Math.max(0, Number(card.streak) || 0),
      reps: Math.max(0, Number(card.reps) || 0),
      lapses: Math.max(0, Number(card.lapses) || 0),
      intervalDays: Math.max(0, Number(card.intervalDays) || 0),
      lastRating: card.lastRating ? clamp(Number(card.lastRating), 1, 4) : null,
      lastRetrievability: card.lastRetrievability == null ? null : clamp(Number(card.lastRetrievability), 0, 1),
      createdAt,
      updatedAt: card.updatedAt || createdAt
    };
  }

  function createStore(db) {
    if (db.objectStoreNames.contains(STORE_NAME)) return;
    const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
    store.createIndex('dueDate', 'dueDate', { unique: false });
    store.createIndex('subject', 'subject', { unique: false });
  }

  function openAtVersion(version) {
    return new Promise((resolve, reject) => {
      const request = version ? indexedDB.open(DB_NAME, version) : indexedDB.open(DB_NAME);
      request.onupgradeneeded = () => createStore(request.result);
      request.onerror = () => reject(request.error || new Error('No fue posible abrir IndexedDB.'));
      request.onblocked = () => reject(new Error('IndexedDB está bloqueada por otra pestaña.'));
      request.onsuccess = () => resolve(request.result);
    });
  }

  async function openDatabase() {
    if (typeof indexedDB === 'undefined') {
      throw new Error('Este navegador no ofrece IndexedDB.');
    }
    let db = await openAtVersion();
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      const nextVersion = db.version + 1;
      db.close();
      db = await openAtVersion(nextVersion);
    }
    db.onversionchange = () => db.close();
    return db;
  }

  function getDatabase() {
    if (!databasePromise) {
      databasePromise = openDatabase().catch((error) => {
        databasePromise = null;
        throw error;
      });
    }
    return databasePromise;
  }

  function requestResult(request) {
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error('Falló una operación IndexedDB.'));
    });
  }

  function transactionDone(transaction) {
    return new Promise((resolve, reject) => {
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error || new Error('Falló la transacción IndexedDB.'));
      transaction.onabort = () => reject(transaction.error || new Error('La transacción IndexedDB fue abortada.'));
    });
  }

  async function getAllCards() {
    const db = await getDatabase();
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const result = await requestResult(transaction.objectStore(STORE_NAME).getAll());
    return result.map(normalizeCard);
  }

  async function getCard(id) {
    const db = await getDatabase();
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const card = await requestResult(transaction.objectStore(STORE_NAME).get(String(id)));
    return card ? normalizeCard(card) : null;
  }

  async function putCards(cards) {
    const db = await getDatabase();
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    cards.map(normalizeCard).forEach((card) => store.put(card));
    await transactionDone(transaction);
    return cards.length;
  }

  async function addCards(cards) {
    const timestamp = Date.now();
    const additions = cards.map((card, index) => normalizeCard({
      ...card,
      id: card.id || `fsrs-import-${timestamp}-${index}`,
      dueDate: card.dueDate || isoDate()
    }));
    await putCards(additions);
    return additions;
  }

  function previewReview(cardInput, rating, reviewedAt = new Date()) {
    const card = normalizeCard(cardInput);
    const grade = Number(rating);
    if (!Number.isInteger(grade) || grade < 1 || grade > 4) {
      throw new TypeError('La calificación FSRS debe ser un entero entre 1 y 4.');
    }
    const reviewDate = reviewedAt instanceof Date ? reviewedAt : new Date(reviewedAt);
    if (Number.isNaN(reviewDate.getTime())) throw new TypeError('La fecha de revisión no es válida.');

    let stability;
    let difficulty;
    let recall = 1;
    if (!card.lastReview || card.reps === 0 || card.stability <= 0) {
      stability = initialStability(grade);
      difficulty = initialDifficulty(grade);
    } else {
      const elapsedDays = Math.max(0, (reviewDate.getTime() - new Date(card.lastReview).getTime()) / DAY_MS);
      recall = retrievability(elapsedDays, card.stability);
      difficulty = nextDifficulty(card.difficulty, grade);
      stability = grade === RATINGS.AGAIN
        ? stabilityAfterForget(card.stability, card.difficulty, recall)
        : stabilityAfterRecall(card.stability, card.difficulty, recall, grade);
    }

    const intervalDays = intervalFor(stability);
    const dueDate = new Date(reviewDate.getTime() + intervalDays * DAY_MS);
    return normalizeCard({
      ...card,
      stability: round(stability),
      difficulty: round(difficulty),
      lastReview: reviewDate.toISOString(),
      dueDate: dueDate.toISOString(),
      streak: grade === RATINGS.AGAIN ? 0 : card.streak + 1,
      reps: card.reps + 1,
      lapses: card.lapses + (grade === RATINGS.AGAIN ? 1 : 0),
      intervalDays,
      lastRating: grade,
      lastRetrievability: round(recall),
      updatedAt: reviewDate.toISOString()
    });
  }

  async function reviewCard(id, rating, reviewedAt = new Date()) {
    const card = await getCard(id);
    if (!card) throw new Error('La tarjeta FSRS solicitada no existe.');
    const reviewed = previewReview(card, rating, reviewedAt);
    await putCards([reviewed]);
    return reviewed;
  }

  async function getDueCards(at = new Date()) {
    const limit = at instanceof Date ? at.getTime() : new Date(at).getTime();
    const cards = await getAllCards();
    return cards
      .filter((card) => new Date(card.dueDate).getTime() <= limit)
      .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  }

  async function getStats(at = new Date()) {
    const now = at instanceof Date ? at : new Date(at);
    const cards = await getAllCards();
    const dueCount = cards.filter((card) => new Date(card.dueDate) <= now).length;
    const reviewed = cards.filter((card) => card.lastReview && card.stability > 0);
    const retention = reviewed.length
      ? reviewed.reduce((sum, card) => {
        const elapsed = Math.max(0, (now - new Date(card.lastReview)) / DAY_MS);
        return sum + retrievability(elapsed, card.stability);
      }, 0) / reviewed.length
      : 0;
    return {
      total: cards.length,
      dueCount,
      reviewedCount: reviewed.length,
      retention: round(retention * 100, 1)
    };
  }

  async function init() {
    await getDatabase();
    const cards = await getAllCards();
    if (cards.length === 0) await putCards(defaultCards());
    return getStats();
  }

  return Object.freeze({
    DB_NAME,
    STORE_NAME,
    RATINGS,
    WEIGHTS,
    init,
    addCards,
    getAllCards,
    getDueCards,
    getCard,
    getStats,
    reviewCard,
    previewReview,
    math: Object.freeze({
      initialStability,
      initialDifficulty,
      nextDifficulty,
      retrievability,
      stabilityAfterRecall,
      stabilityAfterForget,
      intervalFor
    })
  });
})();

if (typeof globalThis !== 'undefined') globalThis.FSRSEngine = FSRSEngine;
if (typeof module !== 'undefined' && module.exports) module.exports = FSRSEngine;
