<script lang="ts">

    import LineChart from "$lib/uicomponents/charts/LineChart.svelte";
    import {checkValueForTable} from "$lib/assets/TypeScriptCode/extracode";
    import { MinMaxValuesforElements, pathsForElements} from "$lib/database/DatabaseConfig";
    import {getSpecificData} from "$lib/database/DataFetcher.ts"
    import DonutChart from "$lib/uicomponents/charts/DonutChart.svelte";
    import {onMount} from 'svelte';

    const allElements = ["AirQuality", "CO2", "N2", "O2"]
    let allValuesForElements = {"AirQuality" : 0, "CO2" : 0, "N2" : 0, "O2" : 0}


    setTimeout(() => {
         allElements.forEach((element) => {
            allValuesForElements[element] = getSpecificData(pathsForElements[element])
        })
        }, 1000)

    onMount(  () => {
         allElements.forEach((element) => {
            allValuesForElements[element] = getSpecificData(pathsForElements[element])
        })
    })

    const dataRead = () =>{
        
        return [
            allValuesForElements["AirQuality"],
            allValuesForElements["CO2"],
            allValuesForElements["N2"],
            allValuesForElements["O2"]]
    }



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
            {#each allElements as element}
                <tr class="border-b-2 flex justify-between w-full text-center ">
                    <td class="w-[50%]">{element}</td>
                    <td class="border-l-2 border-r-2 border-white w-[25%]">{allValuesForElements[element]}</td>
                    <td class="w-[25%]">{checkValueForTable(allValuesForElements[element], MinMaxValuesforElements[element].max, MinMaxValuesforElements[element].min)}</td>
                </tr>
            {/each}
        </table>
    </div >

    <!--Doughnut Chart -->
    <div class="w-[50%] h-full flex items-center justify-center">

        <DonutChart ChartData={dataRead()}

                    ChartLabels={[...allElements]}  />

    </div>
</div>


<style>


</style>