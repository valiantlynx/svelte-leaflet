<script>
	import TitleLayer from '$lib/site-components/TitleLayer.svelte';
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
			name: 'title-layer',
			url: '/components/title-layer'
		}
	];
</script>

<Breadcrumbs {crumbs} />

<h1 class="text-4xl font-bold text-center">Title Layer</h1>

<div class="m-10">
	<TitleLayer />
</div>

<ValiantRichText viewMode={true} {initialData} />
