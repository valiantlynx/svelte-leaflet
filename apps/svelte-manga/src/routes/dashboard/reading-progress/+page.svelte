<!-- ReadingProgress.svelte -->

<script lang="ts">
	import { page } from '$app/stores';
	import ImportReadingProgress from '$lib/components/ImportReadingProgress.svelte';
	import PaginationSimple from '$lib/components/PaginationSimple.svelte';
	
	let pageNo = 1;
	const itemsPerPage = 20;

	// Calculate the progress percentage for each manga
	function calculateProgressPercentage(chapter: any) {
		const totalChapters = chapter.totalChapters || 1;
		const progressPercentage =
			((totalChapters - chapter.currentChapterIndex) / totalChapters) * 100;

		// Ensure the progress percentage is within the range [0, 100]
		return Math.min(100, Math.max(0, progressPercentage));
	}
</script>

<div class="flex flex-wrap justify-center">
	<div class="px-4 py-8 w-full lg:w-3/4 border border-primary rounded-l-lg">
		<div class="bg-base-200 mb-4 border border-primary">
			<h2 class="text-xl font-bold text-center bg-primary rounded-b-lg text-primary-content ">
				<i class="fa fa-book mx-4"></i>
				Your Reading Progress
			</h2>

			<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
				{#if $page.data.user}
					{#if $page.data.readingProgress.length != 0}
					<!-- Pagination -->
					<div class="col-span-full flex justify-end w-full">
						<PaginationSimple action="?/readingProgress" disabled={!$page.data.readingProgress} />
					</div>
						<!-- Individual Chapters -->
						{#each ( $page.form?.readingProgress ? $page.form?.readingProgress : $page.data.readingProgress) as chapter (chapter.id)}
							<!-- Manga Card -->
							<div class="bg-base-300 text-base-content rounded-lg shadow-md">
								<a href={`/manga/${chapter.expand?.manga?.sourceid}`} class="hover:underline">
									<!-- Manga Cover Image -->
									<img
										src={chapter.expand?.manga?.img}
										alt={chapter.expand?.manga?.title}
										class="w-full h-48 object-cover"
									/>
								</a>
								<div class="p-4">
									<a href={`/manga/${chapter.expand?.manga?.sourceid}`} class="hover:underline">
										<h5 class="text-lg font-semibold truncate">
											{chapter.expand?.manga?.title}
										</h5>
										<p class="text-sm">
											{chapter.expand?.currentChapter?.chapterId}/{chapter.totalChapters || 1}
										</p>
									</a>
									<!-- Progress Bar -->
									<div class="flex items-center justify-between mt-2">
										<p class="font-semibold text-primary">Progress</p>

										<div class="dropdown dropdown-end dropdown-hover">
											<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
											<label
												tabindex="0"
												class="btn btn-circle btn-ghost btn-xs text-info"
												for="progress info"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													class="w-4 h-4 stroke-warning"
													><path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
													/></svg
												>
											</label>
											<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
											<div
												tabindex="0"
												class="card compact dropdown-content z-[10] absolute shadow bg-base-200 rounded-box w-64"
											>
												<div class="card-body">
													<h2 class="card-title">You needed more info?</h2>
													<h4 class="font-bold">title</h4>
													<p class="text-sm">
														{chapter.expand?.manga?.title}
													</p>
													<h4 class="font-bold">personal rating</h4>
													<div class="relative rating rating-lg rating-half">
														<input
															type="radio"
															name="rating-10"
															value="0.5"
															class="bg-accent mask mask-star-2"
															checked
														/>{chapter.rating} stars
													</div>

													<span class="text-sm font-semibold text-accent">
														{calculateProgressPercentage(chapter).toFixed(2)}% read
													</span>
													<div class="mt-2">
														<div class="bg-base-100 h-2 rounded-full">
															<div
																style={`width:${calculateProgressPercentage(chapter)}%`}
																class="bg-primary h-2 rounded-full"
															/>
														</div>
													</div>
													<h4 class="font-bold">description</h4>
													<p class="text-sm">
														{chapter.expand?.manga?.description}
													</p>
													<h4 class="font-bold">current chapter</h4>
													<p class="text-sm">
														{chapter.expand?.currentChapter?.chapterId}
													</p>
													<h4 class="font-bold">status</h4>
													<p class="text-sm">
														{chapter.status}
													</p>
												</div>
											</div>
										</div>
									</div>
									<div class="mt-2">
										<div class="bg-base-100 h-2 rounded-full">
											<div
												style={`width:${calculateProgressPercentage(chapter)}%`}
												class="bg-primary h-2 rounded-full"
											/>
										</div>
									</div>
								</div>
							</div>
						{/each}
						<!-- Pagination -->
						<div class="col-span-full flex justify-end mt-8 w-full">
							<PaginationSimple action="?/readingProgress" disabled={!$page.data.readingProgress} />
						</div>
					{:else}
						<p class="text-center text-base-content text-xl mt-4">You have no reading progress.</p>
					{/if}
				{:else}
					<a
						href="/login"
						class="text-center text-base-content text-xl mt-4 font-semibold hover:underline block"
					>
						Log In to View Reading Progress
					</a>
				{/if}
			</div>
		</div>
	</div>

	<!-- Import Reading Progress -->
	<ImportReadingProgress />
</div>
