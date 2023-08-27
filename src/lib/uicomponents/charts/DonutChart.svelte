<script lang="ts">
    import {onMount} from 'svelte';
    import {Chart} from 'chart.js/auto';


    let chart : any;

    const data = {
        labels: ['5', '4', '3', '2', '1', '0'],
        datasets: [{
            label: 'Co2 over time',
            data: [1, 2, 3, 1, 5, 6],
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
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
    })



</script>
<div class="w-4/6 h-4/6">
    <canvas bind:this={chart} class="h-full w-full" > </canvas>
</div>