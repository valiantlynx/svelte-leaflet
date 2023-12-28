<script>
	import Polyline from '$lib/site-components/Polyline.svelte';
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
			name: 'polyline',
			url: '/components/polyline'
		}
	];
</script>

<Breadcrumbs {crumbs} />

<h1 class="text-4xl font-bold text-center">Polyline</h1>

<div class="m-10">
	<Polyline />
</div>

<ValiantRichText  {initialData} />
