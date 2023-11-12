<script>
    import { LeafletMap, Marker, Popup, TileLayer, Tooltip } from '$lib/index';
  
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
    <h1 class="text-4xl font-bold mb-4">Tooltip Component</h1>
    <h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
    <div class="mb-4 h-96">
      <LeafletMap options={mapOptions}>
        <TileLayer url={tileUrl} options={tileLayerOptions} />
        <Marker latLng={[1.282375, 103.864273]}>
          <Popup>Gardens by the Bay</Popup>
          <Tooltip>Gardens by the Bay</Tooltip>
        </Marker>
        <Marker latLng={[1.359167, 103.989441]}>
          <Popup>
            <b>Changi Airport</b>
          </Popup>
          <Tooltip>
            <b>Changi Airport</b>
          </Tooltip>
        </Marker>
      </LeafletMap>
    </div>
  
    <h2 class="text-2xl font-semibold mb-4">Properties</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
          <td class="border p-2">getTooltip()</td>
          <td class="border p-2">Returns the underlying Leaflet <code>Tooltip</code> object instance. See <a href="https://leafletjs.com/reference.html#tooltip" target="_blank">https://leafletjs.com/reference.html#tooltip</a></td>
        </tr>
      </tbody>
    </table>
  </div>
  