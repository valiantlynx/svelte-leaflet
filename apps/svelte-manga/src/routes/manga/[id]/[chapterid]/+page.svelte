<script lang="ts">
	import { page } from '$app/stores';
	import {ScrollToTop, Breadcrumbs} from '@valiantlynx/svelte-ui';
	import LongstripReadingMode from '$lib/components/LongstripReadingMode.svelte';
	import GridReadingMode from '$lib/components/GridReadingMode.svelte';
	import PaginatedReadingMode from '$lib/components/PaginatedReadingMode.svelte';
	import Chat from '$lib/components/Chat.svelte';
	import Share from '$lib/components/share/Share.svelte';
	import PageControls from '$lib/components/chapterPage/PageControls.svelte';
	import SimilarManga from '$lib/components/chapterPage/SimilarManga.svelte';

	let data = $page.data.manga;
	let readingMode = 'longstrip'; // Default reading mode

	let crumbs: any[] = [];
	$: crumbs = [
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
			url: `/manga/${$page.params.id}`
		},
		{
			name: $page.params.chapterid,
			url: `/manga/${$page.params.id}/${$page.params.chapterid}`
		}
	];
</script>

<svelte:head>
	<title>{data.title + ' - ' + $page.params.chapterid + ' - ' + $page.url.hostname}</title>
	<meta
		name="description"
		content={`${data.title} ${$page.params.chapterid} ${$page.data.siteName}, read ${data.title} ${$page.params.chapterid} ${$page.data.siteName} online, ${data.title} ${$page.params.chapterid} ${$page.data.siteName} free online, ${data.title} ${$page.params.chapterid} ${$page.data.siteName} free online, ${data.title} ${$page.params.chapterid} ${$page.data.siteName} high quality, ${data.title} ${$page.params.chapterid} ${$page.data.siteName} manga scans, ${data.title} ${$page.params.chapterid} ${$page.data.siteName} manga scan`}
	/>
	<meta
		name="keywords"
		content={data.title +
			', ' +
			data.title +
			' ' +
			$page.params.chapterid +
			', ' +
			data.title +
			' ' +
			$page.params.chapterid +
			' ' +
			$page.url.hostname +
			',' +
			`${data.title} ${$page.params.chapterid} ${$page.data.siteName}, read ${data.title} ${$page.params.chapterid} ${$page.data.siteName} online, ${data.title} ${$page.params.chapterid} ${$page.data.siteName} free online, ${data.title} ${$page.params.chapterid} ${$page.data.siteName} free online, ${data.title} ${$page.params.chapterid} ${$page.data.siteName} high quality, ${data.title} ${$page.params.chapterid} ${$page.data.siteName} manga scans, ${data.title} ${$page.params.chapterid} ${$page.data.siteName} manga scan`}
	/>
	<meta
		property="og:title"
		content={data.title + ' ' + $page.params.chapterid + ' ' + $page.url.hostname}
	/>
	<meta
		property="og:description"
		content={`${data.title} ${$page.params.chapterid} ${$page.data.siteName}, read ${data.title} ${$page.params.chapterid} ${$page.data.siteName} online, ${data.title} ${$page.params.chapterid} ${$page.data.siteName} free online, ${data.title} ${$page.params.chapterid} ${$page.data.siteName} free online, ${data.title} ${$page.params.chapterid} ${$page.data.siteName} high quality, ${data.title} ${$page.params.chapterid} ${$page.data.siteName} manga scans, ${data.title} ${$page.params.chapterid} ${$page.data.siteName} manga scan`}
	/>
	<meta property="og:image" content={data?.images[0].imageUrl} />
	<meta property="og:url" content={$page.url.href} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@animevariant" />
	<meta
		name="twitter:title"
		content={data.title + ' ' + $page.params.chapterid + ' ' + $page.url.hostname}
	/>
	<meta
		name="twitter:description"
		content={`${data.title} ${$page.params.chapterid} ${$page.data.siteName}, read ${data.title} ${$page.params.chapterid} ${$page.data.siteName} online, ${data.title} ${$page.params.chapterid} ${$page.data.siteName} free online, ${data.title} ${$page.params.chapterid} ${$page.data.siteName} free online, ${data.title} ${$page.params.chapterid} ${$page.data.siteName} high quality, ${data.title} ${$page.params.chapterid} ${$page.data.siteName} manga scans, ${data.title} ${$page.params.chapterid} ${$page.data.siteName} manga scan`}
	/>
	<meta name="twitter:image" content={data?.images[0].imageUrl} />
	<meta name="twitter:url" content={$page.url.href} />
	<meta name="twitter:domain" content={$page.url.href} />
	<meta name="twitter:creator" content="@animevariant" />
	<meta
		name="twitter:image:alt"
		content={data.title + ' ' + $page.params.chapterid + ' ' + $page.url.hostname}
	/>
	<meta name="twitter:label4" content="Total Pages" />
	<meta name="twitter:data4" content={data.images.length} />
	<meta name="twitter:label5" content="Total Chapters" />
	<meta name="twitter:data5" content={data.chapters?.length} />
</svelte:head>

<main class="bg-base-100">
	<Breadcrumbs {crumbs} />
	<h1 class="text-3xl font-bold mb-6 text-center">{data.title} {$page.params.chapterid}</h1>

	<PageControls bind:readingMode />
	<!-- Images Display -->
	{#if readingMode === 'longstrip'}
		<LongstripReadingMode />
	{/if}

	{#if readingMode === 'grid'}
		<GridReadingMode />
	{/if}

	{#if readingMode === 'paginated'}
		<PaginatedReadingMode />
	{/if}
	<PageControls bind:readingMode />
	<ScrollToTop />
	<!-- Share -->
	<div class="divider font-bold">
		<i class="fa fa-share-alt"></i>
		You like this manga?
	</div>
	<p class="break-normal w-full text-center font-semibold">
		Please share it with your friends:
	</p>
	<Share
	title={data.title + ' ' + $page.params.chapterid + ' ' + $page.url.hostname}
	url={$page.url.href}
	image={data?.images[0].imageUrl}
	text={`${data.title} ${$page.params.chapterid} ${$page.data.siteName}, read ${data.title} ${$page.params.chapterid} ${$page.data.siteName} online, ${data.title} ${$page.params.chapterid} ${$page.data.siteName} free online, ${data.title} ${$page.params.chapterid} ${$page.data.siteName} free online, ${data.title} ${$page.params.chapterid} ${$page.data.siteName} high quality, ${data.title} ${$page.params.chapterid} ${$page.data.siteName} manga scans, ${data.title} ${$page.params.chapterid} ${$page.data.siteName} manga scan`}
	hashtags="manga, anime, manga online, manga free online, manga free online, manga high quality, manga scans, manga scan"

/>	
	<Chat />
	<SimilarManga />
</main>
