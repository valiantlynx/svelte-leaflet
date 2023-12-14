<script>
	import { getImageURL } from '$lib/utils/api';
	export let project;
</script>

<div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
	<div class="bg-primary border rounded-lg p-4 shadow-md hover:shadow-lg text-primary-content">
		<img
			src={project.thumbnail
				? getImageURL(project.collectionId, project.id, project.thumbnail)
				: `https://via.placeholder.com/500/4506CB/FFFFFF/?text=${project.name}`}
			alt="project thumbnail"
			class="w-full h-48 object-cover rounded-lg"
		/>
		<h2 class="text-xl font-bold mt-4">
			<a
				href="/projects/{project.id}"
				class="hover:cursor-pointer hover:underline hover:text-secondary"
			>
				{project.name}
			</a>
		</h2>
		<p class="text-sm mt-2 text-warning">{project.tagline}</p>
		<p class="text-sm mt-2 truncate ">{project.description}</p>
		<div class="flex items-center justify-between mt-4">
			<div class="flex items-center">
				<img
					src={project.expand?.user
						? `https://animevariant.fly.dev/api/files/${project.expand?.user?.collectionId}/${project.expand?.user?.id}/${project.expand?.user?.avatar}?thumb=100x100`
						: 'https://animevariant.com/logo.png'}
					alt={project.expand?.user?.username}
					class="w-8 h-8 rounded-full object-cover"
				/>
				<a href="/" class="ml-2 text-sm hover:underline"
					>{project.expand?.user?.username ? project.expand?.user?.username : 'anonymous'}</a
				>
			</div>
			<div class="flex items-center">
				<a
					href="/projects/{project.id}"
					class="block font-bold hover:cursor-pointer hover:underline hover:text-secondary"
					>Read more</a
				>
			</div>
			<div class="flex items-center">
				<ul class="flex justify-end mt-4">
					<li class="inline pr-2">
						<i class="fa fa-eye fa-lg text-primary-content" />
					</li>
					<li class="inline pr-2">
						<i class="fa fa-heart-o fa-lg text-primary-content" />
					</li>
					<li class="inline pr-2">
						<i class="fa fa-envelope-o fa-lg text-primary-content" />
					</li>
					<li class="inline">
						<i class="fa fa-share-alt fa-lg text-primary-content" />
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
