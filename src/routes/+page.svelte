<script>
	import ImageOverlay from '$lib/components/ImageOverlay.svelte';
	import Polygon from '$lib/site-components/Polygon.svelte';
	import DivIcon from '$lib/site-components/DivIcon.svelte';
	import LeafletMap from '$lib/site-components/LeafletMap.svelte';
	import Marker from '$lib/site-components/Marker.svelte';
	import MarkerIcon from '$lib/site-components/MarkerIcon.svelte';
	import Polyline from '$lib/site-components/Polyline.svelte';
	import Popup from '$lib/site-components/Popup.svelte';
	import TileLayerWms from '$lib/site-components/TileLayer-WMS.svelte';
	import TileLayer from '$lib/site-components/TileLayer.svelte';
	import Tooltip from '$lib/site-components/Tooltip.svelte';
	import Rectangle from '$lib/site-components/Rectangle.svelte';
	import Circle from '$lib/site-components/Circle.svelte';
	import CircleMarker from '$lib/site-components/CircleMarker.svelte';
	import GeoJson from '$lib/site-components/GeoJSON.svelte';
	import ScaleControl from '$lib/site-components/ScaleControl.svelte';
</script>

  <h1 class="text-4xl font-bold text-center">Docs</h1>

  <!-- links to specific pages about each of the components -->
  <a href="/router" class="link-primary link">Router</a>

<div class="m-10 h-96">
	<!-- <ImageOverlay	/> -->
	<LeafletMap />
	<Marker />
	<MarkerIcon />
	<DivIcon />
	<Popup />
	<Tooltip />
	<TileLayer />
	<TileLayerWms />
	<Polyline />
	<Polygon />
	<Rectangle />
	<Circle />
	<GeoJson />
	<ScaleControl />
	<CircleMarker />
</div>
