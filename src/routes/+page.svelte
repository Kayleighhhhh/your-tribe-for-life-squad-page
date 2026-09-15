<script>
 let { data } = $props()
</script>

<svelte:head>
	<title>Squad page 2G</title>
</svelte:head>

<ul>
    {#each data.squad as person}
        {@const firstName = person.name.split(' ')[0]}
        <li>
            <a href="/student/{person.id}">
                <img
                    src={person.mugshot
                        ? `https://fdnd.directus.app/assets/${person.mugshot}?width=200`
                        : '../src/lib/assets/unknown.webp'}
                    alt="Mugshot of {firstName}"
                    width="65"
                    height="65"
                />
                <p>{firstName}</p>
            </a>
        </li>
    {/each}
</ul>

