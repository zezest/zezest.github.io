---
layout: null
---

var filesToCache = [
  "/",
  {% for asset in site.static_files %} {% if asset.path contains '/assets/' %}
  "{{ asset.path }}",
  {% endif %}{% endfor %}
  {% for post in site.posts %}
  "{{ post.url }}",
  {% endfor %}
  {% for page in site.html_pages %}
  "{{ page.url }}",
  {% endfor %}
  "/index.html",
  "/goLang.html",
  "/tags.html",
  "/404.html"
];

var CACHE_NAME = 'zeze-cache-v1';

self.addEventListener('install', function(e) {
  self.skipWaiting();
  console.log('[ServiceWorker] Install');
  // Perform install steps
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("activate", function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith("zeze-cache-") && cacheName != CACHE_NAME;
        }).map(function(cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return cache.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});