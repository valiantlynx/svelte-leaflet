<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import GeoJson from '$lib/site-components/GeoJSON.svelte';
	import Methods from '$lib/site-components/Methods.svelte';
	import Properties from '$lib/site-components/Properties.svelte';

	import jsonData from './data.json';
	const properties = {
		data: {
			type: "Object",
			default: "undefined",
			description: "GeoJSON object"
		},
		options: {
			type: "Object",
			default: "undefined",
			description: "Options."
		}
	};

	const methods = {
		getGeoJSON: {
			description: "Returns the underlying Leaflet GeoJSON object instance.",
			link: "https://leafletjs.com/reference.html#geojson"
		}
	};
</script>

<ComponentStructure title="GeoJson" url="geojson" {jsonData}>
	<GeoJson />
	<Properties {properties} />
	<Methods {methods} />
	<!-- get json data button link -->
	<a href="/example.geojson" target="_blank" class="inline-block mt-4 mb-4 text-blue-500 text-3xl font-bold hover:underline">Get example geojson data</a>
</ComponentStructure>
