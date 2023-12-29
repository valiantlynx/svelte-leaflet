<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import Circle from '$lib/site-components/Circle.svelte';
	import jsonData from './data.json';
	import Methods from '$lib/site-components/Methods.svelte';
	import Properties from '$lib/site-components/Properties.svelte';
	
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
            description: 'Options.'
        }
    };


    const methods = {
        getCircle: {
            description: 'Returns the underlying Leaflet Circle object instance.',
            link: 'https://leafletjs.com/reference.html#circle'
        }
    };
</script>

<ComponentStructure title="Circle" url="circle" {jsonData}>
	<Circle />
	<Properties {properties} />
	<Methods {methods} />

</ComponentStructure>
