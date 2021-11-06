const gridWidth = 80;

const canvas = document.querySelector(".canvas");

let count = 0;
while (count < gridWidth * gridWidth) {
	const div = document.createElement("div");
	div.className = "square color-5";
	canvas.appendChild(div);
	count++;
}

const app = document.querySelector(".app");
const colorSelector = document.querySelector(".palette");
const currentBrush = document.querySelector(".current-brush");
const body = document.querySelector("body");
const darkModeButton = document.querySelector(".dark-mode-button");
const headings = document.querySelector(".headings");
const icon = document.querySelector(".icon");
const brushIcon = document.querySelector(".brush-icon");
const fillIcon = document.querySelector(".fill-icon");
const currentFill = document.querySelector(".current-fill");
const square = document.querySelectorAll(".canvas .square");

//! Set clicked to false;
let clicked = false;

const newBrush = colorSelector.addEventListener("click", function (event) {
	const currentColor = currentBrush.classList[1];

	if (event.target.localName === "div") {
		currentBrush.classList.replace(currentColor, event.target.classList[1]);
		currentFill.classList.replace(
			currentFill.classList[1],
			event.target.classList[1]
		);
	}

	if (currentBrush.classList[1] === "color-11") {
		brushIcon.style.filter = "invert(1)";
		fillIcon.style.filter = "invert(1)";
	} else {
		brushIcon.style.filter = "invert(0)";
		fillIcon.style.filter = "invert(0)";
	}
});

const paint = canvas.addEventListener("click", function (event) {
	const currentColor = currentBrush.classList[1];
	const square = event.target.classList[1];

	if (event.target.localName === "div") {
		event.target.classList.replace(square, currentColor);
	}
});

const fill = currentFill.addEventListener("click", function () {
	const currentColor = currentFill.classList[1];

	for (let i = 0; i < gridWidth * gridWidth; i++) {
		square[i].classList.replace(square[i].classList[1], currentColor);
	}
});

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

	if (clicked === true) {
		if (event.target.localName === "div") {
			event.target.classList.replace(square, currentColor);
		}
	}
});

darkModeButton.style.cursor = "pointer";
const changeTheme = darkModeButton.addEventListener("click", function () {
	body.classList.toggle("dark-mode");
});
