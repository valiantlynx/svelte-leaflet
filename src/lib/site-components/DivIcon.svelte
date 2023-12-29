<script>
	import { LeafletMap, DivIcon, Marker, TileLayer } from '$lib/index';

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
		html: "<div style='background-color: #ff0000; color: #fff; width: 40px'>using props</div>"
	};

	const properties = {
		options: {
			type: "Object",
			default: "undefined",
			description: "Options."
		}
	};

	const methods = {
		getIcon: {
			description: "Returns the underlying Leaflet Icon object instance.",
			link: "https://leafletjs.com/reference.html#icon"
		}
	};
</script>

<div class="mb-8">
	<h1 class="text-4xl font-bold mb-4">Marker / DivIcon Component</h1>
	<h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
	<div class="mb-4 h-96">
		<LeafletMap options={mapOptions}>
			<TileLayer url={tileUrl} options={tileLayerOptions} />
			<Marker latLng={[1.282375, 103.864273]} />
			<Marker latLng={[1.359167, 103.989441]}>
				<DivIcon options={iconOptions} />
			</Marker>
			<Marker latLng={[1.359167, 103.789441]}>
				<DivIcon>
					<div style="background-color: #0000ff; color: #fff; width: 40px">using slot</div>
				</DivIcon>
			</Marker>
		</LeafletMap>
	</div>

	<h2 class="text-2xl font-semibold mb-4">Properties</h2>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
		{#each Object.entries(properties) as [key, value]}
			<code class="p-2 border rounded">{key} | {value.description} | {value.type}({value.default})</code>
		{/each}
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
			{#each Object.entries(methods) as [methodName, methodDetails]}
				<tr>
					<td class="border p-2">{methodName}</td>
					<td class="border p-2">
						{methodDetails.description}
						<a href={methodDetails.link} target="_blank">{methodDetails.link}</a>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	/* Add additional styling if needed for this new section */
</style>
