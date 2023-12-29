<script>
    import { LeafletMap, Popup, Rectangle, TileLayer, Tooltip } from '$lib/index';

    const mapOptions = {
        center: [1.250111, 103.830933],
        zoom: 14
    };
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tileLayerOptions = {
        minZoom: 0,
        maxZoom: 20,
        maxNativeZoom: 19,
        attribution: '© OpenStreetMap contributors'
    };
    const latLngBounds = [
        [1.23506, 103.80352],
        [1.26278, 103.85065]
    ];

    let rectangleInstance;

    const properties = {
        latLngBounds: {
            type: "LatLngBounds",
            description: "Geographical bounds."
        },
        color: {
            type: "String",
            default: "#3388ff",
            description: "Stroke color."
        },
        weight: {
            type: "Number",
            default: 3,
            description: "Stroke width in pixels."
        },
        opacity: {
            type: "Number",
            default: 1.0,
            description: "Stroke opacity."
        },
        lineCap: {
            type: "String",
            default: "round",
            description: "Line cap shape."
        },
        lineJoin: {
            type: "String",
            default: "round",
            description: "Line join shape."
        },
        dashArray: {
            type: "String",
            default: null,
            description: "Dash pattern."
        },
        dashOffset: {
            type: "String",
            default: null,
            description: "Dash offset."
        },
        fill: {
            type: "Boolean",
            default: false,
            description: "Fill flag."
        },
        fillColor: {
            type: "String",
            default: "#3388ff",
            description: "Fill color."
        },
        fillOpacity: {
            type: "Number",
            default: 0.2,
            description: "Fill opacity."
        },
        fillRule: {
            type: "String",
            default: "evenodd",
            description: "Fill rule."
        },
        options: {
            type: "Object",
            default: "undefined",
            description: "Options."
        }
    };

    const methods = {
        getRectangle: {
            description: "Returns the underlying Leaflet Rectangle object instance.",
            link: "https://leafletjs.com/reference.html#rectangle"
        }
    };
</script>

<div class="mb-8">
    <h1 class="text-4xl font-bold mb-4">Rectangle Component</h1>
    <h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
    <div class="mb-4 h-96">
        <LeafletMap options={mapOptions}>
            <TileLayer url={tileUrl} options={tileLayerOptions} />
            <Rectangle bind:this={rectangleInstance} {latLngBounds} color="#ff0000" fillColor="#ff0000">
                <Popup>Sentosa</Popup>
                <Tooltip>Sentosa</Tooltip>
            </Rectangle>
        </LeafletMap>
    </div>

    <h2 class="text-2xl font-semibold mb-4">Properties</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
