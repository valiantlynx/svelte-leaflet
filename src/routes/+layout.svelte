<script>
	import '../app.css';
	import 'leaflet/dist/leaflet.css';
	const socialLinks = [
		{ url: 'https://github.com/valiantlynx/svelte-leaflet', icon: 'icons/github.svg' },
		{ url: 'https://twitter.com/valiantlynxz', icon: 'icons/twitter.svg' },
		{ url: 'https://www.linkedin.com/in/valiant-lynx-b3773224a', icon: 'icons/linkedin.svg' }
	];
</script>

<svelte:head />
<nav class="bg-base-300 p-4 text text-base-content">
	<div class="flex items-center justify-between">
		<!-- Your logo or site name -->
		<a href="https://valiantlynx.com">
			<img src="logo.jpg" alt="valiantlynx Logo" class="h-12 w-12" />
		</a>

		<div class="flex items-center space-x-4">
			<!-- Navigation Links -->
			<h1 class="text-2xl font-bold">Svelte Leaflet</h1>
		</div>

		<!-- Social Media Links -->
		<div class="flex items-center space-x-4">
			{#each socialLinks as { icon, url }}
				<a href={url} target="_blank" rel="noopener noreferrer">
					<img src={icon} class=" w-6 h-6" alt="Social Media Icon for valiantlynx" />
				</a>
			{/each}
		</div>
	</div>
</nav>

<main class="p-4 bg-base-100 text-base-content">
	<slot />
</main>
