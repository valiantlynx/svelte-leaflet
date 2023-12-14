<script>
	import { getPocketbase } from '$lib/utils/api';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import Icon from '@iconify/svelte';

	/**
	 * @type {any}
	 */
	const socials = writable([]);

	onMount(async () => {
		const res = await getPocketbase('social', {});
		socials.set(res.items);
	});

	// Ensure the socials array stays reactive
	$: socials;
</script>

<div
	class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-6"
>
	{#each $socials as social (social.id)}
		<article class="relative group">
			<a class="block cursor-pointer" href={social.url}>
				<div
					class="bg-base-200 text-base-content rounded-lg shadow-md overflow-hidden flex items-center hover:animate-bounce"
				>
					<Icon
						icon={`ion:logo-${social.name}`}
						class="bg-primary text-primary-content  text-6xl p-6"
						width="100"
					/>
					<div class="ml-2 bg-base-200 text-xl font-semibold">
						{social.name}
					</div>
				</div>
			</a>
		</article>
	{/each}
</div>
