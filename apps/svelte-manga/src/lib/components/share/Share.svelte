<script>
	import { ButtonWithIcon } from '@valiantlynx/svelte-ui';
	import { page } from '$app/stores';

	export let title = $page.data.siteName;
	export let url = $page.url.origin;
	export let text = 'Check out this manga website. it tracks your reading progress!';
	export let hashtags = 'manga';
	export let image = `${$page.url.origin}/api/logo?width=280&height=280&color=black`

	let twitterUrl;
	let facebookUrl;
	let linkedinUrl;
	let emailUrl;

	$: twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}&image=${image}`;
	$: facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&image=${image}&title=${title}&description=${text}`;
	$: linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${text}&source=${url}&image=${image}`;
	$: emailUrl = `mailto:?subject=${title}&body=${text} ${url}&image=${image}`;
</script>

<div class="flex flex-wrap justify-center py-2 w-full gap-2">
	<a href={facebookUrl} target="_blank">
	<ButtonWithIcon>
		<i slot="icon" class="fa fa-facebook text-blue-600" />
		
			Facebook
		

	</ButtonWithIcon>
</a>

	<a href={twitterUrl} target="_blank">
	<ButtonWithIcon>
		<i slot="icon" class="fa fa-twitter text-blue-600" />
			Twitter
	</ButtonWithIcon>
</a>
<a href={linkedinUrl} target="_blank">
	<ButtonWithIcon>
		<i slot="icon" class="fa fa-linkedin text-blue-600" />
		
			LinkedIn
		
	</ButtonWithIcon>
</a>
<a href={emailUrl} target="_blank">
	<ButtonWithIcon>
		<i slot="icon" class="fa fa-envelope text-warning" />
		
			Email
		
	</ButtonWithIcon>
</a>
</div>
