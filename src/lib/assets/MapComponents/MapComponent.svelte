
<script lang="ts">
    import { onMount } from 'svelte';
    import "@maptiler/sdk/dist/maptiler-sdk.css";
    import * as maptilersdk from '@maptiler/sdk';

    export let places  = [{Lng : 1, Lat : 1}]
    let map : any

    function addMarker(){
        places.forEach( (ob) => {
            const marker = new maptilersdk.Marker()
                .setLngLat([ob.Lng, ob.Lat])
                .setPopup(new maptilersdk.Popup().setText("Co2 : null" +
                    "N2 : null" +
                    " O2 : null"))
                .addTo(map);
        })
    }

    onMount(() => {
        maptilersdk.config.apiKey = '28M9ofbQ28SuG7CC7PXo';

         map = new maptilersdk.Map({
            container: 'Map', // container's id or the HTML element to render the map
            style: "basic-v2",
            center: [8.8017,53.0793], // starting position [lng, lat]
            zoom: 14, // starting zoom
        });

         addMarker()





    });
</script>

<div id="Map" class="h-[50vh] w-[50vw]"></div>
