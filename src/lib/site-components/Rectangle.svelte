<script>
	import { LeafletMap, Popup, Rectangle, TileLayer, Tooltip } from '$lib/index';

	const mapOptions = {
		center: [1.250111, 103.830933],
		zoom: 14
	};
	const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	const tileLayerOptions = {
		minZoom: 0,
		maxZoom: 20,
		maxNativeZoom: 19,
		attribution: '© OpenStreetMap contributors'
	};
	const latLngBounds = [
		[1.23506, 103.80352],
		[1.26278, 103.85065]
	];

	let rectangleInstance;
</script>

<div class="mb-4 h-96">
	<LeafletMap options={mapOptions}>
		<TileLayer url={tileUrl} options={tileLayerOptions} />
		<Rectangle bind:this={rectangleInstance} {latLngBounds} color="#ff0000" fillColor="#ff0000">
			<Popup>Sentosa</Popup>
			<Tooltip>Sentosa</Tooltip>
		</Rectangle>
	</LeafletMap>
</div>
