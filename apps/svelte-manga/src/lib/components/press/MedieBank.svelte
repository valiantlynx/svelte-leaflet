<script>
	import { getPocketbase } from '$lib/utils/api';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { getImageURL } from '$lib/utils/api';
	import DOMPurify from 'dompurify';

	import { JSDOM } from 'jsdom';

	const window = new JSDOM('').window;
	const purify = DOMPurify(window);

	/**
	 * @type {any}
	 */
	const mediabank = writable([]);

	onMount(async () => {
		const res = await getPocketbase('mediabank', {});
		mediabank.set(res.items);
	});

	// make the mediabank array reactive
	$: sanitizedMediabank = $mediabank.map((media) => ({
		...media,
		name: purify.sanitize(media.name),
		details: purify.sanitize(media.details)
	}));
</script>

<div class="flex flex-wrap -m-2 mt-6">
	{#each $sanitizedMediabank as media}
		<article class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
			<a class="block cursor-pointer" href={getImageURL(media.collectionId, media.id, media.asset)}>
				<div class="relative bg-primary text-primary-content rounded-lg shadow-md overflow-hidden">
					<div
						class="bg-current bg-center bg-no-repeat h-40 bg-contain"
						style="background-image: url({getImageURL(media.collectionId, media.id, media.asset)});"
					/>
					<header class="p-4">
						<h3 class="text-xl font-semibold">{media.name}</h3>
						<p class="text-sm">{media.details}</p>
					</header>
				</div>
			</a>
		</article>
	{/each}
</div>
