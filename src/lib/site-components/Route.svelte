<script>
	import { LeafletMap, Polyline, Popup, TileLayer, Route } from '$lib/index';
	import 'leaflet-routing-machine';
	import { routeCoordinates } from '$lib/components/stores';

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
	export let start = [59.4171, 10.4832];
	export let destination = [58.3421, 8.5945];

	let polylineInstance;

	// Define your waypoints here
	let waypoints = [
		[59.3378, 9.2541],
		[58.5951, 9.7375],
		[58.7199, 10.0537],
		[59.038, 9.6988],
		[59.2282, 8.9197],
		[58.8083, 9.9437],
		[59.2573, 10.0932],
		[59.289, 9.5031],
		[58.594, 9.3539],
		[58.5022, 9.1974]
	];
</script>

<LeafletMap options={mapOptions}>
	<TileLayer url={tileUrl} options={tileLayerOptions} />
	<Route {start} {destination} {waypoints}>
		<Polyline bind:this={polylineInstance} bind:latLngs={$routeCoordinates}>
			<Popup>Dynamic Route</Popup>
		</Polyline>
	</Route>
</LeafletMap>
