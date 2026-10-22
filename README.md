# ESTUDIO INTELIGENTE 2.0

**Versión: 2.0.0-PROD (AUDITADO Y LIBERADO)**

Aplicación personal de estudio de ingeniería e ITO. Liberación local de software sobre la rama `refactor-v2-modular`; este estado no implica publicación remota ni certificación jurídica del contenido académico.

## Ejecución e instalación PWA

Requiere un navegador moderno con IndexedDB, Service Worker y módulos JavaScript de navegador. No hay servidor de aplicación, autenticación propia ni proceso de compilación.

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Abrir `http://localhost:8080/index.html` en Chrome o Edge. Para instalar desde un teléfono, publicar estos activos en un origen HTTPS accesible desde el dispositivo y usar la opción de instalación del navegador. Una dirección HTTP de la red local del PC no equivale a localhost del teléfono ni ofrece el contexto seguro requerido por Service Worker.

El manifiesto incluye nombre, identificador, inicio dentro del scope, display standalone e iconos PNG reales de 192/512 px, además del SVG corporativo. La suite verifica los criterios de instalación de Chromium. La presentación del botón de instalación y la instalación física en Android dependen del navegador, sus políticas y el dispositivo; no se ha certificado un teléfono físico.

## Arquitectura que ejecuta esta versión

| Archivo | Responsabilidad real |
| --- | --- |
| `index.html`, `styles.css`, `app.js` | Cliente HTML/CSS/JavaScript clásico modular, navegación, formularios, modal accesible, calendario, estudio y renderizado DOM. |
| `security.js` | SecureVault por cierre léxico en memoria, escape de texto y limpieza de claves históricas al iniciar. |
| `src/corpus.js` | Índice estático de cláusulas y búsqueda textual con abstención cuando no encuentra una coincidencia. |
| `src/gemini-client.js` | Cliente REST directo de Google AI Studio v1beta, responseSchema JSON, timeout de 8 s y resultado alternativo offline. |
| `src/fsrs.js` | FSRS v4 con IndexedDB, estabilidad, dificultad y fecha de repaso persistentes. |
| `src/pdf-viewer.js` | PDF.js cargado bajo demanda, FileReader, canvas y extracción textual por página. |
| `pwa.js`, `sw.js`, `manifest.json` | Registro, actualización de la PWA, caché network-first y activos instalables. |

OMEN, ATLAS e ITO son roles pedagógicos de una respuesta estructurada de Gemini o de una matriz local de respaldo. No son tres servicios autónomos, ni existe un proxy de claves o un backend de agentes.

### FSRS v4 persistente

La base IndexedDB es `EstudioInteligenteDB` y el object store es `fsrs_cards`. Se guardan S, D, última revisión, vencimiento, racha, repeticiones y lapsos. Las calificaciones Otra vez/Difícil/Bien/Fácil actualizan el estado con los 17 parámetros iniciales de FSRS v4 y retención objetivo 0,90.

Se usa R(t,S) = (1 + t/(9S))^-1 e I(r,S) = 9S(1/r - 1). El intervalo se redondea a días enteros, con mínimo de un día: esta versión no implementa pasos de aprendizaje de minutos, optimizador personalizado ni sincronización entre dispositivos. Calificar una tarjeta es una operación explícita; el puntaje Feynman no sustituye esa calificación.

Los datos permanecen entre recargas en el mismo origen/perfil. Cambiar el protocolo, host, puerto o perfil crea otro almacenamiento; borrar datos del sitio o usar navegación privada puede perderlos. IndexedDB no es un respaldo externo.

### PDF local y consultas documentales

El PDF se lee con FileReader y PDF.js 3.11.174, con `isEvalSupported: false` para mitigar CVE-2024-4367 según Mozilla. Esta mitigación no equivale a actualizar toda la dependencia ni a una auditoría exhaustiva de PDF.js.

El visor y su worker se descargan de jsDelivr al primer uso. No están incluidos en el precache: abrir un PDF nuevo sin red no está garantizado. El archivo y el texto extraído se mantienen en memoria, no se guardan en IndexedDB, y se pierden al recargar. Los PDF escaneados sin capa de texto requieren OCR externo.

La renderización y extracción son locales. Si el usuario envía una pregunta con una clave Gemini activa, se transmiten a Google la consulta y fragmentos textuales seleccionados del PDF, con referencias de página y un límite de contexto; no se envía el archivo PDF completo. Sin clave o sin red, el resultado alternativo no realiza comprensión semántica del PDF.

### Gemini, secretos y renderizado

La clave se introduce en AI Studio dentro de la aplicación y vive en memoria hasta recargar/cerrar la pestaña o desconectarla. Se envía a Google por HTTPS en la cabecera `x-goog-api-key`; no se incorpora a la URL ni a localStorage. El estado de interfaz sí usa localStorage, sin necesitar la clave. No hay cifrado del secreto ni protección frente a un script malicioso que ya ejecute en el mismo origen.

El cliente conserva las opciones Gemini 2.0 Flash / 1.5 Flash y prueba `gemini-flash-latest` si Google declara que el modelo solicitado ya no existe. La disponibilidad real, permisos y cuotas dependen de Google. La auditoría prueba transporte, esquema, error y timeout con respuestas controladas; no usa una cuenta real ni confirma una inferencia facturable.

