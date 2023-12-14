<script>
import { page } from '$app/stores';
</script>

{#if $page.data.sites }
<div class="w-11/12 py-2 mx-4 rounded-3xl">
	<script
		async
		src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client={$page.data.sites.google_ads_client}"
		crossorigin="anonymous">{}</script>
	<!-- animevariant homepage add -->
	<ins
		class="adsbygoogle"
		style="display:block"
		data-ad-client="{$page.data.sites.google_ads_client}"
		data-ad-slot="3968848442"
		data-ad-format="auto"
		data-full-width-responsive="true"
	/>
	<script>{}</script>
</div>
{/if}
