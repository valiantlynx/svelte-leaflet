<script>
	import { page } from '$app/stores';
	import { ValiantRichText, getData } from '@valiantlynx/svelte-rich-text';
	import { pb } from '$lib/utils/api';
	import toast from 'svelte-french-toast';

  const blog = $page.data.blog;

  const saveData = (data) => {
	try {
		console.log(data);
	const datapb = {
    "content_object": data
};
 pb.collection('blogs').update(blog.id, datapb);
 toast.success('Blog post updated successfully');
	} catch (error) {
		console.log(error);
		toast.error('Something went wrong please try again');
	}
  };

</script>



<div class="p-4 md:p-8 lg:p-12 flex justify-center">


	<div class="w-3/4">
		
		<h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
			{blog?.title}
		</h1>
		<img
			src={blog?.image}
			alt={blog?.title}
			class="w-full h-auto rounded-lg mb-4"
		/>

		
    <p class="text-sm text-accent">By: {blog?.expand?.author.username}</p>

    <p class="text-sm text-accent">Published: {blog?.created}</p>

    <p class="text-sm text-accent">Updated: {blog?.updated}</p>

    <div class="mt-4 progress-primary">
		{#if $page.data.user}
		{#if $page.data.user.id === blog.author}
		<ValiantRichText
		intailData={blog.content_object}
		 />
		<button 
		class="btn btn-primary"
		on:click={()=>{
			const data = getData(); // returns dataBlock[] type
			saveData(data);
		  }}>Save</button>
		{:else}
		<h3 class="text-xl text-accent md:text-2xl lg:text-3xl font-bold mb-4">
			you can not edit this blog post. as you are not the author of this blog post. Create your own blog post <a href="/blogs/new" class="link link-primary">here</a>
		</h3>
		<ValiantRichText viewMode={true} />
		{/if}

{:else}
<h3 class="text-xl text-accent md:text-2xl lg:text-3xl font-bold mb-4">
			It is possible to edit this blog post. Please <a href="/login" class="link link-primary">login</a> to edit.
		</h3>
<ValiantRichText viewMode={true} />
		{/if}
    </div>

		<p class="text-sm text-secondary">Tags: {blog?.tags}</p>
	
	</div>
</div>

