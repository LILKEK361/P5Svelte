<script lang="ts">
    //npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
    import NavItem from "$lib/uicomponents/navbar/NavItem.svelte";
    import Co2Icon from "$lib/assets/Co2Icon.svelte";
    import {Link, Router} from "svelte-routing";
    import DashboardIcon from "$lib/assets/DashboardIcon.svelte";
    import TemperatureIcon from "$lib/assets/TemperatureIcon.svelte";
    import SettingsIcon from "$lib/assets/SettingsIcon.svelte";
    import AboutUsIcon from "$lib/assets/AboutUsIcon.svelte";
    import LocationIcon from "$lib/assets/LocationIcon.svelte";
</script>

<div class="w-[15vw] h-screen bg-gray-800">
    <Router>
        <nav>
            <ul class="space-y-8 mt-[200px]">


                <li>
                    <Link to="/dashboard">
                        <NavItem icon={DashboardIcon} itemName="Dashboard"/>
                    </Link>
                </li>
                <li>
                    <Link to="/co2">
                        <NavItem icon={Co2Icon} itemName="Co2"/>
                    </Link>
                </li>
                <li>
                    <Link to="/temperature">
                        <NavItem icon={TemperatureIcon} itemName="Temperature"/>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <NavItem icon={AboutUsIcon} itemName="About Us"/>
                    </Link>
                </li>
                <li>
                    <Link to="/location">
                        <NavItem icon={LocationIcon} itemName="Location"/>
                    </Link>
                </li>
                <li>
                    <Link to="/settings">
                        <NavItem icon={SettingsIcon} itemName="Settings"/>
                    </Link>
                </li>
            </ul>
        </nav>
    </Router>
</div>
