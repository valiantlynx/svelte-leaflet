<script>
	import { LeafletMap, ImageOverlay, TileLayer } from '$lib/index';

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
	const imageOverlayOptions = {
		opacity: 0.5
	};
	const bounds = [
		[1.17, 103.565],
		[1.4836, 104.143]
	];


</script>

	<div class="mb-4 h-96">
		<LeafletMap options={mapOptions}>
			<TileLayer url={tileUrl} options={tileLayerOptions} />
			<ImageOverlay
				imageUrl="/dpsri_70km_2021082110500000dBR.dpsri.png"
				{bounds}
				options={imageOverlayOptions}
			/>
		</LeafletMap>
	</div>
