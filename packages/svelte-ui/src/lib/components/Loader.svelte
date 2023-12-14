<script>
	import { Jumper } from 'svelte-loading-spinners';

	export let loading = false;
</script>

{#if loading}
	<div class="loader">
		<!-- Your loading animation or message goes here -->
		<Jumper size="60" color="#FF3E00" unit="px" duration="1s" />
	</div>
{/if}

<style>
	.loader {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
</style>
