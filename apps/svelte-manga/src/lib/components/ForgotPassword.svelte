<script>
	import { enhance } from '$app/forms';
	import {Input} from '@valiantlynx/svelte-ui';
	import { page } from '$app/stores';
	import toast from 'svelte-french-toast';
	let loading = false;

	const submitResetPassword = () => {
		loading = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('An email has been sent to reset your password!');
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

<div class="flex flex-col items-center h-full py-10 w-full">
	<h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
		Reset Your Password
	</h2>
	<p class="text-center mt-1">We'll send you an email with a link to reset your password.</p>
	<form
		action="?/reset"
		method="POST"
		class="flex flex-col items-center space-y-2 w-full pt-4"
		use:enhance={submitResetPassword}
	>
		<div class="form-control w-full max-w-md">
			<Input
				type="email"
				id="email"
				label="Email"
				value={$page.form?.data?.email}
				errors={$page.form?.errors?.email}
				disabled={loading}
			/>
		</div>
		<div class="w-full max-w-md pt-2">
			<button type="submit" class="btn btn-primary w-full">Request Password Reset</button>
		</div>
	</form>
</div>
