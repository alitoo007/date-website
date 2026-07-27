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
let selectedFood = "";

/* ------------------------------
   Move No Button
------------------------------ */

function moveNoButton() {

    const maxX = window.innerWidth - no.offsetWidth - 20;
    const maxY = window.innerHeight - no.offsetHeight - 20;

    no.style.position = "fixed";
    no.style.left = Math.random() * maxX + "px";
    no.style.top = Math.random() * maxY + "px";

}

no.addEventListener("mousedown", function (e) {

    e.preventDefault();

    if (attempt < noTexts.length - 1) {
        attempt++;
        no.textContent = noTexts[attempt];
    }

    yesScale += 0.25;
    yes.style.transform = `scale(${yesScale})`;

    moveNoButton();

});

/* ------------------------------
   YES BUTTON
------------------------------ */

yes.addEventListener("click", () => {

    document.body.innerHTML = `

    <div class="page">

        <div class="card">

            <div class="cupid">👼💘</div>

            <h1>So... when are you free?</h1>

            <label>Pick a Day ✨</label>
            <input type="date" id="date">

            <label>What Time? 🕒</label>
            <input type="time" id="time">

            <button id="next">
                Next →
            </button>

        </div>

    </div>

    `;

});

/* ------------------------------
   DATE PAGE
------------------------------ */

document.addEventListener("click", function (e) {

    if (e.target.id !== "next") return;

    selectedDate = document.getElementById("date").value;
    selectedTime = document.getElementById("time").value;

    if (!selectedDate || !selectedTime) {

        alert("Please choose a date and time ❤️");
        return;

    }

    document.body.innerHTML = `

    <div class="page">

        <div class="card">

            <div class="food-icon">🍽️</div>

            <h1>What would you like to eat?</h1>

            <select id="food">

                <option value="">Choose...</option>

                <option>🍕 Pizza</option>
                <option>🍔 Burger</option>
                <option>🍣 Sushi</option>
                <option>🍝 Italian</option>
                <option>🥩 Steak</option>
                <option>🌮 Mexican</option>
                <option>🍜 Noodles</option>
                <option>🍗 Chicken</option>
                <option>🥗 Healthy</option>
                <option>🍰 Dessert</option>
                <option>🎬 Netflix & Chill</option>

            </select>

            <button id="foodNext">
                Continue →
            </button>

        </div>

    </div>

    `;

});

/* ------------------------------
   FOOD PAGE
------------------------------ */

document.addEventListener("click", function (e) {

    if (e.target.id !== "foodNext") return;

    selectedFood = document.getElementById("food").value;

    if (!selectedFood) {

        alert("Please choose a food ❤️");
        return;

    }

    document.body.innerHTML = `

    <div class="page">

        <div class="success">

            <h1>🎉 It's a Date! ❤️</h1>

            <p><strong>📅 Date:</strong> ${selectedDate}</p>

            <p><strong>🕒 Time:</strong> ${selectedTime}</p>

            <p><strong>🍽️ Food:</strong> ${selectedFood}</p>

            <p>I can't wait to see you 🥰</p>

            <button class="finishBtn" onclick="location.reload()">
                Start Again ❤️
            </button>

        </div>

    </div>

    `;

    createHearts();

});

/* ------------------------------
   HEART ANIMATION
------------------------------ */

function createHearts() {

    const interval = setInterval(() => {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (20 + Math.random() * 25) + "px";
        heart.style.pointerEvents = "none";
        heart.style.animation = "float 4s linear forwards";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 4000);

    }, 200);

    setTimeout(() => {

        clearInterval(interval);

    }, 5000);

}
