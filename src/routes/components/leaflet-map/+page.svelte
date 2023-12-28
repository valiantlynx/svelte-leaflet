<script>
	import LeafletMap from '$lib/site-components/LeafletMap.svelte';
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
			name: 'leaflet-map',
			url: '/components/leaflet-map'
		}
	];
</script>

<Breadcrumbs {crumbs} />

<h1 class="text-4xl font-bold text-center">Marker Icon</h1>

<div class="m-10">
	<LeafletMap />
</div>

<ValiantRichText {initialData} />
