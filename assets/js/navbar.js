function openNav() {
    document.getElementById("sidebar").style.width = "13rem";
    document.getElementById("content").style.paddingLeft = "13rem";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0rem";
    document.getElementById("content").style.paddingLeft = "0rem";
}

$("body").on("click","#nav-toggle", function(){
    var toggle = document.getElementById('nav-toggle');
    if (toggle.classList.contains("active")) {
        toggle.classList.remove("active");
        closeNav();
    } else {
        toggle.classList.add("active");
        openNav();
    }
});

function handleTabChange(name) {
	var nodes = document.getElementById("content").childNodes;
	
	for (var i=0; i<nodes.length; i++) {
		if (nodes[i].nodeName.toLowerCase() == 'div') {
			var child = nodes[i];
			child.hidden = true;
		}
	}
	
	document.getElementById(name).hidden = false;
}

function handleBackPress() {
	document.getElementById("settings-nav").hidden = true;
	document.getElementById("home-nav").hidden = false;
}

function handleSettingsPress() {
	document.getElementById("settings-nav").hidden = false;
	document.getElementById("home-nav").hidden = true;
}