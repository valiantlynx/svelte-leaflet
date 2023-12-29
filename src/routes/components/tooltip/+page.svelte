<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import Methods from '$lib/site-components/Methods.svelte';
	import Properties from '$lib/site-components/Properties.svelte';
	import Tooltip from '$lib/site-components/Tooltip.svelte';

	import jsonData from './data.json';
	const properties = {
        options: {
            type: "Object",
            default: "undefined",
            description: "Options."
        }
    };

    const methods = {
        getTooltip: {
            description: "Returns the underlying Leaflet Tooltip object instance.",
            link: "https://leafletjs.com/reference.html#tooltip"
        }
    };
</script>

<ComponentStructure title="tooltip" url="tooltip" {jsonData}>
	<Tooltip />
	<Properties {properties} />
	<Methods {methods} />
</ComponentStructure>
