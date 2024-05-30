<script lang="ts">
  import { levels } from './levels.ts';
  import Grid from "./Grid.svelte";
  import type {Level} from './levels'
  import { shuffle } from './utils.js';
  import Found from './Found.svelte';
  import Countdown from './Countdown.svelte';
  import { onMount } from 'svelte';

  const level = levels[0];


  let size :number = level.size; //grid size
  let grid :string[] = create_grid(level); //grid of emojis
  let found:string[] = []; //track found emojis
  let remaining: number  = level.duration;
  let duration : number = level.duration;
  let playing : boolean = false;

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


    return shuffle(pairs);

  }

  function countdown(){
    const start = Date.now();
    let remaining_at_start= remaining;

    function loop(){
        if(playing) return ;
        requestAnimationFrame(loop)
        remaining =  remaining_at_start - (Date.now() - start);

        if(remaining <= 0){
            playing = false;
        }
    }
    loop();
  }

  onMount(countdown);
  
</script>


<div class="game">
    <div class="info">
        <Countdown {remaining} duration = {level.duration}/>
    </div>
    <div class="grid-container">
        <Grid {grid}  on:found = {(e)=>{
            found = [...found, e.detail.emoji]
        }}
        {found}
        />
    </div>
    <div class="info">
        <Found {found}/>
    </div>
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
        width: 60vmin;
        height: 10vmin;
    }

    .grid-container{
        width: 60vmin;
        height: 60vmin;
    }

</style>