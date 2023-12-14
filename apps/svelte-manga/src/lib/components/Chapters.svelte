<script lang="ts">
	import ChapterCard from './ChapterCard.svelte';
	import ResponsiveBannerAd from './ResponsiveBannerAd.svelte';
	import { page } from '$app/stores';
	let { id } = $page.params;
</script>

<div class="w-full">
	<!-- chapters -->
	<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
		{#each  ( $page.form?.chaptersToShow ? $page.form?.chaptersToShow : $page.data.chaptersToShow) as chapter}
			<ChapterCard {chapter} url={`/manga/${id}/${chapter.chapterId}`} />
		{/each}
		<ResponsiveBannerAd />
	</div>
</div>
