<script lang="ts">
  import Square from "./Square.svelte";
  import {createEventDispatcher} from 'svelte';
  export let grid :string[];
  export let found :string[];

  const dispatch = createEventDispatcher();

  let a = -1;        // card 1 (first card)
  let b = -1;       // card 2 (second card) 
  let reset_timeout : number;

</script>
<div class="grid">
    {#each grid as emoji,i}

        <Square {emoji}  on:click= {()=>{
            clearTimeout(reset_timeout);
            if(a === -1 && b === -1){
                a = i;
            }else if(b === -1){
                b = i;
                if(grid[a] === grid[b]){
                    //correct
                    dispatch('found',{
                        emoji
                    })
                    console.log('correct');
                }else{
                    reset_timeout = setTimeout(()=>{
                        a = b = -1;
                    },600)
                    console.log('incorrect');
                }
            }else{
                b = -1;
                a = i;
            }
        }}
        selected = {a === i || b === i}
        found = {found.includes(emoji)}
        group = {grid.indexOf(emoji) === i ? 'a' : 'b'}
        />
    {/each}
</div>


<style>
    .grid{
        display: grid;
        height: 100%;
        grid-gap: 0.5em;
        grid-template-columns: repeat(var(--size),1fr);
        grid-template-rows: repeat(var(--size),1fr);
    }
    
</style>