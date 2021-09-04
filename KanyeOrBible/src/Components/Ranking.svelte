<script>
    import { ranking } from '../Data/ranking';
    import { onMount } from 'svelte';
   
    let localRanking;

    onMount(()=> {

        ranking.subscribe(data => {
            localRanking = data;
        })

        //prevent from acessing the ranking before saving the ranking data
        if(localRanking.length == 11){
            window.location.replace("/#/score");
        }

    })

    function getRankingLinePLayerPosition(line, index){
        return `${index + 1}º ${line.player}`;
    }

    function getRankingLinePLayerScore(line){
        return `Score: ${line.score}`;
    }

    function isIndexEven(index){
        return index % 2 == 0;
    }

</script>

<div class="container">
    <div class="center-container">
        <h2 class="center-text highlighted-text" id="ranking-title">Ranking</h2>
        {#if localRanking}
            {#each localRanking as line, i}
                {#if isIndexEven(i)}
                    <div id="ranking-line" class="even-line">
                        <div class="ranking-name">{getRankingLinePLayerPosition(line, i)}</div>
                        <div class="ranking-score">{getRankingLinePLayerScore(line)}</div>
                    </div>
                {:else}

                <div id="ranking-line" class="odd-line">
                    <div class="ranking-name">{getRankingLinePLayerPosition(line, i)}</div>
                    <div class="ranking-score">{getRankingLinePLayerScore(line)}</div>
                </div>
                {/if}
            {/each}
        {/if}
    </div>
</div>

<style>

    #ranking-title {
        margin-bottom: 50px;
    }

    #ranking-line{
        display: flex;
        justify-content: space-between;
        font-size: 25px;
        padding: 10px;
    }

    .even-line {
        background-color: #574f7d;
    }

    .odd-line {
        background-color: #95adbe;
    }

    .ranking-score {
        text-align: left;
        flex: 2;
    }

    .ranking-name {
        flex: 5;
    }

</style>