<script lang="ts">
	import { afterUpdate } from 'svelte';
    export let emoji:string;
</script>

<div class="square">
    <span>{emoji}</span>
</div>

<style>
    .square{
        background: rgb(122, 5, 255);
        display: flex;  
        justify-content: center;
        align-items: center;
    }
    span{
        font-size: 10em; 
    }
</style>