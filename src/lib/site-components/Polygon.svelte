<script>
    import { LeafletMap, Polygon, Popup, TileLayer, Tooltip } from '$lib/index';

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

    const polygon1 = [
        [1.2605024, 103.804856],
        [1.2595155, 103.8058001],
        [1.2572416, 103.8080317],
        [1.2555254, 103.808418],
        [1.2549247, 103.8096625],
        [1.2527365, 103.8122374],
        [1.2507629, 103.8157565],
        [1.2486177, 103.8189322],
        [1.2460862, 103.8224942],
        [1.2419673, 103.8262707],
        [1.2378055, 103.8309485],
        [1.2371619, 103.8328797],
        [1.2374194, 103.8341242],
        [1.2383204, 103.8351113],
        [1.2383204, 103.8356263],
        [1.238063, 103.8371712],
        [1.2398221, 103.8398749],
        [1.241195, 103.841334],
        [1.2435977, 103.8437373],
        [1.2460004, 103.8454539],
        [1.2487035, 103.8477713],
        [1.2523075, 103.8492304],
        [1.2535517, 103.8473851],
        [1.2536805, 103.845883],
        [1.2531227, 103.844381],
        [1.2528653, 103.8425786],
        [1.2541953, 103.8420636],
        [1.2540666, 103.8404757],
        [1.2545386, 103.838287],
        [1.2538092, 103.8371283],
        [1.2537234, 103.8350684],
        [1.255225, 103.8321501],
        [1.2550534, 103.829189],
        [1.2556112, 103.8254124],
        [1.2581855, 103.8233954],
        [1.2601591, 103.8198763],
        [1.2608027, 103.8168294],
        [1.2596443, 103.8136965],
        [1.2605024, 103.804856]
    ];

    let polygonInstance1;

    const properties = {
        latLngs: {
            type: "LatLng[]",
            description: "Geographical points."
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
        getPolygon: {
            description: "Returns the underlying Leaflet Polygon object instance.",
            link: "https://leafletjs.com/reference.html#polygon"
        }
    };
</script>

<div class="mb-8">
    <h1 class="text-4xl font-bold mb-4">Polygon Component</h1>
    <h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
    <div class="mb-4 h-96">
        <LeafletMap options={mapOptions}>
            <TileLayer url={tileUrl} options={tileLayerOptions} />
            <Polygon bind:this={polygonInstance1} latLngs={polygon1} color="#ff0000" fillColor="#ff0000">
                <Popup>Sentosa</Popup>
                <Tooltip>Sentosa</Tooltip>
            </Polygon>
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
