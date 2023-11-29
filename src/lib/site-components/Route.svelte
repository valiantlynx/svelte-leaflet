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
	export let start = [20.4171, 80.4832];
	export let destination = [38.3421, 8.5945];

	let polylineInstance;

	// Define your waypoints here
	let waypoints = [

	];
</script>

<LeafletMap options={mapOptions}>
	<TileLayer url={tileUrl} options={tileLayerOptions} />
	<Route {start} {destination} {waypoints} bind:routeCoordinates={$routeCoordinates}>
		<Polyline bind:this={polylineInstance} bind:latLngs={$routeCoordinates}>
			<Popup>Dynamic Route</Popup>
		</Polyline>
	</Route>
</LeafletMap>
