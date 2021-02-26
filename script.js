function start() {
	const download = document.getElementById("download");
	download.click();
}
function openURL(URL) {
	window.open(URL, "_self");
}
function home() {
	window.open("index.html", "_self");
}
function say(message) {
	alert(message);
}
function openFullscreen(id) {
	var elem = document.getElementById(id);
  	if (elem.requestFullscreen) {
   		elem.requestFullscreen();
  	} else if (elem.webkitRequestFullscreen) { /* Safari */
    		elem.webkitRequestFullscreen();
  	} else if (elem.msRequestFullscreen) { /* IE11 */
    		elem.msRequestFullscreen();
  	}
}
