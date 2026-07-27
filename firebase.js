import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getDatabase
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

const firebaseConfig = {

    apiKey: "AIzaSyA1ChUuQ37VrAGPtbKhGSAUWd5j8smltWU",

    authDomain: "date-website-3972c.firebaseapp.com",

    databaseURL: "https://date-website-3972c-default-rtdb.europe-west1.firebasedatabase.app",

    projectId: "date-website-3972c",

    storageBucket: "date-website-3972c.firebasestorage.app",

    messagingSenderId: "962194139737",

    appId: "1:962194139737:web:aaa2fe6b269ed33e799f48"

};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
