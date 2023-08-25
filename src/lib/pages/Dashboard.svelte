<script lang="ts">

    import LineChart from "$lib/uicomponents/charts/LineChart.svelte";
    import {checkValueForTable} from "$lib/assets/TypeScriptCode/extracode";
    import {getSpecificData, MinMaxValuesforElements, pathsForElements} from "$lib/database/DatabaseConfig";

    const allElements = ["AirQuality", "CO2", "N2", "O2"]
    const allValuesForElements = {"AirQuality" : 0, "CO2" : 0, "N2" : 0, "O2" : 0}


    setTimeout(() => {
        allElements.forEach((element) => {
            allValuesForElements[element] = getSpecificData(pathsForElements[element])
        })
        }, 1000)



</script>

<div>
    <h1>Dashboard</h1>

    <!-- Table -->
    <table class="border-2 border-white max-w-[50vw] min-w-[40vw] min-h-[20vh]  max-h-[50vh] p-0 m-0 ">
        <tr class="flex justify-between w-full text-center border-b-2 ">
            <td class="w-[50%]" >Stoff<td>
            <td class="border-l-2 border-r-2 w-[25%]">Wert<td>
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

    <!--Doughnut Chart -->

    <LineChart/>

</div>


<style>


</style>