<script>
	import { page } from '$app/stores';
	import { site } from '@valiantlynx/general-config';

	const avatar = $page.data.user?.avatar
		? `${site.site.pocketbase}/api/files/${$page.data.user?.collectionId}/${$page.data.user?.id}/${$page.data.user?.avatar}`
		: `https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${$page.data.user?.username}`;
</script>

<!-- profile-->
{#if !$page.data.user}
	<a href="/login" class="btn btn-primary">login</a>
	<a href="/signup" class="btn btn-secondary">signup</a>
{:else}
	

	<div class="dropdown dropdown-end">
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<label tabindex="0" for="profile button" class="btn btn-primary btn-circle avatar">
			<div class="w-10 rounded-full">
				<img
					src={avatar}
					alt={`${$page.data.user.username} profile picture on ${site.site.title}, ${
						site.site.protocol + site.site.domain
					}`}
				/>
			</div>
		</label>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<ul
			tabindex="0"
			class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
		>
			<li>
				<a class="justify-between" href="/dashboard/profile/preview">
					Profile
					<span class="badge">New</span>
				</a>
			</li>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/pricing' ? 'page' : undefined}>
				<a class="justify-between" href="/pricing"> pricing </a>
			</li>
			<li aria-current={$page.url.pathname === '/dashboard' ? 'page' : undefined}>
				<a class="justify-between" href="/dashboard">
					Dashboard
					<span class="badge">New</span>
				</a>
			</li>
			<li>
				<form
					action="/api/logout"
					method="POST"
					class="bg-primary text-primary-content rounded-box p-1 flex items-center mt-3"
				>
					<button type="submit" class="w-full flex items-center">
						<p class="text-start mr-auto font-bold">Logout</p>
						<i class="fa fa-sign-out-alt justify-end" />
					</button>
				</form>
			</li>
		</ul>
	</div>
{/if}
