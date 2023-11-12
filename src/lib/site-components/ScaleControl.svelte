<script>
    import { LeafletMap, TileLayer, ScaleControl } from '$lib/index';
  
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
    const scaleControlOptions = {
      maxWidth: 200,
    };
  
    let scaleControl;
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
      <code class="p-2 border rounded">position | Position. | String('topright')</code>
      <code class="p-2 border rounded">options  | Options.  | Object(undefined)</code>
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
          <td class="border p-2">getScaleControl()</td>
          <td class="border p-2">
            Returns the underlying Leaflet <code>Control.Scale</code> object instance.
            See <a href="https://leafletjs.com/reference.html#control-scale" target="_blank">https://leafletjs.com/reference.html#control-scale</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  