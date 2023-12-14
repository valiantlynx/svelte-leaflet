<script>
    import { page } from "$app/stores";

    let data = $page.data.manga;
    let currentChapterIndex;
    $: currentChapterIndex = $page.data.currentChapterIndex
    export let readingMode;

    const readingModeSelect = ['longstrip', 'grid', 'paginated'];
</script>

<div class="flex flex-wrap">
    <div class="left-content order-1 ml-auto md:order-2">
    <!-- Previous and Next Chapter Buttons -->
    <form class="space-x-4 m-4">
        <a href={`/manga${data.chapters[currentChapterIndex]?.value}`} class="px-4 py-2 rounded-lg btn btn-primary" on:click={() => currentChapterIndex++}>
            Previous Chapter
        </a>
        {#if currentChapterIndex === 0}
        <a href={`/manga/${$page.params.id}`} class="px-4 py-2 rounded-lg btn btn-secondary">
            Manga Details
        </a>
        {:else}
        <a href={`/manga${data.chapters[currentChapterIndex]?.value}`} class="px-4 py-2 rounded-lg btn btn-primary" on:click={() => currentChapterIndex--}>
            Next Chapter
        </a>
        {/if}
    </form>
        
    </div>

    <div class="right-content order-2   md:order-1">
            <!-- Reading Mode Selection -->
            <select class="select select-primary m-4" bind:value={readingMode}>
                <option disabled selected>Select reading mode?(longstrip)</option>
                {#each readingModeSelect as mode}
                <option value={mode}>{mode}</option>
                {/each}
            </select>
            <!-- Chapters Selection -->
            <select class="select select-primary my-4" bind:value={$page.params.chapterid}>
                <option disabled selected>{$page.params.chapterid}</option>
            </select>
    </div>
</div>