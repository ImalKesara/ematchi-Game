<script>
  import Square from "./Square.svelte";

</script>
<div class="grid">
    {#each Array(16) as _}
        <Square />
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