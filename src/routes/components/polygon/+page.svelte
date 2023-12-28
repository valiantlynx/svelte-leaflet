<script>
	import Polygon from '$lib/site-components/Polygon.svelte';
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
			name: 'polygon',
			url: '/components/polygon'
		}
	];
</script>

<Breadcrumbs {crumbs} />

<h1 class="text-4xl font-bold text-center">Polygon</h1>

<div class="m-10">
	<Polygon />
</div>

<ValiantRichText viewMode={true} {initialData} />
