<script>
	import { page } from '$app/stores';
	import { getImageURL } from '$lib/utils/api';
</script>

<div class="md:w-1/2 md:mr-8">
	<div class="grid gap-4">
		{#each $page.data.contacts as contact}
			<div class="flex items-center gap-4">
				<div
					class="w-16 h-16 rounded-full bg-center bg-cover"
					style="background-image: url({getImageURL(
						contact.collectionId,
						contact.id,
						contact.image
					)})"
				/>
				<div>
					<h2 class="text-lg font-semibold">{contact.name}</h2>
					<p>{contact.title}</p>
					<div class="mt-1">
						<a href="tel:{contact.tel}" class="text-blue-500">{contact.tel}</a><br />
						<a href="mailto:{contact.email}" class="text-blue-500"
							>{contact.email ? contact.email : 'no email provided'}</a
						>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
