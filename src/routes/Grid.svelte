<script lang="ts">
  import Square from "./Square.svelte";
  export let grid :string[];

</script>
<div class="grid">
    {#each grid as emoji}
        <Square {emoji}/>
    {/each}
</div>


<style>
    .grid{
        display: grid;
        height: 100%;
        grid-gap: 0.5em;
        grid-template-columns: repeat(4,1fr);
        grid-template-rows: repeat(4,1fr);
    }
</style>