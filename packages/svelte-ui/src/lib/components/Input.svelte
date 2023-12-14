<script>
	export let value = '';
	export let placeholder = '';
	/**
	 * @type {any}
	 */
	export let id;
	/**
	 * @type {any}
	 */
	export let label;
	export let type = 'text';
	export let disabled = false;
	export let required = false;
	/**
	 * @type {any}
	 */
	export let minlength;

	/**
	 * @type {any}
	 */
	export let errors;
</script>

<div class="form-control w-full max-w-lg mb-2 indicator">
	<label for={id} class="label font-medium pb-1">
		<span class="label-text">{label}</span>
		{#if required}
			<span class="indicator-item badge">Required</span>
		{/if}
	</label>

	<input
		class={type === 'file'
			? 'file-input file-input-bordered file-input-primary w-full max-w-lg'
			: 'input input-bordered input-primary w-full max-w-lg'}
		{type}
		{placeholder}
		{required}
		{disabled}
		{minlength}
		{id}
		name={id}
		{value}
	/>
	{#if errors}
		{#each errors as error}
			<label for={id} class="label py-0 pt-1">
				<span class="label-text-alt text-error">
					{error}
				</span>
			</label>
		{/each}
	{/if}
</div>
