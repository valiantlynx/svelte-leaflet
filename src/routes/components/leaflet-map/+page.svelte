<script>
	import LeafletMap from '$lib/site-components/LeafletMap.svelte';
	import { ValiantRichText, getData } from '@valiantlynx/svelte-rich-text';
	import { Breadcrumbs } from '@valiantlynx/svelte-ui';
	import toast from 'svelte-french-toast';

	// import json file with data
	import jsonData from './data1.json';

	const saveData = (data) => {
		try {
			console.log("data", data);
			
			toast.success('Docs post updated successfully');
		} catch (error) {
			console.log(error);
			toast.error('Something went wrong please try again');
		}
	};

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

<Breadcrumbs {crumbs} />

<h1 class="text-4xl font-bold text-center">Marker Icon</h1>

<div class="m-10">
	<LeafletMap />
</div>

<ValiantRichText initialData={jsonData} />
<button
	class="btn btn-primary"
	on:click={() => {
		const data = getData(); // returns dataBlock[] type
		console.log("button clicked", data);
		saveData(data);
	}}>Save</button
>
