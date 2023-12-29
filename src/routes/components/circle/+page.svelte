<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import Circle from '$lib/site-components/Circle.svelte';

	import jsonData from './data.json';
</script>

<ComponentStructure title="Circle" url="circle" {jsonData}>
	<Circle />
</ComponentStructure>
