<script lang="ts">
	import ChatMessage from './ChatMessage.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { pb } from '$lib/utils/api';
	import { page } from '$app/stores';
	import ProfileModal from './ProfileModal.svelte';

	let newMessage: string;
	let messages: any[] = [];
	let unsubscribe: () => void;
	let scrollBottom: HTMLDivElement;
	let lastScrollTop: number;
	let canAutoScroll = true;
	let unreadMessages = false;
	let loading = false;

	function autoScroll() {
		setTimeout(() => scrollBottom?.scrollIntoView({ behavior: 'smooth' }), 50);
		unreadMessages = false;
	}

	function watchScroll(e: any) {
		canAutoScroll = (e.target.scrollTop || Infinity) > lastScrollTop;
		lastScrollTop = e.target.scrollTop;
		unreadMessages = !canAutoScroll;
	}

	async function getInitialMessages() {
		try {
			const resultList = await pb.collection('chat_animevariant').getList(1, 50, {
				sort: 'created',
				filter: $page.params.chapterid
					? `mangaid="${$page.params.id}" && chapterid="${$page.params.chapterid}"`
					: `mangaid="${$page.params.id}"`,
				expand: 'sender'
			});

			return resultList.items;
		} catch (error) {
			console.error('Fetching initial messages error:', error);
			return [];
		}
	}

	async function handleRealtimeMessage({ action, record }: any) {
		try {
			if (action === 'create') {
				const sender = await pb.collection('users').getOne(record.sender);
				record.expand = { sender };
				messages = [...messages, record];

				if ($page.data.user?.id !== record.receiver) {
					unreadMessages = true;
				}
			}
			if (action === 'delete') {
				messages = messages.filter((m) => m.id !== record.id);
			}
		} catch (error) {
			console.error('Realtime message subscription error:', error);
		}
	}

	onMount(async () => {
		messages = await getInitialMessages();
		unsubscribe = await pb.collection('chat_animevariant').subscribe('*', handleRealtimeMessage);
	});

	onDestroy(() => {
		unsubscribe?.();
		messages = [];
	});

	async function sendMessage() {
		loading = true;
		const data = {
			message: newMessage,
			sender: $page.data.user?.id,
			chapterid: $page.params.chapterid,
			mangaid: $page.params.id,
			receiver: $page.data.user?.id
		};
		await pb.collection('chat_animevariant').create(data);
		newMessage = '';
		canAutoScroll = true;
		autoScroll();
		loading = false;
	}
</script>

<div class=" space-y-4  pb-4 border border-primary m-4 bg-base-200">
	<h2 class="text-2xl font-bold mb-4 bg-primary text-primary-content rounded-b-md w-full">
		<i class="fa fa-comments mx-2"></i> 
		Join the Discussion
	</h2>

	<main class="overflow-y-auto max-h-[60vh] px-4" on:scroll={watchScroll}>
		{#each messages as message (message.id)}
			<ChatMessage {message} sender={$page.data.user?.username} />
		{/each}
		<div class="dummy" bind:this={scrollBottom} />
	</main>

	{#if !canAutoScroll}
		<div class="text-center justify-center flex">
			<button on:click={autoScroll} class="btn btn-primary">
				{#if unreadMessages}
					💬
				{/if}
				🡣
			</button>
		</div>
	{/if}

	<div class="divider px-4 "></div>

	<div class="border-t border-primary pt-4	">
		<div class="flex flex-wrap w-full">
			<div class="left-content mb-2 ml-2 w-full lg:w-1/4  order-1 flex">
				<ProfileModal />
				{#if $page.data.user}
					<div class="flex-grow ml-2 mb-2"> 
						<h3 class="text-lg font-bold break-all">{$page.data.user?.username}</h3>
						<p class="text-sm break-all">{$page.data.user?.email}</p>
					</div>
				{/if}
			</div>
			<div class="right-content w-full lg:w-3/4 order-2">
				<form on:submit|preventDefault={sendMessage} class=" flex items-center">
			
					<input
					type="text"
					placeholder={$page.data.user ? 'Type a message...' : '<------ Login to chat 💬'}
					id="comment"
					required
					minlength="1"
					bind:value={newMessage}
					disabled={loading}
					class="input input-bordered input-primary flex-grow"
					
					/>
					{#if $page.data.user}
						<button type="submit" disabled={loading} class="btn btn-primary"> Send </button>
					{/if}
				</form>
			</div>
		</div>
	</div>
</div>

