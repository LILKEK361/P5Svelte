<script lang="ts">

    import LineChart from "$lib/uicomponents/charts/LineChart.svelte";
    import {checkValueForTable} from "$lib/assets/TypeScriptCode/extracode";
    import { MinMaxValuesforElements, AirQualityVal, CO2Val, N2Val, O2Val} from "$lib/database/DatabaseConfig";
    import {getSpecificData, readDashboardData} from "$lib/database/DataFetcher.ts"
    import DonutChart from "$lib/uicomponents/charts/DonutChart.svelte";
    import {onMount} from 'svelte';
    import {writable} from 'svelte/store';













</script>

<div class="overflow-hidden flex items-center w-full h-full]">

    <div class="w-[50%]">
        <!-- Table -->
        <table class="border-2 border-white max-w-[50vw] min-w-[40vw] ml-10  ">
            <tr class="flex justify-between w-full text-center border-b-2 ">
                <td class="w-[50%]" >Element<td>
                <td class="border-l-2 border-r-2 w-[25%]">Value<td>
                <td class="w-[25%]">Status<td>
            </tr>
            <tr class="border-b-2 flex justify-between w-full text-center ">
                <td class="w-[50%]">{"AirQuality"}</td>
                <td class="border-l-2 border-r-2 border-white w-[25%]">{$AirQualityVal}</td>
                <td class="w-[25%]">{checkValueForTable($AirQualityVal, MinMaxValuesforElements["AirQuality"].max, MinMaxValuesforElements["AirQuality"].min)}</td>
            </tr>
            <tr class="border-b-2 flex justify-between w-full text-center ">
                <td class="w-[50%]">{"CO2"}</td>
                <td class="border-l-2 border-r-2 border-white w-[25%]">{$CO2Val}</td>
                <td class="w-[25%]">{checkValueForTable($CO2Val, MinMaxValuesforElements["AirQuality"].max, MinMaxValuesforElements["AirQuality"].min)}</td>
            </tr>
            <tr class="border-b-2 flex justify-between w-full text-center ">
                <td class="w-[50%]">{"N2"}</td>
                <td class="border-l-2 border-r-2 border-white w-[25%]">{$N2Val}</td>
                <td class="w-[25%]">{checkValueForTable($N2Val, MinMaxValuesforElements["AirQuality"].max, MinMaxValuesforElements["AirQuality"].min)}</td>
            </tr>
            <tr class="border-b-2 flex justify-between w-full text-center ">
                <td class="w-[50%]">{"N2"}</td>
                <td class="border-l-2 border-r-2 border-white w-[25%]">{$O2Val}</td>
                <td class="w-[25%]">{checkValueForTable($O2Val, MinMaxValuesforElements["AirQuality"].max, MinMaxValuesforElements["AirQuality"].min)}</td>
            </tr>

        </table>
    </div >

    <!--Doughnut Chart -->

        <div class="w-[50%] h-full flex items-center justify-center">

              <DonutChart ChartLabels={["AirQuality", "CO2", "N2", "O2"]} ChartData={[$AirQualityVal, $CO2Val, $N2Val, $O2Val]} />

        </div>

</div>


<style>


</style>