<script>
    import { LeafletMap, Circle, Popup, TileLayer, Tooltip } from '$lib/index';

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

    let circleInstance;

    // Properties and Methods (JSON format)
    const circleProperties = [
        { name: 'latLng', description: 'Geographical point.', type: 'LatLng' },
        { name: 'radius', description: 'Radius in meters.', type: 'Number' },
        { name: 'color', description: 'Stroke color.', defaultValue: '#3388ff' },
        { name: 'weight', description: 'Stroke width in pixels.', defaultValue: 3 },
        { name: 'opacity', description: 'Stroke opacity.', defaultValue: 1.0 },
        { name: 'lineCap', description: 'Line cap shape.', defaultValue: 'round' },
        { name: 'lineJoin', description: 'Line join shape.', defaultValue: 'round' },
        { name: 'dashArray', description: 'Dash pattern.', defaultValue: null },
        { name: 'dashOffset', description: 'Dash offset.', defaultValue: null },
        { name: 'fill', description: 'Fill flag.', type: 'Boolean' },
        { name: 'fillColor', description: 'Fill color.', defaultValue: '#3388ff' },
        { name: 'fillOpacity', description: 'Fill opacity.', defaultValue: 0.2 },
        { name: 'fillRule', description: 'Fill rule.', defaultValue: 'evenodd' },
        { name: 'options', description: 'Options.', type: 'Object' }
    ];

    const circleMethods = [
        { name: 'getCircle', description: 'Returns the underlying Leaflet Circle object instance.', reference: 'https://leafletjs.com/reference.html#circle' }
    ];
</script>

<div class="mb-8">
    <h1 class="text-4xl font-bold mb-4">Circle Component</h1>
    <h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
    <div class="mb-4 h-96">
        <LeafletMap options={mapOptions}>
            <TileLayer url={tileUrl} options={tileLayerOptions} />
            <Circle
                bind:this={circleInstance}
                latLng={[1.250111, 103.830933]}
                radius={1000}
                color="#ff0000"
                fillColor="#ff0000"
            >
                <Popup>Sentosa</Popup>
                <Tooltip>Sentosa</Tooltip>
            </Circle>
        </LeafletMap>
    </div>

    <h2 class="text-2xl font-semibold mb-4">Properties</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {#each circleProperties as property}
            <code class="p-2 border rounded">{property.name} | {property.description} | {property.type ?? property.defaultValue}</code>
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
            {#each circleMethods as method}
                <tr>
                    <td class="border p-2">{method.name}</td>
                    <td class="border p-2">
                        {method.description}
                        {#if method.reference}
                            <a href="{method.reference}" target="_blank">More info</a>
                        {/if}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
