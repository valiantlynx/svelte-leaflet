<!-- Feedback.svelte -->
<script>
	import { page } from '$app/stores';
	// import { t } from 'svelte-i18n';

	/**
	 * @type {number | undefined}
	 */
	let selectedEmotion;
	let note = '';
	/**
	 * @type {string}
	 */
	let resultMessage;
	let isSubmittedOnce = false;

	/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
	let isFeedbackVisible = false;

	const submitFeedback = async () => {
		const feedbackData = {
			emotion: selectedEmotion,
			note,
			url: `${$page.url}`
		};
		isSubmittedOnce = true;
		const response = await fetch('/api/submit_feedback', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(feedbackData)
		});
		if (response.ok) {
			isFeedbackVisible = true; // Hide the feedback form after submission.
			resultMessage = 'Thank you for your feedback, we appreciate it.';
		} else if (response.status === 201) {
			resultMessage = 'Thank you for your feedback, we appreciate it.';
		} else {
			resultMessage = 'Oh no, something went wrong :(.' + response.status;
			console.error('We were unable to send your feedback', response.status);
		}
		setTimeout(() => {
			selectedEmotion = undefined;
			note = '';
			resultMessage = '';
		}, 5000);
	};
</script>

<!-- The button to open modal -->
<label for="feedback" class="fixed right-1 top-1/2 -translate-y-1/2 w-10 h-44 bg-primary hover:bg-secondary text-primary-content z-10 flex flex-col items-center justify-center rounded-md cursor-pointe justify-centerr">
	<i class="fa fa-comment-alt fa justify-end mb-10" />
	<p class="-rotate-90 whitespace-nowrap mb-10 text-lg font-bold justify-start">Feedback</p>

</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="feedback" class="modal-toggle" />
<div class="modal">
	<div
		class="modal-box max-w-md max-h-md py-8 px-6 m-auto dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box sm:h-1/4 sm:w-1/4 h-2"
	>
		<h5 class="mb-6 text-center font-bold">Was this useful?</h5>
		{#if resultMessage}
			<p class="text-center">{resultMessage}</p>
		{:else}
			<form on:submit|preventDefault={submitFeedback}>
				<div class="flex justify-center py-4 space-x-6">
					<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
					{#each new Array(4) as _, index}
						<button
							on:click|preventDefault={() => (selectedEmotion = index + 1)}
							class="filter transform transition duration-150 grayscale hover:scale-150 {selectedEmotion ===
							index + 1
								? 'grayscale-0'
								: ''}"
						>
							<img
								src="/{index + 1}.svg"
								alt="Feedback {index + 1} of 4"
								title="Feedback {index + 1} of 4"
								class="w-20"
							/>
						</button>
					{/each}
				</div>
				{#if selectedEmotion}
					<div class="mt-6">
						<div class="w-full">
							<label for="note" class="block my-1 text-left text-xs"
								>Is there something that doesn't work, can be done better or you really like?</label
							>
							<!--p class="text-sm">*Hjelp oss med å lage en bedre minedrivstoffportal?...</p-->
							<!-- ... existing form content ... -->
							<textarea
								bind:value={note}
								id="note"
								placeholder="write here..."
								aria-label="Feedback input"
								autocapitalize="off"
								autocomplete="off"
								autocorrect="off"
								class="w-full p-2 rounded-lg border border-primary resize-none"
							/>
						</div>
						<div class="flex justify-end">
							<!-- DIN TILBAKEMELDING -->
							<button
								type="submit"
								disabled={isSubmittedOnce}
								class="btn px-4 py-2 mt-4 rounded-lg text-sm border outline hover:text-base-content"
							>
								<!--{isSubmittedOnce ? 'Submitting...' : 'Submit'}-->
								Submit
							</button>
						</div>
					</div>
				{/if}
			</form>
		{/if}
	</div>
	<label class="modal-backdrop" for="feedback">Close</label>
</div>
