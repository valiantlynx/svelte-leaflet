<script>
	import { enhance } from '$app/forms';
	import {Input} from '@valiantlynx/svelte-ui';
	import Oauth2 from '$lib/components/oauth/Oauth2.svelte';
	import { page } from '$app/stores';
	import toast from 'svelte-french-toast';
	let loading = false;

	
	const submitLogin = () => {
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

<div class="relative flex flex-col items-center justify-center h-auto overflow-hidden mt-10 mx-6">
	<div class="w-full p-6 border-t-4 rounded-md shadow-md border-top border-primary lg:max-w-lg">
		<h1 class="text-3xl font-semibold text-center">{$page.data.siteName} | login</h1>
		<form
			action="/login?/login"
			method="POST"
			class="flex flex-col items-center space-y-2 w-full pt-4"
			use:enhance={submitLogin}
		>
			<Input
				type="email"
				id="email"
				label="Email"
				value={$page.form?.data?.email ?? ''}
				errors={$page.form?.errors?.email}
				disabled={loading}
				required
			/>
			<Input
				type="password"
				id="password"
				minlength="8"
				label="Password"
				errors={$page.form?.errors?.password}
				disabled={loading}
				required
			/>

			<div class="flex flex-row justify-between w-full max-w-lg">
				<a href="/signup" class=" justify-start link-primary link-hover my-2"
					>Not registered? Signup</a
				>
				<a href="/forgot-password" class="justify-end items-end link-secondary link-hover my-2"
					>Forgot password</a
				>
			</div>

			<div class="w-full max-w-lg pt-2">
				<button type="submit" class="btn btn-primary w-full" disabled={loading}>Login</button>
			</div>

		</form>
		<center class="text-center my-4"> or </center>
		<Oauth2 />
	</div>
</div>
