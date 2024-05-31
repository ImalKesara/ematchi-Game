<script lang="ts">
	import { levels } from './levels.ts';
	import Modal from './Modal.svelte';
  import Game from "./Game.svelte";
  import {confetti} from '@neoconfetti/svelte';
  import '../style.css';

  let state : 'waiting' |'playing'| 'pasued'| 'won'| 'lost'  = 'waiting';
  let game :Game;

  function playClickSound() {
    const audio = new Audio("/discord-notification.mp3");
    audio.play().catch(error => {
      console.error('Audio playback failed:', error);
    });
  }


</script>

<Game   
  bind:this= {game} 
  on:play= {()=>{
  state = 'playing';
  }}
  on:pause ={()=>{
    state= "pasued";
  }}

  on:win = {()=>{
    state = 'won';
  }}

  on:lost = {()=>{
    state = 'lost';
  }}

/>

{#if state !== 'playing'}
  <Modal>
    <header>
      <h1 class="title">e<span>match</span>i </h1>
      <p>The emoji matching mini-game </p>
    </header>

    {#if state === "won" || state === "lost"}
      <p>You {state} the game</p>
    {:else if  state === 'paused'}
      <p>You {state} the game</p>
    {:else if state === "waiting"}
      <p>choose a level</p>
    {/if}

    <div class="buttons">
      {#if state === "paused"}
        <button>Resume</button>
        <button>Quit</button>
      {:else}
        {#each levels as level }
          <button on:click={()=>{
            playClickSound();
            game.start(level);
          }} 
          >{level.lable}</button>
        {/each}
      {/if}
    </div>

  </Modal>
{/if}

{#if state === 'won'}
  <div class="confetti" use:confetti={{
    stageWidth : innerWidth ,
    stageHeight : innerHeight
  }}></div>
{/if}

<style>
  .confetti{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 50%;
    top: 40%;
    pointer-events: none;
  }

  h1{
    font-size: 10em;
    line-height: 0;
    margin: 0.5em;

  }
  span{
    color: orangered;
  }

  p{
    font-family: Grandstander;
    text-align: center;
    font-size: 2em;
  }
  .buttons{
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 1em;
  }
  .buttons button{
    cursor: pointer;
    width: 5em;
    height: 3em;
    border: none;
    justify-content: center;
    align-items: center;
    border-radius: 1em;
    color : white;
    font-size: 1em;
    font-weight: bold;
    background-color: orangered;
  }
</style>