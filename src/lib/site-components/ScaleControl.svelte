<script>
	import { LeafletMap, TileLayer, ScaleControl } from '$lib/index';

	const mapOptions = {
		center: [1.364917, 103.822872],
		zoom: 11
	};
	const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	const tileLayerOptions = {
		minZoom: 0,
		maxZoom: 20,
		maxNativeZoom: 19,
		attribution: '© OpenStreetMap contributors'
	};
	const scaleControlOptions = {
		maxWidth: 200
	};

	let scaleControl;
</script>

<div class="mb-4 h-96">
	<LeafletMap options={mapOptions}>
		<TileLayer url={tileUrl} options={tileLayerOptions} />
		<ScaleControl bind:this={scaleControl} position="bottomleft" options={scaleControlOptions} />
	</LeafletMap>
</div>
