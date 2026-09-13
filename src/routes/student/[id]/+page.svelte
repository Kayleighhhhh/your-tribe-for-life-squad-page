<script>
    // Receive the "data" prop from the load function ({ person })
	let { data } = $props()
  let { person } = data
</script>


<svelte:head>
	<title>{person.name.split(' ')[0]}</title>
</svelte:head>

<article>
    <header>
        <h2>[{person.name}]</h2>
        <a href="/" class="nav-bar-icon">
            <img src="../src/lib/assets/minimize-xp-icon.png" alt="Go back to homepage" width="50" height="50">
        </a>
        <a href="/" class="nav-bar-icon">
            <img src="../src/lib/assets/close-xp-icon.png" alt="Close and go back to homepage" width="50" height="50">
        </a>
    </header>

    <figure>
        <picture>

            {#if person.mugshot != null}
                <source srcset="https://fdnd.directus.app/assets/{person.mugshot}?width=800&format=avif" type="image/avif">
                <source srcset="https://fdnd.directus.app/assets/{person.mugshot}?width=800&format=webp" type="image/webp">
                <img loading="lazy" src="https://fdnd.directus.app/assets/{person.mugshot}?width=800" width="200" height="133" alt="Mugshot of {person.name}">

                {:else}
                <img src="../src/lib/assets/unknown.webp" width="200" height="200" alt="Placeholder of a questionmark">
            {/if}
        </picture>
        <figcaption>[{person.name}]</figcaption>
    </figure>

    <dl>
        <dt>Nickname</dt>
        {#if person.nickname === null}
            <dd>Not defined yet</dd>
            {:else}
            <dd>{person.nickname}</dd>
        {/if}

        <dt>Birthdate</dt>
        {#if person.birthdate === null}
            <dd>Not defined yet</dd>
            {:else}
            <dd>{person.birthdate}</dd>
        {/if}

        <dt>Residency</dt>
        {#if person.residency === null}
            <dd>Not defined yet</dd>
            {:else}
            <dd>{person.residency}</dd>
        {/if}

        <dt>Github link</dt>
        {#if person.github_handle === null}
            <dd>Not defined yet</dd>
            {:else}
            <dd><a href="https://github.com/{person.github_handle}" target="_blank">@{person.github_handle}</a></dd>
        {/if}


        <dt>Favorite hobby</dt>
        {#if person.fav_hobby === null}
            <dd>Not defined yet</dd>
            {:else}
            <dd>{person.fav_hobby}</dd>
        {/if}

        <dt>Favorite color</dt>
        {#if person.fav_color === null}
            <dd>Not defined yet</dd>
            {:else}
            <dd style="color: {person.fav_color};">{person.fav_color}</dd>
        {/if}

        <dt>Favorite animal</dt>
        {#if person.fav_animal === null}
            <dd>Not defined yet</dd>
            {:else}
            <dd>{person.fav_animal}</dd>
        {/if}

        <dt>Favorite season</dt>
        {#if person.fav_season === null}
            <dd>Not defined yet</dd>
            {:else}
            <dd>{person.fav_season}</dd>
        {/if}
    </dl>
</article>
