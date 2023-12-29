<script>
	import { LeafletMap, Marker, Popup, TileLayer, Tooltip } from '$lib/index';

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
</script>

<div class="mb-4 h-96">
	<LeafletMap options={mapOptions}>
		<TileLayer url={tileUrl} options={tileLayerOptions} />
		<Marker latLng={[1.282375, 103.864273]}>
			<Popup>Gardens by the Bay</Popup>
			<Tooltip>Gardens by the Bay</Tooltip>
		</Marker>
		<Marker latLng={[1.359167, 103.989441]}>
			<Popup>
				<b>gardemoen Airport</b>
			</Popup>
			<Tooltip>
				<b>kristiansand Airport</b>
			</Tooltip>
		</Marker>
	</LeafletMap>
</div>
