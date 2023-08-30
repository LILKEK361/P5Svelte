import {child, get, ref, onValue} from "firebase/database";
import {db, pathsForElements, allElements, AllElementValues, AirQualityVal, CO2Val, N2Val, O2Val } from "$lib/database/DatabaseConfig";

export function fetchCo2Data(): Array<number> {
    const dbRef = ref(db);
    get(child(dbRef, "/Arduino/devices/random_id/CO2OverTime")).then((snapshot: any) => {
        console.log(snapshot.val());
        return snapshot.val();
    }).catch((err: any): void => {
        console.error("Failed to get Co2 overtime from db. Error: " + err);
    });
    return [];
}

export  function getSpecificData(path : string){
    const startref = ref(db, path)
    let Data : number;
    onValue(startref,  (snapshot) => {

        if(snapshot.val()){

            Data =  snapshot.val()
        }else{
            Data = 0
        }

    });
    return Data
}

export async function readDashboardData(){
    AirQualityVal.set(getSpecificData(pathsForElements["AirQuality"]))
    CO2Val.set(getSpecificData(pathsForElements["CO2"]))
    N2Val.set(getSpecificData(pathsForElements["N2"]))
    O2Val.set(getSpecificData(pathsForElements["O2"]))


}