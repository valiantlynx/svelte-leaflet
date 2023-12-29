<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import TileLayerWms from '$lib/site-components/TileLayer-WMS.svelte';

	import jsonData from './data.json';
</script>

<ComponentStructure title="Tile Layer Wms" url="tile-layer-wms" {jsonData}>
	<TileLayerWms />
</ComponentStructure>
