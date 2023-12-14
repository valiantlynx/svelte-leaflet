<script lang="ts">
	import MangaGrid from '$lib/components/MangaGrid.svelte';
	import Popular from '$lib/components/Popular.svelte';
	import ReadingProgress from '$lib/components/ReadingProgress.svelte';
	import ResponsiveBannerAd from '$lib/components/ResponsiveBannerAd.svelte';
	import Feedback from '$lib/components/feedback/Feedback.svelte';
	import {CardWithCustomColor} from '@valiantlynx/svelte-ui';
	import { page } from '$app/stores';
	import Share from '$lib/components/share/Share.svelte';
</script>

<Feedback />
<div class="flex flex-wrap">
	<div class="left-content  w-full lg:w-3/4 order-2 md:order-1">
		<div class="container flex flex-wrap">
			<div class="w-full p-4">
				<Popular />
				<MangaGrid />
			</div>
		</div>
	</div>

	<div class="right-content w-full lg:w-1/4 p-4 order-1 md:order-2">
		
		<ReadingProgress />
		<ResponsiveBannerAd />
		<CardWithCustomColor>
			<h2 slot="heading" class="card-title">Join Our Discord!</h2>
			<p class="">
				Be a part of our manga community and discuss your favorite manga series with others.
			</p>
			<a
				slot="actions"
				href="https://discord.gg/wEgMuvRWzj"
				target="_blank"
				class="btn btn-primary"
			>
				Join Discord
			</a>
		</CardWithCustomColor>
	</div>

   
</div>

<Share
title="{$page.data.siteName}"
url="{$page.url.origin}"
text="Check out this manga website. it tracks your reading progress!"
hashtags="manga, anime, reading"
/>

<svelte:head>
	<title>{$page.data.siteName} manga page</title>
	<!-- Open Graph Meta Tags (for social media sharing) -->
	<meta property="og:title" content="{$page.data.siteName}" />
	<meta
		property="og:description"
		content="Read the latest manga online for free at {$page.url.origin}, update fastest, most full, synthesized 24h free with high-quality images and be the first one to publish new chapters."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content={$page.url.origin} />
	<meta property="og:image" content="/twitter-image.png" />
	<meta property="og:image:alt" content="{$page.data.siteName} Logo" />
	<meta property="og:site_name" content="{$page.data.siteName}" />

	<!-- Twitter Meta Tags (for social media sharing) -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{$page.data.siteName}" />
	<meta
		name="twitter:description"
		content="Read the latest manga online for free at {$page.url.origin}, update fastest, most full, synthesized 24h free with high-quality images and be the first one to publish new chapters."
	/>
	<meta name="twitter:image" content="/twitter-image.png" />

	<!-- Google / Search Engine Tags -->
	<meta itemprop="name" content="{$page.data.siteName}" />
	<meta
		itemprop="description"
		content="Read the latest manga online for free at {$page.url.origin}, update fastest, most full, synthesized 24h free with high-quality images and be the first one to publish new chapters."
	/>
	<meta itemprop="image" content="/twitter-image.png" />

	<!-- Facebook Meta Tags (for social media sharing) -->
	<meta property="fb:app_id" content="AnimeVariant" />
	<meta property="fb:admins" content="AnimeVariant" />
	<meta property="fb:page_id" content="{$page.data.siteName}" />
	<meta property="fb:site_name" content="{$page.data.siteName}" />
	<meta property="article:publisher" content="{$page.data.siteName}" />
	<meta property="article:author" content="{$page.data.siteName}" />
	<meta property="article:section" content="{$page.data.siteName}" />
	<meta property="article:tag" content="{$page.data.siteName}" />
	<meta property="article:published_time" content="{$page.data.siteName}" />
	<meta property="article:modified_time" content="{$page.data.siteName}" />
	<meta property="article:expiration_time" content="{$page.data.siteName}" />
	<meta property="article:author:first_name" content="{$page.data.siteName}" />
	<meta property="article:author:last_name" content="{$page.data.siteName}" />
	<meta property="article:author:username" content="{$page.data.siteName}" />

	<!-- Schema.org Meta Tags (for SEO) -->
	<meta itemprop="headline" content="{$page.data.siteName}" />
	<meta
		itemprop="description"
		content="Read the latest manga online for free at {$page.url.origin}, update fastest, most full, synthesized 24h free with high-quality images and be the first one to publish new chapters."
	/>
	<meta itemprop="image" content="/twitter-image.png" />
	<!-- Keywords Meta Tag -->
	<meta
		name="keywords"
		content="manga, read manga, read manga online, request manga, manga reading website, populate manga, manga online, manga, manga details, manga chapters, read manga free, manga free, read free manga, read free manga online, manga reader, manga viewer, manga scans, {$page.data.siteName}, {$page.url.origin} "
	/>
	<meta
		name="description"
		content="Read the latest manga online for free at {$page.url.origin}, update fastest, most full, synthesized 24h free with high-quality images and be the first one to publish new chapters."
	/>
</svelte:head>
