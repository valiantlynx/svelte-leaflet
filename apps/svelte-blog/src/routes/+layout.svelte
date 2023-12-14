<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Feedback from '$lib/components/feedback/Feedback.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { Toaster } from 'svelte-french-toast';
	import '../app.postcss';
</script>

<svelte:head />


<Toaster />
<Nav />
<slot />
<Feedback />
<Footer />

