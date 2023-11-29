<script>
	import Route from '$lib/site-components/Route.svelte';
	import { ValiantRichText } from '@valiantlynx/svelte-rich-text';
	import { initialData } from './data';
</script>

<a href="/" class="text-2xl font-bold text-center link link-primary">Svelte Leaflet</a>

<h1 class="text-4xl font-bold text-center">Router</h1>

<div class="m-10 h-96">
	<!-- <ImageOverlay	/> -->
	<Route />
</div>

<ValiantRichText viewMode={true} {initialData} />
