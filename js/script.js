"use strict";

const camera = document.getElementById("camera");
const btn = document.getElementById("btn");
const arrow = document.getElementById("arrow");
const smile = document.getElementById("smile");
const body = document.getElementById("body");

camera.addEventListener("click", () => {
	btn.classList.add("active");
	smile.classList.add("smile");
	animateSmile();
});

camera.addEventListener("mouseenter", () => {
	arrow.classList.add("move");
});

camera.addEventListener("mouseleave", () => {
	arrow.classList.remove("move");
});

function animateSmile() {
	setTimeout(() => {
		setTimeout(() => {
			btn.classList.remove("active");

			blink();
		}, 1500);
		smile.classList.remove("smile");
	}, 1000);
}

function blink() {
	body.classList.add("flash");
	setTimeout(() => {
		body.classList.remove("flash");
	}, 2000);
}
