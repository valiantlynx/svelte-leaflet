export const initialData = [
	{
		id: '12',
		name: 'header',
		data: { text: 'Example in Code', level: 1 }
	},
	{
		id: '140',
		name: 'code',
		data: {
			text: "<script>\n\timport { LeafletMap, Polyline, Popup, TileLayer, Route } from '$lib/index';\n\timport 'leaflet-routing-machine';\n\timport { routeCoordinates } from '$lib/components/stores';\n    import { ValiantRichText } from '@valiantlynx/svelte-rich-text';\n\n\n\tconst tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';\n\tconst tileLayerOptions = {\n\t\tminZoom: 0,\n\t\tmaxZoom: 20,\n\t\tmaxNativeZoom: 19,\n\t\tattribution: '© OpenStreetMap contributors'\n\t};\n\tconst mapOptions = {\n\t\tcenter: [59.4171, 10.4832],\n\t\tzoom: 5,\n\t\tzoomControl: false\n\t};\n\texport let start = [59.4171, 10.4832];\n\texport let destination = [58.3421, 8.5945];\n\n\tlet polylineInstance;\n\n\t// Define your waypoints here\n\tlet waypoints = [\n\t\t[59.3378, 9.2541],\n\t\t[58.5951, 9.7375],\n\t\t[58.7199, 10.0537],\n\t\t[59.038, 9.6988],\n\t\t[59.2282, 8.9197],\n\t\t[58.8083, 9.9437],\n\t\t[59.2573, 10.0932],\n\t\t[59.289, 9.5031],\n\t\t[58.594, 9.3539],\n\t\t[58.5022, 9.1974]\n\t];\n\n</script>\n\n<LeafletMap options={mapOptions}>\n\t<TileLayer url={tileUrl} options={tileLayerOptions} />\n\t<Route {start} {destination} {waypoints}>\n\t\t<Polyline bind:this={polylineInstance} bind:latLngs={$routeCoordinates}>\n\t\t\t<Popup>Dynamic Route</Popup>\n\t\t</Polyline>\n\t</Route>\n</LeafletMap>",
			lang: 'svelte'
		}
	}
];
