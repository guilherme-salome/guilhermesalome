window.onload = function() {
  var courseName = $("#hi-message").html().split(' ').join('-').toLowerCase();
  $(".blog-post").click(function(e) {
    var postName = $(this).find(".title").html().split(' ').join('-').toLowerCase();
    var postLink = "http://www.guilhermesalome.com/teaching/" + courseName + '/posts/' + postName + '.html';
    window.location.replace(postLink);
    return false;
  })
}