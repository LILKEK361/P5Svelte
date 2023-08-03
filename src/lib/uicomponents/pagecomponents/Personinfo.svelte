<script lang="ts">
    export let Picture : string;
    export let Name : string;
    export let PersonalInfo : []
</script>


<div class="">
    <div class="h-[30vh] card card-side bg-base-100 shadow-xl mt-5 overflow-hidden">

        <figure><img alt="profile picture" src={Picture} class="w-[200px] h-[100%]" /></figure>
        <div class="card-body text-left">
            <h2 class="card-title">{Name}</h2>
            <div>{#each PersonalInfo as r}
                <p>{r}</p>
                {/each}
            </div>


        </div>
    </div>
</div>