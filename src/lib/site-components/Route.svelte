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
</script>

<div class="mb-4 h-96 text-gray-900">
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

<style>
	/* Add additional styling if needed for this new section */
</style>
