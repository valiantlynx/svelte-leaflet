<script>
	import { LeafletMap, Icon, Marker, TileLayer } from '$lib/index';

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

	const iconOptions = {
		iconUrl: 'icons/airport.svg',
		iconSize: [41, 41],
		iconAnchor: [20, 41],
		popupAnchor: [1, -34],
		tooltipAnchor: [16, -28]
	};
</script>

<div class="mb-4 h-96">
	<LeafletMap options={mapOptions}>
		<TileLayer url={tileUrl} options={tileLayerOptions} />
		<Marker latLng={[1.282375, 103.864273]} />
		<Marker latLng={[1.359167, 103.989441]} rotationAngle={45}>
			<Icon options={iconOptions} />
		</Marker>
	</LeafletMap>
</div>
