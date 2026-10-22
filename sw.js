const APP_VERSION = '2.0.0-PROD';
const CACHE_PREFIX = 'estudio-inteligente-';
const CACHE_NAME = `${CACHE_PREFIX}${APP_VERSION}`;
const LEGACY_CACHE_NAMES = new Set([
  'estudio-inteligente-cache',
  'estudio-inteligente-v1-cache',
  'estudio-inteligente-v2-cache',
  'estudio-inteligente-v3-cache'
]);
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json?v=2.0.0-PROD',
  './styles.css?v=2.0.2-PROD',
  './security.js?v=2.0.0-PROD',
  './src/corpus.js?v=2.0.0-PROD',
  './src/gemini-client.js?v=2.0.0-PROD',
  './src/fsrs.js?v=2.0.0-PROD',
  './src/pdf-viewer.js?v=2.0.0-PROD',
  './src/curriculum.js?v=2.0.0-PROD',
  './src/reference-ui.js?v=2.0.0-PROD',
  './app.js?v=2.0.0-PROD',
  './pwa.js?v=2.0.0-PROD',
  './app-icon.svg',
  './icons/app-192.png',
  './icons/app-512.png'
];
const CACHEABLE_DESTINATIONS = new Set([
  'document',
  'font',
  'image',
  'manifest',
  'script',
  'style'
]);

self.addEventListener('install', (event) => {
  event.waitUntil(
    precacheApplication().catch((error) => {
      console.error('[Service Worker] Falló el precache de la aplicación.', error);
      throw error;
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(migrateApplicationCaches());
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (
    request.method !== 'GET' ||
    url.origin !== self.location.origin ||
    (!CACHEABLE_DESTINATIONS.has(request.destination) && request.mode !== 'navigate')
  ) {
    return;
  }

  event.respondWith(networkFirst(request));
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

async function precacheApplication() {
  const cache = await caches.open(CACHE_NAME);

  await Promise.all(PRECACHE_ASSETS.map(async (asset) => {
    const request = new Request(asset, { cache: 'reload' });
    const response = await fetch(request);

    if (!response.ok) {
      throw new Error(`No se pudo precachear ${asset}: HTTP ${response.status}`);
    }

    await cache.put(request, response);
  }));

  const cacheNames = await caches.keys();
  if (cacheNames.some((name) => LEGACY_CACHE_NAMES.has(name))) {
    await self.skipWaiting();
  }
}

async function migrateApplicationCaches() {
  const cacheNames = await caches.keys();
  const migratesLegacyWorker = cacheNames.some((name) => LEGACY_CACHE_NAMES.has(name));
  const obsoleteApplicationCaches = cacheNames.filter((name) => (
    name !== CACHE_NAME &&
    (name.startsWith(CACHE_PREFIX) || LEGACY_CACHE_NAMES.has(name))
  ));

  await Promise.all(obsoleteApplicationCaches.map((name) => caches.delete(name)));
  await self.clients.claim();

  if (migratesLegacyWorker) {
    const windowClients = await self.clients.matchAll({ type: 'window' });
    await Promise.all(windowClients.map((client) => client.navigate(client.url)));
  }
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const response = await fetch(request);

    if (response.ok) {
      await cache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    if (request.mode === 'navigate') {
      const offlineShell = await caches.match('./index.html');
      if (offlineShell) {
        return offlineShell;
      }
    }

    return new Response('Sin conexión y sin una copia local disponible.', {
      status: 503,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
}
