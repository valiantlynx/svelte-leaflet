<script>
    import { LeafletMap, CircleMarker, Popup, TileLayer, Tooltip, Polygon } from '$lib/index';
  
    const mapOptions = {
      center: [1.250111, 103.830933],
      zoom: 14,
    };
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tileLayerOptions = {
      minZoom: 0,
      maxZoom: 20,
      maxNativeZoom: 19,
      attribution: '© OpenStreetMap contributors',
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
      [1.2605024, 103.804856],
    ];
  </script>
  
  <div class="mb-8">
    <h1 class="text-4xl font-bold mb-4">CircleMarker Component</h1>
    <h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
    <div class="mb-4 h-96">
      <LeafletMap options={mapOptions}>
        <TileLayer url={tileUrl} options={tileLayerOptions} />
        <Polygon latLngs={polygon1} color="#ff0000" fillColor="#ff0000">
          <Popup>Sentosa</Popup>
          <Tooltip>Sentosa</Tooltip>
      </Polygon>
        {#each polygon1 as point}
          <CircleMarker
            latLng={point}
            radius={3}
            color="#ff0000"
            fillColor="#ff0000"
          >
            <Popup>{point}</Popup>
            <Tooltip>{point}</Tooltip>
          </CircleMarker>
        {/each}
      </LeafletMap>
    </div>
  
    <h2 class="text-2xl font-semibold mb-4">Properties</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <code class="p-2 border rounded">latLng      | Geographical point.    | LatLng</code>
      <code class="p-2 border rounded">radius      | Radius in pixels.       | Number(3)</code>
      <code class="p-2 border rounded">color       | Stroke color.           | String("#3388ff")</code>
      <code class="p-2 border rounded">weight      | Stroke width in pixels. | Number(3)</code>
      <code class="p-2 border rounded">opacity     | Stroke opacity.         | Number(1.0)</code>
      <code class="p-2 border rounded">lineCap     | Line cap shape.         | String("round")</code>
      <code class="p-2 border rounded">lineJoin    | Line join shape.        | String("round")</code>
      <code class="p-2 border rounded">dashArray   | Dash pattern.           | String(null)</code>
      <code class="p-2 border rounded">dashOffset  | Dash offset.            | String(null)</code>
      <code class="p-2 border rounded">fill        | Fill flag.              | Boolean()</code>
      <code class="p-2 border rounded">fillColor   | Fill color.             | String("#3388ff")</code>
      <code class="p-2 border rounded">fillOpacity | Fill opacity.           | Number(0.2)</code>
      <code class="p-2 border rounded">fillRule    | Fill rule.              | String("evenodd")</code>
      <code class="p-2 border rounded">options     | Options.                | Object(undefined)</code>
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
        <tr>
          <td class="border p-2">getCircleMarker()</td>
          <td class="border p-2">
            Returns the underlying Leaflet <code>CircleMarker</code> object instance.
            See <a href="https://leafletjs.com/reference.html#circlemarker" target="_blank">https://leafletjs.com/reference.html#circlemarker</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  