<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import Methods from '$lib/site-components/Methods.svelte';
	import Properties from '$lib/site-components/Properties.svelte';
	import ScaleControl from '$lib/site-components/ScaleControl.svelte';

	import jsonData from './data.json';
	const properties = {
        position: {
            type: "String",
            default: "topright",
            description: "Position."
        },
        options: {
            type: "Object",
            default: "undefined",
            description: "Options."
        }
    };

    const methods = {
        getScaleControl: {
            description: "Returns the underlying Leaflet Control.Scale object instance.",
            link: "https://leafletjs.com/reference.html#control-scale"
        }
    };
</script>

<ComponentStructure title="Scale Control" url="scale-control" {jsonData}>
	<ScaleControl />
	<Properties {properties} />
	<Methods {methods} />
</ComponentStructure>
