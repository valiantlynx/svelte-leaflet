<script>
	import { enhance } from '$app/forms';
	import {Input} from '@valiantlynx/svelte-ui';
	import { getImageURL } from '$lib/utils/api';
	import { page } from '$app/stores';
	import toast from 'svelte-french-toast';
	let loading = false;

	const submitEditProject= () => {
		loading = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Project edited successfully');
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
			method="POST"
			action="?/updateProject"
			class="flex flex-col space-y-2 w-full items-center"
			enctype="multipart/form-data"
			use:enhance={submitEditProject}
		>
			<h3 class="text-3xl font-bold">Edit {$page.data.project.name}</h3>
			<Input id="name" label="Project name" value={$page.data.project.name ?? ''} disabled={loading}  errors={$page.form?.errors?.name}/>
			<Input id="tagline" label="Project tagline" value={$page.data.project.tagline ?? ''} disabled={loading} errors={$page.form?.errors?.name}/>
			<Input id="url" label="Project URL" value={$page.data.project.url ?? ''} disabled={loading} errors={$page.form?.errors?.name}/>
			<div class="form-control w-full max-w-lg">
				<label for="decription" class="label font-medium pb-1">
					<span class="label-text">Project description</span>
				</label>
				<textarea
					name="description"
					class="textarea textarea-bordered textarea-primary h-24 resize-none"
					value={$page.data.project.description ?? ''}
					disabled={loading}
					errors={$page.form?.errors?.name}
				/>
			</div>
			<div class="form-control w-full max-w-lg">
				<label for="thumbnail" class="label font-medium pb-1">
					<span class="label-text">Thumbnail</span>
				</label>
				{#if $page.data.project.thumbnail}
					<label for="thumbnail" class="avatar w-20 hover:cursor-pointer">
						<label for="thumbnail" class="absolute -top-1.5 -right-1.5 hover:cursor-pointer">
							<button formaction="?/deleteThumbnail" class="btn btn-error btn-sm btn-circle">
								<i class="fas fa-trash"></i>
							</button>
						</label>
						<div class="w-20 rounded">
							<img
								src={getImageURL(
									$page.data.project.collectionId,
									$page.data.project.id,
									$page.data.project.thumbnail,
									'80x80'
								)}
								alt="project thumbnail"
							/>
						</div>
					</label>
				{/if}
				<input
					type="file"
					name="thumbnail"
					id="thumbnail"
					class="file-input file-input-bordered file-input-primary w-full max-w-lg mt-2"
					disabled={loading}
				/>
			</div>
			<div class="w-full max-w-lg pt-3">
				<button type="submit" class="btn btn-primary w-full max-w-lg" disabled={loading}>Save Changes</button>
			</div>
		</form>
	</div>
</div>