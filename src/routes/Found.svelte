<script lang="ts">
  import { get_twemoji_url } from "./utils";

    export let found:string[];
</script>

<div class="found">
    {#each found as emoji(emoji)}
        <!-- <span>{emoji}</span> -->
        <img src={get_twemoji_url(emoji)} alt={emoji}>
    {/each}
</div>

<style>
    .found{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 1em;
    }

    img{
        width: 8em;
        height: 8em;
    }
</style>