function start() {
	const download = document.getElementById("download");
	download.click();
}
function openURL(URL,name = "_self") {
	window.open(URL, name);
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
function go_full_screen(){
      var elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      }
    }
function click(element) {
	let isBoss = confirm("fullscreen?");
	if( isBoss ){
		document.getElementById(element).click();
	}else {
		click(element);
	}
}
function secret() {
	var harm = document.getElementById("harm");
	harm.classList.toggle("visible");
	var content = harm.nextElementSibling;
	if (content.style.display === "block") {
		content.style.display = "none";
	} else {
		content.style.display = "block";
	}
	document.getElementById("safety").style.display = "none";
	go_full_screen();
}
/*
var coll = document.getElementsByClassName("collapsible");
	var i;
	for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("visible");
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
		document.getElementById("safety").style.display = "none";
		go_full_screen();
	});
*/

function GetEmailAddress() {
    var context;
    var serverUrl;
    var UserID;
    var ODataPath;
    context = Xrm.Page.context;
    serverUrl = context.getServerUrl();
    UserID = context.getUserId();
    ODataPath = serverUrl + "/XRMServices/2011/OrganizationData.svc";
    var retrieveUserReq = new XMLHttpRequest();
    retrieveUserReq.open("GET", ODataPath + "/SystemUserSet?$select=InternalEMailAddress&$filter=SystemUserId eq (guid'" + UserID + "')", true);
    retrieveUserReq.setRequestHeader("Accept", "application/json");
    retrieveUserReq.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    retrieveUserReq.onreadystatechange = function () {
        retrieveUserReqCallBack(this);
    };
    retrieveUserReq.send();
 
}
 
function retrieveUserReqCallBack(retrieveUserReq) {
    if (retrieveUserReq.readyState == 4 /* complete */) {
        if (retrieveUserReq.status == 200) {
            var retrievedUser = this.parent.JSON.parse(retrieveUserReq.responseText).d;
            if (retrievedUser.InternalEMailAddress != null)
                alert(retrievedUser.InternalEMailAddress);
        }
        else
        {
            alert("Error in Fetching User data");
        }
    }
}
