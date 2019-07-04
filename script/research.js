document.addEventListener('click', function (event) {
    if (event.srcElement.id === 'home-button' || event.target.matches('.fa-home')) {
	// Home button
	window.location.href = '/index.html';
    } else if (event.srcElement.id === 'back-button'
	       || event.target.matches('.fa-arrow-left')) {
	// Back button
	address = window.location.href;
	window.location.href = address.slice(0, address.lastIndexOf('/'));
    } else if (event.target.matches('.paper-title') || event.target.matches('.paper')) {
	// Paper
	filename = parsePaperTitle(event.target.innerText)
	window.location.href = './research/' + filename + '.pdf';
    }
});

function parsePaperTitle (title) {
    return title.replace(/,/g, '').split(' ').join('-').toLowerCase();
}
