<script>
	import BlogCards from '$lib/components/BlogCards.svelte';
	export let data;
</script>


<div class="w-full mt-4 flex flex-wrap -m-4 p-10 items-center">
	<h2 class="text-3xl font-bold w-full ">My Blogs</h2>
		<p class="text-center text-3xl">☹️</p>
		<p class="text-center text-3xl">would you like to make a blog blogs.</p>
		<a href="/blogs/new" class="btn btn-primary max-w-md mt-4">Add One</a>
</div>


<div class="w-full mt-4 flex flex-wrap -m-4 p-10 items-center">
	<h2 class="text-3xl font-bold w-full ">All Blogs</h2>

		{#each data.blogs.items as blog}
		<BlogCards blog={blog} />
		{/each}
</div>