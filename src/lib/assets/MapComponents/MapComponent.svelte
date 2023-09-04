<script lang="ts" src='https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=[At6OvxrwTSlslO408nAWIZqVCklIQB4w9NXPaA4bz_M7cM3Eq_VMRFID0XyeqDCZ]' async defer>



    import { onMount, onDestroy } from 'svelte';
    import * from "bingmaps"


    let map : any;

    onMount(() => {
        // Initialize the Bing Map
        map = new BingMaps.Map(document.getElementById('map'), {
            credentials: 'YOUR_BING_MAPS_API_KEY',
            center: new BingMaps.Location(51.505, -0.09),
            zoom: 13
        });
    });

    onDestroy(() => {
        // Clean up when the component is destroyed
        if (map) {
            map.dispose();
        }
    });
</script>

<style>
    #map {
        width: 100%;
        height: 400px;
    }
</style>

<div id="map"></div>
