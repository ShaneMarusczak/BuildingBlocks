/*eslint-disable no-unused-vars */
"use strict";

function modal(message, duration) {
	const modalBox = document.createElement("div");
	const innerModalBox = document.createElement("div");
	const modalMessage = document.createElement("span");
	innerModalBox.appendChild(modalMessage);
	modalBox.appendChild(innerModalBox);
	modalBox.style = `
	z-index: 1;
	position: fixed;
	padding: 0;
	margin: 0;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
	`;
	innerModalBox.style = `
	text-align: center;
	border-radius: 5px;
	box-shadow: inset 0px 0px 0px 4px black;
	margin-left: 40vw;
	margin-top: 10vh;
	background-color: azure;
	width: 350px;
	height: 15vh;
	`;
	modalMessage.style = `
	vertical-align: middle;
	font-family: "Orbitron", sans-serif;
	font-size: xx-large;
	line-height: 15vh;
	`;
	modalMessage.innerText = message;
	document.getElementsByTagName("html")[0].appendChild(modalBox);
	sleep(duration).then(() => modalBox.remove());
}

function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=Lax";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(";");
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function addEventListenerById(id, event, handler) {
	document.getElementById(id).addEventListener(event, handler);
}

function removeEventListenerById(id, event, handler) {
	document.getElementById(id).removeEventListener(event, handler);
}

function removeClassFromElementById(id, cls) {
	document.getElementById(id).classList.remove(cls);
}

function addClassFromElementById(id, cls) {
	document.getElementById(id).classList.add(cls);
}

