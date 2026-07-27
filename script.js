import { db } from "./firebase.js";

import {
    ref,
    push
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";
const no = document.getElementById("no");
const yes = document.getElementById("yes");
const msg = document.getElementById("message");

const noTexts = [
    "No 💔",
    "Are you sure? 🥺",
    "Really? 😢",
    "Please? ❤️",
    "Think again 😭",
    "Don't do this 😭",
    "I'll be sad 😭",
    "Pretty please? 🥹",
    "Last chance 😭",
    "You can't escape 😈"
];

let attempt = 0;
let yesScale = 1;

function moveNoButton() {

    const maxX = window.innerWidth - no.offsetWidth - 20;
    const maxY = window.innerHeight - no.offsetHeight - 20;

    no.style.position = "fixed";
    no.style.left = Math.random() * maxX + "px";
    no.style.top = Math.random() * maxY + "px";
}

no.addEventListener("mousedown", function(e){

    e.preventDefault();

    if(attempt < noTexts.length - 1){
        attempt++;
        no.textContent = noTexts[attempt];
    }

    yesScale += 0.25;

    yes.style.transform = `scale(${yesScale})`;

    moveNoButton();

});

yes.addEventListener("click", () => {

document.body.innerHTML = `

<div class="page">

<div class="card">

<div class="cupid">👼💘</div>

<h1>So... when are you free?</h1>

<label>Pick a Day ✨</label>
<input type="date" id="date">

<label>What Time? 🤭</label>
<input type="time" id="time">

<button id="next">okay next →</button>

</div>

</div>

`;

});

function createHearts(){

    setInterval(()=>{

        const heart = document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"vw";
        heart.style.top="100vh";
        heart.style.fontSize=(20+Math.random()*25)+"px";
        heart.style.animation="float 4s linear forwards";

        document.body.appendChild(heart);

        setTimeout(()=>heart.remove(),4000);

    },200);

}

const style=document.createElement("style");

style.innerHTML=`
.success{
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:100vh;
text-align:center;
background:#ffe5ec;
font-family:Arial;
}

.success h1{
font-size:60px;
color:#ff2d55;
}

.success h2{
margin-top:15px;
}

@keyframes float{
0%{
transform:translateY(0) rotate(0deg);
opacity:1;
}
100%{
transform:translateY(-120vh) rotate(720deg);
opacity:0;
}
}
`;

document.head.appendChild(style);
document.addEventListener("click", function(e){

if(e.target.id==="next"){

document.body.innerHTML=`

<div class="page">

<div class="card">

<h1>It's a date! ❤️</h1>

<p>I can't wait to see you 🥹</p>

<button onclick="location.reload()">
Start Again
</button>

</div>

</div>

`;

}

});
document.addEventListener("click", function(e) {

    if (e.target.id === "next") {

        document.body.innerHTML = `

        <div class="page">

            <div class="card">

                <div class="food-icon">🍽️💖</div>

                <h1>What type of food are you craving?</h1>

                <select id="food">

                    <option value="">Choose one...</option>
                    <option>🍕 Pizza</option>
                    <option>🍔 Burgers</option>
                    <option>🍣 Sushi</option>
                    <option>🍝 Italian</option>
                    <option>🥩 Steak</option>
                    <option>🌮 Mexican</option>
                    <option>🍗 Chicken</option>
                    <option>🥗 Healthy</option>
                    <option>🍜 Noodles</option>
                    <option>🍛 Indian</option>
                    <option>🍰 Dessert</option>
                    <option>🤷 Surprise Me!</option>
                    <option>🎬 Netflix and Chill ! </option>
                    <option>🔞 sex! </option>

                </select>

                <button id="foodNext">
                    Continue →
                </button>

            </div>

        </div>

        `;
    }
});
document.addEventListener("click", function(e){

    if(e.target.id === "foodNext"){

        const food = document.getElementById("food").value;

        if(food === ""){
            alert("Please choose your favourite food! ❤️");
            return;
        }

        document.body.innerHTML = `

        <div class="page">

            <div class="card">

                <h1>Yay! 🎉</h1>

                <p>We'll have <strong>${food}</strong> together! 😍</p>

                <button onclick="location.reload()">
                    Finish ❤️
                </button>

            </div>

        </div>

        `;
    }

});
