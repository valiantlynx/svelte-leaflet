<script>
	import { enhance } from '$app/forms';
	import {Input} from '@valiantlynx/svelte-ui';
		import Oauth2 from '$lib/components/oauth/Oauth2.svelte';
		import { page } from '$app/stores';
		import toast from 'svelte-french-toast';
		let loading = false;
	
		
		const submitSignup = () => {
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
	
	<div class="relative flex flex-col items-center justify-center h-full overflow-hidden m-4">
		<div
			class="w-full p-6 bg-base-200 border-t-4 border-primary rounded-md shadow-md border-top lg:max-w-lg"
		>
			<h1 class="text-3xl font-semibold text-center">{$page.data.siteName} | Signup</h1>
			<form action="?/signup" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4" use:enhance={submitSignup}>
				<Input id="name" label="Name" value={$page.form?.data?.name} errors={$page.form?.errors?.name} disabled={loading} />
				<Input
					type="email"
					id="email"
					label="Email"
					value={$page.form?.data?.email}
					errors={$page.form?.errors?.email}
					disabled={loading}
				/>
				<Input type="password" id="password" label="Password" errors={$page.form?.errors?.password} disabled={loading} />
				<Input
					type="password"
					id="passwordConfirm"
					label="Confirm Password"
					errors={$page.form?.errors?.passwordConfirm}
					disabled={loading}
				/>
				<br />
				<a href="/login" class=" link link-hover font-bold text-1xl underline"
					>Already registered? Login (click here)</a
				>
				<div class="w-full max-w-lg pt-2">
					<button type="submit" class="btn btn-primary w-full" disabled={loading}>Register</button>
				</div>
			</form>
			<center class="text-center my-4"> or </center>
			<Oauth2 />
		</div>
	</div>
	