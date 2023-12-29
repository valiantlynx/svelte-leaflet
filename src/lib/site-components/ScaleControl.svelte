<script>
    import { LeafletMap, TileLayer, ScaleControl } from '$lib/index';

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
    const scaleControlOptions = {
        maxWidth: 200
    };

    let scaleControl;

    const properties = {
        position: {
            type: "String",
            default: "topright",
            description: "Position."
        },
        options: {
            type: "Object",
            default: "undefined",
            description: "Options."
        }
    };

    const methods = {
        getScaleControl: {
            description: "Returns the underlying Leaflet Control.Scale object instance.",
            link: "https://leafletjs.com/reference.html#control-scale"
        }
    };
</script>

<div class="mb-8">
    <h1 class="text-4xl font-bold mb-4">ScaleControl Component</h1>
    <h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
    <div class="mb-4 h-96">
        <LeafletMap options={mapOptions}>
            <TileLayer url={tileUrl} options={tileLayerOptions} />
            <ScaleControl bind:this={scaleControl} position="bottomleft" options={scaleControlOptions} />
        </LeafletMap>
    </div>

    <h2 class="text-2xl font-semibold mb-4">Properties</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {#each Object.entries(properties) as [key, value]}
            <code class="p-2 border rounded">{key} | {value.description} | {value.type}({value.default})</code>
        {/each}
    </div>

    <h2 class="text-2xl font-semibold mb-4">Methods</h2>
    <table class="w-full">
        <thead>
            <tr>
                <th class="border p-2">Name</th>
                <th class="border p-2">Description</th>
            </tr>
        </thead>
        <tbody>
            {#each Object.entries(methods) as [methodName, methodDetails]}
                <tr>
                    <td class="border p-2">{methodName}</td>
                    <td class="border p-2">
                        {methodDetails.description}
                        <a href={methodDetails.link} target="_blank">More Info</a>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    /* Add additional styling if needed for this new section */
</style>
