<script lang="ts">


    import onMount from "svelte"
    import {  AirQualityVal, CO2Val, N2Val, O2Val} from "$lib/database/DatabaseConfig";

    let DataArray : Array<Interger> = []
    onMount(() => {
        DataArray
    })

</script>



