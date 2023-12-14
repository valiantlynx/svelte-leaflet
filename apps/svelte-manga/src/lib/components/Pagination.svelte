<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import toast from 'svelte-french-toast';

	let loading = false;

	const submitPageNo = () => {
		console.log('submitPageNo');
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
	action="?/chapters"
	method="POST"
	class="flex justify-center my-2"
	use:enhance={submitPageNo}
>
<div class="w-full">
	<!-- pagination -->
	<div class="join">
		<button
			type="submit"
			class="join-item btn btn-primary"
			value={pageNo - 1}
			name="page"
			on:click={() => pageNo--}
			disabled={pageNo === 1}>«</button
		>

		<select
        class="select select-primary w-full max-w-xs"
        bind:value={pageNo}
        on:change={submitPageNo}
      >
        {#each $page.data.pageNumbers as pageNumber}
          <option value={pageNumber} >{pageNumber}</option>
        {/each}
      </select>

		<button
			type="submit"
			class="join-item btn btn-primary"
			value={pageNo + 1}
			name="page"
			on:click={() => pageNo++}
			disabled={pageNo === $page.data.pageNumbers.length}>»</button
		>
	</div>
</div>
</form>
