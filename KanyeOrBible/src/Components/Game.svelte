<script>
    import { getKanyeSentence, getBibleSentence } from '../Services/api';

    let statement = "Statement";
	/*
	getBibleSentence(function(data){
		console.log(data);
	})

	getKanyeSentence(function(data){
		console.log("api do kanye chamada");
	})
	*/

    function onVote(option){
        console.log(option);
    }

</script>

<div class="container">
    <div>
        <h2 class="statement">{statement}</h2>
    </div>
    <div class="button-container">
        <button on:click={()=>onVote("bible")}>Bible</button>
        <button on:click={()=>onVote("kanye")}>Kanye</button>
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