<script>
	import { ValiantRichText, getData } from '@valiantlynx/svelte-rich-text';
	import toast from 'svelte-french-toast';
	import { enhance } from '$app/forms';
	import { writable } from 'svelte/store';
    import { Breadcrumbs } from '@valiantlynx/svelte-ui';
    export let title;
    export let url;
    export let jsonData;

	let contentData = writable(jsonData);

	let loading = false;

	const saveData = () => {
		loading = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					await update();
					break;
				case 'invalid':
					toast.error('Docs post updated successfully');
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

	function updateContent() {
		const data = getData(); // Get data from ValiantRichText
		contentData.set(JSON.stringify(data)); 
	}

    const crumbs = [
		{
			name: 'Home',
			url: '/'
		},
		{
			name: 'components',
			url: '/components'
		},
		{
			name: url,
			url: `/components/${url}`
		}
	];
</script>

<div class="ml-4">
	<Breadcrumbs {crumbs} />
</div>

<h1 class="text-4xl font-bold text-center">{title}</h1>

<div class="m-10">
	<slot />
</div>

<slot name="more" />

<form
	action="/components/{url}?/save"
	method="POST"
	class="rounded-box p-1 items-center mt-3 bg-slate-200 text-gray-700"
	use:enhance={saveData}
>
	<ValiantRichText bind:initialData={$contentData} />

	<input type="hidden" name="content_object" bind:value={$contentData} />
	<button class="btn btn-primary" on:click={updateContent} disabled={loading} type="submit">
		Save
	</button>
</form>
