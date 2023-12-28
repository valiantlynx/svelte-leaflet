<script>
	import Rectangle from '$lib/site-components/Rectangle.svelte';
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
			name: 'rectangle',
			url: '/components/rectangle'
		}
	];
</script>

<Breadcrumbs {crumbs} />

<h1 class="text-4xl font-bold text-center">Rectangle</h1>

<div class="m-10">
	<Rectangle />
</div>

<ValiantRichText viewMode={true} {initialData} />
