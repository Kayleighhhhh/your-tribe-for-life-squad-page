<script>
 let { data } = $props()
</script>

<h1>Squad 2G</h1>

<ul>
    {#each data.squad as person}
    <li>
        <img src="https://fdnd.directus.app/assets/{person.mugshot}?width=200" alt="{person.name}" width="65" height="65"/>
        <a href="/student/{person.id}">{person.name}</a>
    </li>
    {/each}
</ul>