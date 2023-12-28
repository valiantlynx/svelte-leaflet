<script>
	import Tooltip from '$lib/site-components/Tooltip.svelte';
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
			name: 'tooltip',
			url: '/components/tooltip'
		}
	];
</script>

<Breadcrumbs {crumbs} />

<h1 class="text-4xl font-bold text-center">Tooltip</h1>

<div class="m-10">
	<Tooltip />
</div>

<ValiantRichText viewMode={true} {initialData} />
