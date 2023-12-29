<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import ScaleControl from '$lib/site-components/ScaleControl.svelte';

	import jsonData from './data.json';
</script>

<ComponentStructure title="Scale Control" url="scale-control" {jsonData}>
	<ScaleControl />
</ComponentStructure>
