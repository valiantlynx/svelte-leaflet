<script>
	import { enhance, applyAction } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import {Modal} from '@valiantlynx/svelte-ui';
	import {Input} from '@valiantlynx/svelte-ui';
	import { page } from '$app/stores';

	let emailModalOpen;
	let usernameModalOpen;
	let loading;

	$: emailModalOpen = false;
	$: usernameModalOpen = false;
	$: loading = false;

	const submitUpdateEmail = () => {
		loading = true;
		emailModalOpen = true;
		return async ({ result }) => {
			switch (result.type) {
				case 'success':
					await invalidateAll();
					emailModalOpen = false;
					break;
				case 'error':
					break;
				default:
					await applyAction(result);
			}
			loading = false;
		};
	};

	const submitUpdateUsername = () => {
		loading = true;
		usernameModalOpen = true;
		return async ({ result }) => {
			switch (result.type) {
				case 'success':
					await invalidateAll();
					usernameModalOpen = false;
					break;
				case 'error':
					break;
				default:
					await applyAction(result);
			}
			loading = false;
		};
	};
</script>











<div class="flex flex-wrap">
	<div class="left-content mt-4 w-full lg:w-3/4 p-4 order-1">
		<div class="flex flex-col sm:w-1/2 h-full space-y-12 ml-5">
			<div class="w-full">
				<h3 class="text-2xl font-medium">Change Email</h3>
				<div class="divider" />
				<Modal label="change-email" checked={emailModalOpen}>
					<span slot="trigger" class="btn btn-primary">Change Email</span>
					<h3 slot="heading">Change Your Email</h3>
					<form action="?/updateEmail" method="POST" class="space-y-2" use:enhance={submitUpdateEmail}>
						<Input
							id="email"
							type="email"
							label="Enter your new email address"
							required={true}
							value={$page.form?.data?.email}
							disabled={loading}
						/>
						<button type="submit" class="btn btn-primary w-full" disabled={loading}
							>Change my email</button
						>
					</form>
				</Modal>
			</div>
			<div class="w-full">
				<h3 class="text-2xl font-medium">Change Username</h3>
				<div class="divider mb-0.5" />
				<Input id="username" label="Username" value={$page.data?.user?.username} disabled />
				<Modal label="change-username" checked={usernameModalOpen}>
					<span slot="trigger" class="btn btn-primary">Change Username</span>
					<h3 slot="heading">Change Your Username</h3>
					<form
						action="?/updateUsername"
						method="POST"
						class="space-y-2"
						use:enhance={submitUpdateUsername}
					>
						<Input
							id="username"
							type="text"
							label="Enter your new username"
							required={true}
							value={$page.form?.data?.username}
							disabled={loading}
						/>
						<button type="submit" class="btn btn-primary w-full" disabled={loading}
							>Change my username</button
						>
					</form>
				</Modal>
			</div>
			<div class="w-full">
				<form action="?/updatePassword" method="POST" class="flex flex-col space-y-2 w-full">
					<h3 class="text-2xl font-medium">Change Password</h3>
					<div class="divider" />
					<Input id="oldPassword" label="Old Password" type="password" required />
					<Input id="password" label="New Password" type="password" required />
					<Input id="passwordConfirm" label="Confirm New Password" type="password" required />
					<a href="/forgot-password" class="text-primary hover:cursor-point hover:underline">
						I forgot my password</a
					>
					<div class="w-full max-w-lg pt-3">
						<button type="submit" class="btn btn-primary w-full max-w-lg"> Update Password </button>
					</div>
				</form>
			</div>
		</div>
	</div>

	<div class="right-content w-full lg:w-1/4 p-4 order-2">
		<div class="flex flex-col sm:w-1/2 h-full space-y-12 ml-5">
			<!-- Permissions Display -->
			<div class="w-full md:w-1/2">
				<div class="bg-base-300 text-base-content p-6 rounded-lg shadow-md">
				  <h2 class="text-2xl font-medium mb-4">Roles and Permissions</h2>
				  <ul class="list-inside list-disc">
					{#each $page.data?.user?.role as role}
					  <div class="badge badge-primary m-3 font-bold p-3">
						{role}
					  </div>
		
					{/each}
				  </ul>
				</div>
			  </div>
			
			  <!-- Upgrade Section -->
			  <div class="w-full md:w-1/2">
				<div class="bg-base-300 text-base-content p-6 rounded-lg shadow-md">
				  <h2 class="text-2xl font-medium mb-4">Upgrade Your Role</h2>
				  <p class="mb-4">
					Enhance your experience by upgrading to a higher role. Unlock additional features and privileges.
				  </p>
				  <a href="/pricing" class="btn btn-primary w-full" alt="pricing page">
					Upgrade Now
				  </a>
				</div>
			  </div>
		</div>
	</div>
</div>