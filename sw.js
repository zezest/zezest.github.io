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

  // Perform install steps
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('Opened cache');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("activate", function(e) {
  e.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith("zeze-cache-") && cacheName != CACHE_NAME;
        }).map(function(cacheName) {
          return cache.delete(cacheName);
        })
      )
    })
  )
});

self.addEventListener("fetch", function(e){
  e.respondWith(
     caches.match(e.request).then(function(response) {
       return response || fetch(e.request);
     })
   )
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.match(e.request).then(function(response) {
        return response || fetch(e.request).then(function(response) {
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      return fetch(e.request).then(function(response) {
        cache.put(e.request, response.clone());
        return response;
      });
    })
  );
});