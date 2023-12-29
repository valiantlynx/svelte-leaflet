<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import Polygon from '$lib/site-components/Polygon.svelte';

	import jsonData from './data.json';
</script>

<ComponentStructure title="Polygon" url="polygon" {jsonData}>
	<Polygon />
</ComponentStructure>
