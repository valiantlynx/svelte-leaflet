<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import CircleMarker from '$lib/site-components/CircleMarker.svelte';

	import jsonData from './data.json';
</script>

<ComponentStructure title="Circle Marker" url="circle-marker" {jsonData}>
	<CircleMarker />
</ComponentStructure>
