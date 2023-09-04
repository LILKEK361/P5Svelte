<script lang="ts">
    import MapComponent from "$lib/assets/MapComponents/MapComponent.svelte"

</script>

<div class="flex justify-center items-center w-full h-full">

    <MapComponent places={[
        {Lng : 8.8017, Lat :53.0793 },
        {Lng : 8.8010, Lat :51.0793 },
        {Lng : 8.8001, Lat :54.0793 },
        {Lng : 8.8020, Lat :53.0293 },
        {Lng : 8.8022, Lat :53.0453 },
        {Lng : 8.8013, Lat :53.0793 },
        ]} />

</div>
