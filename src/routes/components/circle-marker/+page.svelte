<script>
	import CircleMarker from '$lib/site-components/CircleMarker.svelte';
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
			name: 'circle-marker',
			url: '/components/circle-marker'
		}
	];
</script>

<Breadcrumbs {crumbs} />

<h1 class="text-4xl font-bold text-center">Circle Marker</h1>

<div class="m-10">
	<CircleMarker />
</div>

<ValiantRichText {initialData} />
