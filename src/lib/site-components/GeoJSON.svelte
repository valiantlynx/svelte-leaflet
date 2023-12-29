<script>
	import { onMount } from 'svelte';
	import { LeafletMap, GeoJSON, TileLayer } from '$lib/index';

	let geoJsonData;

	onMount(async () => {
		const response = await fetch('/example.geojson');
		geoJsonData = await response.json();
	});

	const mapOptions = {
		center: [1.250111, 103.830933],
		zoom: 13
	};
	const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	const tileLayerOptions = {
		minZoom: 0,
		maxZoom: 20,
		maxNativeZoom: 19,
		attribution: '© OpenStreetMap contributors'
	};
	const geoJsonOptions = {
		style: function (geoJsonFeature) {
			console.log('style', geoJsonFeature);
			return {};
		},
		onEachFeature: function (feature, layer) {
			console.log('onEachFeature', feature, layer);
		}
	};
</script>

<div class="mb-4 h-96">
	<LeafletMap options={mapOptions}>
		<TileLayer url={tileUrl} options={tileLayerOptions} />
		<GeoJSON data={geoJsonData} options={geoJsonOptions} />
	</LeafletMap>
</div>
