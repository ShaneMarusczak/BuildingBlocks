"use strict";
class BuildingBlocks {
	BuildingBlocks() {
		this.alertModalControl = function (message, duration) {
			document.getElementById("alertshader").style.display = "block";
			document.getElementById("alertmessage").innerText = message;
			window.sleep(duration).then(() => {
				document.getElementById("alertshader").style.display = "none";
			});
		};

		this.randomIntFromInterval = function (min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min);
		};

		this.sleep = function (ms) {
			return new Promise((resolve) => setTimeout(resolve, ms));
		};

		this.setCookie = function (cname, cvalue, exdays) {
			var d = new Date();
			d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
			var expires = "expires=" + d.toUTCString();
			document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
		};

		this.getCookie = function (cname) {
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
		};
	}
}
