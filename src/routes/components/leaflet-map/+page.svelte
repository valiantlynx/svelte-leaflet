<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import LeafletMap from '$lib/site-components/LeafletMap.svelte';
	import Methods from '$lib/site-components/Methods.svelte';
	import Properties from '$lib/site-components/Properties.svelte';

	import jsonData from './data.json';
	const properties = {
		options: {
			type: "Object",
			default: "undefined",
			description: "See https://leafletjs.com/reference.html#map-option"
		}
	};

	const methods = {
		getMap: {
			description: "Returns the underlying Leaflet Map object instance.",
			link: "https://leafletjs.com/reference.html#map-factory"
		}
	};
</script>

<ComponentStructure title="LeafletMap" url="leaflet-map" {jsonData}>
	<LeafletMap />
	<Properties {properties} />
	<Methods {methods} />
</ComponentStructure>
