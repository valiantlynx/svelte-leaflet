<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import toast from 'svelte-french-toast';
	import { ButtonWithIcon } from '@valiantlynx/svelte-ui';
	export let action = "?/popular";
	export let disabled = !$page.data.popularMangas;
	let loading;

	$: loading = false;

	const submitPageNo = () => {
		loading = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					await update();
					break;
				case 'invalid':
					toast.error('Invalid credentials');
					await update();
					break;
				case 'error':
					toast.error(result.error.message);
					break;
				default:
					await update();
			}
			loading = false;
		};
	};
	let pageNo = 1;
</script>


<form
	action={action}
	method="POST"
	class="flex justify-center my-2"
	use:enhance={submitPageNo}
>
<div class="join grid grid-cols-2  w-full">
	{#if loading}
	<ButtonWithIcon>
		<span slot="icon" class="loading loading-spinner"></span>
		Loading ...
	</ButtonWithIcon>
	
	{:else}
	<button
	type="submit"
	class="join-item btn btn-primary border-secondary"
	on:click={() => pageNo--}
	disabled={pageNo === 1}
	value={pageNo}
	name="page"
>
	Previous - {pageNo - 1}
</button>

<button
	type="submit"
	class="join-item btn btn-primary border-secondary"
	on:click={() => pageNo++}
	disabled={disabled}
	value={pageNo}
	name="page"
>
	Next - {pageNo + 1}
</button>
	{/if}
	
</div>
</form>


