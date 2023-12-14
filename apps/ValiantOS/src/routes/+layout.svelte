<script>
  import "$lib/styles/app.css";
  import "$lib/styles/tailwind.css";
  import { onMount } from "svelte";

  async function detectServiceWorkerUpdate() {
    const registration = await navigator.serviceWorker.ready;

    registration.addEventListener("updatefound", () => {
      const newServiceWorker = registration.installing;
      newServiceWorker?.addEventListener("statechange", () => {
        if (newServiceWorker.state == "installed") {
          // TODO: Add badge to show unread notifications
          let unreadCount = 1;
          navigator.setAppBadge(unreadCount);
          if (confirm("New update Available! Reload to update")) {
            navigator.clearAppBadge();
            // skipWaiting() will force the waiting ServiceWorker to become the active ServiceWorker
            newServiceWorker.postMessage({ type: "SKIP_WAITING" });
            window.location.reload;
          }
        }
      });
    });
  }

  //Background Synchronization API enables a web app to defer tasks so that they can
  // be run in a service worker once the user has a stable network connection
  async function syncMessagesLater(message) {
    const registration = await navigator.serviceWorker.ready;
    try {
      await registration.sync.register(message);
    } catch {
      console.log("Background Sync could not be registered!");
    }
  }
  async function checkSyncStatus(message) {
    const registration = await navigator.serviceWorker.ready;
    const tags = await registration.sync.getTags();
    if (tags.includes(message)) {
      console.log("Messages sync already requested");
    }
  }

  // Periodic Sync API enables a web app to schedule a background sync
  async function registerPeriodicNewsCheck() {
    const registration = await navigator.serviceWorker.ready;
    try {
      await registration.periodicSync.register("get-latest-news", {
        minInterval: 24 * 60 * 60 * 1000, // 1 day
      });
    } catch {
      console.log("Periodic Sync could not be registered!");
    }
  }
  async function checkPeriodicSyncStatus() {
    const registration = await navigator.serviceWorker.ready;
    const tags = await registration.periodicSync.getTags();
    if (tags.includes("get-latest-news")) {
      console.log("Periodic Sync already requested");

    }
  }

  // removes a Periodic Background Sync task to stop articles syncing in the background.
  async function unregisterPeriodicNewsCheck() {
    const registration = await navigator.serviceWorker.ready;
    try {
      await registration.periodicSync.unregister("get-latest-news");
    } catch {
      console.log("Periodic Sync could not be unregistered!");
    }
  }

  // Background Fetch API enables a web app to download assets in the background
  // and handle the completion of the download in a Service Worker.
  async function registerBackgroundFetch() {
    const registration = await navigator.serviceWorker.ready;
    try {
      const bgFetch = await registration.backgroundFetch.fetch(
        "my-fetch",
        ["/divewithme.mp3", "og.png"],
        {
          title: "Episode 5: dive with me music.",
          icons: [
            {
              sizes: "300x300",
              src: "/divewithme.avif",
              type: "image/avif",
            },
          ],
          downloadTotal: 60 * 1024 * 1024, // 60 MB
        },
      );
    } catch {
      console.log("Background Fetch could not be registered!");
    }
  }

  // get related installed apps
  async function getInstalledApps() {
    const relatedApps = await navigator.getInstalledRelatedApps();
    const PWAisInstalled = relatedApps.length > 0;
    console.log("PWA is installed: " + PWAisInstalled, relatedApps);
  }

 
  
  onMount(async () => {
    detectServiceWorkerUpdate();
    getInstalledApps();
  });
</script>

<slot />
