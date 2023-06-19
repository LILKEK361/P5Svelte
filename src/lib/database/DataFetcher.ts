import {child, get, ref, onValue} from "firebase/database";
import {db} from "$lib/database/DatabaseConfig";

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

export async function getsingeldata(path : string){
    const startref = ref(db, path)
    let singledata;
    await onValue(startref, (snapshot) => {
        singledata = snapshot.val()
    })
    return singledata;
}