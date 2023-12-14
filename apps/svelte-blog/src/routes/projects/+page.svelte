<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	export let data;
</script>

<div class="w-full mt-4 flex flex-wrap -m-4 p-10 items-center">
	<h2 class="text-3xl font-bold w-full ">My Projects</h2>
	{#if data.projects.items.length === 0}
		<p class="text-center text-3xl">☹️</p>
		<p class="text-center text-3xl">Looks like you don't have any projects.</p>
		<a href="/projects/new" class="btn btn-primary max-w-md mt-4">Add One</a>
	{:else}
		{#each data.projects.items as project}
		<ProjectCard {project} />
		{/each}
	{/if}
</div>