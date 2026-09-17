<script>
	import favicon from '$lib/assets/WindowsXP.png';
	import '$lib/style.css'
	import { page } from '$app/state'

	// To check if you are on the homepage
	const isHome = $derived(page.url.pathname === '/')

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main>
{@render children()}
</main>

<footer>
	<nav>
		<div class="logo">
			<picture>
				<source srcset="../src/lib/assets/WindowsXP.avif" type="image/avif" />
				<img src="../src/lib/assets/WindowsXP.png" alt="Windows XP" width="50" height="50" />
			</picture>
			{#if isHome}
                <h1>Squad 2G</h1>
            {:else}
                <h2>Squad 2G</h2>
            {/if}
		</div>
		{#if page.data.person}
		<section>
			<p>
				{page.data.person.name.split(' ')[0]}
			</p>
		</section>
		{/if}
	</nav>
</footer>
