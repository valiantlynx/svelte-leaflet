<script>
	import { enhance } from '$app/forms';
	import {Input} from '@valiantlynx/svelte-ui';
	import { page } from '$app/stores';
	import toast from 'svelte-french-toast';
	let loading = false;

	const submitNewProject= () => {
		loading = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Project created!');
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

<div class="flex flex-col w-full h-full p-2">
	<div class="w-full">
		<form
			action="?/create"
			method="POST"
			class="flex flex-col space-y-2 w-full items-center"
			enctype="multipart/form-data"
			use:enhance={submitNewProject}
		>
			<h3 class="text-3xl font-bold">Tell us more about this project</h3>
			<p class="mt-2 text-lg">We'll need the name, tagline, link, and description</p>
			<Input id="name" label="Project name" disabled={loading} value={$page.form?.data?.name} errors={$page.form?.errors?.name}/>
			<Input id="tagline" label="Project tagline" disabled={loading} value={$page.form?.data?.tagline} errors={$page.form?.errors?.tagline}/>
			<Input id="url" label="Project URL" disabled={loading} value={$page.form?.data?.url} errors={$page.form?.errors?.url}/>
			<div class="form-control w-full max-w-lg">
				<label for="description" class="label font-medium pb-1">
					<span class="label-text">Project description</span>
				</label>
				<textarea name="description" class="textarea textarea-bordered textarea-primary h-24" disabled={loading}  value={$page.form?.data?.description} errors={$page.form?.errors?.description}/>
			</div>
			<div class="form-control w-full max-w-lg">
				<label for="thumbnail" class="label font-medium pb-1">
					<span class="label-text">Thumbnail</span>
				</label>
				<input
					type="file"
					name="thumbnail"
					id="thumbnail"
					class="file-input file-input-bordered file-input-primary w-full max-w-lg"
					disabled={loading}
				/>
			</div>
			<div class="w-full max-w-lg pt-3">
				<button type="submit" class="btn btn-primary w-full max-w-lg" disabled={loading}>Create Project</button>
			</div>
		</form>
	</div>
</div>