function openURL(URL) {
	window.open(URL, "_self");
}
function install(file) {
	browser.downloads.download({url: file});
}
