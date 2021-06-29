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

// $(document).ready(function () {
//     $(document).click(function (event) {
//         var clickover = $(event.target);
//         var _opened = $(".navbar-collapse").hasClass("navbar-collapse");
//         if (_opened === true && !clickover.hasClass("navbar-toggler")) {
//             $("button.navbar-toggler").click();
//         }
//     });
// });

// $(function(){
// 	$(".events-nav-item a").on('click', function(){
// 		$("html, body").animate({
// 			scrollTop: $($.attr(this, 'href')).offset().top
// 		}, 1500);
// 	});
// });