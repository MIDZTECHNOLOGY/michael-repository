$( "#first" ).on( "click", function() {
	 $(".nav_item").fadeOut(1000);
	$("#nav_item").slideDown(1000);
  $("#about").fadeIn(2000);
});
$( "#second" ).on( "click", function() {
	 $(".nav_item").fadeOut(1000);
	$("#nav_item").slideDown(1000);
  $("#portfolio").fadeIn(2000);
});
$( "#third" ).on( "click", function() {
	 $(".nav_item").fadeOut(1000);
	$("#nav_item").slideDown(1000);
  $("#contact").fadeIn(2000);
});
$( ".close" ).on( "click", function() {
  $(".nav_item").fadeOut(1000);
  $("#nav_item").slideUp(2000)
});