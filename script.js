
let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

// Increase counter
increaseBtn.addEventListener("click", function () {
    count++;
    countDisplay.textContent = count;
});

// Decrease counter
decreaseBtn.addEventListener("click", function () {
    count--;
    countDisplay.textContent = count;
});

// Reset counter
resetBtn.addEventListener("click", function () {
    count = 0;
    countDisplay.textContent = count;
});
