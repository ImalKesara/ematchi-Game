<script lang="ts">
	import { theme } from './stores.js';
// import +page from './+page.svelte';
  import { levels } from './levels.ts';
  import Grid from "./Grid.svelte";
  import type {Level} from './levels'
  import { shuffle } from './utils.ts';
  import Found from './Found.svelte';
  import Countdown from './Countdown.svelte';
  import { createEventDispatcher, onMount } from 'svelte';

 

  const dispatch = createEventDispatcher();

  let size :number ; //grid size
  let grid :string[] = []; //grid of emojis
  let found:string[] = []; //track found emojis
  let remaining: number ;
  let duration : number ;
  let playing : boolean = false;

  export function start(level : Level ){
    size = level.size
    grid = create_grid(level);
    remaining = duration = level.duration;
    resume();
  }

  function resume(){
    playing  =true;
    countdown(); 
    dispatch('play');
  }

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
        if(!playing) return ;
        requestAnimationFrame(loop)
        remaining =  remaining_at_start - (Date.now() - start);

        if(remaining <= 0){
            playing = false;
            dispatch('lost');
            playTrack('fart-with-extra-reverb');
        }
    }
    loop();
  }

  function playTrack(track:string) {
    const audio = new Audio(`/${track}.mp3`);
    audio.play().catch(error => {
      console.error('Audio playback failed:', error);
    });
  }


    
</script>


<div class="game" style="--size:{size}" class:light={!$theme} class:dark={$theme}>
    <div class="info">
        {#if playing}
        <Countdown {remaining} duration = {duration} on:click={()=>{
            playing = false;
            dispatch('pause');

        }}/>
        {/if}
        
    </div>
    <div class="grid-container">
        <Grid {grid}  on:found = {(e)=>{
            found = [...found, e.detail.emoji];

            if(found.length  === size * size  / 2){
                dispatch('win');
                playTrack('get-rick-rolled_ROHEf6w');
                
            }
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
        /* background-color:rgb(23, 232, 247); */
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: min(1vmin,0.3rem);   
        perspective: 100vw;
    }

    .dark{
        transition: all 0.5s;
        background-color: black;
        color :white
    }
    .light{
        background-color: white;
        transition: all 0.5s;
        color :black
    }

    .info{
        width: 60vmin;
        height: 10vmin;
    }

    .grid-container{
        width: 60vmin;
        height: 60vmin;
    }
    @media only screen and (max-width: 420px) {
      .info{
        margin-bottom: 3em;
    }
      }

</style>