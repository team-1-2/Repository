function start() {
	var download = document.getElementById("download");
	download.click();
}
function openURL(URL) {
	console.log("URL : "+ URL);
	window.open(URL, "_self");
}
