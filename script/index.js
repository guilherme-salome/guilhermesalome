window.onload = function() {
  $(".animate").click(function(e) {
    var goToPage = $(this).parent().attr('id');
    window.location.href = goToPage + ".html";
    return false;
  })
}

$(document).ready(function() {
  var movementStrength = 20;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();
  $("#hello").mousemove(function(e){
    var pageX = e.pageX - ($(window).width() / 2);
    var pageY = e.pageY - ($(window).height() / 2);
    var newvalueX = width * pageX;
    var newvalueY = height * pageY;
    $('#hello').css("background-position", newvalueX+"px     "+newvalueY+"px");
  });
});