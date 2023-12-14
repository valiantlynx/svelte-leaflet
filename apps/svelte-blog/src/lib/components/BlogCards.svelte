<script>
	import { page } from '$app/stores';
	export let blog;

	function shareButtonClick(blog) {
		if (navigator.share) {
			navigator
				.share({
					title: blog.title,
					url: $page.url.origin + '/' + blog.slug,
					text: blog.summary,

				})
				.then(() => {
					console.dir('Thanks for sharing!');
				})
				.catch((err) => {
					console.dir('Error while using Web share API:');
					console.error(err);
				});
		} else {
			alert("Browser doesn't support this API !");
		}
	}
</script>


		<div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
			<!-- Blog Card Component -->
			<div class="bg-primary border rounded-lg p-4 shadow-md hover:shadow-lg text-primary-content">
				<img src={blog.image} alt={blog.title} class="w-full h-48 object-cover rounded-lg">
				<h2 class="text-xl font-bold mt-4">
					<a href={`/${blog.slug}`} class="hover:cursor-pointer hover:underline hover:text-secondary">
					{blog.title}
					</a>
				</h2>
				<p class="text-sm mt-2">{blog.summary}</p>
				<div class="flex items-center justify-between mt-4">
					<div class="flex items-center">
						<img src={blog.expand?.author ? `https://animevariant.fly.dev/api/files/${blog.expand?.author?.collectionId}/${blog.expand?.author?.id}/${blog.expand?.author?.avatar}`: 'https://animevariant.com/logo.png'} alt={blog.expand?.author?.username} class="w-8 h-8 rounded-full object-cover">
						<a href="/" class="ml-2 text-sm hover:underline">{blog.expand?.author?.username ? blog.expand?.author?.username : 'anonymous'}</a>
					</div>
					<div class="flex items-center">
						<a href={`/${blog.slug}`} class="block font-bold hover:cursor-pointer hover:underline hover:text-secondary">Read more</a>
					</div>
					<div class="flex items-center">
						<ul class="flex justify-end mt-4">
							<li class="inline pr-2">
								<i class="fa fa-eye fa-lg text-primary-content"></i>
							</li>
							<li class="inline pr-2">
								<i class="fa fa-heart-o fa-lg text-primary-content"></i>
							</li>
							<li class="inline pr-2">
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<!-- svelte-ignore a11y-no-static-element-interactions -->
								<i class="fa fa-envelope-o fa-lg text-primary-content hover:text-secondary" on:click={() => shareButtonClick(blog)}></i>
							</li>
							<li class="inline">
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<!-- svelte-ignore a11y-no-static-element-interactions -->
								<i 
								class="fa fa-share-alt fa-lg text-primary-content hover:text-secondary"
								on:click={() => shareButtonClick(blog)}
								
								></i>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

