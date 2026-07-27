

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


document.addEventListener("click", function(e){

    if(e.target.id !== "foodNext") return;

    selectedFood = document.getElementById("food").value;

    if(selectedFood === ""){

        alert("Please choose your favourite food ❤️");

        return;

    }

    document.body.innerHTML = `

    <div class="page">

        <div class="success">

            <h1>🎉 It's a Date! ❤️</h1>

            <p><strong>📅 Date:</strong> ${selectedDate}</p>

            <p><strong>🕒 Time:</strong> ${selectedTime}</p>

            <p><strong>🍽️ Food:</strong> ${selectedFood}</p>

            <p>Can't wait to see you! 🥰</p>

            <button class="finishBtn" onclick="location.reload()">
                Start Again ❤️
            </button>

        </div>

    </div>

    `;

    createHearts();

});

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

            <h1>What type of food?</h1>

            <select id="food">

                <option value="">Choose...</option>

                <option>🍕 Pizza</option>
                <option>🍔 Burgers</option>
                <option>🍣 Sushi</option>
                <option>🍝 Italian</option>
                <option>🌮 Mexican</option>
                <option>🥩 Steak</option>
                <option>🍗 Chicken</option>
                <option>🥗 Healthy</option>
                <option>🍜 Noodles</option>
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

});


document.addEventListener("click", async function (e) {

    if (e.target.id !== "foodNext") return;

    selectedFood = document.getElementById("food").value;

    if (!selectedFood) {
        alert("Please choose your favourite food ❤️");
        return;
    }

    try {

        await saveResponse();

        document.body.innerHTML = `

        <div class="page">

            <div class="success">

                <h1>🎉 It's a Date! ❤️</h1>

                <p><strong>📅 Date:</strong> ${selectedDate}</p>

                <p><strong>🕒 Time:</strong> ${selectedTime}</p>

                <p><strong>🍽️ Food:</strong> ${selectedFood}</p>

                <p>Can't wait to see you! 🥰</p>

                <button class="finishBtn" onclick="location.reload()">
                    Start Again ❤️
                </button>

            </div>

        </div>

        `;

        createHearts();

    } catch (err) {

        console.error(err);
        alert("Failed to save to Firebase.");

    }

});

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
