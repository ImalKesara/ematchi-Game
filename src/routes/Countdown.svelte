<script lang="ts">
    export let remaining : number;
    export let duration : number;
</script>

<div class="countdown">
    <button on:click><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pause-circle</title><path d="M15,16H13V8H15M11,16H9V8H11M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" fill= "#999"/></svg></button>
    <div class="duration">
        <div class="remaining" style="--p:{remaining/duration}">
        </div>
    </div>
</div>


<style>
    .countdown{
        display: flex;
        align-items: center;
        gap: 1em;
    }

    .duration{
        flex : 1;
        background-color: #ccc;
        height: 1em;
    }

    .remaining{
        width: calc(100% * var(--p));
        position: absolute;
        height: 100%;
        background: orangered;
    }

    button{
        background: transparent;
        border: none;
        font-size: 8em;
        width: 1.5em;
        height: 1.5em;
    }

    svg{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }
</style>