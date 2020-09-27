/*eslint-disable no-unused-vars */
"use strict";

function modalOpen(message) {
	const modalBox = document.createElement("div");
	modalBox.id = "modal-box";
	const innerModalBox = document.createElement("div");
	innerModalBox.id = "inner-modal-box";
	const modalMessage = document.createElement("span");
	modalMessage.id = "modal-message";
	innerModalBox.appendChild(modalMessage);
	modalBox.appendChild(innerModalBox);
	modalMessage.innerText = message;
	document.getElementsByTagName("html")[0].appendChild(modalBox);
}

function modalClose() {
	document.getElementById("modal-box").remove();
}

