<script lang="ts">
  import { levels } from './levels.ts';
  import Grid from "./Grid.svelte";
  import type {Level} from './levels'

  const level = levels[0];


  let size :number = level.size; //grid size
  let grid :string[] = create_grid(level); //grid of emojis
  let found:string[] = []; //track found emojis

  function create_grid(level : Level){
    const copy = level.emojis.slice();
    const pairs:string[] = []; // 4*4 = 16 then 16/2 = 2 matches eg sad emoji = sad emoji
    console.log(copy);

    for(let i =0  ; i< (level.size * level.size) / 2; i++){
        const index = Math.floor(Math.random() *copy.length)
        const emoji = copy[index];

        copy.splice(index,1); // to stop repeating values and remove emoji
        console.log(copy)
        pairs.push(emoji)
        console.log(pairs)

    }

    pairs.push(...pairs); // duplicating values 
    console.log(pairs)


    return pairs;

  }
  
</script>


<div class="game">
    <div class="info">Timer</div>
    <div class="grid-container">
        <Grid {grid}  on:found = {(e)=>{
            found = [...found, e.detail.emoji]
        }}
        {found}
        />
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
        width: 70vmin;
        height: 10vmin;
        background-color: rgb(58, 3, 185);
    }

    .grid-container{
        width: 70vmin;
        background-color: rgb(58, 3, 185);
        height: 50vmin;
    }

</style>