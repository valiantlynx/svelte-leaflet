<script>
	let codeSnippet = `
        &lt;script&gt;
        import { LeafletMap, TileLayer } from '$lib/index';

        const mapOptions = {
            center: [1.364917, 103.822872],
            zoom: 11
        };
        const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        const tileLayerOptions = {
            minZoom: 0,
            maxZoom: 20,
            maxNativeZoom: 19,
            attribution: '© OpenStreetMap contributors'
        };

        let leafletMap;
        &lt;/script&gt;

        &lt;div class="container mx-auto p-8"&gt;
            &lt;div class="mb-4 h-96"&gt;
                &lt;LeafletMap bind:this={leafletMap} options={mapOptions}&gt;
                    &lt;TileLayer url={tileUrl} options={tileLayerOptions} /&gt;
                &lt;/LeafletMap&gt;
            &lt;/div&gt;
        &lt;/div&gt;`;

	function copyToClipboard() {
		const textToCopy = codeSnippet.replaceAll('&lt;', '<').replaceAll('&gt;', '>');
		navigator.clipboard
			.writeText(textToCopy)
			.then(() => alert('Code copied to clipboard!'))
			.catch((err) => console.error('Error copying text: ', err));
	}
</script>

<svelte:head>
	<!-- Prism.js JavaScript -->
	<!-- Prism.js JavaScript -->
	<!-- Prism.js JavaScript -->
	<!-- Prism.js JavaScript -->
	<!-- Prism.js JavaScript -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/prism.min.js"></script>
	<!-- Prism.js theme CSS -->
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/themes/prism-okaidia.min.css"
	/>
</svelte:head>

<main class="container mx-auto">
	<section class="text-center py-16 bg-gradient-to-br from-blue-600 to-indigo-800">
		<h1 class="text-6xl font-bold text-white">Svelte-Leaflet</h1>
		<p class="text-2xl mt-6 text-gray-300 animate-bounce">Map Your Ideas into Reality</p>
	</section>

	<section class="py-16">
		<h2 class="text-4xl font-semibold text-center mb-12">
			Unleash the Power of Maps
		</h2>
		<div class="grid md:grid-cols-3 gap-8 text-center">
			<div
				class="bg-gray-900 shadow-xl rounded-xl p-10 transform hover:scale-105 transition duration-500"
			>
				<span class="block text-3xl text-blue-600 font-semibold mb-4">🌍 Dynamic</span>
				<p>Instantly visualize data with interactive and customizable maps.</p>
			</div>
			<div
				class="bg-gray-900 shadow-xl rounded-xl p-10 transform hover:scale-105 transition duration-500"
			>
				<span class="block text-3xl text-green-600 font-semibold mb-4">⚡ Efficient</span>
				<p>Highly optimized for speed and performance, keeping your app swift.</p>
			</div>
			<div
				class="bg-gray-900 shadow-xl rounded-xl p-10 transform hover:scale-105 transition duration-500"
			>
				<span class="block text-3xl text-red-600 font-semibold mb-4">🎨 Customizable</span>
				<p>Full control over styling and features to suit your application's design.</p>
			</div>
		</div>
	</section>
	<section class="py-16 bg-gradient-to-br from-blue-600 to-pink-600 text-white">
		<h2 class="text-4xl font-semibold text-center mb-12">Easy Integration</h2>

		<div class="flex flex-wrap justify-center gap-8 mx-4">
			<div class="max-w-md">
				<h3 class="text-2xl font-semibold mb-4">Quick Start</h3>
				<p class="text-lg mb-4">
					Begin with <code class="bg-gray-700 px-2 py-1 rounded"
						>npm install @valiantlynx/svelte-leaflet</code
					>. Import <code class="bg-gray-700 px-2 py-1 rounded">&lt;LeafletMap&gt;</code> and
					<code class="bg-gray-700 px-2 py-1 rounded">&lt;TileLayer&gt;</code> to create stunning maps.
				</p>
			</div>
			<div class="max-w-md">
				<h3 class="text-2xl font-semibold mb-4">Extensive Documentation</h3>
				<p class="text-lg">
					Explore our comprehensive guides and examples in the <a
						href="/components"
						class="text-blue-400 hover:text-blue-600">documentation</a
					>. Learn how to utilize components like
					<code class="bg-gray-700 px-2 py-1 rounded">LeafletMap</code>
					and <code class="bg-gray-700 px-2 py-1 rounded">TileLayer</code> in your projects.
				</p>
			</div>
			<div class="w-full md:w-3/4">
				<!-- snippet of code that will be displayed in the code snippet box, with syntax highlighting and copy button -->
				<div class="mx-auto mt-14 bg-gray-900 rounded-lg overflow-hidden">
					<div class="p-4">
						<div class="flex items-center justify-between">
							<span class="text-gray-200 text-xl font-bold">Code Snippet</span>
							<button
								id="copyButton"
								class="px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600 focus:outline-none focus:ring focus:ring-red-400"
								on:click={copyToClipboard}>Copy</button
							>
						</div>
					</div>

					<div class="px-3 py-2">
						<pre class="language-html"><code class="text-sm">
        {@html codeSnippet}
    </code></pre>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	a:hover::before {
		transform: scale(1.05);
		opacity: 1;
	}
</style>
