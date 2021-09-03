<script>
	import Router from "svelte-spa-router";
	import Game from "./Components/Game.svelte";
	import Navbar from "./Components/Navbar.svelte";
	import About from "./Components/About.svelte";
	import Ranking from "./Components/Ranking.svelte";
	import Score from "./Components/Score.svelte";
</script>

<main>

	<Navbar></Navbar>
	<Router routes={{
		'/': Game, 
		'/about': About,
		'/ranking': Ranking,
		'/score' : Score
	}}/>

</main>
