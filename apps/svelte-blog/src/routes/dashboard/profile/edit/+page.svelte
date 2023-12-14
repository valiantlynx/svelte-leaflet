<script>
		import {Input} from '@valiantlynx/svelte-ui';
	import { enhance, applyAction } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import { site } from '@valiantlynx/general-config';

	let loading;

	$: loading = false;
	const showPreview = (event) => {
		const target = event.target;
		const files = target.files; //await compressFileImage(data.avatar, 200, 200, 0.7);

		if (files.length > 0) {
			const src = URL.createObjectURL(files[0]);
			const preview = document.getElementById('avatar-preview');
			preview.src = src;
		}
	};

	const submitUpdateProfile = () => {
		loading = true;
		return async ({ result }) => {
			switch (result.type) {
				case 'success':
					await invalidateAll();
					break;
				case 'error':
					break;
				default:
					await applyAction(result);
			}
			loading = false;
		};
	};

	const avatar = $page.data.user?.avatar
		? `${site.site.pocketbase}/api/files/${$page.data.user?.collectionId}/${$page.data.user?.id}/${$page.data.user?.avatar}`
		: `https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${$page.data.user?.username}`;
</script>

<svelte:head>
	<title>Edit</title>
</svelte:head>
<div class="flex flex-col w-full h-full p-4">
	<form
		action="?/updateProfile"
		method="POST"
		class="flex flex-col space-y-4 w-full max-w-screen-xl mx-auto md:flex-row md:space-x-8"
		enctype="multipart/form-data"
		use:enhance={submitUpdateProfile}
	>
		<div class="md:w-1/2">
			<div class="form-control">
				<label for="avatar" class="label font-medium">
					<span class="label-text">Profile Picture</span>
				</label>
				<label for="avatar" class="avatar w-32 rounded-full hover:cursor-pointer relative">
					<span
						class="btn btn-circle btn-sm btn-secondary absolute -bottom-2 -right-2 hover:cursor-pointer"
					>
						<i class="fa fa-pencil-alt" />
					</span>
					<div class="w-32 h-32 rounded-full overflow-hidden">
						<img src={avatar} alt="user avatar" id="avatar-preview" />
					</div>
				</label>
				<input
					type="file"
					name="avatar"
					id="avatar"
					value=""
					accept="image/*"
					hidden
					on:change={showPreview}
					disabled={loading}
				/>
			</div>
		</div>

		<div class="md:w-1/2">
			<h3 class="text-2xl font-medium">Update Profile</h3>

			<Input
				id="username"
				label="Username"
				value={$page.data?.user?.username}
				disabled={loading}
			/>

			<Input id="title" label="Title" value={$page.data?.user?.title} disabled={loading} />

			<Input
				id="language"
				label="Language"
				value={$page.data?.user?.language}
				disabled={loading}
			/>

			<Input
				type="address"
				id="address"
				label="Address"
				value={$page.data?.user?.address}
				disabled={loading}
			/>

			
		</div>

		<div class="w-full">
			<label for='about' class="label font-medium pb-1">
				<span class="label-text">About yourself</span>
			</label>
			<textarea
				class="textarea textarea-primary h-32"
				name="about"
				id="about"
				placeholder="Drop a few words about yourself"
				value={$page.data?.user?.about}
				disabled={loading}
				type="text"
			/>
			<div class="border-t border-primary mt-4"> 
				<label for="roles" class="text-xl font-medium">Roles and Permissions</label>
				<div class="flex flex-wrap -m-1">
					{#each $page.data?.user?.role as role}
						<div class="badge badge-primary my-4">{role}</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="w-full max-w-lg">
			<button class="btn btn-primary w-full" type="submit" disabled={loading}>
				Update Profile
			</button>
		</div>
	</form>
</div>
