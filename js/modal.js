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
	modalMessage.innerText = message;
	document.getElementsByTagName("html")[0].appendChild(modalBox);
	window.sleep(duration).then(() => modalBox.remove());
}
