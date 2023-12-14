<script>
  import Titlebar from "$lib/components/Titlebar.svelte";
  import App from "$lib/components/App.svelte";

  let title = "Notes";

  const AppDetails = {
    height: "30rem",
    width: "35rem",
    inset: "1rem",
  };

  window.addEventListener("DOMContentLoaded", async (event) => {
    if (!("showOpenFilePicker" in window)) {
      showResult(
        "File System Access API not available in your browser. Try this sample in a compatible browser."
      );
      document.querySelector("#editor").style.display = "none";
    } else if (window.location !== window.parent.location) {
      showResult(
        "File System Access API doesn't work properly within an embedded iframe. <a href='#' target='_blank' rel='noopener noreferrer'>Right click on this link and open this sample in a new window or tab</a>"
      );
      document.querySelector("#editor").style.display = "none";
    }
  });

  let handler;

  async function openFile() {
    // Have the user select a file
    handler = (await window.showOpenFilePicker())[0];
    // Get the File object from the handler
    const file = await handler.getFile();
    // Get the file content.
    // Also available, slice(), stream(), arrayBuffer()
    const content = await file.text();
    // Put the contents in the textarea element
    document.querySelector("#contents").value = content;
    showResult("File loaded");
  }

  async function saveFile() {
    if (handler) {
      // Make a writable stream from the handler
      const writable = await handler.createWritable();
      // Write the contents of the file to the stream.
      const content = document.querySelector("#contents").value;
      await writable.write(content);
      // Close the file and write the contents to disk.
      await writable.close();
      showResult("File saved");
    } else {
      showResult("You need to open a file first");
    }
  }

  function showResult(text) {
    document.querySelector("output").innerHTML = text;
  }
</script>

<App {...AppDetails}>
  <Titlebar {title} />
  <div
    id="editor"
    class="content flex flex-col items-center justify-center p-1 pt-11 gap-1 w-full"
  >
    <textarea
      id="contents"
      class="h-full w-full bg-transparent border-0 rounded-[inherit] text-white [outline:0] [scrollbar-width:thin]"
      placeholder="create a new note or open an existing one"
    />
  </div>

  <button
    class="fixed top-2 right-20 text-white bg-[dodgerblue] rounded px-3 py-[0.2rem] text-sm transition duration-300 cursor-pointer hover:bg-[darkslateblue]"
    on:click={openFile}>Open File</button
  >
  <button
    class="fixed top-2 right-2 text-white bg-[dodgerblue] rounded px-3 py-[0.2rem] text-sm transition duration-300 cursor-pointer hover:bg-[darkslateblue]"
    on:click={saveFile}>Save</button
  >
</App>
