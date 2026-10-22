'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const FSRSEngine = require('../src/fsrs.js');

test('FSRS v4 usa los pesos oficiales y R(S)=0.9', () => {
  assert.deepEqual(FSRSEngine.WEIGHTS, [
    0.4, 0.6, 2.4, 5.8, 4.93, 0.94, 0.86, 0.01, 1.49,
    0.14, 0.94, 2.18, 0.05, 0.34, 1.26, 0.29, 2.61
  ]);
  assert.ok(Math.abs(FSRSEngine.math.retrievability(5, 5) - 0.9) < 1e-12);
});

test('una tarjeta nueva obtiene estabilidad e intervalo según la calificación', () => {
  const reviewedAt = new Date('2026-01-10T12:00:00.000Z');
  const baseCard = {
    id: 'new-card',
    subject: 'Prueba',
    prompt: 'Pregunta',
    answer: 'Respuesta',
    dueDate: reviewedAt.toISOString()
  };

  const expectedStability = [0.4, 0.6, 2.4, 5.8];
  const expectedIntervals = [1, 1, 2, 6];
  expectedStability.forEach((stability, index) => {
    const result = FSRSEngine.previewReview(baseCard, index + 1, reviewedAt);
    assert.equal(result.stability, stability);
    assert.equal(result.intervalDays, expectedIntervals[index]);
    assert.equal(result.reps, 1);
  });
});

test('Bien y Fácil incrementan más la estabilidad que Difícil', () => {
  const reviewedAt = new Date('2026-01-13T12:00:00.000Z');
  const card = {
    id: 'known-card',
    subject: 'Prueba',
    prompt: 'Pregunta',
    answer: 'Respuesta',
    stability: 2.4,
    difficulty: 4.93,
    lastReview: '2026-01-10T12:00:00.000Z',
    dueDate: reviewedAt.toISOString(),
    streak: 2,
    reps: 2
  };

  const hard = FSRSEngine.previewReview(card, FSRSEngine.RATINGS.HARD, reviewedAt);
  const good = FSRSEngine.previewReview(card, FSRSEngine.RATINGS.GOOD, reviewedAt);
  const easy = FSRSEngine.previewReview(card, FSRSEngine.RATINGS.EASY, reviewedAt);
  assert.ok(hard.stability < good.stability);
  assert.ok(good.stability < easy.stability);
  assert.equal(good.streak, 3);
});

test('Otra vez registra lapso y reinicia la racha', () => {
  const card = {
    id: 'lapse-card',
    subject: 'Prueba',
    prompt: 'Pregunta',
    answer: 'Respuesta',
    stability: 5,
    difficulty: 5,
    lastReview: '2026-01-01T00:00:00.000Z',
    dueDate: '2026-01-06T00:00:00.000Z',
    streak: 7,
    reps: 7,
    lapses: 1
  };
  const result = FSRSEngine.previewReview(card, FSRSEngine.RATINGS.AGAIN, new Date('2026-01-06T00:00:00.000Z'));
  assert.equal(result.streak, 0);
  assert.equal(result.lapses, 2);
  assert.equal(result.reps, 8);
  assert.ok(result.dueDate > result.lastReview);
});
