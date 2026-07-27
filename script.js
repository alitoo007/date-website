const no = document.getElementById("no");
const yes = document.getElementById("yes");

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

let selectedDate = "";
let selectedTime = "";

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

<button id="next">Okay Next →</button>

</div>

</div>

`;

});

document.addEventListener("click", function(e){

if(e.target.id !== "next") return;

selectedDate = document.getElementById("date").value;
selectedTime = document.getElementById("time").value;

if(selectedDate === "" || selectedTime === ""){

    alert("Please choose a date and time ❤️");

    return;

}

const formattedDate = new Date(selectedDate).toLocaleDateString("en-GB",{

weekday:"long",
day:"numeric",
month:"long",
year:"numeric"

});

document.body.innerHTML = `

<div class="page">

<div class="card">

<div class="cupid">💕</div>

<h1>Confirm your date</h1>

<p><strong>📅 ${formattedDate}</strong></p>

<p><strong>🕒 ${selectedTime}</strong></p>

<div class="buttons">

<button id="confirmDate">
Looks Good ❤️
</button>

<button id="changeDate">
Change ✏️
</button>

</div>

</div>

</div>

`;

});

document.addEventListener("click", function(e){

if(e.target.id === "changeDate"){

location.reload();

}

});

document.addEventListener("click", function(e){

if(e.target.id !== "confirmDate") return;

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
<option>🎬 Netflix and Chill</option>
<option>🍿 Cinema</option>
<option>☕ Coffee Date</option>

</select>

<button id="foodNext">

Continue →

</button>

</div>

</div>

`;

});
/* ==========================
   FOOD PAGE
========================== */

document.addEventListener("click", function(e){

    if(e.target.id !== "foodNext") return;

    const food = document.getElementById("food").value;

    if(food === ""){

        alert("Please choose your favourite food! ❤️");
        return;

    }

    document.body.innerHTML = `

    <div class="page">

        <div class="success">

            <h1>🎉 It's a Date! ❤️</h1>

            <p><strong>📅 Date:</strong> ${selectedDate}</p>

            <p><strong>🕒 Time:</strong> ${selectedTime}</p>

            <p><strong>🍽️ Food:</strong> ${food}</p>

            <h2>Can't wait to see you! 🥰</h2>

            <button class="finishBtn" onclick="location.reload()">
                Start Again ❤️
            </button>

        </div>

    </div>

    `;

    createHearts();

});


/* ==========================
   HEART ANIMATION
========================== */

function createHearts(){

    const interval = setInterval(()=>{

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (20 + Math.random() * 25) + "px";
        heart.style.pointerEvents = "none";
        heart.style.animation = "float 4s linear forwards";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },4000);

    },200);

    setTimeout(()=>{
        clearInterval(interval);
    },5000);

}


/* ==========================
   EXTRA CSS FOR SUCCESS PAGE
========================== */

const style = document.createElement("style");

style.innerHTML = `

.success{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    text-align:center;
}

.success h1{
    color:#ff2d55;
    margin-bottom:20px;
}

.success h2{
    margin-top:20px;
    color:#555;
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
