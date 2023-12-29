<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import TileLayer from '$lib/site-components/TileLayer.svelte';

	import jsonData from './data.json';
</script>

<ComponentStructure title="Tile Layer" url="tile-layer" {jsonData}>
	<TileLayer />
</ComponentStructure>
