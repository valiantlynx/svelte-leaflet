<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import Methods from '$lib/site-components/Methods.svelte';
	import Polygon from '$lib/site-components/Polygon.svelte';
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
        fill: {
            type: "Boolean",
            default: false,
            description: "Fill flag."
        },
        fillColor: {
            type: "String",
            default: "#3388ff",
            description: "Fill color."
        },
        fillOpacity: {
            type: "Number",
            default: 0.2,
            description: "Fill opacity."
        },
        fillRule: {
            type: "String",
            default: "evenodd",
            description: "Fill rule."
        },
        options: {
            type: "Object",
            default: "undefined",
            description: "Options."
        }
    };

    const methods = {
        getPolygon: {
            description: "Returns the underlying Leaflet Polygon object instance.",
            link: "https://leafletjs.com/reference.html#polygon"
        }
    };
</script>

<ComponentStructure title="Polygon" url="polygon" {jsonData}>
	<Polygon />
	<Properties {properties} />
	<Methods	{methods} />

</ComponentStructure>
