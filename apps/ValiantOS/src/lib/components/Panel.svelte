<script>
  import { fly } from "svelte/transition";
  import { openedApps } from "../store";
  import Launcher from "./Launcher.svelte";
  import Date from "./Date.svelte";
  import Shutdown from "./Shutdown.svelte";
  import IconArch from "$lib/icons/IconArch.svelte";
  import IconPower from "$lib/icons/IconPower.svelte";
  import IconNotification from "../icons/IconNotification.svelte";

  const check = (appName) => {
    for (let i = 0; i < $openedApps.length; i++) {
      if ($openedApps[i].id === appName) {
        return false;
      }
    }
  };

  const openApp = (App, Name) => {
    if ($openedApps.length === 0 || check(Name) !== false) {
      $openedApps = [...$openedApps, { id: Name, app: App }];
    } else {
      $openedApps = $openedApps.filter((item) => item.id !== Name);
    }
  };

  async function requestNotificationPermission() {
    if (!("Notification" in window)) {
      // Check if the browser supports notifications
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      await showNotification("Hi there!", {
        actions: [
          {
            action: "hello",
            title: "say hello",
          },
        ],
        body: "How are you doing?",
        icon: "logo.svg",
        vibrate: [200, 100, 200, 100, 200, 100, 200],
        requireInteraction: true,
        renotify: true,
        image: "og.png",
        tag: "notification-sample",
        lang: "en",
        dir: "ltr",
        badge: "logo.svg",
        sound: "mixkit-bubble-pop-up-alert-notification-2357.wav",
      });
    } else if (Notification.permission !== "denied") {
      // We need to ask the user for permission
      Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          const notification = new Notification("Hi there!");
          // …
        }
      });
    }

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them anymore.
  }

  // example notification
  async function showNotification(message, options) {
    const registration = await navigator.serviceWorker.ready;
    // Show a notification that includes an action titled Archive.
    registration.showNotification(message, options);
  }
</script>

<div
  id="title-bar"
  class="panel flex items-center justify-between xl:flex-col
    h-9 w-[100dvw] xl:w-10 xl:h-[calc(100dvh-2rem)] px-4 xl:py-4 xl:ml-3
    fixed top-0 xl:top-1/2 xl:-translate-y-1/2
    xl:border border-gray-600
    backdrop-blur bg-[#000000a3] xl:rounded-lg text-white"
  in:fly={{ y: -50, delay: 300 }}
>
  <button
    class="transition cursor-pointer"
    on:click={() => {
      openApp(Launcher, "Launcher");
    }}
  >
    <IconArch />
  </button>

  <Date />

  <div class="flex flex-wrap">
    <button
      class="transition cursor-pointer xl:mb-5 mr-5 xl:mr-0"
      on:click={requestNotificationPermission}
    >
      <IconNotification />
    </button>
    <button
      on:click={() => {
        openApp(Shutdown, "Shutdown");
      }}
    >
      <IconPower />
    </button>
  </div>
</div>

<style>
  #title-bar {
    -webkit-app-region: drag;
  }
</style>
