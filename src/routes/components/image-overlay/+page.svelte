<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import ImageOverlay from '$lib/site-components/ImageOverlay.svelte';

	import jsonData from './data.json';
</script>

<ComponentStructure title="Image Overlay" url="image-overlay" {jsonData}>
	<ImageOverlay />
</ComponentStructure>
