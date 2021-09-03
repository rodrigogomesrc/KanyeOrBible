<script>

	import Router from "svelte-spa-router";
	import Game from "./Components/Game.svelte";
	import Navbar from "./Components/Navbar.svelte";
	import About from "./Components/About.svelte";
	import Ranking from "./Components/Ranking.svelte";

</script>

<main>

	<Navbar></Navbar>
	<Router routes={{
		'/': Game, 
		'/about': About,
		'/ranking': Ranking
	}}/>
</main>
