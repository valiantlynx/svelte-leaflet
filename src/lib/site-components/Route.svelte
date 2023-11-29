<script>
	import { LeafletMap, Polyline, Popup, TileLayer, Route } from '$lib/index';
	import 'leaflet-routing-machine';

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
				position: 'bottomright', // change the position of the button can be topleft, topright, bottomright or bottomleft, default topleft
				title: 'Show me the fullscreen !', // change the title of the button, default Full Screen
				titleCancel: 'Exit fullscreen mode', // change the title of the button when fullscreen is on, default Exit Full Screen
				content: `<span class="mdi mdi-fullscreen text-xl"></span>`, // change the content of the button, can be HTML, default null
				forceSeparateButton: true // force separate button to detach from zoom buttons, default false
			};
	export let start = [59.4171, 10.4832];
	export let destination = [58.3421, 8.5945];

	let polylineInstance;

	// Define your waypoints here
	let waypoints = [

	];

	let fullscreen;

</script>

<LeafletMap options={mapOptions}>
	<TileLayer url={tileUrl} options={tileLayerOptions} />
	<Route {start} {destination} {waypoints} bind:routeCoordinates={$routeCoordinates} bind:instructions={$instructions} bind:summary={$summary}>
		<Polyline bind:this={polylineInstance} bind:latLngs={$routeCoordinates}>
			<Popup>Dynamic Route</Popup>
		</Polyline>
	</Route>
	<Fullscreen bind:this={fullscreen}  options={fullscreenOptions}  />
</LeafletMap>
