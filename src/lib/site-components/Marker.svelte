<script>
    import { LeafletMap, Marker, TileLayer } from '$lib/index';
  
    const mapOptions = {
      center: [1.364917, 103.822872],
      zoom: 11,
    };
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tileLayerOptions = {
      minZoom: 0,
      maxZoom: 20,
      maxNativeZoom: 19,
      attribution: '© OpenStreetMap contributors',
    };
  </script>
  
  <style>
    /* Add additional styling if needed for this new section */
  </style>
  
  <div class="mb-8">
    <h1 class="text-4xl font-bold mb-4">Marker Component</h1>
    <h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
    <div class="mb-4 h-96">
      <LeafletMap options={mapOptions}>
        <TileLayer url={tileUrl} options={tileLayerOptions} />
        <Marker latLng={[1.282375, 103.864273]} />
        <Marker latLng={[1.359167, 103.989441]} rotationAngle={45} />
      </LeafletMap>
    </div>
  
    <h2 class="text-2xl font-semibold mb-4">Properties</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <code class="p-2 border rounded">latLng         | Geographical point. | LatLng</code>
      <code class="p-2 border rounded">zIndexOffset   | z-index offset.     | Number(0)</code>
      <code class="p-2 border rounded">icon           | TODO L.Icon.Default | String</code>
      <code class="p-2 border rounded">opacity        | Opacity.            | Number(1.0)</code>
      <code class="p-2 border rounded">rotationAngle  | Rotation angle.     | Number(0)</code>
      <code class="p-2 border rounded">rotationOrigin | Rotation origin.    | String("center bottom")</code>
      <code class="p-2 border rounded">options        | Options.            | Object(undefined)</code>
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
          <td class="border p-2">getMarker()</td>
          <td class="border p-2">Returns the underlying Leaflet <code>Marker</code> object instance. See <a href="https://leafletjs.com/reference.html#marker" target="_blank">https://leafletjs.com/reference.html#marker</a></td>
        </tr>
      </tbody>
    </table>
  </div>
  