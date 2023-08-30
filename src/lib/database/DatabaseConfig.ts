// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {initializeApp} from "firebase/app";
import "firebase/app";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {getDatabase, onValue, ref} from "firebase/database"
import {writable} from "svelte/store";

const firebaseConfig = {
    apiKey: "AIzaSyB0PjT0hCV-9QpmwxNeWz0QZwdh4iPdYQQ",
    authDomain: "meister-mimi.firebaseapp.com",
    databaseURL:
        "https://meister-mimi-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "meister-mimi",
    storageBucket: "meister-mimi.appspot.com",
    messagingSenderId: "876451638333",
    appId: "1:876451638333:web:2097cc532d2234434f4e54",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export const pathsForElements = {
    "AirQuality" : "/Arduino/devices/random_id/current_data/AirQualtiy",
    "CO2" : "/Arduino/devices/random_id/current_data/CO2",
    "N2" : "/Arduino/devices/random_id/current_data/N2",
    "O2" : "/Arduino/devices/random_id/current_data/O2"
}
export const allElements = writable(["AirQuality", "CO2", "N2", "O2"])

export const MinMaxValuesforElements = {
    "AirQuality" : {
        min : 1,
        max : 4
    },
    "CO2" : {
        min : 1,
        max : 4
    },
    "N2" : {
        min : 1,
        max : 4
    },
    "O2" : {
        min : 1,
        max : 4
    }
}
export const AirQualityVal = writable(0)
export const CO2Val = writable(0)
export const N2Val = writable(0)
export const O2Val = writable(0)

export const AllElementValues = writable({"AirQuality" : 0, "CO2" : 0, "N2" : 0, "O2" : 0})

