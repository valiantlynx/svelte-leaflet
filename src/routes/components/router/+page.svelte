<script>
	import Route from '$lib/site-components/Route.svelte';
	import { ValiantRichText, getData } from '@valiantlynx/svelte-rich-text';
	import { initialData } from './data';
	import { Breadcrumbs } from '@valiantlynx/svelte-ui';
	import { routeCoordinates, instructions, summary } from '$lib/components/stores';

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
			name: 'router',
			url: '/components/router'
		}
	];
</script>

<Breadcrumbs {crumbs} />

<h1 class="text-4xl font-bold text-center">Router</h1>

<div class="m-10 h-96">
	<Route />
</div>

<h1 class="text-4xl font-bold text-center">instructions</h1>
<div class="m-10">
	{#each $instructions as instruction}
		<div class="flex flex-row justify-between">
			<div class="flex flex-col">
				<p>{instruction.text}</p>
				<p>{instruction.distance / 1000} km</p>
			</div>
			<div class="flex flex-col">
				<p>{instruction.duration / 60} min</p>
				<p>{instruction.type}</p>
			</div>
		</div>
	{/each}
</div>

<ValiantRichText {initialData} />
