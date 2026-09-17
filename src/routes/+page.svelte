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
            <a href="/{firstName}">
                <picture>
                    {#if person.mugshot != null}
                    <source srcset="https://fdnd.directus.app/assets/{person.mugshot}?width=200&format=webp" type="image/webp">
                        <source srcset="https://fdnd.directus.app/assets/{person.mugshot}?width=200&format=avif" type="image/avif">
                        <img loading="lazy" src="https://fdnd.directus.app/assets/{person.mugshot}?width=200" width="65" height="65" alt="Mugshot of {person.name}">

                        {:else}
                        <img src="../src/lib/assets/unknown.avif" width="65" height="65" alt="Placeholder of a questionmark">
                    {/if}
                </picture>
                <p>{firstName}</p>
            </a>
        </li>
    {/each}
</ul>

