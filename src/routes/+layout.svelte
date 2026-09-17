<script>
	import favicon from '$lib/assets/WindowsXP.png';
	import '$lib/style.css'
	import { page } from '$app/stores';

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
			<h1>Squad 2G</h1>
		</div>
		{#if $page.data.person}
		<section>
			<h2>
				{$page.data.person.name.split(' ')[0]}
			</h2>
		</section>
		{/if}
	</nav>
</footer>
