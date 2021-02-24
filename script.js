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
function blocks() {
	const block1 = getElementById("block1");
	var autoClicker = "<a href='https://team-1-2.github.io/Repository/autoclicker.html'><p>New on repository! Auto Clicker!</p></a>";
	var prodigyHack = "<a href='https://team-1-2.github.io/Repository/prodigyHack.html'><p>New on repository! Prodigy Hack!</p></a>";
	var blocks = [autoClicker, prodigyHack];
	block1.innerHTML = blocks[1];
}
