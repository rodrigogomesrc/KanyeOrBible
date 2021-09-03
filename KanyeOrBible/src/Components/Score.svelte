<script>

    function goToNewGame(){

    }

    function goToRanking(){

    }

    function saveName(){

    }

</script>

<div class="container">
    <div>
        <h2 class="center-text finished">Game Finished</h2>
    </div>
    <div>
        <p class="center-text score-text"><span class="text-highlight">Your score: </span>424242</p>
    </div>
    <div class="button-container spacing">
        <input type="text"/><br>
    </div>
    <div class="button-container">
        <button on:click={()=>saveName()}>Save name to ranking</button>
    </div>
    <div class="button-container  spacing">
        <button on:click={()=>goToNewGame()}>See Ranking</button>
        <button on:click={()=>goToRanking()}>New Game</button>
    </div>
</div>

<style>

    .finished {
        font-size: 30px;
    }

    .score-text {
        font-size: 20px;
    }

</style>