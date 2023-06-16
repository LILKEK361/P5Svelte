<script lang="ts">

    import Sidebar from "../lib/uiComponents/Sidebar.svelte";

    let page : number;

    function setPage(side : number){
        page = side
    }

</script>

<div class="w-full h-[100vh]">
    <Sidebar />
</div>