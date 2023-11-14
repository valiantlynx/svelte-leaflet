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
	import Router from '$lib/components/Router.svelte';

	const socialLinks = [
    { url: 'https://github.com/valiantlynx/svelte-leaflet', icon: 'icons/github.svg' },
    {url: 'https://twitter.com/valiantlynxz', icon: 'icons/twitter.svg' },
    { url: 'https://www.linkedin.com/in/valiant-lynx-b3773224a', icon: 'icons/linkedin.svg' }
  ];
</script>

<nav class="bg-gray-800 p-4">
	<div class="flex items-center justify-between">
	  <!-- Your logo or site name -->
	  <a href="https://valiantlynx.com">
		<img src="logo.jpg" alt="valiantlynx Logo" class="h-12 w-12" />
	  </a>

	  <div class="flex items-center space-x-4">
		<!-- Navigation Links -->
		<h1 class="text-2xl font-bold text-white">Svelte Leaflet</h1>
	  </div>
  
	  <!-- Social Media Links -->
	  <div class="flex items-center space-x-4">
		{#each socialLinks as {icon, url }}
		  <a href={url} target="_blank" rel="noopener noreferrer">
			<img src={icon} class="text-white w-6 h-6"
			  alt="Social Media Icon for valiantlynx"
			 />
		  </a>
		{/each}
	  </div>
	</div>
  </nav>

  <h1 class="text-4xl font-bold text-center">Docs</h1>

<div class="m-10 h-96">
	<!-- <ImageOverlay	/> -->
	<Router />
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
