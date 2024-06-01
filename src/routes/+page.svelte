<script lang="ts">
	import { levels } from './levels.ts';
	import Modal from './Modal.svelte';
  import Game from "./Game.svelte";
  import {confetti} from '@neoconfetti/svelte';
  import '../style.css';
  import { theme } from './stores.js';

  let state : 'waiting' |'playing'| 'pasued'| 'won'| 'lost'  = 'waiting';
  let game :Game;

  function playClickSound(track:string) {
    const audio = new Audio(`/${track}.mp3`);
    audio.play().catch(error => {
      console.error('Audio playback failed:', error);
    });
  }

  function toggleTheme(){
    console.log($theme)
    theme.set(!$theme);
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
    <div class="mode">
      <button on:click={toggleTheme} class:btn-darkmode={!$theme} class:btn-lightmode={$theme}>{$theme? "Light" : "Dark"}</button>
    </div>
    <header>
      <h1 class="title" class:para-dark={!$theme} class:para-light={$theme}>e<span class:span-dark={!$theme} class:span-light={$theme}>match</span>i</h1>
      <p class:para-dark={!$theme} class:para-light={$theme}>The emoji matching mini-game </p>
    </header>

    {#if state === "won" || state === "lost"}
      <p class:para-dark={!$theme} class:para-light={$theme}>You {state} the game</p> 
    {:else if  state === 'paused'}
      <p class:para-dark={!$theme} class:para-light={$theme}>You {state} the game</p>
    {:else if state === "waiting"}
      <p class:para-dark={!$theme} class:para-light={$theme}>choose a level</p>
    {/if}

    <div class="buttons">
      {#if state === "paused"}
        <button>Resume</button>
        <button>Quit</button>
      {:else}
        {#each levels as level }
          <button on:click={()=>{
            playClickSound('discord-notification');
            game.start(level);
          }} 
           class:btn-color-Dark={!$theme} class:btn-color-Light={$theme}>{level.lable}</button>
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

  .btn-darkmode{
    background-color: white;
    color:black;
  }

  .btn-lightmode{
    background-color: black;
    color:white;
  }


  .para-dark{
    color: black;
  }

  .para-light{
    color: white;
  }

  .span-light{
    color : rgb(195, 0, 255);
  }

  .mode{
    display: flex;
    justify-content: center;
    align-items: center;
  
  }
  .mode button{
    font-family: Grandstander;
    margin: 1.5em;
    padding: 1em;
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
    background-color: rgb(0, 0, 0);
  }

  .dark{
        transition: all 0.5s;
        background-color: black;
        color :white
  }
  .light{
        background-color: white;
        transition: all 0.5s;
        color :black;
        
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
    font-family: Grandstander;
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


  @media only screen and (max-width: 420px) {
        h1 {
          font-size: 4em;
          text-align: center;
          margin-bottom: .5em;
        }
        p{
          font-size: 1em;
        }
      }
</style>