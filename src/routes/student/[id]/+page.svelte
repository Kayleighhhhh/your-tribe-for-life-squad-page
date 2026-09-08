<script>
    // Receive the "data" prop from the load function ({ person })
	let { data } = $props()
    let { person } = data
</script>

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

<style>

    @font-face {
        font-family: 'Pixelated';
        src: url('../src/lib/assets/fonts/ms-sans-serif-1.otf.woff2') format('woff2');
    }
    :root {
        --card-width-margin: clamp(1em, 5dvw, 10em);
    }

    article {
        margin-inline: auto;
        margin-block: clamp(1em, 5dvw, 5em);
        width: min(60em, 100dvw - 2 * var(--card-width-margin));
        border-radius: var(--border-radius);
        box-shadow: 2px 2px 10px 0px #434343a9;


        @media (min-width:550px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        header {
            display: flex;
            align-items: center;
            padding: 0.5em;
            border-radius: var(--border-radius) var(--border-radius) 0 0;
            background: var(--background-gradient-color);

            @media (min-width:550px) {
                grid-row: 1;
                grid-column: 1/-1;
            }
        }

        h2 {
            color: var(--lightest-text-color);
            font-size: var(--font-size-m);
            font-weight: 500;

            &::before {
                content: '';
                display: inline-block;
                width: 2em;
                height: 2em;
                margin-right: 0.5em;
                background-image: url('../src/lib/assets/people-xp-icon.png');
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                vertical-align: -0.5em;
            }
        }

        .nav-bar-icon {
            display: inline-flex;
            transition: 0.05s ease;

            @media (any-pointer: fine) {
                &:hover, &:focus {
                    scale: 0.95;
                    filter: brightness(120%);
                    box-shadow: 2px 2px 10px 0px #434343a9;
                    translate: 0 2px;
                }
            }

            &:active {
                filter: brightness(80%);
            }


            &:first-of-type {
                margin-left: auto;
            }

            img {
                aspect-ratio: 1;
                height: 1.8em;
                width: auto;
                padding: 0.01em;
            }
        }

        figure,
        dl {
            background-color: var(--light-background-color);
            padding: clamp(0.5em, 2dvw, 1em);
            border: 0.5em solid rgb(0, 0, 134);
            border-top: none;
            border-bottom: none;
        }

        figure {

            @media (min-width:550px) {
                border-bottom: 0.5em solid rgb(0, 0, 134);
                border-right: none;
            }
            
            img {
                aspect-ratio: 1;
                object-fit: cover;
                width: 100%;
                height: auto;
            }

            figcaption {
                font-family: 'Pixelated', Verdana, Geneva, Tahoma, sans-serif;
                font-size: var(--font-size-xl);
                font-weight: 700;
            }
        }

        dl {
            border-bottom: 0.5em solid rgb(0, 0, 134);
            font-family: 'Pixelated', Verdana, Geneva, Tahoma, sans-serif;
            letter-spacing: 1px;

            @media (min-width:550px) {
                border-left: none;
            }

            a {
                color: #0000EE;

                &:hover {
                    color: #FF6600;
                }

                &:active {
                    color: #FF0000;
                }
            }

            dt {
                font-size: var(--font-size-m);

                &::before {
                    content: '';
                    display: inline-block;
                    width: 0.8em;
                    height: 0.8em;
                    margin-right: 0.2em;
                    background-image: url('../src/lib/assets/minus-xp-icon.png');
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                }
            }

            dd {
                padding: 0 0 0.5em 0.2em;
                &::before {
                    content: '└';
                    margin-right: 0.5em;
                    color: #808080;
                }
            }

            .favorite-color span {
                display: inline-block;
                color: var(--fav-color);
                padding: 1px;
                background-color: var(--fav-color);
                border: 1px solid;
                border-color: #716F64 #F1EFEA #F1EFEA #716F64; 
                box-shadow: 1px 1px 1px var(--lightest-text-color) inset,-1px -1px 0 black inset;
            }
        }
    }
</style>