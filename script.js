function openURL(URL) {
	console.log("URL : "+ URL);
	window.open(URL, "_self");
}
function install(file) {
	window.downloads.download({url: file});
}
