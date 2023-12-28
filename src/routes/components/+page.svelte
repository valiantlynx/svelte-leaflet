<script>
	// Sample data for components
	let components = [
		{
			name: 'Router',
			link: '/components/router',
			description: 'Efficient routing management.',
			icon: '/icons/router.svg'
		},
		{
			name: 'Leaflet Map',
			link: '/components/leaflet-map',
			description: 'Interactive map integration.',
			icon: '/icons/map.svg'
		},
		{
			name: 'Polygon',
			link: '/components/polygon',
			description: 'Draw and edit polygons.',
			icon: '/icons/polygon.svg'
		},
		{
			name: 'Marker',
			link: '/components/marker',
			description: 'Place markers on the map.',
			icon: '/icons/marker.svg'
		},
		{
			name: 'Marker Icon',
			link: '/components/marker-icon',
			description: 'Customize your markers.',
			icon: '/icons/marker-icon.svg'
		},
		{
			name: 'Polyline',
			link: '/components/polyline',
			description: 'Draw and edit polylines.',
			icon: '/icons/polyline.svg'
		},
		{
			name: 'Popup',
			link: '/components/popup',
			description: 'Add popups to your map.',
			icon: '/icons/popup.svg'
		},
		{
			name: 'Tooltip',
			link: '/components/tooltip',
			description: 'Add tooltips to your map.',
			icon: '/icons/tooltip.svg'
		},
		{
			name: 'Tile Layer',
			link: '/components/tile-layer',
			description: 'Add tile layers to your map.',
			icon: '/icons/tile-layer.svg'
		},
		{
			name: 'Tile Layer WMS',
			link: '/components/tile-layer-wms',
			description: 'Add WMS tile layers to your map.',
			icon: '/icons/tile-layer-wms.svg'
		},
		{
			name: 'Rectangle',
			link: '/components/rectangle',
			description: 'Draw and edit rectangles.',
			icon: '/icons/rectangle.svg'
		},
		{
			name: 'Circle',
			link: '/components/circle',
			description: 'Draw and edit circles.',
			icon: '/icons/circle.svg'
		},
		{
			name: 'GeoJSON',
			link: '/components/geojson',
			description: 'Add GeoJSON to your map.',
			icon: '/icons/geojson.svg'
		},
		{
			name: 'Scale Control',
			link: '/components/scale-control',
			description: 'Add a scale control to your map.',
			icon: '/icons/scale-control.svg'
		},
		{
			name: 'Circle Marker',
			link: '/components/circle-marker',
			description: 'Draw and edit circle markers.',
			icon: '/icons/circle-marker.svg'
		},
		{
			name: 'Div Icon',
			link: '/components/div-icon',
			description: 'Add div icons to your map.',
			icon: '/icons/div-icon.svg'
		},
		{
			name: 'Image Overlay',
			link: '/components/image-overlay',
			description: 'Add image overlays to your map.',
			icon: '/icons/image-overlay.svg'
		}
	];
</script>

<div class="container mx-auto p-8">
	<h1 class="text-5xl font-bold text-center mb-10">Explore Our Components</h1>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each components as component}
			<div class="card card-bordered card-compact lg:card-normal bg-base-100 shadow-xl">
				<figure><img src="/logo.jpg" alt={component.name} /></figure>
				<div class="card-body">
					<h2 class="card-title">{component.name}</h2>
					<p>{component.description}</p>
					<div class="card-actions justify-end">
						<a href={component.link} class="btn btn-primary">Learn More / code</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
