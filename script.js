function clipboard(elementID) {
	/* Get the text field */
	var copyText = document.getElementById(elementID);

	/* Select the text field */
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */

	/* Copy the text inside the text field */
	document.execCommand("copy");

	/* Alert the copied text */
	alert("Copied the text: " + copyText.value);
}
function start() {
	const download = document.getElementById("download");
	download.click();
}
function openURL(URL,name = "_self") {
	window.open(URL, name);
}
