<script>
	import ComponentStructure from '$lib/site-components/ComponentStructure.svelte';
	import Route from '$lib/site-components/Route.svelte';
	import { routeCoordinates, instructions, summary } from '$lib/components/stores';

	import jsonData from './data.json';
</script>

<ComponentStructure title="Router" url="router" {jsonData}>
	<Route />

	<div slot="more">
		<div class="container mx-auto p-4">
			<h1 class="text-4xl font-bold text-center text-gradient bg-gradient-to-r from-blue-500 to-purple-600">Route Coordinates</h1>
			<div class="m-10 shadow-lg rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-5">
				<p class="font-semibold">Start: <span class="font-normal">{$routeCoordinates[0]}</span></p>
				<p class="font-semibold">End: <span class="font-normal">{$routeCoordinates[$routeCoordinates.length - 1]}</span></p>
			</div>
	
			<div class="my-10">
				<h1 class="text-4xl font-bold text-center text-gradient bg-gradient-to-br from-green-500 to-blue-600">Summary</h1>
				<div class="m-10 shadow-lg rounded-lg bg-gradient-to-r from-green-500 to-blue-600 p-5">
					<p class="font-semibold">Distance: <span class="font-normal">{(parseFloat($summary.totalDistance) / 1000).toFixed(2)} km</span></p>
					<p class="font-semibold">Duration: <span class="font-normal">{parseFloat($summary.totalTime / 60).toFixed(2)} min</span></p>
				</div>
			</div>
	
			<div class="my-10">
				<h1 class="text-4xl font-bold text-center text-gradient bg-gradient-to-br from-pink-500 to-orange-500">Route (First 10)</h1>
				<div class="m-10 shadow-lg rounded-lg bg-gradient-to-r from-pink-500 to-orange-500 p-5 truncate">
					{#each $routeCoordinates.filter((_, index) => index < 10) as coordinate}
						<p class="py-1">{coordinate}</p>
					{/each}
				</div>
			</div>
	
			<div class="my-10">
				<h1 class="text-4xl font-bold text-center text-gradient bg-gradient-to-r from-purple-500 to-pink-500">Instructions (First 10)</h1>
				<div class="m-10 space-y-4">
					{#each $instructions.filter((_, index) => index < 10) as instruction}
						<div class="flex flex-col md:flex-row justify-between bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg rounded-lg p-5">
							<div class="flex flex-col space-y-2">
								<p class="font-semibold">{instruction.text}</p>
								<p class="text-sm text-gray-900 font-semibold">{instruction.distance / 1000} km</p>
							</div>
							<div class="flex flex-col space-y-2 mt-4 md:mt-0">
								<p class="text-sm ">{instruction.duration / 60} min</p>
								<p class="text-sm text-gray-800 font-semibold">{instruction.type}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
	

</ComponentStructure>
<style>
	.text-gradient {
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
	}
</style>
