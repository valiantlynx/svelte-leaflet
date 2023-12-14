<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	let data: any;
	$: data = $page.data.manga;
	let imageWidth: string;

	function setImageWidth(mode: string) {
		window.localStorage.setItem('imageWidth', mode);
		imageWidth = window.localStorage.getItem('imageWidth') || '3/5';
	}

	onMount(() => {
		// create a image width local storage
		if (window.localStorage.getItem('imageWidth') === null) {
			window.localStorage.setItem('imageWidth', '3/4');
		}
		imageWidth = window.localStorage.getItem('imageWidth') || '3/5';
	});
</script>

<div class="flex flex-wrap justify-center max-w-full mx-auto">
	<div class="w-full">
		<!-- Images width selection between full or 3/5 -->
		<div class="mb-4 flex justify-center space-x-4">
			<button
				class="px-4 py-2 rounded-lg btn btn-primary"
				on:click={() => setImageWidth('full')}
			>
				Full
			</button>

			<button
				class="px-4 py-2 rounded-lg btn btn-primary"
				on:click={() => setImageWidth('3/5')}
			>
				Medium
			</button>
		</div>
	</div>
	{#each data?.images as image}
		<div class={imageWidth == 'full' ? 'w-full' : 'w-full lg:w-3/5'}>
			<img
				src={image.imageUrl}
				alt={`${data.title} ${$page.params.chapterid} Page ${image.pageNumber}`}
				class="w-full rounded-lg shadow-md"
			/>
		</div>
	{/each}
</div>
