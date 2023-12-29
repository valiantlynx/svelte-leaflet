<script>
	export let properties;
</script>

<h2 class="text-2xl font-semibold mb-4">Properties</h2>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
	{#each Object.entries(properties) as [key, value]}
		<code class="p-2 border rounded"
			>{key} | {value.description} | {value.type} {value.bindable ? '(bindable)' : ''}</code
		>
	{/each}
</div>
