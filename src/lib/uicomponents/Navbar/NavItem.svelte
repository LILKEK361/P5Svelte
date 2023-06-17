<script lang="ts">

    export let itemName: string;
    export let icon;
</script>

<div class="flex align-center justify-center gap-5 cursor-pointer">
    <svelte:component this={icon}/>
    <h1 class="my-3 text-lg">{itemName}</h1>
</div>
