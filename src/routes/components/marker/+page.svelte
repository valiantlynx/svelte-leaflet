<script>
	import Marker from '$lib/site-components/Marker.svelte';
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
			name: 'marker',
			url: '/components/marker'
		}
	];
</script>

<Breadcrumbs {crumbs} />

<h1 class="text-4xl font-bold text-center">Marker</h1>

<div class="m-10">
	<Marker />
</div>

<ValiantRichText {initialData} />
