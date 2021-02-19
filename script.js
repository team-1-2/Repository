function start() {
	var download = document.getElementById("download");
	download.click();
	home();
}
function openURL(URL) {
	window.open(URL, "_self");
}
function home() {
	window.open("index.html", "_self");
}
