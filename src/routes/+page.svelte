<script>
      // Sample data for components, replace with actual data
	  let components = [
        { name: 'Router', link: '/components/router', description: 'Efficient routing management.' },
        { name: 'Leaflet Map', link: '/components/leaflet-map', description: 'Interactive map integration.' },
        { name: 'Polygon', link: '/components/polygon', description: 'Draw and edit polygons.' },
        { name: 'Marker', link: '/components/marker', description: 'Place markers on the map.' },
        // Add more components as needed
    ];

    const socialLinks = [
		{ url: 'https://github.com/valiantlynx', icon: '/icons/github.svg' },
		{ url: 'https://twitter.com/valiantlynxz', icon: '/icons/twitter.svg' },
		{ url: 'https://www.linkedin.com/in/valiant-lynx-b3773224a', icon: '/icons/linkedin.svg' }
	];

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
            <!-- LeafletMap Component -->
            <div class="mb-8">
                <h1 class="text-4xl font-bold mb-4">LeafletMap Component</h1>
                <h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
                <div class="mb-4 h-96">
                    <LeafletMap bind:this={leafletMap} options={mapOptions}>
                        <TileLayer url={tileUrl} options={tileLayerOptions} />
                    </LeafletMap>
                </div>
            </div>

            <!-- LeafletMap Properties -->
            <div class="mb-8">
                <h2 class="text-2xl font-semibold mb-4">LeafletMap Properties</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <code class="p-2 border rounded"
                        >options | Options. See <a
                            href="https://leafletjs.com/reference.html#map-option"
                            target="_blank">https://leafletjs.com/reference.html#map-option</a
                        > | Object(undefined)</code
                    >
                </div>
            </div>

            <!-- LeafletMap Methods -->
            <div class="mb-8">
                <h2 class="text-2xl font-semibold mb-4">LeafletMap Methods</h2>
                <table class="w-full">
                    <thead>
                        <tr>
                            <th class="border p-2">Name</th>
                            <th class="border p-2">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border p-2">getMap()</td>
                            <td class="border p-2"
                                >Returns the underlying Leaflet <code>Map</code> object instance. See
                                <a href="https://leafletjs.com/reference.html#map-factory" target="_blank"
                                    >https://leafletjs.com/reference.html#map-factory</a
                                ></td
                            >
                        </tr>
                    </tbody>
                </table>
            </div>
            &lt;/div&gt; `;
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
    <section class="py-16 bg-gradient-to-br from-blue-600 to-pink-600 text-white">
        <h2 class="text-4xl font-semibold text-center mb-12">Easy Integration</h2>
    
        <div class="flex flex-wrap justify-center gap-8">
            <div class="max-w-md">
                <h3 class="text-2xl font-semibold mb-4">Quick Start</h3>
                <p class="text-lg mb-4">Begin with <code class="bg-gray-700 px-2 py-1 rounded">npm install @valiantlynx/svelte-leaflet</code>. Import <code class="bg-gray-700 px-2 py-1 rounded">&lt;LeafletMap&gt;</code> and <code class="bg-gray-700 px-2 py-1 rounded">&lt;TileLayer&gt;</code> to create stunning maps.</p>
                    <pre class="bg-gray-800 p-4 rounded-lg overflow-x-auto">
                        <code>{@html codeSnippet}</code>
                    </pre>
          
            </div>
            <div class="max-w-md">
                <h3 class="text-2xl font-semibold mb-4">Extensive Documentation</h3>
                <p class="text-lg">Explore our comprehensive guides and examples in the <a href="/components" class="text-blue-400 hover:text-blue-600">documentation</a>. Learn how to utilize components like <code class="bg-gray-700 px-2 py-1 rounded">LeafletMap</code> and <code class="bg-gray-700 px-2 py-1 rounded">TileLayer</code> in your projects.</p>
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
    
            <div class="mt-12 flex justify-center">
                <a href="/components" class="w-full md:w-auto bg-gradient-to-r from-blue-600 to-pink-600 hover:from-pink-600 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
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
                    <div class="collapse-title text-xl font-medium">
                        What is Svelte-Leaflet?
                    </div>
                    <div class="collapse-content"> 
                        <p>Svelte-Leaflet is a Svelte library that makes integrating and managing Leaflet maps in Svelte applications effortless and efficient.</p>
                    </div>
                </div>
                
                <!-- More FAQ items -->
                <div class="collapse collapse-arrow border border-base-300 bg-white bg-opacity-10 rounded-md">
                    <input type="radio" name="my-accordion" />
                    <div class="collapse-title text-xl font-medium">
                        How do I install Svelte-Leaflet?
                    </div>
                    <div class="collapse-content"> 
                        <p>Install Svelte-Leaflet by running `npm install svelte-leaflet` in your project. Then, import and use Leaflet components as needed.</p>
                    </div>
                </div>
    
                <div class="collapse collapse-arrow border border-base-300 bg-white bg-opacity-10 rounded-md">
                    <input type="radio" name="my-accordion" />
                    <div class="collapse-title text-xl font-medium">
                        How do I use the Leaflet Map component in my project?
                    </div>
                    <div class="collapse-content">
                        <p>The Leaflet Map component can be easily integrated by importing it into your Svelte file and adding it as a Svelte component with custom properties for customization.</p>
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
                        <li class="mb-2"><a href="https://valiantlynx.com" class="hover:text-white">FAQs</a></li>
                        <li class="mb-2"><a href="https://valiantlynx.com" class="hover:text-white">Contact Us</a></li>
                        <li><a href="https://valiantlynx.com" class="hover:text-white">Community</a></li>
                    </ul>
                </div>
                <div class="col-span-2 md:col-auto">
                    <h2 class="text-xl font-semibold mb-3">Stay Connected</h2>
                    <div class="flex mt-4">
                        {#each socialLinks as { icon, url }}
                        <a href={url} class="mr-6 text-gray-400 hover:text-blue-500">
                            <img src={icon} class=" w-6 h-6" alt="Social Media Icon for valiantlynx"/>
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
    
</main>

    
<style>
    a:hover::before {
        transform: scale(1.05);
        opacity: 1;
    }
</style>
