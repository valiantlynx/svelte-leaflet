<script>
	import { page } from '$app/stores';
	export let provider;
	export let logo;
	export let active = true;
	import {enhance} from '$app/forms';
	import toast from 'svelte-french-toast';
	let loading = false;

	
	const submitOauth = () => {
		loading = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Successfully registered');
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

<form method="POST" action="?/oauth2{provider}" use:enhance={submitOauth}>
	<div>
		<button class="btn btn-block btn-primary" type="submit" disabled={!active}>
			<img src={logo} alt={`${provider} sign in`} class="w-10 h-10"/>
			{#if $page.url.pathname == '/login'}
				Login with {provider}
			{:else if $page.url.pathname == '/signup'}
				Signup with {provider}
			{/if}
		</button>
	</div>
</form> 
