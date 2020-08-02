/*eslint-disable no-unused-vars */
"use strict";

function slideUpMessage(message) {
	const slideUpBox = document.createElement("div");
	slideUpBox.id = "slide-up-box";
	const uiBlocker = document.createElement("div");
	uiBlocker.id = "ui-blocker";
	const slideUpMessage = document.createElement("span");
	slideUpMessage.id = "slide-up-message";
	const closeButton = document.createElement("span");
	closeButton.id = "close-button";
	closeButton.innerHTML = "&times;";
	slideUpBox.appendChild(slideUpMessage);
	slideUpBox.appendChild(closeButton);
	slideUpMessage.innerText = message;
	document.getElementsByTagName("html")[0].appendChild(uiBlocker);
	document.getElementsByTagName("html")[0].appendChild(slideUpBox);
	closeButton.addEventListener("click", () => {
		uiBlocker.remove();
		slideUpBox.remove();
	});
}
