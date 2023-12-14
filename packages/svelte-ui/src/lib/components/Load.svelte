<script>
	/**
	 * @type {any}
	 */
	export let loaded;
</script>

{#if !loaded}
	<div
		class="absolute bg-primary bg-opacity-60 text-primary-content z-10 h-full w-full flex items-center justify-center"
	>
		<div class="flex items-center">
			<span class="text-3xl mr-4">retrieving data ...</span>
			<!-- loading icon -->
			<svg
				class="animate-spin h-5 w-5"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
				<path
					class="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				/>
			</svg>
			<!-- end loading icon -->
		</div>
	</div>
{:else}
	<p />
{/if}
