<script>
	import ScaleControl from '$lib/site-components/ScaleControl.svelte';
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
			name: 'scale-control',
			url: '/components/scale-control'
		}
	];
</script>

<Breadcrumbs {crumbs} />

<h1 class="text-4xl font-bold text-center">Scale Control</h1>

<div class="m-10">
	<ScaleControl />
</div>

<ValiantRichText {initialData} />
