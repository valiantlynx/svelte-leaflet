<script lang="ts">
	import {ContentCardImage} from '@valiantlynx/svelte-ui';
	import { page } from '$app/stores';
	import AnimevariantGridAds from './AnimevariantGridAds.svelte';
	import PaginationSimple from './PaginationSimple.svelte';
</script>

<main class="bg-base-200 mb-4 border border-primary">
	<h2 class="text-2xl font-bold text-start  bg-primary rounded-b-lg text-primary-content">
		<i class="fa fa-fire-alt mx-4"></i>
		Latest Manga
	</h2>
	<div class="col-span-full flex justify-end w-full px-4">
		<PaginationSimple action="?/latest" disabled={!$page.data.latestMangas} />
	</div>
	<div class="mx-auto container gap-y-6 gap-x-4 px-4">
		{#each ($page.form?.latestMangas ? $page.form?.latestMangas : $page.data.latestMangas) as manga}
		
			<ContentCardImage 
			link={$page.url.origin + '/manga/' + manga.id}
			img={manga.img}
			alt={manga.title}
			label1={manga.author[0]}
			label2={manga.latestChapter}
			title={manga.title}
			 >
				<div class="rating rating-sm">
					<label class="cursor-auto text-secondary" for="rating-8">{manga.rating}</label>
					<input type="radio" name="rating-8" class="mt-1 mask mask-star-2 bg-info" checked />
				</div>
			</ContentCardImage>
		{/each}
	</div>
	<div class="col-span-full flex justify-end w-full px-4">
		<PaginationSimple action="?/latest" disabled={!$page.data.latestMangas} />
	</div>
	<AnimevariantGridAds />
</main>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
	}
</style>
