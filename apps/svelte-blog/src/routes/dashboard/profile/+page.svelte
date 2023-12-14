<script>
</script>

<svelte:head>
	<title>Profile</title>
</svelte:head>

<div
	class="flex flex-col items-center justify-center min-w-screen w-full bg-gradient-to-b from-secondary to-base-200"
>
	<div class="bg-base shadow-lg rounded-lg p-8 space-y-4">
		<h1 class="text-3xl font-semibold text-center text-secondary-content">Profile Page</h1>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<a
				href="/dashboard/profile/preview"
				class="p-4 border border-base-300 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-primary hover:text-primary-content"
			>
				<h5 class="text-lg font-semibold text-center text-secondary-content">View Profile</h5>
			</a>
			<a
				href="/dashboard/profile/edit"
				class="p-4 border border-base-300 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-primary hover:text-primary-content"
			>
				<h5 class="text-lg font-semibold text-center text-secondary-content">Edit Profile</h5>
			</a>
			<a
				href="/dashboard/profile/account"
				class="p-4 border border-base-300 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-primary hover:text-primary-content"
			>
				<h5 class="text-lg font-semibold text-center text-secondary-content">
					Account
				</h5>
			</a>
		
		</div>
			
	</div>
</div>
