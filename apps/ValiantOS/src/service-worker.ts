/// <reference types="@sveltejs/kit" />
/// <reference lib="webworker" />

declare let self: ServiceWorkerGlobalScope;

import { build, files, version } from "$service-worker";

const CACHE = `cache=${version}`;

const ASSETS = [...build, ...files];

// install the service worker
self.addEventListener("install", (event) => {
  async function addFilesToCache() {
    const cache = await caches.open(CACHE);
    await cache.addAll(ASSETS);
  }

  event.waitUntil(addFilesToCache());
});

// activate the service worker
self.addEventListener("activate", (event) => {
  async function deleteOldCaches() {
    for (const key of await caches.keys()) {
      if (key !== CACHE) {
        await caches.delete(key);
      }
    }
  }
  event.waitUntil(deleteOldCaches());
});

// listen to fetch event
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  async function response() {
    const url = new URL(event.request.url);
    const cache = await caches.open(CACHE);

    // serve build files from the cache
    if (ASSETS.includes(url.pathname)) {
      const cachedResponse = await cache.match(url.pathname);
      if (cachedResponse) {
        return cachedResponse;
      }
    }

    //try the network first
    try {
      const response = await fetch(event.request);

      const isNotExtension = url.protocol == "http:";
      const isSuccess = response.status == 200;

      if (isNotExtension && isSuccess) {
        cache.put(event.request, response.clone());
      }

      return response;
    } catch {
      // fallback to cache
      const cachedResponse = await cache.match(url.pathname);
      if (cachedResponse) {
        return cachedResponse;
      }
    }

    return new Response("Not Found", { status: 404 });
  }

  event.respondWith(response());
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type == "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// self.addEventListener('sync', event => {
// 	if (event.tag === "sync-messages") {
// 		event.waitUntil(sendOutboxMessages());
// 	  }
// })

// self.addEventListener("periodicsync", (event) => {
//   if (event.tag === "get-latest-news") {
//     event.waitUntil(fetchAndCacheLatestNews());
//   }
// });

// Background Fetch API provides a method for managing downloads that may take a significant amount of time such as
// movies, audio files, and software.
if (!("BackgroundFetchManager" in self)) {
  // Provide fallback downloading.
}

self.addEventListener(
	"notificationclick",
	(event) => {
	  event.notification.close();
	  if (event.action === "archive") {
		// User selected the Archive action.
		console.log("archive");
	  } else if (event.action === "hello") {
		console.log("hello");
	  } else {
		
		// User selected (e.g., clicked in) the main body of notification.
		console.log("open");
		const clients = self.clients as unknown as Clients;
		clients.openWindow("/desktop");
	  }
	},
	false,
  );