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
function menu() {
	const menu = document.getElementById("menu");
	var pieces = document.getElementsByClassName("menupiece");
	
	for (var i = 0; i < pieces.length; i++) {
		pieces[i].width = ((100/pieces.lenth).toString + "%");
	}
}
