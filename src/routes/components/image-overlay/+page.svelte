<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import ImageOverlay from '$lib/site-components/ImageOverlay.svelte';
	import Methods from '$lib/site-components/Methods.svelte';
	import Properties from '$lib/site-components/Properties.svelte';

	import jsonData from './data.json';
	const properties = {
		imageUrl: {
			type: "String",
			description: "URL to image file."
		},
		opacity: {
			type: "Number",
			default: 1.0,
			description: "Opacity of the image overlay."
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
		getImageOverlay: {
			description: "Returns the underlying Leaflet ImageOverlay object instance.",
			link: "https://leafletjs.com/reference.html#imageoverlay"
		}
	};
</script>

<ComponentStructure title="Image Overlay" url="image-overlay" {jsonData}>
	<ImageOverlay />
	<Properties {properties} />
	<Methods {methods} />
</ComponentStructure>
