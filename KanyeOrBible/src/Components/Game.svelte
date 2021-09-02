<script>
    import { onMount } from 'svelte';
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
        let score = (100000/((new Date().getTime())-startTime))*rights
        console.log(rights)
        console.log((new Date().getTime())-startTime)
        console.log("score: "+score)
    }
</script>

<div class="container">
    <div>
        <h2 class="statement">{statement[currentStatementIndex].sentence}</h2>
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

<style>
    .container{
        width: 700px;
        border: 1px solid black;
        margin: 0 auto;
        background-color: aliceblue;
        padding: 20px;
    }

    .statement {
        text-align: center;
    }

    .button-container {
        display: flex;
        justify-content: center;
    }

    button {
        margin: 5px;
        width: 100px;
    }

</style>