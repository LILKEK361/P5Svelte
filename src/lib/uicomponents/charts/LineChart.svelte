<script lang="ts">

    import {fetchCo2Data} from "$lib/database/DataFetcher";
    import {onMount} from "svelte";
    import Chart from 'chart.js/auto/auto.js';

    const data: Array<number> = fetchCo2Data();
    let chart;

    const config = {

        type: 'doughnut',
        data: data,
        options: {
            borderRadius: '30',
            responsive: true,
            cutout: '95%',
            spacing: 2,
            plugins: {
                legend: {
                    position: 'bottom',
                    display: true,
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: {
                            size: 14
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'My Personal Portfolio'
                }
            }
        }
    };

    onMount(() => {
        const ctx = chart.getContext('2d');
        // Initialize chart using default config set
        var myChart = new Chart(ctx, config);
    })

</script>

<div>
    <svelte:component this={chart}/>
</div>
