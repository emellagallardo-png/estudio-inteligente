/**
 * ==========================================================================
 * SECURITY.JS · MÓDULO DE SEGURIDAD ESTUDIO INTELIGENTE 2.0
 * Fase 2 · Plan de Reconstrucción Luna 5.6
 * Responsable: Claude Sonnet 4.6 (Thinking) · Agente MEGA 2.0
 * Fecha: 21 de Octubre de 2026
 * --------------------------------------------------------------------------
 * Resuelve:
 *   1. Sanitización de entradas de usuario antes de insertar en el DOM.
 *   2. Almacenamiento seguro de API Key en memoria de sesión (no localStorage).
 *   3. Helper seguro `setHTML()` como reemplazo controlado de innerHTML.
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// A. ALMACÉN SEGURO EN MEMORIA (NO localStorage)
// La API Key nunca toca el disco ni el localStorage del navegador.
// Se destruye automáticamente al cerrar la pestaña.
// --------------------------------------------------------------------------
const SecureVault = (() => {
  let _key = null;
  let _model = 'gemini-2.0-flash';

  return {
    setKey(key)   { _key = String(key).trim(); },
    getKey()      { return _key; },
    clearKey()    { _key = null; },
    hasKey()      { return _key !== null && _key.length > 15; },
    setModel(m)   { _model = String(m).trim(); },
    getModel()    { return _model; }
  };
})();

// --------------------------------------------------------------------------
// B. SANITIZADOR ESTRICTO DE TEXTO (escapa entidades HTML)
// Uso: en cualquier lugar donde se muestre texto del usuario en el DOM.
// NUNCA insertar texto de usuario con innerHTML sin pasar por esta función.
// --------------------------------------------------------------------------
function escapeHTML(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/\//g, '&#x2F;');
}

// --------------------------------------------------------------------------
// C. HELPER SEGURO setHTML()
// Solo admite plantillas internas de desarrollador. La salida de IA y los datos
// de usuario son NO confiables: deben renderizarse con nodos y textContent.
// --------------------------------------------------------------------------
function setHTML(element, trustedHTML) {
  if (!element) return;
  // Este helper NO sanitiza HTML; no usarlo con datos externos.
  element.innerHTML = '';
  element.insertAdjacentHTML('beforeend', trustedHTML);
}

// --------------------------------------------------------------------------
// D. INICIALIZACIÓN: MIGRACIÓN DE CLAVE HISTÓRICA EN localStorage
// Si el usuario tenía una clave guardada anteriormente, se migra a memoria
// y se borra definitivamente de localStorage.
// --------------------------------------------------------------------------
function migrateAndClearLegacyKeys() {
  const legacyKeys = ['mega_ai_studio_key', 'MEGA_AI_STUDIO_KEY'];
  legacyKeys.forEach(k => {
    const val = localStorage.getItem(k);
    if (val) {
      // Si no hay clave en memoria aún, migrar
      if (!SecureVault.hasKey()) {
        SecureVault.setKey(val);
        console.info('[SecureVault] Clave migrada desde localStorage a memoria segura de sesión.');
      }
      localStorage.removeItem(k);
    }
  });

  const legacyModel = localStorage.getItem('mega_ai_model');
  if (legacyModel) {
    SecureVault.setModel(legacyModel);
    localStorage.removeItem('mega_ai_model');
  }
}
