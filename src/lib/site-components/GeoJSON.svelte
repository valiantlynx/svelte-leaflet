<script>
	import { onMount } from 'svelte';
	import { LeafletMap, GeoJSON, TileLayer } from '$lib/index';

	let geoJsonData;

	onMount(async () => {
		const response = await fetch('example.geojson');
		geoJsonData = await response.json();
	});

	const mapOptions = {
		center: [1.250111, 103.830933],
		zoom: 13
	};
	const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	const tileLayerOptions = {
		minZoom: 0,
		maxZoom: 20,
		maxNativeZoom: 19,
		attribution: '© OpenStreetMap contributors'
	};
	const geoJsonOptions = {
		style: function (geoJsonFeature) {
			console.log('style', geoJsonFeature);
			return {};
		},
		onEachFeature: function (feature, layer) {
			console.log('onEachFeature', feature, layer);
		}
	};
</script>

<div class="mb-8">
	<h1 class="text-4xl font-bold mb-4">GeoJSON Component</h1>
	<h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
	<div class="mb-4 h-96">
		<LeafletMap options={mapOptions}>
			<TileLayer url={tileUrl} options={tileLayerOptions} />
			<GeoJSON data={geoJsonData} options={geoJsonOptions} />
		</LeafletMap>
	</div>

	<h2 class="text-2xl font-semibold mb-4">Properties</h2>
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
		<code class="p-2 border rounded">data | GeoJSON object | Object(undefined)</code>
		<code class="p-2 border rounded">options | Options. | Object(undefined)</code>
	</div>

	<h2 class="text-2xl font-semibold mb-4">Methods</h2>
	<table class="w-full">
		<thead>
			<tr>
				<th class="border p-2">Name</th>
				<th class="border p-2">Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td class="border p-2">getGeoJSON()</td>
				<td class="border p-2">
					Returns the underlying Leaflet <code>GeoJSON</code> object instance. See
					<a href="https://leafletjs.com/reference.html#geojson" target="_blank"
						>https://leafletjs.com/reference.html#geojson</a
					>
				</td>
			</tr>
		</tbody>
	</table>
</div>
