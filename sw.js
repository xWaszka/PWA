self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("pwa-cache").then(cache => {
            return cache.addAll([
                "index.html",
                "mapa.html",
                "sos.html",
                "manifest.json",
                "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
                "https://unpkg.com/leaflet/dist/leaflet.css",
                "https://unpkg.com/leaflet/dist/leaflet.js"
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
