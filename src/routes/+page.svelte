<script>
      // Sample data for components, replace with actual data
	  let components = [
        { name: 'Router', link: '/components/router', description: 'Efficient routing management.' },
        { name: 'Leaflet Map', link: '/components/leaflet-map', description: 'Interactive map integration.' },
        { name: 'Polygon', link: '/components/polygon', description: 'Draw and edit polygons.' },
        { name: 'Marker', link: '/components/marker', description: 'Place markers on the map.' },
        // Add more components as needed
    ];
</script>

<main class="container mx-auto px-4">
    <section class="text-center py-16 bg-gradient-to-br from-blue-600 to-indigo-800">
        <h1 class="text-6xl font-bold text-white">Svelte-Leaflet</h1>
        <p class="text-2xl mt-6 text-gray-300 animate-bounce">Map Your Ideas into Reality</p>
    </section>

    <section class="py-16">
        <h2 class="text-4xl font-semibold text-center mb-12 text-gray-800">Unleash the Power of Maps</h2>
        <div class="grid md:grid-cols-3 gap-8 text-center">
            <div class="bg-gray-900 shadow-xl rounded-xl p-10 transform hover:scale-105 transition duration-500">
                <span class="block text-3xl text-blue-600 font-semibold mb-4">🌍 Dynamic</span>
                <p>Instantly visualize data with interactive and customizable maps.</p>
            </div>
            <div class="bg-gray-900 shadow-xl rounded-xl p-10 transform hover:scale-105 transition duration-500">
                <span class="block text-3xl text-green-600 font-semibold mb-4">⚡ Efficient</span>
                <p>Highly optimized for speed and performance, keeping your app swift.</p>
            </div>
            <div class="bg-gray-900 shadow-xl rounded-xl p-10 transform hover:scale-105 transition duration-500">
                <span class="block text-3xl text-red-600 font-semibold mb-4">🎨 Customizable</span>
                <p>Full control over styling and features to suit your application's design.</p>
            </div>
        </div>
    </section>

    <section class="py-16 bg-gray-800 text-white">
        <h2 class="text-4xl font-semibold text-center mb-12">Easy Integration</h2>
        <div class="flex flex-wrap justify-center gap-8">
            <div class="max-w-md">
                <h3 class="text-2xl font-semibold mb-4">Quick Start</h3>
                <p class="text-lg">Begin with <code class="bg-gray-700 px-2 py-1 rounded">npm install svelte-leaflet</code>. Import <code class="bg-gray-700 px-2 py-1 rounded">&lt;LeafletMap&gt;</code> to create stunning maps.</p>
            </div>
            <div class="max-w-md">
                <h3 class="text-2xl font-semibold mb-4">Extensive Documentation</h3>
                <p class="text-lg">Explore our comprehensive guides and examples in the <a href="/docs" class="text-blue-400 hover:text-blue-600">documentation</a>.</p>
            </div>
        </div>
    </section>

    <section class="py-16">
        <h2 class="text-4xl font-semibold text-center mb-12 text-white">Explore Our Components</h2>
        <div class="container mx-auto p-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
                <!-- Component Cards -->
                {#each components as component}
                <div class="bg-gray-900 hover:bg-gray-800 shadow-lg rounded-lg p-6 transition duration-300 ease-in-out">
                    <a href={component.link} class="text-lg font-semibold text-blue-500 hover:text-blue-700">{component.name}</a>
                    <p class="text-gray-300 mt-2">{component.description}</p>
                </div>
                {/each}
            </div>

            <div class="text-center mt-12">
                <a href="/components" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">
                    See All Components
                </a>
            </div>
        </div>
    </section>
    <section class="py-16 bg-gradient-to-bl from-purple-500 to-pink-600 text-white">
        <h2 class="text-4xl font-semibold text-center mb-12">FAQs</h2>
        <div class="accordion max-w-4xl mx-auto">
            <!-- Add FAQ items here -->
        </div>
    </section>

    <footer class="py-10 bg-gray-900 text-white text-center">
        <p class="text-lg">&copy; 2023 Your Company. Innovating with Svelte.</p>
    </footer>
</main>

<style>
    /* Additional Svelte-specific styles can be added here */
</style>
