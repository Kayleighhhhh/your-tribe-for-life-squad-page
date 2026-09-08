<script>
 let { data } = $props()
</script>

<h1>Squad 2G</h1>

{#each data.squad as person}
 <li><a href="/{person.name.split(' ')[0]}">{person.name}</a></li>
{/each}