# Informe de auditoría de solo lectura · ChatGPT Codec Luna 5.6
**Fecha de Ejecución:** 20 de Octubre de 2026  
**Objetivo Auditado:** ESTUDIO INTELIGENTE 2.0 (SPA / PWA de Formación y Estudio)  
**Motor Auditor:** ChatGPT Codec Modelo 5.6 Luna Ultra (Auditoría Forense Externa en Solo Lectura)  
**Entorno:** Antigravity IDE · Ecosistema MEGA INSPECCIÓN SpA  

---

## Veredicto ejecutivo

**Estado: crítico para uso técnico/normativo; funcional como prototipo estático de estudio.** La versión abierta no usa Gemini, no ejecuta RAG documental y no implementa agentes autónomos, aunque la interfaz afirma lo contrario.  
Existe riesgo crítico condicionado si se ingresa una API key real: se guarda sin cifrar y puede ser leída mediante inyección HTML o scripts CDN. La PWA activa tampoco está correctamente integrada y hay una división grave entre carpeta, Git y versión potencialmente publicada.  
No se modificó, creó, eliminó, renombró ni guardó ningún archivo; tampoco se instaló, publicó, hizo commit o push.

---

## Alcance y trazabilidad

- La aplicación efectiva es un monolito: CSS embebido en `index.html:15` y JavaScript embebido en `index.html:2870`.
- El CSS embebido coincide con `styles (1).css:1` y el JS con `app (1).js:1`, tras normalizar saltos finales. Esos archivos externos no son cargados por `index.html`.
- La sintaxis JavaScript pasó validación estática; todos los manejadores inline invocados están declarados y los IDs consultados existen. Esto no equivale a una prueba en navegador o celular.
- No se encontraron PDF ni documentos normativos locales.
- `AUDITORIA_Y_SUBSANACION_ESTUDIO_INTELIGENTE_2.0.md.gdoc` no pudo leerse: Google Drive lo presentó como archivo remoto/no materializado.
- Los backups se usaron únicamente como comparación.

---

## 1. Arquitectura real y funcionalidades operativas

La arquitectura real es una SPA monolítica, completamente cliente, sin backend, base de datos ni capa Gemini:

- Ocho asignaturas y sus contenidos están escritos dentro de `ACADEMIC_DATABASE`, desde `app (1).js:59`.
- Todo el estado académico vive en memoria en `APP_STATE`: asignatura, rango, XP, racha, retención, calendario y tarjetas; se reinicia al recargar. Véase `app (1).js:1681`.
- `selectSubject`, `selectExamRange` y `renderActiveWorkspace` cambian el contenido precargado y actualizan el DOM: `app (1).js:1801` y `app (1).js:1864`.
- OMEN, ATLAS e ITO son tres campos de texto/HTML de la base estática, insertados por `renderActiveWorkspace`; no son procesos, modelos ni agentes independientes.
- ASTRA es un evaluador local por palabras clave: `app (1).js:1981`.
- El validador Feynman también es comparación léxica local: `app (1).js:2088`.

Funciones con implementación real, aunque algunas sean limitadas:

- Navegación entre asignaturas, rangos y paneles.
- Quiz de inglés con cuatro preguntas y XP volátil: `app (1).js:2511`.
- Síntesis y reconocimiento de voz cuando el navegador lo soporte: `app (1).js:2423` y `app (1).js:2450`.
- Generador local de una plantilla de folio y copia al portapapeles: `app (1).js:2285`.
- Agenda temporal en memoria y descarga de un archivo `.ics`.
- Radar mediante Chart.js, con fallback básico en canvas: `index.html:5672`.
- Un oscilador de audio simple.

---

## 2. Funciones simuladas, incompletas o engañosas

