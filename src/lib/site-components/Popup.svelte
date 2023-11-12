<script>
    import { LeafletMap, Icon, Marker, Popup, TileLayer } from '$lib/index';
  
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
  
    const iconOptions = {
      iconUrl: 'icons/airport.svg',
      iconSize: [41, 41],
      iconAnchor: [20, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
    };
  </script>
  
  <style>
    /* Add additional styling if needed for this new section */
  </style>
  
  <div class="mb-8">
    <h1 class="text-4xl font-bold mb-4">Popup Component</h1>
    <h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
    <div class="mb-4 h-96">
      <LeafletMap options={mapOptions}>
        <TileLayer url={tileUrl} options={tileLayerOptions} />
        <Marker latLng={[1.282375, 103.864273]}>
          <Popup>Gardens by the Bay</Popup>
        </Marker>
        <Marker latLng={[1.359167, 103.989441]}>
          <Icon options={iconOptions} />
          <Popup>
            <b>Changi Airport</b>
          </Popup>
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
          <td class="border p-2">getPopup()</td>
          <td class="border p-2">Returns the underlying Leaflet <code>Popup</code> object instance. See <a href="https://leafletjs.com/reference.html#popup" target="_blank">https://leafletjs.com/reference.html#popup</a></td>
        </tr>
      </tbody>
    </table>
  </div>


  
  