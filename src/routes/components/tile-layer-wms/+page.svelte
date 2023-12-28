<script>
	import TileLayerWms from '$lib/site-components/TileLayer-WMS.svelte';
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
			name: 'tile-layer-wms',
			url: '/components/tile-layer-wms'
		}
	];
</script>

<Breadcrumbs {crumbs} />

<h1 class="text-4xl font-bold text-center">Tile Layer Wms</h1>

<div class="m-10">
	<TileLayerWms />
</div>

<ValiantRichText {initialData} />
