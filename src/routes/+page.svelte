<script>
	import 'leaflet/dist/leaflet.css';
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

<div class="h-screen bg-black">
	<LeafletMap options={mapOptions}>
		<TileLayer url={tileUrl} options={tileLayerOptions} />
		<Marker latLng={[1.282375, 103.864273]}>
			<Popup>Gardens by the Bay</Popup>
			<Tooltip>Gardens by the Bay</Tooltip>
		</Marker>
		<Marker latLng={[1.359167, 103.989441]}>
			<Popup><b>Changi Airport</b></Popup>
			<Tooltip><b>Changi Airport</b></Tooltip>
		</Marker>
	</LeafletMap>
</div>

<footer class="footer footer-center p-10 bg-base-300 text-base-content rounded mt-auto">
	<div class="grid grid-flow-col gap-4">
		<a href="/about" class="link link-hover">About us</a>
		<a href="/contact" class="link link-hover">Contact</a>
		<a href="/privacy-policy" class="link link-hover">Privacy</a>
		<a href="/pricing" class="link link-hover">Pricing</a>
	</div>

	<div>
		<p>Copyright © 2023 - All right reserved by me</p>
	</div>
</footer>
