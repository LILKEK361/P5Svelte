// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {initializeApp} from "firebase/app";
import "firebase/app";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {getDatabase} from "firebase/database"

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