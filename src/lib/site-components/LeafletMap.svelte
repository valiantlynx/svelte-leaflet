<script>
	import { LeafletMap, TileLayer } from '$lib/index';

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

	let leafletMap;
</script>

<div class="container mx-auto p-8">
	<!-- LeafletMap Component -->
	<div class="mb-8">
		<h1 class="text-4xl font-bold mb-4">LeafletMap Component</h1>
		<h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
		<div class="mb-4 h-96">
			<LeafletMap bind:this={leafletMap} options={mapOptions}>
				<TileLayer url={tileUrl} options={tileLayerOptions} />
			</LeafletMap>
		</div>
	</div>

	<!-- LeafletMap Properties -->
	<div class="mb-8">
		<h2 class="text-2xl font-semibold mb-4">LeafletMap Properties</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
			<code class="p-2 border rounded"
				>options | Options. See <a
					href="https://leafletjs.com/reference.html#map-option"
					target="_blank">https://leafletjs.com/reference.html#map-option</a
				> | Object(undefined)</code
			>
		</div>
	</div>

	<!-- LeafletMap Methods -->
	<div class="mb-8">
		<h2 class="text-2xl font-semibold mb-4">LeafletMap Methods</h2>
		<table class="w-full">
			<thead>
				<tr>
					<th class="border p-2">Name</th>
					<th class="border p-2">Description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="border p-2">getMap()</td>
					<td class="border p-2"
						>Returns the underlying Leaflet <code>Map</code> object instance. See
						<a href="https://leafletjs.com/reference.html#map-factory" target="_blank"
							>https://leafletjs.com/reference.html#map-factory</a
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
