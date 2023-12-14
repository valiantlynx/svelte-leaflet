<script>
	import { getContext, onDestroy } from 'svelte';
	import L from 'leaflet';
	import 'leaflet.fullscreen';

	const { getMap } = getContext(L);

	export let position = 'bottomright';
	export let options = {};

	let fullscreen;

	$: {
		if (!fullscreen) {
			fullscreen = L.control.fullscreen(options).addTo(getMap());
		}
		fullscreen.setPosition(position);
	}

	onDestroy(() => {
		fullscreen.remove();
	});

	export function getFullscreen() {
		return fullscreen;
	}
</script>
