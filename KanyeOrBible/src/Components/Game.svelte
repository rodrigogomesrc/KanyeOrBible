<script>
    import { onMount } from 'svelte';
    import { ranking } from '../Data/ranking';
    import { getKanyeSentence, getBibleSentence } from '../Services/api';
    let questionsAmount = 10
    let currentStatementIndex = 0
    let rights = 0
    let statement = [{author:'start',sentence:'Press start to play'}]
    let gameStart = false
    let startTime
	onMount(()=>{
        for (let index = 0; index < questionsAmount; index++) {
            if(Math.random() < 0.5){
                getKanyeSentence(function(data){
		            statement.push({author:'kanye', sentence:data})
	            })
            }
            else{
                getBibleSentence(function(data){
		            statement.push({author:'bible', sentence:data})
	            })
            }
        }
    })
	function onVote(option){
        if(statement[currentStatementIndex].author === option){
            rights++
        }
        if(currentStatementIndex == questionsAmount){
            endGame()
        }else{
            currentStatementIndex++
        }
    }
    function startGame(){
        gameStart = true
        startTime = new Date().getTime();
        currentStatementIndex++;
    }

    function endGame(){
        let finishTime = (new Date().getTime())-startTime
        let multiplicator = 1
        if(finishTime < 40000){
            multiplicator = 10
        }else if(finishTime < 70000){
            multiplicator = 8
        }
        else if(multiplicator < 90000){
            multiplicator = 6
        }
        else if(multiplicator < 11000){
            multiplicator = 4
        }else if(multiplicator < 13000){
            multiplicator = 2
        }
        let localScore = multiplicator*100*(rights/questionsAmount)

        let localRanking = [...$ranking, {player: "Unknown", score: localScore}]
        ranking.set(localRanking)
        goToScore();
    }

    function goToScore(){
        window.location.replace("/#/score");
    }
   
</script>

<div class="container">
    <div class="center-container" id="game-screen">
        <div>
            <h2 class="center-text">{statement[currentStatementIndex].sentence}</h2>
        </div>
        <div class="button-container">
            {#if gameStart === false}
            <button on:click={startGame}>Start</button>
            {:else}
            <button on:click={()=>onVote("bible")}>Bible</button>
            <button on:click={()=>onVote("kanye")}>Kanye</button>
            {/if}
        </div>
    </div>
</div>

<style>

    #game-screen {
        padding: 200px 20px;
        max-height: 500px;
    }

</style>
