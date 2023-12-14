<script lang="ts">
	import { page } from '$app/stores';
	export let link: string;
	export let img: string;
	export let alt: string;
	export let label1: string;
	export let label2: string;
	export let title: string;
</script>

<div
	class="w-full bg-base-300 text-base-content shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl border border-primary"
>
	<a class=" w-full" href={link}>
		<img class=" w-full group-hover:opacity-75 overflow-hidden rounded-t-xl" src={img} {alt} />

		<div class="px-4 py-3 w-full">
			<span class="mr-3 uppercase text-xs truncate block text-neutral">{label1}</span>
			<p class="text-lg font-bold truncate block capitalize">{title}</p>
			<div class="flex items-center">
				<p class="text-sm font-semibold cursor-auto truncate block text-primary">
					{label2}
				</p>
				<div class="ml-auto">
					<slot />
				</div>
			</div>
		</div>
	</a>
</div>
