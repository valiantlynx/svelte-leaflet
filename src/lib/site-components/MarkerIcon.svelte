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

<div class="container mx-auto p-8">
	<!-- ... (Previous sections) -->

	<!-- Marker/Icon Component -->
	<div class="mb-8">
		<h1 class="text-4xl font-bold mb-4">Marker/Icon Component</h1>
		<h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
		<div class="mb-4 h-96">
			<LeafletMap options={mapOptions}>
				<TileLayer url={tileUrl} options={tileLayerOptions} />
				<Marker latLng={[1.282375, 103.864273]} />
				<Marker latLng={[1.359167, 103.989441]} rotationAngle={45}>
					<Icon options={iconOptions} />
				</Marker>
			</LeafletMap>
		</div>
	</div>

	<!-- Marker/Icon Properties -->
	<div class="mb-8">
		<h2 class="text-2xl font-semibold mb-4">Marker/Icon Properties</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
			<code class="p-2 border rounded">options | Options. | Object(undefined)</code>
		</div>
	</div>

	<!-- Marker/Icon Methods -->
	<div class="mb-8">
		<h2 class="text-2xl font-semibold mb-4">Marker/Icon Methods</h2>
		<table class="w-full">
			<thead>
				<tr>
					<th class="border p-2">Name</th>
					<th class="border p-2">Description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="border p-2">getIcon()</td>
					<td class="border p-2"
						>Returns the underlying Leaflet <code>Icon</code> object instance. See
						<a href="https://leafletjs.com/reference.html#icon" target="_blank"
							>https://leafletjs.com/reference.html#icon</a
						></td
					>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<style>
	/* Add additional styling if needed for this new section */
</style>
