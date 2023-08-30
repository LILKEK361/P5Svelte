<script lang="ts">

    import DonutChart from "$lib/uicomponents/charts/DonutChart.svelte";
    import {  AirQualityVal, CO2Val, N2Val, O2Val} from "$lib/database/DatabaseConfig";


</script>



<DonutChart ChartLabels={["AirQuality", "CO2", "N2", "O2"]} ChartData={[$AirQualityVal, $CO2Val, $N2Val, $O2Val]} />