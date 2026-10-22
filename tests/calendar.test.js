'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function loadApplicationContext() {
  let capturedIcs = '';
  const context = {
    TextEncoder,
    console,
    setInterval: () => 0,
    clearInterval: () => {},
    alert: () => {},
    localStorage: { getItem: () => null, setItem: () => {} },
    document: {
      addEventListener: () => {},
      getElementById: () => null,
      querySelectorAll: () => [],
      querySelector: () => null,
      createElement: () => ({ click: () => {} }),
      body: { appendChild: () => {}, removeChild: () => {} }
    },
    Blob: class CaptureBlob {
      constructor(parts) { capturedIcs = parts.join(''); }
    },
    URL: { createObjectURL: () => 'blob:test', revokeObjectURL: () => {} },
    getCapturedIcs: () => capturedIcs
  };
  context.window = context;
  vm.createContext(context);
  const source = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');
  vm.runInContext(source, context, { filename: 'app.js' });
  return context;
}

test('la agenda se genera respecto a la fecha de referencia', () => {
  const context = loadApplicationContext();
  const dates = vm.runInContext(
    "createCalendarEvents(new Date('2030-02-10T12:00:00')).map((event) => event.date)",
    context
  );
  assert.deepEqual(Array.from(dates), [
    '2030-02-10', '2030-02-13', '2030-02-14', '2030-02-15',
    '2030-02-16', '2030-02-18', '2030-03-01'
  ]);
});

test('la exportación ICS usa CRLF, DTSTAMP dinámico y texto escapado', () => {
  const context = loadApplicationContext();
  vm.runInContext(`
    CALENDAR_EVENTS = [{
      id: 99,
      date: '2030-02-13',
      type: 'exam',
      title: 'Ensayo, control; ITO',
      time: '23:59',
      desc: 'Línea 1\\nLínea 2'
    }];
    downloadIcsCalendar();
  `, context);
  const ics = context.getCapturedIcs();
  assert.match(ics, /DTSTAMP:\d{8}T\d{6}Z\r\n/);
  assert.match(ics, /DTSTART;VALUE=DATE:20300213\r\nDTEND;VALUE=DATE:20300214\r\n/);
  assert.match(ics, /SUMMARY:Ensayo\\, control\\; ITO\r\n/);
  assert.match(ics, /DESCRIPTION:Línea 1\\nLínea 2 - Horario: 23:59\r\n/);
  assert.equal(/(^|[^\r])\n/.test(ics), false);
  assert.ok(ics.endsWith('END:VCALENDAR\r\n'));
});
