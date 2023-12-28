<script>
	import { LeafletMap, TileLayer } from '$lib/index';

	const mapOptions = {
		center: [37.0902, -95.7129],
		zoom: 4
	};
	const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	const tileLayerOptions = {
		minZoom: 0,
		maxZoom: 20,
		maxNativeZoom: 19,
		attribution: '© OpenStreetMap contributors'
	};
	const wmsTileUrl = 'http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi';
	const wmsTileLayerOptions = {
		layers: 'nexrad-n0r-900913',
		format: 'image/png',
		transparent: true,
		attribution: 'Weather data © 2012 IEM Nexrad'
	};

	let tileLayer;
	let wmsTileLayer;
</script>

<div class="mb-8">
	<h1 class="text-4xl font-bold mb-4">TileLayer Component</h1>
	<h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
	<div class="mb-4 h-96">
		<LeafletMap options={mapOptions}>
			<TileLayer bind:this={tileLayer} url={tileUrl} options={tileLayerOptions} />
			<TileLayer
				bind:this={wmsTileLayer}
				wms={true}
				url={wmsTileUrl}
				options={wmsTileLayerOptions}
			/>
		</LeafletMap>
	</div>

	<h2 class="text-2xl font-semibold mb-4">Properties</h2>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
		<code class="p-2 border rounded">url | Tile layer URL template. | String</code>
		<code class="p-2 border rounded"
			>wms | If true, the layer will be created using `L.tileLayer.WMS()`. | Boolean</code
		>
		<code class="p-2 border rounded">opacity | Opacity of the tiles. | Number(1.0)</code>
		<code class="p-2 border rounded">zIndex | Explicit zIndex of the layer. | Number(1)</code>
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
				<td class="border p-2">getTileLayer()</td>
				<td class="border p-2"
					>Returns the underlying Leaflet <code>TileLayer.WMS</code> object instance. See
					<a href="https://leafletjs.com/reference.html#tilelayer" target="_blank"
						>https://leafletjs.com/reference.html#tilelayer-wms</a
					></td
				>
			</tr>
		</tbody>
	</table>
</div>

<style>
	/* Add additional styling if needed for this new section */
</style>
