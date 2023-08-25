<script lang="ts">

    import LineChart from "$lib/uicomponents/charts/LineChart.svelte";
    import {checkValueForTable} from "$lib/assets/TypeScriptCode/extracode";
    import {getSpecificData} from "$lib/database/DatabaseConfig";

</script>

<div>
    <h1>Dashboard</h1>

    <!-- Table -->
    <table class="table border-2 border-white flex justify-evenly">
        <tr class="border-2 border-white">
            <td >Stoff<td>
            <td class="border-2 border-white">Wert<td>
            <td>Status<td>
        </tr>
        <tr>
            <td>Air Quality<td>
            <td class="border-2 border-white">
                 {getSpecificData("/Arduino/devices/random_id/current_data/AirQualtiy")}
            <td>
            <td>{checkValueForTable(0.005, 0.004, 0.001)}<td>
        </tr>
    </table>

    <!--Doughnut Chart -->

    <LineChart/>

</div>


<style>


</style>