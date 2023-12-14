<script>
	import Route from '$lib/site-components/Route.svelte';
	import { ValiantRichText } from '@valiantlynx/svelte-rich-text';
	import { initialData } from './data';
	import { routeCoordinates, instructions, summary } from '$lib/components/stores';

	let instructionsHTML = '';

	$: {
		if ($instructions) {
			instructionsHTML =
				'<ul  class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">';
			for (const instruction of $instructions) {
				instructionsHTML += `
		  <li class="w-auto text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white m-2">
			<button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
			  <span class="mdi mdi-sign-direction text-2xl"></span>
			  ${instruction.text} ${instruction.distance / 1000} km
			</button>
		  </li>`;
			}

			instructionsHTML += '</ul>';
		}
	}
</script>

<a href="/" class="text-2xl font-bold text-center link link-primary">Svelte Leaflet</a>
{JSON.stringify($summary)}

<h1 class="text-4xl font-bold text-center">Router</h1>

<div class="m-10 h-96">
	<!-- <ImageOverlay	/> -->
	<Route />
</div>

<h1 class="text-4xl font-bold text-center">instructions</h1>
{@html instructionsHTML}

<ValiantRichText viewMode={true} {initialData} />
