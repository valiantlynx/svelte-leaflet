<script>
	export let methods;
</script>

<h2 class="text-2xl font-semibold mb-4">Methods</h2>
<table class="w-full">
    <thead>
        <tr>
            <th class="border p-2">Name</th>
            <th class="border p-2">Description</th>
        </tr>
    </thead>
    <tbody>
        {#each Object.entries(methods) as [methodName, methodDetails]}
            <tr>
                <td class="border p-2">{methodName}</td>
                <td class="border p-2"
                    >{methodDetails.description}
                    <a href={methodDetails.link} target="_blank">More Info</a></td
                >
            </tr>
        {/each}
    </tbody>
</table>