Chat y Feynman insertan datos de usuario e IA con nodos y textContent. Las plantillas HTML académicas internas siguen existiendo; el helper setHTML no es un sanitizador de datos externos.

### Corpus y límites de verificación

NCh170, NCh430, NCh1534, MOP Vol. 5, DS594 y OGUC son entradas del índice académico local. El código no incorpora los documentos oficiales completos, hashes documentales, actualización automática ni prueba de vigencia normativa. RIDAA no tiene un conjunto propio de cláusulas en esta versión.

La prueba del corpus comprueba identificadores, campos, correspondencia con el índice y abstención ante búsquedas sin coincidencia. No certifica que un artículo o umbral sea jurídicamente exacto ni que una conclusión técnica sea válida. Para una decisión de obra se debe contrastar la norma oficial vigente y las EETT. Una coincidencia textual no demuestra por sí sola una afirmación.

### Calendario y funciones de demostración

La agenda inicial se genera como ejemplo relativo a la fecha local del sistema. No importa fechas reales desde IPLACEX, UC ni Google. Exporta eventos de día completo mediante ICS con CRLF, escape de texto, DTSTAMP UTC, DTEND exclusivo y plegado UTF-8 a 75 octetos. El horario se informa en la descripción; no se programan alarmas en el teléfono.

Los botones de Google Calendar descargan el ICS para importarlo manualmente. No hay OAuth, sincronización bidireccional ni API de Calendar. Los bloques agregados a la agenda no tienen persistencia propia entre recargas.

YouTube muestra un ejemplo estático y permite añadir cinco tarjetas predefinidas a FSRS; no descarga transcripciones ni analiza la URL. Astra e inglés usan bancos académicos locales. Los folios/minutas y parte de la telemetría (radar, mapa de calor, racha) siguen siendo demostraciones, no registros periciales ni métricas auditadas de actividad.

## Qué funciona offline

Después de una primera carga correcta en HTTPS/localhost y de que el Service Worker controle la página:

- El shell HTML, CSS, módulos propios, manifiesto e iconos están precacheados y funcionan al recargar sin red.
- FSRS conserva las tarjetas en IndexedDB y puede calificarlas sin conexión.
- El corpus, las actividades estáticas y la exportación ICS se ejecutan localmente.
- Chat/Feynman devuelven una matriz heurística estructurada cuando no hay clave o falla la red; no hay un modelo generativo local.
- PDF.js/worker y fuentes externas no tienen disponibilidad offline garantizada. Se usan fuentes de sistema si Google Fonts no responde.

El primer acceso a un origen sin conexión no puede instalar la PWA. Abrir por file:// permite parte de la interfaz, pero no valida instalación ni Service Worker. La versión de caché es `2.0.0-PROD`; el aviso de actualización activa un worker nuevo y recarga.

## Auditoría reproducible

La suite integral requiere Node.js 22 o superior y Edge/Chrome/Chromium instalado. No requiere paquetes npm, conexión externa ni una API Key. Si el navegador está en otra ruta, definir `AUDIT_BROWSER` con el ejecutable.

```powershell
node tests/release-audit.test.js
node --test tests/fsrs.test.js tests/calendar.test.js tests/pdf-viewer.test.js
```

La auditoría usa un servidor loopback, un perfil temporal y DevTools. Verifica secretos por patrones conocidos (sin imprimir valores), SecureVault, corpus, IndexedDB real tras recarga, FSRS con cálculo independiente, ICS, intentos XSS en DOM real, precache, manifiesto, criterios de instalación, recarga offline y contrato Gemini simulado. Una prueba fallida produce código de salida 1; no se sustituyen las pruebas de navegador por mocks ni se omiten silenciosamente.

El detector de secretos excluye metadatos Git y herramientas/dependencias; no audita todo el historial Git ni detecta todos los formatos de secreto posibles.

La prueba de ergonomía de Fase 7 requiere las dependencias de auditoría `playwright-core` y `axe-core` disponibles en Node o mediante `NODE_PATH`:

```powershell
node tests/accessibility.browser.cjs
```

Los iconos se pueden regenerar con `node scripts/generate-pwa-icons.cjs` usando el SVG oficial. Los activos de pruebas no se cargan ni precachean en la aplicación.

La certificación **2.0.0-PROD (AUDITADO Y LIBERADO)** corresponde a esta entrega local y al alcance de pruebas documentado. La instalación física en Xiaomi, pruebas asistivas con lector de pantalla, revisión normativa especializada y validación de servicios externos con credenciales reales no se afirman como realizadas.

---
MEGA INSPECCIÓN SpA · ESTUDIO INTELIGENTE 2.0

Referencias de implementación: [FSRS v4](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-Algorithm/bc401d9ed5093c66358738f4b8834f8d24ab211b), [RFC 5545](https://www.rfc-editor.org/rfc/rfc5545), [mitigación oficial PDF.js](https://github.com/mozilla/pdf.js/security/advisories/GHSA-wgrm-67xf-hhpq), [criterios del manifiesto Chromium](https://developer.chrome.com/docs/lighthouse/pwa/installable-manifest).
