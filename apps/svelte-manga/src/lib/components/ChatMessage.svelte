<script>
	import { site } from '@valiantlynx/general-config';
	/**
	 * @type {{ expand: { sender: { username: any; avatar: any; id: any; }; }; created: string | number | Date; message: any; }}
	 */
	export let message;
	export let sender;


	//console.log('message: ', message, 'sender: ', message.expand?.sender.username);

	const messageClass = message.expand?.sender.username === sender ? 'chat-end' : 'chat-start';
	const avatar = message.expand?.sender?.avatar
		? `${site.site.pocketbase}/api/files/${message.expand?.sender?.collectionId}/${message.expand?.sender?.id}/${message.expand?.sender?.avatar}`
		: `https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${message.expand?.sender?.username}`;

	const ts = new Date(message.created);

</script>

<div class={`chat ${messageClass}`}>
	<div class="chat-image avatar">
		<div class="w-10 rounded-full">
			<img src={avatar} alt="avatar" />
		</div>
	</div>
	<div class="chat-header">
		{message.expand?.sender.username}
		<time class="text-xs opacity-50">{ts.toLocaleTimeString()}</time>
	</div>
	<div class="chat-bubble">{@html message.message}</div>
	{#if messageClass === 'chat-end'}
		<div class="chat-footer opacity-50">comment sent</div>
	{:else}
		<div class="chat-footer opacity-50">comment delivered</div>
	{/if}
</div>
