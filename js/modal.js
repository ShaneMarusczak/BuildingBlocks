/*eslint-disable no-unused-vars */
"use strict";

function modal(message, duration) {
	const modalBox = document.createElement("div");
	modalBox.id = "modal-box";
	const innerModalBox = document.createElement("div");
	innerModalBox.id = "inner-modal-box";
	const modalMessage = document.createElement("span");
	modalMessage.id = "modal-message";
	innerModalBox.appendChild(modalMessage);
	modalBox.appendChild(innerModalBox);
	const outerAnimationContainer = document.createElement("div");
	outerAnimationContainer.classList.add("animation");
	for (let i = 0; i < 3; i++) {
		outerAnimationContainer.appendChild(document.createElement("div"));
	}
	innerModalBox.appendChild(outerAnimationContainer);
	modalMessage.innerText = message;
	document.getElementsByTagName("html")[0].appendChild(modalBox);
	window.sleep(duration).then(() => modalBox.remove());
}
