<script>
 let { data } = $props()
</script>

<svelte:head>
	<title>Squad page 2G</title>
</svelte:head>

<h1>Squad 2G</h1>

{#each data.squad as person}
 <li><a href="/student/{person.id}">{person.name}</a></li>
{/each}