<script lang="ts">

    import LineChart from "$lib/uicomponents/charts/LineChart.svelte";
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
            <td>Test<td>
            <td class="border-2 border-white">0.002%<td>
            <td>Good<td>
        </tr>
    </table>

    <!--Doughnut Chart -->

    <LineChart/>

</div>


<style>


</style>