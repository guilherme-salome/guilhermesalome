window.onload = function() {
    $(".blog-post").click(function(e) {
	var postLink = $(this).find(".title").html().split(' ').join('-').toLowerCase();
	window.location.href = '/teaching/' + postLink + '/main.html';
	return false;
    });
    // when nav-button is clicked go home, or go back a page
    function navigate (event) {
	id = event.srcElement.id;
	if (id==='home-button') {
	    window.location.href = '/index.html';
	} else if (id==='back-button') {
	    address = window.location.href;
	    idToSlice = address.lastIndexOf('/');
	    window.location.href = address.slice(0, idToSlice);
	}
    }
    buttons = document.getElementsByClassName("nav-button");
    buttons[0].addEventListener('click', navigate);
    buttons[1].addEventListener('click', navigate);
}
