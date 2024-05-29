<script lang="ts">
  import { levels } from './levels.ts';
  import Grid from "./Grid.svelte";
  import type {Level} from './levels'

  const level = levels[0];


  let size : number = level.size; //grid size
  let grid :string[] = create_grid(level); //grid of emojis
  let found:string[] = []; //trrack found emojis

  function create_grid(level : Level){

  }
  
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