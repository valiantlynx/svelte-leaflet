<script>
	import LeafletMap from '$lib/site-components/LeafletMap.svelte';
	import { ValiantRichText, getData } from '@valiantlynx/svelte-rich-text';
	import { Breadcrumbs } from '@valiantlynx/svelte-ui';
	import toast from 'svelte-french-toast';
	import jsonData from './data.json';
	import { enhance } from '$app/forms';
	import { writable } from 'svelte/store';

	let contentData = writable(jsonData);

	let loading = false;

	const saveData = () => {
		loading = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					await update();
					break;
				case 'invalid':
					toast.error('Docs post updated successfully');
					await update();
					break;
				case 'error':
					toast.error(result.error.message);
					break;
				default:
					await update();
			}
			loading = false;
		};
	};

	function updateContent() {
		const data = getData(); // Get data from ValiantRichText
		contentData.set(JSON.stringify(data)); 
	}

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
			name: 'leaflet-map',
			url: '/components/leaflet-map'
		}
	];
</script>

<div class="ml-4">
	<Breadcrumbs {crumbs} />
</div>

<h1 class="text-4xl font-bold text-center">Marker Icon</h1>

<div class="m-10">
	<LeafletMap />
</div>

<form
	action="/components/leaflet-map?/save"
	method="POST"
	class="rounded-box p-1 items-center mt-3 bg-slate-200 text-gray-700"
	use:enhance={saveData}
>
	<ValiantRichText bind:initialData={$contentData} />

	<input type="hidden" name="content_object" bind:value={$contentData} />
	<button class="btn btn-primary" on:click={updateContent} disabled={loading} type="submit">
		Save
	</button>
</form>
