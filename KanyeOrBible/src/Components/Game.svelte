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
        console.log(statement)
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
        startTime = new Date().getTime()
        currentStatementIndex++
    }

    function endGame(){
        let localScore = (100000/((new Date().getTime())-startTime))*rights
        console.log(rights)
        console.log((new Date().getTime())-startTime)
        console.log("score: "+ localScore)

        let localRanking = [...$ranking, {player: "Unknown", score: localScore}]
        ranking.set(localRanking)
        goToScore();
    }

    function goToScore(){
        window.location.replace("/#/score");
    }
   
</script>

<div class="container">
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
