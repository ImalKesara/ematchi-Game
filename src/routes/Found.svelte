<script lang="ts">
  import { get_twemoji_url } from "./utils";
  import { receive} from './transition';

    export let found:string[];
</script>

<div class="found">
    {#each found as emoji(emoji)}
        <!-- <span>{emoji}</span> -->
        <div class="pair">
            <img in:receive = {{key : `${emoji}:a`}} src={get_twemoji_url(emoji)} alt={emoji}>
            <img in:receive = {{key : `${emoji}:b`}} src={get_twemoji_url(emoji)} alt={emoji}>
        </div>
    {/each}
</div>

<style>

    .pair{
       background: white;
       padding: 1em;
        width: 4em;
        height: 4em;
        
    }
    .found{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 5em;
        filter: drop-shadow(0.2em, 0.2em , 0.5em , rgba(0,0,0,0.2));
    }

    img{
        position: absolute;
        left: 0;
        top: 0 ;
        width: 8em;
        height: 8em;
    }
</style>