<script>
	import TileLayer from '$lib/site-components/TileLayer.svelte';
	import { ValiantRichText } from '@valiantlynx/svelte-rich-text';
	import { initialData } from './data';
	import {Breadcrumbs} from '@valiantlynx/svelte-ui';

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
			name: 'tile-layer',
			url: '/components/tile-layer'
		}
	];
</script>

<Breadcrumbs {crumbs} />

<h1 class="text-4xl font-bold text-center">Tile Layer</h1>

<div class="m-10">
	<TileLayer />
</div>

<ValiantRichText  {initialData} />
