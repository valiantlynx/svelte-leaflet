<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import Marker from '$lib/site-components/Marker.svelte';

	import jsonData from './data.json';
</script>

<ComponentStructure title="Marker" url="marker" {jsonData}>
	<Marker />
</ComponentStructure>
