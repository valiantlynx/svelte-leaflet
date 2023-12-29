<script>
	import { LeafletMap, TileLayer } from '$lib/index';

	const mapOptions = {
		center: [1.364917, 103.822872],
		zoom: 11
	};
	const tileUrl = 'http://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png';
	const tileLayerOptions = {
		minZoom: 0,
		maxZoom: 20,
		maxNativeZoom: 19,
		attribution: '© OpenStreetMap contributors'
	};

	let tileLayer;
</script>

<div class="mb-4 h-96">
	<LeafletMap options={mapOptions}>
		<TileLayer bind:this={tileLayer} url={tileUrl} options={tileLayerOptions} />
	</LeafletMap>
</div>
