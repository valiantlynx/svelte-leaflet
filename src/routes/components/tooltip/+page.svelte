<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import Tooltip from '$lib/site-components/Tooltip.svelte';

	import jsonData from './data.json';
</script>

<ComponentStructure title="tooltip" url="tooltip" {jsonData}>
	<Tooltip />
</ComponentStructure>
