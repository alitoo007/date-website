
import { db } from "./firebase.js";

import {
    ref,
    push
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1ChUuQ37VrAGPtbKhGSAUWd5j8smltWU",
  authDomain: "date-website-3972c.firebaseapp.com",
  projectId: "date-website-3972c",
  storageBucket: "date-website-3972c.firebasestorage.app",
  messagingSenderId: "962194139737",
  appId: "1:962194139737:web:aaa2fe6b269ed33e799f48",
  measurementId: "G-B2DM0Y55VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
async function saveResponse(date, time, food) {

    try {

        await push(ref(db, "responses"), {
            date: date,
            time: time,
            food: food,
            submittedAt: new Date().toISOString()
        });

        alert("Your response has been saved ❤️");

    } catch (error) {
        console.error(error);
        alert("Something went wrong.");
    }
}
const date = document.getElementById("date").value;
const time = document.getElementById("time").value;
const food = document.getElementById("food").value;

saveResponse(date, time, food);
