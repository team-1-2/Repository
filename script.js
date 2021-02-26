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
function fullscreen(URL) {
 	window.open(URL, '', 'fullscreen, _self');
}
function max()
            {
               window.open("", "_self", "fullscreen=yes, scrollbars=auto"); 
            }
