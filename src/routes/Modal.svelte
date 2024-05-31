<div class="modal-background">
    <div class="modal">
        <slot />
    </div>
</div>


<style>
    .modal-background{
        top: 0;
        left: 0;
        position: fixed;
        z-index: 999;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(10px);
        display: flex;
        justify-content: center;
        align-items: center;
    }


    
</style>