| Función anunciada | Comportamiento real verificable |
|---|---|
| **Gemini / Google AI Studio** | `saveAndTestAiStudioKey` no prueba la clave ni ejecuta una petición. Guarda clave/modelo y muestra “conectado”, incluso sin respuesta de Google: `app (1).js:2766`. No aparece `fetch`, SDK Gemini, `generateContent` ni lectura de la clave en la versión activa. |
| **Cuatro agentes académicos** | OMEN, ATLAS e ITO son textos precargados; ASTRA cuenta palabras. No hay orquestador, function calling ni ejecución multiagente. |
| **ASTRA socrático** | Con cero palabras clave coincidentes puede entregar 55 % de “precisión conceptual”; además puede avanzarse directamente sin superar validación: `app (1).js:1981` y `app (1).js:2034`. |
| **Feynman semántico/normativo** | Busca frases o el primer token y parte desde 40 %. Puede declarar “0 brechas normativas” por mera presencia léxica: `app (1).js:2088`. |
| **PDF + RAG** | `handlePdfUpload` solo muestra `file.name`; nunca lee el archivo. El visor genera elementos con clase `pdf-simulated-slide`, y el chat responde con el `callout` estático de la lámina: `app (1).js:2163`, `app (1).js:2221` y `app (1).js:2230`. |
| **YouTube RAG** | No valida, descarga ni transcribe la URL. La vuelve a imprimir junto con palabras y textos ya existentes: `app (1).js:2565`. “Añadir tarjetas” solo incrementa un contador; no crea contenido nuevo. |
| **FSRS v4** | Reutiliza preguntas ASTRA, usa intervalos fijos y aumenta la retención incluso al calificar “Otra vez”. No guarda estabilidad, dificultad, fechas ni historial: `app (1).js:2343` y `app (1).js:2369`. |
| **Google Calendar sincronizado** | `syncWithGoogleCalendar` cambia una etiqueta y muestra un toast; no hay OAuth ni API: `app (1).js:2739`. El botón visible abre el modal, no llama a esa función. |
| **Exportación ICS** | Sí dispara una descarga, pero construye el calendario con secuencias `\n` literales en vez de líneas CRLF, por lo que la importación correcta no está garantizada: `index.html:5592`. |
| **Audio 40 Hz/Jwrose** | Crea un único oscilador seno de 140 Hz, no binaural 40 Hz ni las tres pistas descritas en `README.md:68`: `app (1).js:2384`. |
| **Voz “escuchando”** | El botón principal solo lee una pregunta mediante síntesis. El dictado separado sí intenta reconocimiento; si falla, inserta automáticamente la respuesta modelo, lo que puede confundirse con una transcripción real. |
| **Recomendación adaptativa/fechas** | La recomendación, “hoy” y telemetría están hard-coded al 20-10-2026: `index.html:2234` e `index.html:5525`. Al 21-10-2026 ya marca como hoy una fecha anterior. |
| **Folio Libro de Obras** | Genera un texto con fecha, firma e instrucción genérica fijas, sin datos reales de obra ni verificación documental: `app (1).js:2285`. |

El `README.md:17` sobredeclara cerebro Gemini, agentes, FSRS, PDF/YouTube y sincronización respecto del código actual.

---

## 3. Seguridad y exposición Gemini

### Riesgo crítico condicionado: XSS más API key

La API key se guarda en texto plano en `localStorage`: `app (1).js:2777`. No existe cifrado pese a que la propia base afirma “localStorage cifrado”: `app (1).js:1452`.

Hay entradas del usuario que llegan sin escape a `innerHTML`:
- ASTRA: `app (1).js:1989`.
- Chat PDF: `app (1).js:2235`.
- URL YouTube: `app (1).js:2571`.
- Título de agenda: `app (1).js:2692`.

Un payload con atributos de evento HTML podría ejecutar JavaScript en el origen y leer la clave almacenada. El impacto pasa a crítico si se introduce una clave real.

Además:
- Lucide `@latest` y Chart.js se ejecutan desde CDN sin versión fija, SRI ni CSP visible: `index.html:13`. Esos scripts también tienen acceso al `localStorage`.
- No se detectó una clave Gemini completa hard-coded en los archivos de texto legibles. La versión actual tampoco transmite la clave a Google, porque no realiza llamadas.
- El backup v3 guardaba una clave distinta, `mega_ai_studio_key`: `app_BACKUP_v3.js:1266`. La versión actual solo borra `MEGA_AI_STUDIO_KEY`, por lo que una clave histórica podría quedar huérfana. Su existencia real en el navegador no puede comprobarse desde el proyecto.
- El backup hacía llamadas con la clave en el query string y colocaba la respuesta del modelo directamente en `innerHTML`: `app_BACKUP_v3.js:1238` y `app_BACKUP_v3.js:452`. No debe recuperarse ese código sin rediseño.
- El código contiene nombre completo, agenda académica, actividad familiar, fechas y enlaces de notebooks. Si el hosting/repositorio es público, existe exposición de metadatos personales; la visibilidad pública no pudo comprobarse.

---

## 4. PWA, service worker y actualizaciones

### Árbol abierto
- `index.html` no enlaza `manifest.json` ni registra un service worker. Su cabecera solo carga fuentes y dos scripts CDN: `index.html:1`.
- Por tanto, esta versión no es una PWA instalable verificable, pese a la instrucción de `README.md:80`.
- `manifest.json:2` contiene nombre, `start_url`, modo standalone, colores e iconos, pero está huérfano.
- `sw (1).js:6` intenta precachear `styles.css` y `app.js`, archivos inexistentes en la carpeta.
- `cache.addAll()` oculta silenciosamente su error: `sw (1).js:8`.
- Su estrategia runtime sería network-first: `sw (1).js:24`, pero el worker no está registrado.
- Durante activación elimina todas las cachés del origen cuyo nombre sea distinto, lo que podría afectar otra aplicación alojada bajo el mismo origen: `sw (1).js:15`.

