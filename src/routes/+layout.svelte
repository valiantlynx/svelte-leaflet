<script>
	import '../app.css';
	import 'leaflet/dist/leaflet.css';
	import { Toaster } from 'svelte-french-toast';
	const socialLinks = [
		{ url: 'https://github.com/valiantlynx/svelte-leaflet', icon: '/icons/github.svg' },
		{ url: 'https://twitter.com/valiantlynxz', icon: '/icons/twitter.svg' },
		{ url: 'https://www.linkedin.com/in/valiant-lynx-b3773224a', icon: '/icons/linkedin.svg' }
	];
	// Sample data for components
	let components = [
		{ name: 'Router', link: '/components/router', description: 'Efficient routing management.' },
		{
			name: 'Leaflet Map',
			link: '/components/leaflet-map',
			description: 'Interactive map integration.'
		},
		{ name: 'Polygon', link: '/components/polygon', description: 'Draw and edit polygons.' },
		{ name: 'Marker', link: '/components/marker', description: 'Place markers on the map.' }
		// Add more components as needed
	];
</script>

<svelte:head />

<Toaster />
<nav class="bg-base-300 p-4 text text-base-content">
	<div class="flex items-center justify-between">
		<!-- Your logo or site name -->
		<a href="https://valiantlynx.com">
			<img src="/logo.jpg" alt="valiantlynx Logo" class="h-12 w-12" />
		</a>

		<div class="flex items-center space-x-4">
			<!-- Navigation Links -->
			<a href="/">
				<h1 class="text-2xl font-bold">Svelte Leaflet</h1>
			</a>
		</div>

		<!-- Social Media Links -->
		<div class="flex items-center space-x-4">
			<!-- Componest button -->
			<a href="/components" class="btn btn-primary bg-gradient-to-r from-blue-600 to-pink-600">
				Components
			</a>
			{#each socialLinks as { icon, url }}
				<a href={url} target="_blank" rel="noopener noreferrer">
					<img src={icon} class=" w-6 h-6" alt="Social Media Icon for valiantlynx" />
				</a>
			{/each}
		</div>
	</div>
</nav>

<main class="bg-base-100 text-base-content">
	<slot />
</main>

<section class="py-16">
	<h2 class="text-4xl font-semibold text-center mb-12 text-white">Explore Our Components</h2>
	<div class="container mx-auto p-8">
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
			<!-- Component Cards -->
			{#each components as component}
				<div
					class="bg-gray-900 hover:bg-gray-800 shadow-lg rounded-lg p-6 transition duration-300 ease-in-out"
				>
					<a href={component.link} class="text-lg font-semibold text-blue-500 hover:text-blue-700"
						>{component.name}</a
					>
					<p class="text-gray-300 mt-2">{component.description}</p>
				</div>
			{/each}
		</div>

		<div class="mt-12 flex justify-center">
			<a
				href="/components"
				class="w-full md:w-auto bg-gradient-to-r from-blue-600 to-pink-600 hover:from-pink-600 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
			>
				<span class="animate-pulse">See All Components</span>
			</a>
		</div>
	</div>
</section>

<section class="py-16 bg-gradient-to-bl from-purple-500 to-pink-600 text-white">
	<h2 class="text-4xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
	<div class="accordion max-w-4xl mx-auto">
		<div class="join join-vertical w-full">
			<div class="collapse collapse-arrow border border-base-300 bg-white bg-opacity-10 rounded-md">
				<input type="radio" name="my-accordion" />
				<div class="collapse-title text-xl font-medium">What is Svelte-Leaflet?</div>
				<div class="collapse-content">
					<p>
						Svelte-Leaflet is a Svelte library that makes integrating and managing Leaflet maps in
						Svelte applications effortless and efficient.
					</p>
				</div>
			</div>

			<!-- More FAQ items -->
			<div class="collapse collapse-arrow border border-base-300 bg-white bg-opacity-10 rounded-md">
				<input type="radio" name="my-accordion" />
				<div class="collapse-title text-xl font-medium">How do I install Svelte-Leaflet?</div>
				<div class="collapse-content">
					<p>
						Install Svelte-Leaflet by running `npm install @valiantlynx/svelte-leaflet` in your project. Then,
						import and use Leaflet components as needed.
					</p>
				</div>
			</div>

			<div class="collapse collapse-arrow border border-base-300 bg-white bg-opacity-10 rounded-md">
				<input type="radio" name="my-accordion" />
				<div class="collapse-title text-xl font-medium">
					How do I use the Leaflet Map component in my project?
				</div>
				<div class="collapse-content">
					<p>
						The Leaflet Map component can be easily integrated by importing it into your Svelte file
						and adding it as a Svelte component with custom properties for customization.
					</p>
				</div>
			</div>

			<!-- Add as many FAQs as needed -->
		</div>
	</div>
</section>

<footer class="bg-gray-900 text-white">
	<div class="container mx-auto px-6 py-10 md:flex md:justify-between">
		<div class="mb-6 md:mb-0">
			<a href="/" class="text-2xl font-bold text-blue-500 hover:text-blue-700">Svelte-Leaflet</a>
			<p class="mt-2 text-gray-400">The ultimate Svelte library for Leaflet maps.</p>
		</div>

		<div class="grid grid-cols-2 gap-8 md:grid-cols-4">
			<div>
				<h2 class="text-xl font-semibold mb-3">Resources</h2>
				<ul class="text-gray-400">
					<li class="mb-2"><a href="/components" class="hover:text-white">Documentation</a></li>
					<li class="mb-2"><a href="/components" class="hover:text-white">Components</a></li>
					<li><a href="https://valiantlynx.com" class="hover:text-white">Tutorials</a></li>
				</ul>
			</div>
			<div>
				<h2 class="text-xl font-semibold mb-3">Support</h2>
				<ul class="text-gray-400">
					<li class="mb-2">
						<a href="https://valiantlynx.com" class="hover:text-white">FAQs</a>
					</li>
					<li class="mb-2">
						<a href="https://valiantlynx.com" class="hover:text-white">Contact Us</a>
					</li>
					<li><a href="https://valiantlynx.com" class="hover:text-white">Community</a></li>
				</ul>
			</div>
			<div class="col-span-2 md:col-auto">
				<h2 class="text-xl font-semibold mb-3">Stay Connected</h2>
				<div class="flex mt-4">
					{#each socialLinks as { icon, url }}
						<a href={url} class="mr-6 text-gray-400 hover:text-blue-500">
							<img src={icon} class=" w-6 h-6" alt="Social Media Icon for valiantlynx" />
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<div class="border-t border-gray-800 text-center py-4">
		<p>&copy; 2023 Valiantlynx. All Rights Reserved.</p>
	</div>
</footer>
