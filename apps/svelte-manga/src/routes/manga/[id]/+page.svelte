<script lang="ts">
	import { page } from '$app/stores';
	import Pagination from '$lib/components/Pagination.svelte';
	import Chapters from '$lib/components/Chapters.svelte';
	import MangaDetails from '$lib/components/MangaDetails.svelte';
	import {Breadcrumbs} from '@valiantlynx/svelte-ui';
	import ReadingProgress from '$lib/components/ReadingProgress.svelte';
	import Chat from '$lib/components/Chat.svelte';
	import ResponsiveBannerAd from '$lib/components/ResponsiveBannerAd.svelte';
	import Feedback from '$lib/components/feedback/Feedback.svelte';
	import SimilarManga from '$lib/components/chapterPage/SimilarManga.svelte';

	let data = $page.data.manga;

	let { id } = $page.params;

	const crumbs = [
		{
			name: 'Home',
			url: '/'
		},
		{
			name: 'Manga',
			url: '/manga'
		},
		{
			name: data.title,
			url: '/manga/' + id
		}
	];

	// get every sentence and word in the description. into an array. so that i can use as keywords
	let description = data.description?.split(' ');
	let descriptionArray: any = [];
	let sentence = '';

	// loop through the description array and add each word to the sentence
	for (let i = 0; i < description?.length; i++) {
		sentence += description[i] + ' ';

		// if the sentence is longer than 50 characters, add it to the array and reset the sentence
		if (sentence.length > 50) {
			descriptionArray.push(sentence);
			sentence = '';
		}
	}

	// if there are any words left in the sentence, add it to the array
	if (sentence.length > 0) {
		descriptionArray.push(sentence);
	}

	// if the last sentence is longer than 50 characters, split it into two sentences
	if (descriptionArray[descriptionArray.length - 1]?.length > 50) {
		let lastSentence = descriptionArray[descriptionArray.length - 1];
		descriptionArray[descriptionArray.length - 1] = lastSentence.slice(0, 50);
		descriptionArray.push(lastSentence.slice(50));
	}

	// if the last sentence is shorter than 50 characters, add the next sentence to it
	if (descriptionArray[descriptionArray.length - 1]?.length < 50) {
		let lastSentence = descriptionArray[descriptionArray.length - 1];
		descriptionArray[descriptionArray.length - 1] =
			lastSentence + descriptionArray[descriptionArray.length];
		descriptionArray.pop();
	}

</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
	<meta name="keywords" content={data.author + ',' + data.title + ',' + descriptionArray} />
	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.description} />
	<meta property="og:image" content={$page.url.origin + '/api' + data.img} />
	<meta property="og:url" content={$page.url.origin + '/manga/' + $page.params.id} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@animevariant" />
	<meta name="twitter:title" content={data.title} />
	<meta name="twitter:description" content={data.description} />
	<meta name="twitter:image" content={$page.url.origin + '/api' + data.img} />
	<meta name="twitter:url" content={$page.url.origin + '/manga/' + $page.params.id} />
	<meta name="twitter:domain" content={$page.url.origin + '/manga/' + $page.params.id} />
	<meta name="twitter:creator" content="@animevariant" />
	<meta name="twitter:image:alt" content={data.title} />
	<meta name="twitter:label5" content="Total Chapters" />
	<meta name="twitter:data5" content={data.episodes.length} />
</svelte:head>

<main class="">
	<Breadcrumbs {crumbs} />
	<h1 class="text-3xl font-bold mb-6 text-center">{data.title}</h1>
	<div class="grid grid-cols-1 gap-4 p-3 w-full h-full justify-center">
		<MangaDetails />
		<ResponsiveBannerAd />
		<Chapters />
		<Pagination />
		<ResponsiveBannerAd />
		<Chat />
		<SimilarManga />
		<ResponsiveBannerAd />
		<ReadingProgress />
		<ResponsiveBannerAd />
	</div>

</main>
<Feedback />
