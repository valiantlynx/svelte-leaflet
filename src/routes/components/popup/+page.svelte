<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import Methods from '$lib/site-components/Methods.svelte';
	import Popup from '$lib/site-components/Popup.svelte';
	import Properties from '$lib/site-components/Properties.svelte';

	import jsonData from './data.json';
	const properties = {
        options: {
            type: "Object",
            default: "undefined",
            description: "Options."
        }
    };

    const methods = {
        getPopup: {
            description: "Returns the underlying Leaflet Popup object instance.",
            link: "https://leafletjs.com/reference.html#popup"
        }
    };
</script>

<ComponentStructure title="Popup" url="popup" {jsonData}>
	<Popup />
	<Properties {properties} />
	<Methods {methods} />
</ComponentStructure>
