<script>
	import Chat from '$lib/components/Chat.svelte';
	import { page } from '$app/stores';
	import { site } from '@valiantlynx/general-config';

	const avatar = $page.data.user?.avatar
		? `${site.site.pocketbase}/api/files/${$page.data.user?.collectionId}/${$page.data.user?.id}/${$page.data.user?.avatar}`
		: `https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${$page.data.user?.username}`;
</script>

<div class=" w-full">
	<main
		class="profile-page mb-10"
		style="background-image: url(https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80);"
	>
		<section class="relative block h-400-px">
			<div
				class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
				style="transform: translateZ(0);"
			>
				<svg
					class="absolute bottom-0 overflow-hidden"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					version="1.1"
					viewBox="0 0 2560 100"
					x="0"
					y="0"
				>
					<polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100" />
				</svg>
			</div>
		</section>
		<section class="relative py-8 bg-blueGray-200">
			<div class="container mx-auto px-4">
				<div class="relative bg-base-100 w-full mb-6 shadow-xl rounded-lg">
					<div class="px-6 py-4">
						<div class="flex items-center justify-between">
							<img alt="Profile Avatar" src={avatar} class="rounded-full h-20 w-20 object-cover" />
							<a class="btn btn-outline btn-accent font-bold" href="/dashboard/profile/edit">Edit</a>
						</div>
						<div class="text-center mt-6">
							<h3 class="text-2xl font-semibold text-blueGray-700">
								{$page.data.user.username}
							</h3>
							<div class="text-sm text-blueGray-400 mt-2">
								<i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
								{$page.data.user.address}
							</div>
							<div class="text-sm text-blueGray-600 mt-1">
								<i class="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
								{$page.data.user.title}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
	<Chat />
</div>
