<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import DivIcon from '$lib/site-components/DivIcon.svelte';

	import jsonData from './data.json';
</script>

<ComponentStructure title="Div Icon" url="div-icon" {jsonData}>
	<DivIcon />
</ComponentStructure>
