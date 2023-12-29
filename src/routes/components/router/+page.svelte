<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import Route from '$lib/site-components/Route.svelte';
	import { routeCoordinates, instructions, summary } from '$lib/components/stores';

	import jsonData from './data.json';
</script>

<ComponentStructure title="Router" url="router" {jsonData}>
	<div class="h-96">
		<Route />
	</div>
	
	<div slot="more">
		<div>
			<h1 class="text-4xl font-bold text-center">routeCoordinates</h1>
			<div class="m-10">
				<p>start: {$routeCoordinates[0]}</p>
				<p>end: {$routeCoordinates[$routeCoordinates.length - 1]}</p>
				<div>
					<h1 class="text-4xl font-bold text-center">summary</h1>
					<div class="m-10">
						<p>distance: {(parseFloat($summary.totalDistance) / 1000).toFixed(2)} km</p>
						<p>duration: {parseFloat(($summary.totalTime) / 60).toFixed(2)} min</p>
					</div>
				</div>
				<div>
					<h1 class="text-4xl font-bold text-center">route (first 10)</h1>
					<div class="m-10 truncate">
						{#each $routeCoordinates.filter((i, index) => index < 7) as coordinate}
							<p>{coordinate}</p>
						{/each}
					</div>
					<h1 class="text-4xl font-bold text-center">instructions (first 10)</h1>
					<div class="m-10">
						{#each $instructions.filter((i, index) => index < 7) as instruction}
							<div class="flex flex-row justify-between">
								<div class="flex flex-col">
									<p>{instruction.text}</p>
									<p>{instruction.distance / 1000} km</p>
								</div>
								<div class="flex flex-col">
									<p>{instruction.duration / 60} min</p>
									<p>{instruction.type}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div></ComponentStructure
>
