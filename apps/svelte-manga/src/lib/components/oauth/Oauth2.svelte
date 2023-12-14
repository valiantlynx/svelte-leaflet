<script>
	import Oauth2SingleServer from './Oauth2SingleServer.svelte';
</script>

<div class="flex flex-col w-full">
	<h3 class="text-center text-lg font-bold">Login with</h3>
	<!-- auth with google -->
	<div class="w-full block my-4">
		<Oauth2SingleServer
			logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/150px-Google_%22G%22_logo.svg.png"
			provider="google"
		/>
	</div>
	<h6 class="text-center">Kommer Snart</h6>

	<!-- auth with apple -->
	<div class="w-full block my-4">
		<Oauth2SingleServer
			logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/512px-Apple_logo_black.svg.png"
			provider="apple"
			active={false}
		/>
	</div>

	<!-- auth with facebook -->
	<div class="w-full block my-4">
		<Oauth2SingleServer
			logo="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/512px-Facebook_Logo_%282019%29.png"
			provider="facebook"
			active={false}
		/>
	</div>

	<!-- auth with microsoft -->
	<div class="w-full block my-4">
		<Oauth2SingleServer
			logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png"
			provider="microsoft"
			active={false}
		/>
	</div>

	<!-- auth with instagram -->
	<div class="w-full block my-4">
		<Oauth2SingleServer
			logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/512px-Instagram-Icon.png"
			provider="instagram"
			active={false}
		/>
	</div>

	<!-- auth with X (twitter) -->
	<div class="w-full block my-4">
		<Oauth2SingleServer
			logo="https://cdn.cms-twdigitalassets.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.2560.png"
			provider="twitter"
			active={false}
		/>
	</div>
</div>
