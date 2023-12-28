<script>
	import DivIcon from '$lib/site-components/DivIcon.svelte';
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
			name: 'div-icon',
			url: '/components/div-icon'
		}
	];
</script>

<Breadcrumbs {crumbs} />

<h1 class="text-4xl font-bold text-center">Div Icon</h1>

<div class="m-10">
	<DivIcon />
</div>

<ValiantRichText {initialData} />
