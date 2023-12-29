<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import Methods from '$lib/site-components/Methods.svelte';
	import Polyline from '$lib/site-components/Polyline.svelte';
	import Properties from '$lib/site-components/Properties.svelte';

	import jsonData from './data.json';
	const properties = {
        latLngs: {
            type: "LatLng[]",
            description: "Geographical points."
        },
        color: {
            type: "String",
            default: "#3388ff",
            description: "Stroke color."
        },
        weight: {
            type: "Number",
            default: 3,
            description: "Stroke width in pixels."
        },
        opacity: {
            type: "Number",
            default: 1.0,
            description: "Stroke opacity."
        },
        lineCap: {
            type: "String",
            default: "round",
            description: "Line cap shape."
        },
        lineJoin: {
            type: "String",
            default: "round",
            description: "Line join shape."
        },
        dashArray: {
            type: "String",
            default: null,
            description: "Dash pattern."
        },
        dashOffset: {
            type: "String",
            default: null,
            description: "Dash offset."
        },
        options: {
            type: "Object",
            default: "undefined",
            description: "Options."
        }
    };

    const methods = {
        getPolyline: {
            description: "Returns the underlying Leaflet Polyline object instance.",
            link: "https://leafletjs.com/reference.html#polyline"
        }
    };
</script>

<ComponentStructure title="Polyline" url="polyline" {jsonData}>
	<Polyline />
	<Properties {properties} />
	<Methods {methods} />
</ComponentStructure>
