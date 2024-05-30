<script lang="ts">
  import Square from "./Square.svelte";
  export let grid :string[];

  let a = -1;        // card 1
  let b = -1;       // card 2

</script>
<div class="grid">
    {#each grid as emoji,i}
        <Square {emoji}  on:click= {()=>{
            if(a === -1 && b === -1){
                a = i;
            }
        }}
        selected = {a === i || b === i}
        />
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