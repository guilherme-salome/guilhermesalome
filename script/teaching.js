window.onload = function() {
  $(".blog-post").click(function(e) {
    var postLink = $(this).find(".title").html().split(' ').join('-').toLowerCase();
    window.location.href = '/teaching/' + postLink + '/main.html';
    return false;
  })
}
