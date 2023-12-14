
<script>
	import { page } from '$app/stores';
	</script>

{#if $page.data.sites }
<div>
	<script
		async
		src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client={$page.data.sites.google_ads_client}"
		crossorigin="anonymous">{}</script>
	<ins
		class="adsbygoogle"
		style="display:block"
		data-ad-format="autorelaxed"
		data-ad-client="{$page.data.sites.google_ads_client}"
		data-ad-slot="6950235009"
	/>
	<script>{}</script>
</div>
{/if}
