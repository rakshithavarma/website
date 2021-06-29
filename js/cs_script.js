$(function () {
  $(document).scroll(function () {
var $nav = $(".cs-navbar");
$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$("[data-trigger]").on("click", function () {
var trigger_id = $(this).attr('data-trigger');
$(trigger_id).toggleClass("show");
$('body').toggleClass("offcanvas-active");
});

// close button 
$(".btn-close").click(function (e) {
$(".navbar-collapse").removeClass("show");
$("body").removeClass("offcanvas-active");
});

$(window).scroll(function(){ 
  if($(window).scrollTop() >= 400 ){ 
     $( "#navbar" ).css( "display", "block","background-color .3s", "opacity .5s"," visibility .5s" ); 
  } else { 

  $( "#navbar" ).css( "display", "none" ); 
  } 
}); 

var btn = $('#button');
	  
$(window).scroll(function() {
if ($(window).scrollTop() >= 400) {
  btn.addClass('show');
} else {
  btn.removeClass('show');
}
});

btn.on('click', function(e) {
e.preventDefault();
$('html, body').animate({scrollTop:0}, '300');
});

