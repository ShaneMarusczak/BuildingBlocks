"use strict";

function showDropDown(id, contents) {
  const dropDownContainer = document.getElementById(id);
  Object.keys(contents).forEach((prop) => {
    const linkTag = document.createElement("a");
    linkTag.classList.add("drop-down-link");
    linkTag.innerText = prop;
    linkTag.href = contents[prop];
    linkTag.target = "_blank";
    dropDownContainer.appendChild(linkTag);
  });
}

function hideDropDown(id) {
  const dropDownContainer = document.getElementById(id);
  while (dropDownContainer.firstChild) {
    dropDownContainer.removeChild(dropDownContainer.lastChild);
  }
}
