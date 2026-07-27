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
document.addEventListener("click", function (e) {

    if (e.target.id === "confirmDate") {

        document.body.innerHTML = `

        <div class="page">

            <div class="card">

                <div class="food-icon">🍽️</div>

                <h1>What would you like to eat?</h1>

                <select id="food">

                    <option value="">Choose one...</option>
                    <option>🍕 Pizza</option>
                    <option>🍔 Burger</option>
                    <option>🍣 Sushi</option>
                    <option>🍝 Italian</option>
                    <option>🌮 Mexican</option>
                    <option>🥩 Steak</option>
                    <option>🍗 Chicken</option>
                    <option>🍰 Dessert</option>
                    <option>🎬 Netflix & Chill</option>
                       <option>🔞 sex! </option>
                </select>

                <button id="foodNext">
                    Continue →
                </button>

            </div>

        </div>

        `;

    }

    if (e.target.id === "changeDate") {

        location.reload();

    }

});

                 

  

document.addEventListener("click", function (e) {

    if (e.target.id !== "next") return;

    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (!date || !time) {
        alert("Please choose a date and time ❤️");
        return;
    }

    const formattedDate = new Date(date).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    document.body.innerHTML = `

    <div class="page">

        <div class="card">

            <div class="cupid">💖</div>

            <h1>Is this okay?</h1>

            <p><strong>📅 Date:</strong> ${formattedDate}</p>

            <p><strong>🕒 Time:</strong> ${time}</p>

            <div class="buttons">

                <button id="confirmDate">
                    Yes, Continue ❤️
                </button>

                <button id="changeDate">
                    Change ✏️
                </button>

            </div>

        </div>

    </div>

    `;

});
