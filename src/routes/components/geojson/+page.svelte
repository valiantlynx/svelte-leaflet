<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import GeoJson from '$lib/site-components/GeoJSON.svelte';

	import jsonData from './data.json';
</script>

<ComponentStructure title="GeoJson" url="geojson" {jsonData}>
	<GeoJson />
</ComponentStructure>
