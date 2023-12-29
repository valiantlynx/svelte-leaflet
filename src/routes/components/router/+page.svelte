

<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import Route from '$lib/site-components/Route.svelte';
	import { routeCoordinates, instructions, summary } from '$lib/components/stores';

	import jsonData from './data.json';
</script>

<ComponentStructure title="Router" url="router" {jsonData}>
	<Route />
</ComponentStructure>
