<script>
	import { createEventDispatcher, getContext, onDestroy, onMount } from 'svelte';
	import L from 'leaflet';
	import 'leaflet-routing-machine';
	
	const { getMap } = getContext(L);
	const dispatch = createEventDispatcher();

	export let start = [];
	export let destination = [];
	export let waypoints = [];
	export let routeCoordinates = [];

	let router;

	// This reactive statement ensures that waypointsArray is updated whenever start, destination, or waypoints change
	$: waypointsArray = [start, ...waypoints, destination].map((wp) => L.latLng(wp));

	// Initialize the router when the component is mounted
	onMount(() => {
		if (start.length && destination.length) {
			initializeRouter();
		}
	});

	// Function to initialize the router
	function initializeRouter() {
		router = L.Routing.control({
			waypoints: waypointsArray,
			routeWhileDragging: false,
			showAlternatives: false
		}).addTo(getMap());

		router.on('routesfound', (e) => {
			routeCoordinates = e.routes[0].coordinates;
			dispatch('routeFound', e.routes[0]);
		});
	}

	// Reactive statement to update the router's waypoints
	$: {
		if (router && start.length && destination.length) {
			router.setWaypoints(waypointsArray);
		}
	}

	onDestroy(() => {
		if (router) {
			router.remove();
		}
	});
</script>

{#if start.length && destination.length}
	<slot {routeCoordinates} />
{/if}
