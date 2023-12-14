<script>
	// @ts-nocheck

	import Icon from '@iconify/svelte';
	/**
	 * @type {any}
	 */
	export let tooltip;
	/**
	 * @type {any}
	 */
	export let icon;
</script>

<div class="relative flex items-center justify-center w-12 h-12 m-2 mb-2 mx-auto shadow-lg bg-base-100 text-base-content hover:bg-secondary hover:text-primary-content rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer group">
	<Icon {icon} />
	<span class="absolute w-auto z-10 p-2 m-2 min-w-max left-14 rounded-md shadow-md text-base-content bg-base-200 text-sm font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
		{tooltip}
	</span>
</div>
