<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import MarkerIcon from '$lib/site-components/MarkerIcon.svelte';

	import jsonData from './data.json';
</script>

<ComponentStructure title="Marker Icon" url="marker-icon" {jsonData}>
	<MarkerIcon />
</ComponentStructure>
