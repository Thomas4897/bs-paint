const gridWidth = 50;

let count = 0;
while (count < gridWidth * gridWidth) {
	const canvas = document.querySelector(".canvas");
	const div = document.createElement("div");
	div.className = "square color-5";
	canvas.appendChild(div);
	count++;
}

const app = document.querySelector(".app");

const colorSelector = document.querySelector(".palette");

const currentBrush = document.querySelector(".current-brush");

const newBrush = colorSelector.addEventListener("click", function (event) {
	const currentColor = currentBrush.classList[1];
	// console.log("event.target", event.target.classList[1]);
	if (event.target.localName === "div") {
		currentBrush.classList.replace(currentColor, event.target.classList[1]);
	}
});

const canvas = document.querySelector(".canvas");

const paint = canvas.addEventListener("click", function (event) {
	const currentColor = currentBrush.classList[1];
	const square = event.target.classList[1];
	console.log("event.target", square);
	if (event.target.localName === "div") {
		event.target.classList.replace(square, currentColor);
	}
});

//! Set clicked to false;
let clicked = false;

//! When mouseDown turns click true
const mouseDown = document.addEventListener("mousedown", function () {
	clicked = true;
});

//! When mouseUp turns click false
const mouseUp = document.addEventListener("mouseup", function () {
	clicked = false;
});

//! paintDrag continues if click is true;
const paintDrag = canvas.addEventListener("mousemove", function (event) {
	const currentColor = currentBrush.classList[1];
	const square = event.target.classList[1];
	console.log("event.target", square);
	if (clicked === true) {
		if (event.target.localName === "div") {
			event.target.classList.replace(square, currentColor);
		}
	}
});

const body = document.querySelector("body");

const darkModeButton = document.querySelector(".dark-mode-button");

const headings = document.querySelector(".headings");

const icon = document.querySelector(".icon");

darkModeButton.style.cursor = "pointer";
const changeTheme = darkModeButton.addEventListener("click", function () {
	const currentMode = body.classList[0];
	console.log("Current Mode", currentMode);

	body.classList.toggle("dark-mode");
});
