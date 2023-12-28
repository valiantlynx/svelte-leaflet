<script>
	import GeoJson from '$lib/site-components/GeoJSON.svelte';
	import { ValiantRichText } from '@valiantlynx/svelte-rich-text';
	import { initialData } from './data';
	import { Breadcrumbs } from '@valiantlynx/svelte-ui';

	const crumbs = [
		{
			name: 'Home',
			url: '/'
		},
		{
			name: 'components',
			url: '/components'
		},
		{
			name: 'geojson',
			url: '/components/geojson'
		}
	];
</script>

<Breadcrumbs {crumbs} />

<h1 class="text-4xl font-bold text-center">GeoJson</h1>

<div class="m-10">
	<GeoJson />
</div>

<ValiantRichText {initialData} />
