(() => {
  'use strict';

  const updateNotice = document.getElementById('pwa-update-notice');
  const updateAction = document.getElementById('pwa-update-action');
  let updateRegistration = null;
  let reloadRequested = false;

  if (!('serviceWorker' in navigator) || !window.isSecureContext) {
    return;
  }

  function showUpdateNotice(registration) {
    if (!registration.waiting || !updateNotice || !updateAction) {
      return;
    }

    updateRegistration = registration;
    updateAction.disabled = false;
    updateAction.textContent = 'Actualizar ahora';
    updateNotice.classList.remove('hidden');
  }

  function watchInstallingWorker(registration) {
    const installingWorker = registration.installing;
    if (!installingWorker) {
      return;
    }

    installingWorker.addEventListener('statechange', () => {
      if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
        showUpdateNotice(registration);
      }
    });
  }

  async function registerServiceWorker() {
    try {
      const registration = await navigator.serviceWorker.register('./sw.js', {
        scope: './',
        updateViaCache: 'none'
      });

      if (registration.waiting && navigator.serviceWorker.controller) {
        showUpdateNotice(registration);
      }

      registration.addEventListener('updatefound', () => watchInstallingWorker(registration));
      registration.update().catch((error) => {
        console.warn('[PWA] No fue posible comprobar actualizaciones.', error);
      });
    } catch (error) {
      console.warn('[PWA] No fue posible registrar el Service Worker.', error);
    }
  }

  updateAction?.addEventListener('click', () => {
    if (!updateRegistration?.waiting) {
      return;
    }

    updateAction.disabled = true;
    updateAction.textContent = 'Actualizando…';
    updateRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
  });

  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (reloadRequested) {
      return;
    }

    reloadRequested = true;
    window.location.reload();
  });

  window.addEventListener('load', registerServiceWorker, { once: true });
})();
