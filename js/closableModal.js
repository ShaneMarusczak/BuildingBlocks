/*eslint-disable no-unused-vars */
"use strict";

function closableModal(message) {
  const modalBox = document.createElement("div");
  modalBox.id = "modal-box";
  const innerModalBox = document.createElement("div");
  innerModalBox.id = "inner-modal-box";
  const modalMessage = document.createElement("span");
  modalMessage.id = "modal-message";
  const closeButton = document.createElement("span");
  closeButton.id = "close-button";
  closeButton.innerHTML = "&times;";
  innerModalBox.appendChild(modalMessage);
  innerModalBox.appendChild(closeButton);
  modalBox.appendChild(innerModalBox);
  modalMessage.innerText = message;
  document.getElementsByTagName("html")[0].appendChild(modalBox);
  closeButton.addEventListener("click", () => {
    modalBox.remove();
  });
}
