<script>
	import favicon from '$lib/assets/WindowsXP.png';
	import '$lib/style.css'
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<footer>
	<nav>
		<div class="logo">
			<picture>
				<source srcset="../src/lib/assets/WindowsXP.avif" type="image/avif" />
				<source srcset="../src/lib/assets/WindowsXP.webp" type="image/webp" />
				<img src="../src/lib/assets/WindowsXP.png" alt="WindowsXP logo" />
			</picture>
			<h1>Squad 2G</h1>
		</div>
	</nav>
</footer>
