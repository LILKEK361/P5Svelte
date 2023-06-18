<script lang="ts">

    export let data = {};


    function checkCo2(i: number) {

    }

    function checkTmp(i: number) {

    }

    function checkRH(i: number) {
        return "bg-green";
    }


</script>

<div class="h-[100vh] w-[100vw]">
    <div class="h-[100%] w-[50%] flex justify-center items-center">
        <table class="h-[50%] w-[100%]">
            <tbody>
            <tr>
                <td>Stoff</td>
                <td>Wert</td>
                <td>Status</td>
            </tr>
            <tr>
                <td>
                    Co2
                </td>
                <td>
                    {data["Co2"].wert}
                </td>
                <td>
                    Good
                </td>
            </tr>
            <tr>
                <td>
                    N2
                </td>
                <td>
                    75%
                </td>
                <td>
                    Good
                </td>
            </tr>
            <tr>
                <td>
                    O2
                </td>
                <td>
                    20%
                </td>
                <td>
                    Good
                </td>
            </tr>
            <tr>
                <td>
                    RH
                </td>
                <td>
                    {data["RH"].wert}
                </td>
                <td>
                    Good
                </td>
            </tr>
            <tr>
                <td>
                    Temp
                </td>
                <td>
                    {data["Tmp"].wert}
                </td>
                <td class={checkTmp()}>
                    Good
                </td>
            </tr>
            </tbody>
        </table>

    </div>
    <div class="h-[100%] w-[50%]"></div>
</div>