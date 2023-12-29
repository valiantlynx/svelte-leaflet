<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import Popup from '$lib/site-components/Popup.svelte';

	import jsonData from './data.json';
</script>

<ComponentStructure title="Popup" url="popup" {jsonData}>
	<Popup />
</ComponentStructure>
