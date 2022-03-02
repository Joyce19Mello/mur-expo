<script>
	import Header from './components/Header.svelte'
	export let name;
</script>

<main>
	<Header/>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style lang="scss">
	$color: yellow;
	h1 {
		color: $color
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>