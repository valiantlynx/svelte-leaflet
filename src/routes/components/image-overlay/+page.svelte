<script>
	import ImageOverlay from '$lib/site-components/ImageOverlay.svelte';
	import { ValiantRichText } from '@valiantlynx/svelte-rich-text';
	import { initialData } from './data';
	import {Breadcrumbs} from '@valiantlynx/svelte-ui';

	const crumbs = [
		{
			name: 'Home',
			url: '/'
		},
		{
			name: 'components',
			url: '/components'
		},
		{
			name: 'image-overlay',
			url: '/components/image-overlay'
		}
	];
</script>

<Breadcrumbs {crumbs} />

<h1 class="text-4xl font-bold text-center">Image Overlay</h1>

<div class="m-10">
	<ImageOverlay />
</div>

<ValiantRichText  {initialData} />
