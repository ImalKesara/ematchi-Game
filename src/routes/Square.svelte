<script lang="ts">
  import { get_twemoji_url } from "./utils";
  import {send} from './transition';

    export let emoji:string;
    export let selected: boolean;
    export let found: boolean;
    export let group : 'a' | 'b';

</script>

<div class="square" class:flipped ={selected || found}>
    <button on:click />
    <div class="backgroundd"/>
    {#if !found}
        <!-- <span>{emoji}</span> -->
        <img out:send= {{key : `${emoji}:${group}`}} src={get_twemoji_url(emoji)} alt={emoji}>
    {/if}
</div>

<style>
    .square{
        display: flex;  
        justify-content: center;
        align-items: center;
        transform-style: preserve-3d;
        transition: transform 0.4s;
    }

    .flipped{
        transform: rotateY(180deg);      
    }

    button{
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border: 0;
        border-radius:1em;
    }


    .backgroundd{
        border-radius:2em;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #b9b9b9;
        transform: rotateY(180deg);
        backface-visibility: hidden;
    }

    img{
        width: 8em;
        height: 8em;
        pointer-events: none;
        transform: rotateY(180deg);
        backface-visibility: hidden;
    }
</style>