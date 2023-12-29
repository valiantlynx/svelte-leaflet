<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import CircleMarker from '$lib/site-components/CircleMarker.svelte';

	import jsonData from './data.json';
	import Properties from '$lib/site-components/Properties.svelte';
	import Methods from '$lib/site-components/Methods.svelte';

    const properties = {
		latLng: {
			type: 'LatLng',
			description: 'Geographical point.'
		},
        radius: {
            type: 'Number',
            description: 'Radius in meters.'
        },
        color: {
            type: 'String',
            description: 'Stroke color.',
            defaultValue: '#3388ff'
        },
        weight: {
            type: 'Number',
            description: 'Stroke width in pixels.',
            defaultValue: 3
        },
        opacity: {
            type: 'Number',
            description: 'Stroke opacity.',
            defaultValue: 1.0
        },
        lineCap: {
            type: 'String',
            description: 'Line cap shape.',
            defaultValue: 'round'
        },
        lineJoin: {
            type: 'String',
            description: 'Line join shape.',
            defaultValue: 'round'
        },
        dashArray: {
            type: 'String',
            description: 'Dash pattern.',
            defaultValue: null
        },
        dashOffset: {
            type: 'String',
            description: 'Dash offset.',
            defaultValue: null
        },
        fill: {
            type: 'Boolean',
            description: 'Fill flag.'
        },
        fillColor: {
            type: 'String',
            description: 'Fill color.',
            defaultValue: '#3388ff'
        },
        fillOpacity: {
            type: 'Number',
            description: 'Fill opacity.',
            defaultValue: 0.2
        },
        fillRule: {
            type: 'String',
            description: 'Fill rule.',
            defaultValue: 'evenodd'
        },
        options: {
            type: 'Object',
            description: 'Options.',
            defaultValue: undefined
        }
    };


    const methods = [
        {
            name: "getMap()",
            description: "Returns the underlying Leaflet Map object instance."
        }
    ];
</script>

<ComponentStructure title="Circle Marker" url="circle-marker" {jsonData}>
	<CircleMarker />
	<Properties {properties} />
	<Methods {methods} />
</ComponentStructure>
