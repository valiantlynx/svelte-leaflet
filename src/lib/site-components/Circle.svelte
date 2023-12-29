<script>
	import { LeafletMap, Circle, Popup, TileLayer, Tooltip } from '$lib/index';

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

	let circleInstance;
</script>

<div class="mb-4 h-96">
	<LeafletMap options={mapOptions}>
		<TileLayer url={tileUrl} options={tileLayerOptions} />
		<Circle
			bind:this={circleInstance}
			latLng={[1.250111, 103.830933]}
			radius={1000}
			color="#ff0000"
			fillColor="#ff0000"
		>
			<Popup>Sentosa</Popup>
			<Tooltip>Sentosa</Tooltip>
		</Circle>
	</LeafletMap>
</div>
