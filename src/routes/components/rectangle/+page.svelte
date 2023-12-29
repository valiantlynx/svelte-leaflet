<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import Rectangle from '$lib/site-components/Rectangle.svelte';

	import jsonData from './data.json';
</script>

<ComponentStructure title="Rectangle" url="rectangle" {jsonData}>
	<Rectangle />
</ComponentStructure>