### Riesgo de celular desactualizado
El ref local `origin/main` apunta al commit `67e1428…`, que contiene otra arquitectura: enlaza manifiesto/archivos externos y registra `./sw.js`. Ese worker es cache-first y devuelve el `index.html` guardado sin revalidación. El último commit de esa cadena cambió `index.html` pero no cambió `sw.js`; por ello, un celular ya controlado puede conservar indefinidamente el HTML previo mientras la caché no sea borrada o el worker reemplazado.

Esto es una inferencia fuerte desde los objetos Git locales, pero **no permite afirmar qué ocurre hoy en el teléfono**. No se pudo comprobar:
- qué commit está publicado;
- HTTPS, MIME o cabeceras del hosting;
- worker y cachés existentes en el celular;
- si el usuario reinstaló o forzó actualización;
- si el ref local `origin/main` sigue igual al remoto actual.

---

## 5. Estado Git observable

`git.exe` no estaba disponible. El estado se reconstruyó en solo lectura desde `.git/index` v2, árboles, blobs y refs.

- Rama: `main`, visible en `.git/HEAD:1`.
- HEAD: `0ca7434ddcf105f00e74532e3284b9e19ee0832a`.
- Ref local `origin/main`: `67e1428b50caea87732a1390fa55e990dd8d47de`.
- HEAD local es ancestro ocho commits atrás del ref local `origin/main`.
- No se ejecutó `fetch`; el estado actual de GitHub no es comprobable.
- Cambios staged: ninguno.

```text
M  index.html
D  app.js
D  styles.css
D  sw.js

?? .vscode/settings.json
?? AUDITORIA_Y_SUBSANACION_ESTUDIO_INTELIGENTE_2.0.md.gdoc
?? app (1).js
?? app_BACKUP_v3.js
?? index_BACKUP_v3.html
?? styles (1).css
?? styles_BACKUP_v3.css
?? sw (1).js
?? sw_BACKUP_v3.js
```

No hay archivos ignorados presentes. Las únicas reglas observadas están en `.gitignore:1`.

Los cuatro backups v3 coinciden con los blobs del HEAD local. En cambio, los reemplazos `(1)` y el `index.html` monolítico no están consolidados en Git. Publicar desde la carpeta, desde HEAD o desde `origin/main` produciría tres aplicaciones diferentes.

---

## 6. Diseño móvil, UX y accesibilidad

Hallazgos principales:
- **Modales no accesibles:** son `<div>` sin `role="dialog"`, `aria-modal`, nombre accesible, trampa/retorno de foco ni cierre con Escape: `index.html:2634` y `styles (1).css:1559`.
- **Controles inaccesibles por teclado:** rangos laterales son `<span onclick>` y los días del calendario son `<div onclick>`, sin `tabindex` o equivalente: `index.html:2199` e `index.html:5529`.
- **Formularios sin etiqueta programática:** solo existen dos `<label>`, ambos sin `for`; los demás campos dependen de placeholder o contexto visual: `index.html:2837`.
- **Estados no anunciados:** toasts, tabs, acordeones y selecciones carecen de `aria-live`, `aria-selected`, `aria-pressed` y `aria-expanded`.
- **Contraste:** los CTA usan texto blanco sobre gradiente cian/azul; sus extremos calculan aproximadamente 2,43:1 y 3,68:1, inferiores a 4,5:1 para texto normal: `styles (1).css:608`.
- **Móvil:** a ≤860 px el layout pasa a una columna, pero el sidebar permanece antes del `<main>`. El usuario debe recorrer asignaturas, radar, retención y audio antes de llegar al estudio: `styles (1).css:1961` e `index.html:2079`.
- **Header invasivo:** es sticky, permite múltiples filas y ningún breakpoint lo compacta: `styles (1).css:70`.
- **Targets y texto pequeños:** cierres de modal de 32×32 px, botones de aproximadamente 0,7–0,76 rem y numerosas etiquetas de 0,60–0,68 rem: `styles (1).css:1617`.
- No existe `:focus-visible` general ni `prefers-reduced-motion`; el único foco destacado elimina el outline del textarea: `styles (1).css:1248`.
- El radar canvas no ofrece alternativa textual: `index.html:2180`.

Aspectos positivos: `lang="es"`, landmarks semánticos, `<h1>`, la mayoría de acciones como botones nativos, enlace externo con `noopener noreferrer` y zoom permitido hasta 5×. Existen breakpoints reales a 1180, 860 y 540 px.

