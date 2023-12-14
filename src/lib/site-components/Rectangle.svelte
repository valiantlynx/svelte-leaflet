<script>
	import { LeafletMap, Popup, Rectangle, TileLayer, Tooltip } from '$lib/index';

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
	const latLngBounds = [
		[1.23506, 103.80352],
		[1.26278, 103.85065]
	];

	let rectangleInstance;
</script>

<div class="mb-8">
	<h1 class="text-4xl font-bold mb-4">Rectangle Component</h1>
	<h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
	<div class="mb-4 h-96">
		<LeafletMap options={mapOptions}>
			<TileLayer url={tileUrl} options={tileLayerOptions} />
			<Rectangle bind:this={rectangleInstance} {latLngBounds} color="#ff0000" fillColor="#ff0000">
				<Popup>Sentosa</Popup>
				<Tooltip>Sentosa</Tooltip>
			</Rectangle>
		</LeafletMap>
	</div>

	<h2 class="text-2xl font-semibold mb-4">Properties</h2>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
		<code class="p-2 border rounded">latLngBounds | Geographical bounds. | LatLngBounds</code>
		<code class="p-2 border rounded">color | Stroke color. | String("#3388ff")</code>
		<code class="p-2 border rounded">weight | Stroke width in pixels. | Number(3)</code>
		<code class="p-2 border rounded">opacity | Stroke opacity. | Number(1.0)</code>
		<code class="p-2 border rounded">lineCap | Line cap shape. | String("round")</code>
		<code class="p-2 border rounded">lineJoin | Line join shape. | String("round")</code>
		<code class="p-2 border rounded">dashArray | Dash pattern. | String(null)</code>
		<code class="p-2 border rounded">dashOffset | Dash offset. | String(null)</code>
		<code class="p-2 border rounded">fill | Fill flag. | Boolean()</code>
		<code class="p-2 border rounded">fillColor | Fill color. | String("#3388ff")</code>
		<code class="p-2 border rounded">fillOpacity | Fill opacity. | Number(0.2)</code>
		<code class="p-2 border rounded">fillRule | Fill rule. | String("evenodd")</code>
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
				<td class="border p-2">getRectangle()</td>
				<td class="border p-2">
					Returns the underlying Leaflet <code>Rectangle</code> object instance. See
					<a href="https://leafletjs.com/reference.html#rectangle" target="_blank"
						>https://leafletjs.com/reference.html#rectangle</a
					>
				</td>
			</tr>
		</tbody>
	</table>
</div>
