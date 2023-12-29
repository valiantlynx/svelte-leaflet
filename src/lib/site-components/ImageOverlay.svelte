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

	const properties = {
		imageUrl: {
			type: "String",
			description: "URL to image file."
		},
		opacity: {
			type: "Number",
			default: 1.0,
			description: "Opacity of the image overlay."
		},
		zIndex: {
			type: "Number",
			default: 1,
			description: "Explicit zIndex of the layer."
		},
		options: {
			type: "Object",
			default: "undefined",
			description: "Options."
		}
	};

	const methods = {
		getImageOverlay: {
			description: "Returns the underlying Leaflet ImageOverlay object instance.",
			link: "https://leafletjs.com/reference.html#imageoverlay"
		}
	};
</script>

<div class="mb-8">
	<h1 class="text-4xl font-bold mb-4">ImageOverlay Component</h1>
	<h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
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
						<a href={methodDetails.link} target="_blank">More Info</a>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
