window.onload = function() {
    $(".blog-post").click(function(e) {
	var postName = $(this).find(".title").html().replace(/-/,"").split(/\s+/).join('-').toLowerCase();
	var isPDF = $(this).hasClass("pdf");
	var isJupyterNotebook = $(this).hasClass("ipynb")
	var isZip = $(this).hasClass("zip")
	if (isPDF) {
	    window.location.href = './posts/' + postName + '.pdf';
	}
	else if (isJupyterNotebook) {
	    window.location.href = './posts/' + postName + '.ipynb';
	}
	else if (isZip) {
	    window.location.href = './posts/' + postName + '.zip';
	}
	else {
	    window.location.href = './posts/' + postName + '.html'
	}
	return false;
    });
    // when nav-button is clicked go home, or go back a page
    function navigate (event) {
	id = event.srcElement.id;
	if (id==='home-button') {
	    window.location.href = '/index.html';
	} else if (id==='back-button') {
	    window.location.href = '/teaching.html'
	}
	return false;
    }
    buttons = document.getElementsByClassName("nav-button");
    buttons[0].addEventListener('click', navigate);
    buttons[1].addEventListener('click', navigate);
}
