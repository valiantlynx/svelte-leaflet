<script>
	import BlogCards from '$lib/components/BlogCards.svelte';
	import { page } from '$app/stores';
	const blogs = $page.data.blogs;
</script>

<div class="flex flex-wrap">
	{#each blogs.items as blog (blog.id)}
		<BlogCards blog={blog} />
	{/each}
	
</div>
<!-- if they want to see more available to go to the features page -->
<div class="justify-center mb-8">
	<a href="/blogs" class="flex btn btn-primary mx-8">show more</a>
</div>

