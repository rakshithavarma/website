$(function () {
    $(document).scroll(function () {
  var $nav = $(".sb-navbar");
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