No se comprobó render final, TalkBack, teclado virtual, notch ni comportamiento en un Xiaomi físico.

---

## 7. Riesgos ordenados por criticidad

| Nivel | Riesgo | Impacto |
|---|---|---|
| **Crítico condicionado** | Contenido normativo y “dictámenes” presentados como oficiales sin documento, edición, numeral, página ni fragmento recuperado. | Decisión ITO, rechazo de partidas, Libro de Obras o evaluación académica sustentados en evidencia inexistente. La exactitud de las normas no puede validarse desde el código. |
| **Crítico condicionado** | API key en `localStorage` + entradas XSS + scripts CDN con privilegios del documento. | Robo y abuso de la clave si se introduce una credencial real. |
| **Alto** | Gemini, RAG, agentes, YouTube, FSRS y Calendar Sync declarados como activos pero simulados. | Falsa confianza y decisiones basadas en capacidades inexistentes. |
| **Alto** | PWA actual desconectada y versión `origin/main` susceptible a caché obsoleta. | Celulares con una versión antigua o imposibilidad de instalar/actualizar coherentemente. |
| **Alto** | Árbol de trabajo, HEAD y `origin/main` representan versiones distintas. | Publicación accidental, pérdida de funcionalidades o sobrescritura de ocho commits locales observados en el ref remoto. |
| **Alto** | Modales, controles click-only, formularios y estados dinámicos inaccesibles. | Usuarios de teclado, lector de pantalla o control por interruptor no pueden operar partes esenciales. |
| **Medio** | Estado, XP, agenda, FSRS y telemetría solo en memoria; fechas fijas. | Pérdida al recargar y métricas académicas engañosas. |
| **Medio** | ICS posiblemente inválido, audio mal rotulado y fallbacks que insertan respuestas modelo. | Fallos silenciosos y resultados confundibles con funciones reales. |
| **Medio** | Datos personales y agenda dentro del código. | Exposición si el repositorio o hosting es público; no se verificó su visibilidad. |
| **Bajo** | Manifest sin `id`/`scope` explícitos, color distinto al HTML y sin icono maskable. | Identidad/experiencia de instalación menos controlada; actualmente queda subordinado a que el manifest ni siquiera está enlazado. |

No se cuantifica impacto financiero: el repositorio no contiene EDP, presupuesto, contrato ni datos para hacerlo.

---

## 8. Plan de reconstrucción por fases

1. **Gobernanza y línea base**  
   Elegir formalmente una única fuente: carpeta actual, HEAD o `origin/main`; identificar qué commit está desplegado y qué worker controla el celular. Resultado esperado: inventario reproducible y Git limpio antes de programar.

2. **Contención de seguridad**  
   Revocar o rotar claves usadas, eliminar ambas claves históricas del navegador y restringir cuotas/orígenes. Retirar `innerHTML` con datos no confiables, fijar o autoalojar dependencias y establecer CSP. No restaurar la integración Gemini v3.

3. **Arquitectura y PWA**  
   Normalizar `index.html`, `styles.css`, `app.js` y `sw.js`; eliminar duplicación inline/inactiva. Enlazar manifest, registrar un worker en la misma URL histórica y crear migración de cachés antiguas. Navegación network-first, activos versionados y aviso visible “Nueva versión disponible”.

4. **Capa documental verificable**  
   Crear un corpus autorizado con documento, organismo, edición, vigencia, página/numeral y hash. Toda respuesta normativa debe incluir fragmentos recuperados y abstenerse si no encuentra respaldo. El folio ITO no debe habilitarse sin evidencia y revisión humana.

5. **Gemini seguro y agentes reales**  
   Usar backend/proxy autenticado; la clave nunca debe residir en el navegador. Exigir salida estructurada con afirmación, cita, documento, página y nivel de confianza. Los cuatro roles deben consumir el mismo paquete documental, no inventar fuentes.

6. **Reconstrucción funcional**  
   Implementar lectura PDF real, indexación y chat con citas; transcripción YouTube mediante una fuente permitida; OAuth de Calendar o renombrar honestamente la función como exportación; FSRS real con persistencia e historial; fechas y recomendaciones calculadas.

7. **Móvil y accesibilidad**  
   Diálogos semánticos con foco/Escape, controles nativos, labels asociados, estados ARIA, `aria-live`, foco visible, contraste ≥4,5:1, targets adecuados, reducción de movimiento, header compacto y sidebar como drawer móvil.

8. **Verificación y liberación**  
   Probar unidad, integración, XSS, prompt injection, citas normativas y abstención; teclado, TalkBack, 320/360/390 px, modo avión y actualización de versión N−1 a N en un teléfono real. Solo después actualizar README y declarar producción.
