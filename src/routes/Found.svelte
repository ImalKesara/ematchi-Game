<script lang="ts">
    export let found:string[];
</script>

<div class="found">
    {#each found as emoji(emoji)}
        <span>{emoji}</span>
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

    .found span{
        font-size: 8em;
    }
</style>