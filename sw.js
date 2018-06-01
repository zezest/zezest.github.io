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
];

var CACHE_NAME = 'zeze-cache-v1';

self.addEventListener('install', function(e) {
  self.skipWaiting();
  // console.log('[ServiceWorker] Install');
  // Perform install steps
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      // console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("activate", function(e) {
  // console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith("zeze-cache-") && cacheName != CACHE_NAME;
        }).map(function(cacheName) {
          // console.log('[ServiceWorker] Removing old cache', key);
          return cache.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - return response
      if (response) {
        return response;
      }

      // IMPORTANT: Clone the request. A request is a stream and
      // can only be consumed once. Since we are consuming this
      // once by cache and once by the browser for fetch, we need
      // to clone the response.
      var fetchRequest = event.request.clone();

      return fetch(fetchRequest).then(
        function(response) {
          // Check if we received a valid response
          if(!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // IMPORTANT: Clone the response. A response is a stream
          // and because we want the browser to consume the response
          // as well as the cache consuming the response, we need
          // to clone it so we have two streams.
          var responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(function(cache) {
              cache.put(event.request, responseToCache);
            });

          return response;
        }
      );
    })
  );
});