<script lang="ts">
    import {onMount} from 'svelte';
    import {Chart} from 'chart.js/auto';

    const colorArray : Array<string> = ["#005ce6", "#003399", "#3333cc", "#0000cc"]
    export let ChartData : Array<integer>
    export let ChartLabels : Array<string>

    let chart : any;

    const data = {
        labels: [...ChartLabels],
        datasets: [{
            label: 'Co2 over time',
            data: [...ChartData],
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor : [...colorArray],
            tension: .3
        }]
    };

    const config = {
        type: 'doughnut',
        data: data,
    };

    onMount(() => {
        const ctx = chart.getContext('2d');
        var myChart = new Chart(ctx, config);
        ctx.height = "20vh"
        console.log(ChartData)
    })



</script>
<div class="chart-container" style="max-height: 80vh; min-height: 40vh max-width: 80vh; min-width: 40vw;">
<canvas bind:this={chart}  height="10vh" > </canvas>
</div>