<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import Methods from '$lib/site-components/Methods.svelte';
	import Properties from '$lib/site-components/Properties.svelte';
	import TileLayerWms from '$lib/site-components/TileLayer-WMS.svelte';

	import jsonData from './data.json';
	const properties = {
        url: {
            type: "String",
            description: "Tile layer URL template."
        },
        wms: {
            type: "Boolean",
            description: "If true, the layer will be created using `L.tileLayer.WMS()`."
        },
        opacity: {
            type: "Number",
            default: 1.0,
            description: "Opacity of the tiles."
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
        getTileLayer: {
            description: "Returns the underlying Leaflet TileLayer.WMS object instance.",
            link: "https://leafletjs.com/reference.html#tilelayer-wms"
        }
    };
</script>

<ComponentStructure title="Tile Layer Wms" url="tile-layer-wms" {jsonData}>
	<TileLayerWms />
	<Properties {properties} />
	<Methods {methods} />
</ComponentStructure>
