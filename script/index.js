window.onload = function() {
  $(".animate").click(function(e) {
    var goToPage = $(this).parent().attr('id');
    window.location.href = goToPage + ".html";
    return false;
  })
}
