/*eslint-disable no-unused-vars */
"use strict";
function uiBlocker(duration) {
	const uiBlocker = document.createElement("div");
	uiBlocker.style = `
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
	document.getElementsByTagName("html")[0].appendChild(uiBlocker);
	sleep(duration).then(() => uiBlocker.remove());
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

