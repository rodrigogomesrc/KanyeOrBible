<script>
    import { ranking } from '../Data/ranking';
    import { onMount, onDestroy } from 'svelte';

    let toSubmmit = true;
    let score;
    let ready = false;
    let isRankingUpdated = false;

    onMount(()=>{

        try {
            score = $ranking[10].score;
            ready = true;

        } catch(e){
            // prevent from acessing the score before one is available
            goToNewGame();
        }
    })

    onDestroy(()=> {
        if(!isRankingUpdated){
            updateRanking("Unknown");
        }
    })

    function goToNewGame(){
        window.location.replace("/#/");
    }

    function goToRanking(){
        window.location.replace("/#/ranking");
    }

    function saveName(){
        toSubmmit = false;
        let playerName = document.getElementById("player-name").value;
        updateRanking(playerName);
    }

    function updateRanking(name){

        let localRanking = [...$ranking]
        localRanking[10].player = name;
        for (let i = localRanking.length-1; i > 0; i--) {
            if(localRanking[i].score > localRanking[i-1].score){
                [localRanking[i],localRanking[i-1]] = [localRanking[i-1], localRanking[i]]
            }
        }
        localRanking.pop()
        ranking.set(localRanking)
        isRankingUpdated = true;
    }

</script>

{#if ready}
<div class="container">
    <div class="center-container">
        <div>
            <h2 class="center-text highlighted-text">Game Finished</h2>
        </div>
        <div>
            <p class="center-text score-text"><span class="text-highlight">Your score: </span>{score}</p>
        </div>
        {#if toSubmmit}
            <div class="button-container spacing">
                <input type="text" placeholder="Enter your name" id="player-name"/>
            </div>
            <div class="button-container">
                <button class="buttons" on:click={()=>saveName()}>Save</button>
            </div>
        {/if}
        <div class="button-container  spacing">
            <button on:click={()=>goToRanking()}>Ranking</button>
            <button on:click={()=>goToNewGame()}>New Game</button>
        </div>
    </div>
</div>
{/if}

<style>

    .score-text {
        font-size: 20px;
    }

</style>