<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import toast from 'svelte-french-toast';
	let loading;

	$: loading = false;

	const submitRequest = () => {
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
</script>

<div class="m-4">


<h1
	class="text-3xl font-bold text-center text-base-content mb-4"
>AI </h1>

<div class="right-content mx-8">
	<form  class=" flex items-center" action="?/test"
	method="POST"
	use:enhance={submitRequest}>

		<input
		type="text "
		placeholder={$page.data.user ? 'Type a message...' : '<------ Login to chat 💬'}
		id="comment"
		required
		minlength="1"
		name="text"
		disabled={loading}
		class="input input-bordered input-primary flex-grow items-center w-full"
		
		/>

			<button type="submit" disabled={loading} class="btn btn-primary"> Send </button>

	</form>
</div>

<h2
	class="text-2xl font-bold text-center text-base-content mb-4"
>Data returned from the server</h2>
<h3
	class="text-xl font-bold text-center text-base-content mb-4"
>{#if $page.form}
{#each $page.form?.chain.output as item}
<p>{item}</p>
{/each}

{/if}</h3>

</div>


