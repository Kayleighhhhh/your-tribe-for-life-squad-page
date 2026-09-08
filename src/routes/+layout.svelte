<script>
	import favicon from '$lib/assets/WindowsXP.png';
	import '$lib/style.css'
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
