const easyBtn = document.querySelector("#easy-btn");
const mediumBtn = document.querySelector("#medium-btn");
const hardBtn = document.querySelector("#hard-btn");

const range = document.querySelector("#range");
const guessInput = document.querySelector("#number");
const guessBtn = document.querySelector("#guess-btn");

const result = document.querySelector("#result");
const attempts = document.querySelector("#attempts");
const playAgainBtn = document.querySelector("#play-again-btn");

let randomNumber = null;
let count = 0;

function setDifficulty(max) {
    randomNumber = Math.floor(Math.random() * max) + 1;
    count = 0;

    range.innerText = `Range: 1-${max}`;
    result.innerText = "Waiting for your guess...";
    attempts.innerText = "Attempts: 0";

   // console.log(randomNumber);
}

easyBtn.addEventListener("click", function () {
    setDifficulty(100);
});

mediumBtn.addEventListener("click", function () {
    setDifficulty(500);
});

hardBtn.addEventListener("click", function () {
    setDifficulty(1000);
});

guessBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (randomNumber === null) {
        alert("Please select a difficulty level first.");
        return;
    }

    if (guessInput.value === "") {
        alert("Please enter a number.");
        return;
    }

    const guess = Number(guessInput.value);

    count++;

    if (guess === randomNumber) {
        result.innerText = "🎉 Congratulations! You guessed it!";
    } else if (guess < randomNumber) {
        result.innerText = "📉 Too Low!";
    } else {
        result.innerText = "📈 Too High!";
    }

    attempts.innerText = `Attempts: ${count}`;
    guessInput.value = "";
});

function resetGame() {
    randomNumber = null;
    count = 0;

    range.innerText = "Range: Select a difficulty level";
    result.innerText = "Waiting for your guess...";
    attempts.innerText = "Attempts: 0";
    guessInput.value = "";
}

playAgainBtn.addEventListener("click", resetGame);