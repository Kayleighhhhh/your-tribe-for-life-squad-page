<script>
    // Receive the "data" prop from the load function ({ person })
	let { data } = $props()
</script>

<main class="detail-page">
    <p>[{data.person.name}]</p>
    <a href="/">
        <svg width="20" viewBox="0 0 603 600"xmlns="http://www.w3.org/2000/svg">
            <title>Go back to homepage</title>
            <rect width="603" height="600" rx="50"/>
            <path d="M177 175L426.642 424.642M426.642 175L177 424.642" stroke="white" stroke-width="70"/>
        </svg>
    </a>

    <section>
        <picture>
            {#if data.person.mugshot === null}
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Black_question_mark.png?utm_source=nl.wikipedia.org&utm_campaign=index&utm_content=original"width="100" height="100" alt="">
                {:else}
                <source srcset="https://fdnd.directus.app/assets/{data.person.mugshot}?width=800&format=avif" type="image/avif">
                <source srcset="https://fdnd.directus.app/assets/{data.person.mugshot}?width=800&format=webp" type="image/webp">
                <img loading="lazy" src="https://fdnd.directus.app/assets/{data.person.mugshot}?width=800" width="100" height="100" alt="Mugshot of {data.person.name}">
            {/if}
        </picture>

        <h1>[{data.person.name}]</h1>
        <dl>
            <dt>Birthdate</dt>
            {#if data.person.birthdate === null}
                <dd>Not defined yet</dd>
                {:else}
                <dd>{data.person.birthdate}</dd>
            {/if}

            <dt>Favorite hobby</dt>
            {#if data.person.fav_hobby === null}
                <dd>Not defined yet</dd>
                {:else}
                <dd>{data.person.fav_hobby}</dd>
            {/if}

            <dt>Favorite color</dt>
            {#if data.person.fav_color === null}
                <dd>Not defined yet</dd>
                {:else}
                <dd style="color: {data.person.fav_color};">{data.person.fav_color}</dd>
            {/if}

            <dt>Favorite animal</dt>
            {#if data.person.fav_animal === null}
                <dd>Not defined yet</dd>
                {:else}
                <dd>{data.person.fav_animal}</dd>
            {/if}

            <dt>Favorite season</dt>
            {#if data.person.fav_season === null}
                <dd>Not defined yet</dd>
                {:else}
                <dd>{data.person.fav_season}</dd>
            {/if}
        </dl>
    </section>
</main>