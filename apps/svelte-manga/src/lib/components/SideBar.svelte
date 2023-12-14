<script>
	import SideBarIcon  from '$lib/components/SideBarIcon.svelte';
	import { page } from '$app/stores';
</script>

<div
	class="relative top-0 left-0 w-16 h-auto bg-base-300 m-0 flex flex-col text-base-content shadow "
>
	<a href="/dashboard/profile"> <SideBarIcon tooltip="Profile" icon="iconoir:profile-circle" /></a>
	<a href="/dashboard/reading-progress"
		><SideBarIcon tooltip="reading progress" icon="fluent-mdl2:reading-mode" /></a
	>
	<a href="/dashboard/settings"><SideBarIcon tooltip="Settings" icon="bx:bx-cog" /></a>
	{#if $page.data.user?.role.includes('admin')}
		<a href="/dashboard/admin"><SideBarIcon tooltip="Admin" icon="bx:bx-shield" /></a>
		<a href="/dashboard/upload"><SideBarIcon tooltip="Upload" icon="ph:upload-bold" /></a>
	{/if}
	{#if $page.data.user?.role.includes('creator')}
	<a href="/dashboard/upload"><SideBarIcon tooltip="Upload" icon="ph:upload-bold" /></a>
	{/if}

	<form action="/api/logout" method="POST" class="w-full">
		<button type="submit" class="w-full">
			<SideBarIcon tooltip="Logout" icon="bx:bx-log-out" />
		</button>
	</form>
</div>
