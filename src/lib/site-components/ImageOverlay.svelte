<script>
    import {LeafletMap, ImageOverlay, TileLayer} from 'svelte-leafletjs';

    const mapOptions = {
        center: [1.364917, 103.822872],
        zoom: 11,
    };
    const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const tileLayerOptions = {
        minZoom: 0,
        maxZoom: 20,
        maxNativeZoom: 19,
        attribution: "© OpenStreetMap contributors",
    };
    const imageOverlayOptions = {
        opacity: 0.5,
    };
    const bounds = [[1.170, 103.565], [1.4836, 104.143]];
</script>

<div class="mb-8">
	<h1 class="text-4xl font-bold mb-4">ImageOverlay Component</h1>
	<h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
	<div class="mb-4 h-96">
	    <LeafletMap options={mapOptions}>
			<TileLayer url={tileUrl} options={tileLayerOptions}/>
			<ImageOverlay imageUrl="dpsri_70km_2021082110500000dBR.dpsri.png" 
						  bounds={bounds} 
						  options={imageOverlayOptions}/>
		</LeafletMap>
	</div>

	<h2 class="text-2xl font-semibold mb-4">Properties</h2>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
		<code class="p-2 border rounded">imageUrl | URL to image file. | String</code>
		<code class="p-2 border rounded"
			>opacity | Opacity of the image overlay. | Number(1.0)</code
		>
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
				<td class="border p-2">getImageOverlay()</td>
				<td class="border p-2">
					Returns the underlying Leaflet <code>ImageOverlay</code> object instance. See
					<a href="https://leafletjs.com/reference.html#imageoverlay" target="_blank"
						>https://leafletjs.com/reference.html#imageoverlay</a
					>
				</td>
			</tr>
		</tbody>
	</table>
</div>
