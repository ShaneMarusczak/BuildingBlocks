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
  const outerAnimationContainer = document.createElement("div");
  outerAnimationContainer.classList.add("animation");
  for (let i = 0; i < 3; i++) {
    outerAnimationContainer.appendChild(document.createElement("div"));
  }
  innerModalBox.appendChild(outerAnimationContainer);
  document.getElementsByTagName("html")[0].appendChild(modalBox);
}

function modalClose() {
  document.getElementById("modal-box").remove();
}
