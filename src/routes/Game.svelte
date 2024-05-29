<script>
  import Grid from "./Grid.svelte";
</script>


<div class="game">
    <div class="info">Timer</div>
    <div class="grid-container">
        <Grid />
    </div>
    <div class="info">result</div>
</div>

<style>
    
    .game{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: min(1vmin,0.3rem);
    }

    .info{
        width: 80vmin;
        height: 10vmin;
        background-color: rgb(185, 61, 3);
    }

    .grid-container{
        width: 80vmin;
        background-color: rgb(129, 0, 0);
        height: 50vmin;
    }

</style>