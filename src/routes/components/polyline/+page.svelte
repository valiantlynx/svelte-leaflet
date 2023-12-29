<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import Polyline from '$lib/site-components/Polyline.svelte';

	import jsonData from './data.json';
</script>

<ComponentStructure title="Polyline" url="polyline" {jsonData}>
	<Polyline />
</ComponentStructure>
