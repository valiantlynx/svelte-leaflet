<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import LeafletMap from '$lib/site-components/LeafletMap.svelte';

	import jsonData from './data.json';
</script>

<ComponentStructure title="LeafletMap" url="leaflet-map" {jsonData}>
	<LeafletMap />
</ComponentStructure>
