<script lang="ts">
    import Navbar from "$lib/uicomponents/navbar/Navbar.svelte";
    import Dashboard from "$lib/pages/Dashboard.svelte";
    import Co2 from "$lib/pages/Co2.svelte";
    import {Route, Router} from "svelte-routing";
    import Temperature from "$lib/pages/Temperature.svelte";
    import Settings from "$lib/pages/Settings.svelte";
    import About from "$lib/pages/About.svelte";
    import Locaction from "$lib/pages/Locaction.svelte";
</script>

<div class="w-screen h-screen flex">
    <Navbar/>
    <Router>
        <Route component={Dashboard} path="/dashboard"/>
        <Route component={Co2} path="/co2"/>
        <Route component={Temperature} path="/temperature"/>
        <Route component={Settings} path="/settings"/>
        <Route component={About} path="/about"/>
        <Route component={Locaction} path="/location"></Route>
    </Router>
</div>