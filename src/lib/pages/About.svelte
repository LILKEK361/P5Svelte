<script lang="ts">

import Personinfo from "$lib/uicomponents/pagecomponents/Personinfo.svelte";
</script>


    <div class="flex justify-center items-center w-[100vw] h-[100vh] overflow-hidden">
        <table class="w-[100%] h-[100%] text-center flex justify-center items-center overflow-hidden">
            <tbody>
            <tr>
                <td class="pl-5 pr-5"><Personinfo PersonalInfo={["Age: 18", "Tasks:", " Builden the WebApp,", "Setting up the Arduino,", "Designing the Charts with Chartjs", "Role: Programmer"]} Name={"Nick Hillmann"} Picture={"/src/assets/Nick03.jpeg"}></Personinfo>
                </td>
                <td class="pl-5 pr-5"><Personinfo PersonalInfo={["Age: 18", "Tasks:", "Documentation,", "Forecast function (calculation),", "Design Templates", "Role: Teamleader"]} Name={"Jarno Callies"} Picture={"/src/assets/JarnoProf.jpeg"}></Personinfo>
                </td>
            </tr>
            <tr>
                <td class="pl-5 pr-5"><Personinfo PersonalInfo={["Age: 22", "Tasks:", "Marketing,", "Design,", "Investor", "Role: Finance Manager"]} Name={"Marc Müller"} Picture={"/src/assets/MarcProf.jpeg"}></Personinfo>
                </td>
                <td class="pl-5 pr-5"><Personinfo PersonalInfo={["Age: 18,", "Tasks:" ,"Cleaning code,","Coding the App Layout", "Code debugging", "Role: Programmer"]} Name={"Fabian Holler"} Picture={"/src/assets/FabianProf.png"}></Personinfo>
                </td>
            </tr>
            </tbody>
        </table>
    </div>

