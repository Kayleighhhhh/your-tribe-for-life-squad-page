<script>
 let { data } = $props()
</script>

<ul>
    {#each data.squad as person}
        {@const firstName = person.name.split(' ')[0]}
        <li>
            <img src="https://fdnd.directus.app/assets/{person.mugshot}?width=200" alt="{firstName}" width="65" height="65"/>
            <a href="/student/{person.id}">{firstName}</a>
        </li>
    {/each}
</ul>

<nav>
    <!-- Hier komt de taakbalk -->
</nav>