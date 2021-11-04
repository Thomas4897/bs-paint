/*******************
 * OUR HELPER CODE *
 *******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 *
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
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

let clicked = false;

const mouseDown = document.addEventListener("mousedown", function () {
	clicked = true;
});

const mouseUp = document.addEventListener("mouseup", function () {
	clicked = false;
});

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
	// if (body.backgroundColor === "") {
	// 	body.classList.add("dark-mode");
	// } else {
	// 	body.classList.remove("dark-mode");
	// }

	// body.classList.add("dark-mode");

	if (darkModeButton.style.backgroundColor === "black") {
		darkModeButton.style.backgroundColor = "white";
		darkModeButton.style.color = "black";
		darkModeButton.style.border = "2px solid black";

		headings.style.color = "black";
		icon.style.filter = "invert(0)";
		body.classList.remove("dark-mode");
	} else {
		darkModeButton.style.backgroundColor = "black";
		darkModeButton.style.color = "white";
		darkModeButton.style.border = "2px solid white";

		headings.style.color = "white";
		icon.style.filter = "invert(1)";
		body.classList.add("dark-mode");
		colorSelector.style.border = "1px solid white";
	}
});
