<script>
  import Titlebar from "$lib/components/Titlebar.svelte";
  import App from "$lib/components/App.svelte";
  let title = "Visual Studio Code";
  const AppDetails = {
    height: "50rem",
    width: "85rem",
    inset: "1rem",
  };
</script>

<App {...AppDetails}>
  <Titlebar {title} />
  <div class="vscode activeShadow">
    <div class="mainApp">
      <iframe
        title="VS Code"
        src="https://stackblitz.com/github/yashash-pugalia/win11-svelte?embed=1&file=src/App.svelte"
        frameborder="0"
      />
    </div>
  </div>
</App>

<style>
  .vscode {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #1e1e1e;
    border-radius: 0.5rem;
    overflow: hidden;
  }
  .mainApp {
    margin-top: 2rem;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #1e1e1e;
    border-radius: 0.5rem;
    overflow: hidden;
  }
  iframe {
    height: 100%;
    width: 100%;
    border: none;
  }
</style>