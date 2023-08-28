<script lang="ts">
    import {onMount} from 'svelte';
    import {Chart} from 'chart.js/auto';

    const colorArray : Array<string> = ["#005ce6", "#003399", "#3333cc", "#0000cc"]
    let chart : any;

    const data = {
        labels: ['5', '4', '3', '2', '1', '0'],
        datasets: [{
            label: 'Co2 over time',
            data: [1, 2, 3, 1, 5, 6],
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
    })



</script>
<div class="chart-container" style="max-height: 80vh; min-height: 40vh max-width: 80vh; min-width: 40vw;">
<canvas bind:this={chart}  height="10vh" > </canvas>
</div>