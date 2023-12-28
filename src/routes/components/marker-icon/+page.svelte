<script>
	import MarkerIcon from '$lib/site-components/MarkerIcon.svelte';
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
			name: 'marker-icon',
			url: '/components/marker-icon'
		}
	];
</script>

<Breadcrumbs {crumbs} />

<h1 class="text-4xl font-bold text-center">Marker Icon</h1>

<div class="m-10">
	<MarkerIcon />
</div>

<ValiantRichText  {initialData} />
