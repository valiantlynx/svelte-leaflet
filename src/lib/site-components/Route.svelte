<script>
	import { LeafletMap, Polyline, Popup, TileLayer, Route } from '$lib/index';
	import 'leaflet-routing-machine';
	import 'leaflet.fullscreen';
	import { routeCoordinates, instructions, summary } from '$lib/components/stores';
	import Fullscreen from '$lib/components/Fullscreen.svelte';

	const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	const tileLayerOptions = {
		minZoom: 0,
		maxZoom: 20,
		maxNativeZoom: 19,
		attribution: '© OpenStreetMap contributors'
	};
	const mapOptions = {
		center: [59.4171, 10.4832],
		zoom: 5,
		zoomControl: false
	};
	const fullscreenOptions = {
		position: 'bottomright',
		title: 'Show me the fullscreen !',
		titleCancel: 'Exit fullscreen mode',
		content: `<span class="mdi mdi-fullscreen text-xl"></span>`,
		forceSeparateButton: true
	};
	export let start = [59.4171, 10.4832];
	export let destination = [58.3421, 8.5945];

	let waypoints = [];
	let polylineInstance;
	let fullscreen;

	const properties = {
		start: {
			type: 'Array',
			description: 'Starting point of the route [latitude, longitude].'
		},
		destination: {
			type: 'Array',
			description: 'Destination point of the route [latitude, longitude].'
		},
		waypoints: {
			type: 'Array',
			description: 'Array of waypoints for the route.'
		},
		routeCoordinates: {
			type: 'Array',
			description: 'Calculated route coordinates.',
			bindable: true
		},
		summary: {
			type: 'Object',
			description: 'Summary of the route including total distance and duration.',
			bindable: true
		},
		instructions: {
			type: 'Array',
			description: 'Turn-by-turn instructions for the route.',
			bindable: true
		}
	};

	const methods = {
		initializeRouter: {
			description: 'Initializes the routing control on the map.',
			link: 'https://www.liedman.net/leaflet-routing-machine/api/#l-routing-control'
		},
		setWaypoints: {
			description: "Updates the router's waypoints.",
			link: 'https://www.liedman.net/leaflet-routing-machine/api/#l-routing-control-setwaypoints'
		},
		removeRouter: {
			description: 'Removes the router from the map upon component destruction.',
			link: 'https://www.liedman.net/leaflet-routing-machine/api/#l-routing-control-remove'
		}
	};
</script>

<div class="mb-8">
	<h1 class="text-4xl font-bold mb-4">Route Component</h1>
	<h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
	<div class="mb-4 h-96">
		<LeafletMap options={mapOptions}>
			<TileLayer url={tileUrl} options={tileLayerOptions} />
			<Route
				{start}
				{destination}
				{waypoints}
				bind:routeCoordinates={$routeCoordinates}
				bind:instructions={$instructions}
				bind:summary={$summary}
			>
				<Polyline bind:this={polylineInstance} bind:latLngs={$routeCoordinates}>
					<Popup>Dynamic Route</Popup>
				</Polyline>
			</Route>
			<Fullscreen bind:this={fullscreen} options={fullscreenOptions} />
		</LeafletMap>
	</div>

	<h2 class="text-2xl font-semibold mb-4">Properties</h2>
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
		{#each Object.entries(properties) as [key, value]}
			<code class="p-2 border rounded"
				>{key} | {value.description} | {value.type} {value.bindable ? '(bindable)' : ''}</code
			>
		{/each}
	</div>

	<h2 class="text-2xl font-semibold mb-4">Methods</h2>
	<table class="w-full">
		<thead>
			<tr>
				<th class="border p-2">Name</th>
				<th class="border p-2">Description</th>
			</tr>
		</thead>
		<tbody>
			{#each Object.entries(methods) as [methodName, methodDetails]}
				<tr>
					<td class="border p-2">{methodName}</td>
					<td class="border p-2"
						>{methodDetails.description}
						<a href={methodDetails.link} target="_blank">More Info</a></td
					>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	/* Add additional styling if needed for this new section */
</style>
