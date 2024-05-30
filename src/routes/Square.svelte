<script lang="ts">
    export let emoji:string;
    export let selected: boolean;

</script>

<div class="square" class:flipped ={selected}>
    <button on:click />
    <span>{emoji}</span>
</div>

<style>
    .square{
        background: rgb(122, 5, 255);
        display: flex;  
        justify-content: center;
        align-items: center;
    }

    .flipped button{
        background-color: red;
    }

    button{
        position: absolute;
        width: 100%;
        height: 100%;
    }

    span{
        font-size: 10em; 
    }
</style>