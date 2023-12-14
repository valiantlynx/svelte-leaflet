<script>
	/**
	 * @type {any}
	 */
	export let customColor = '#5865f2';
</script>

<div class="card w-96 py-2 mx-4" style="background-color: {customColor};">
	<div class="card-body">
		<slot name="heading" />
		<slot />
		<div class="card-actions justify-end">
			<slot name="actions" />
		</div>
	</div>
</div>
