<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import Marker from '$lib/site-components/Marker.svelte';
	import Methods from '$lib/site-components/Methods.svelte';
	import Properties from '$lib/site-components/Properties.svelte';

	import jsonData from './data.json';
	
	const properties = {
		latLng: {
			type: "LatLng",
			description: "Geographical point."
		},
		zIndexOffset: {
			type: "Number",
			default: 0,
			description: "z-index offset."
		},
		icon: {
			type: "String",
			description: "TODO L.Icon.Default"
		},
		opacity: {
			type: "Number",
			default: 1.0,
			description: "Opacity."
		},
		rotationAngle: {
			type: "Number",
			default: 0,
			description: "Rotation angle."
		},
		rotationOrigin: {
			type: "String",
			default: "center bottom",
			description: "Rotation origin."
		},
		options: {
			type: "Object",
			default: "undefined",
			description: "Options."
		}
	};

	const methods = {
		getMarker: {
			description: "Returns the underlying Leaflet Marker object instance.",
			link: "https://leafletjs.com/reference.html#marker"
		}
	};
</script>

<ComponentStructure title="Marker" url="marker" {jsonData}>
	<Marker />
	<Properties {properties} />
	<Methods {methods} />
</ComponentStructure>
