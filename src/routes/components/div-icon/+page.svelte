<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import DivIcon from '$lib/site-components/DivIcon.svelte';
	import Methods from '$lib/site-components/Methods.svelte';
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
		getIcon: {
			description: "Returns the underlying Leaflet Icon object instance.",
			link: "https://leafletjs.com/reference.html#icon"
		}
	};
</script>

<ComponentStructure title="Div Icon" url="div-icon" {jsonData}>
	<DivIcon />
	<Properties {properties} />
	<Methods {methods} />
</ComponentStructure>
