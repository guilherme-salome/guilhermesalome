document.addEventListener('click', function (event) {
    if (event.srcElement.id === 'home-button' || event.target.matches('.fa-home')) {
        // Home button
        window.location.href = '/index.html';
    } else if (event.srcElement.id === 'back-button'
               || event.target.matches('.fa-arrow-left')) {
        // Back button
        address = window.location.href;
        window.location.href = address.slice(0, address.lastIndexOf('/'));
    } else if (event.target.matches('.paper-title')) {
        // div containing only paper title
        filename = parsePaperTitle(event.target.innerText);
        window.location.href = './research/' + filename + '.pdf';
    } else if (event.target.matches('.summary')) {
        // sibling div that has summary text
        title = event.srcElement.parentNode.children[0].innerText;
        filename = parsePaperTitle(title);
        window.location.href = './research/' + filename + '.pdf';
    } else if (event.target.matches('.paper')) {
        // parent div
        title = event.srcElement.children[0].innerText;
        filename = parsePaperTitle(title);
        window.location.href = './research/' + filename + '.pdf';
    }
});

function parsePaperTitle (title) {
    // ,|- replaces commas or hyphens
    // \s+ splits on multiple whitespaces instead of a single whitespace
    return title.replace(/,|-/g, '').split(/\s+/).join('-').toLowerCase();
}
