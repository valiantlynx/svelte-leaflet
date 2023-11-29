<script>
	import { createEventDispatcher, getContext, onDestroy, setContext } from 'svelte';
	import L from 'leaflet';
	import 'leaflet-routing-machine'; // Import leaflet-routing-machine
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';

	import EventBridge from '$lib/EventBridge';

	export let polyline = writable([]);

	const { getMap } = getContext(L);

	const defaultIcon = L.icon({
		iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
		iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
		shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		tooltipAnchor: [16, -28],
		shadowSize: [41, 41]
	});

	export let latLng;
	export let options = {};
	export let events = [];

	let marker;

	setContext(L.Layer, {
		getLayer: () => marker
	});
	setContext(L.Marker, {
		getMarker: () => marker
	});

	setContext(L.Routing, {
		getRouter: () => marker
	});

	const dispatch = createEventDispatcher();
	let eventBridge;

	$: {
		if (!marker) {
			marker = L.marker(latLng, options).addTo(getMap());
			eventBridge = new EventBridge(marker, dispatch, events);
		}
		router = marker
			.control({
				waypoints: [L.latLng(start[0], start[1]), L.latLng(destination[0], destination[1])],
				routeWhileDragging: true, // Update the route while dragging waypoints
				showAlternatives: false
			})
			.addTo(map);

		router.on('routesfound', function (/** @type {{ routes: { instructions: never[]; }[]; }} */ e) {
			/**
			 * @type {any}
			 */
			const routes = e.routes;
			const summary = routes[0].summary;
			const instructions = routes[0].instructions;
			e.routes[0].instructions = [];

			km = summary.totalDistance / 1000;
			if (retur == false) {
				cost_fuel = (km / 10) * l_km * fuel_price;
			} else {
				cost_fuel = (km / 10) * l_km * fuel_price * 2;
			}

			cost_toll = 0;
			cost_total = cost_fuel + cost_toll;

			time = summary.totalTime / 60 / 60;

			let instructionsHTML =
				'<ul  class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">';
			for (const instruction of instructions) {
				instructionsHTML += `
          <li class="w-auto text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white m-2">
            <button type="button" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
              <span class="mdi mdi-sign-direction text-2xl"></span>
              ${instruction.text} ${instruction.distance / 1000} km
            </button>
          </li>`;
			}

			instructionsHTML += '</ul>';

			routingInstructions = instructionsHTML;
			polyline.set(e.routes[0].coordinates);

			// 	polyline[0].coordinates.map((LatLng) => {
			// 	markerLocations.update((existingLocations) => [...existingLocations, LatLng]);
			// });

			// $page.data.tollStations.map((station) => {
			// 	polyline[0].coordinates.map((LatLng) => {
			// 		console.log("station: ", station[0], station[1], "distance: ", haversineDistance(station[0], station[1], LatLng.lat, LatLng.lng), "km");
			// 		const distance = haversineDistance(
			// 			station[0],
			// 			station[1],
			// 			LatLng.lat,
			// 			LatLng.lng
			// 		);
			// 		if (distance < 0.1) {
			// 			markerLocations.update((existingLocations) => [...existingLocations, LatLng]);
			// 		}
			// 	});
			// });
			//fetchAndDisplayStations(polyline);
		});
	}

	function haversineDistance(lat1, lon1, lat2, lon2) {
		const R = 6371;
		const dLat = (lat2 - lat1) * (Math.PI / 180);
		const dLon = (lon2 - lon1) * (Math.PI / 180);
		const a =
			Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.cos(lat1 * (Math.PI / 180)) *
				Math.cos(lat2 * (Math.PI / 180)) *
				Math.sin(dLon / 2) *
				Math.sin(dLon / 2);
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		const distance = R * c;
		return distance;
	}

	onDestroy(() => {
		eventBridge.unregister();
		marker.removeFrom(getMap());
		marker?.remove();
		marker = undefined;
	});

	export function getMarker() {
		return marker;
	}
</script>
