$(function () {
  			$(document).scroll(function () {
    		var $nav = $(".sb-navbar");
    		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  			});
		});

const counters = document.querySelectorAll('.counter');

var a = 0;
$(window).scroll(function() {

  var oTop = $('.status-count').offset().top - window.innerHeight + 160;
  if (a == 0 && $(window).scrollTop() > oTop) {
    counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		const start = 0;
		const range = target-start;
		const duration = 2000;
		let current = start,
		increment = target > start ? 1 : -1,
	   	step = Math.abs(Math.floor(duration / range)),
	   	timer = setInterval(() => {
	    current += increment;
	    counter.textContent = current;
	    if (current == target) {
	    	clearInterval(timer);
	    }
	   	}, step);
	};

	updateCount();
	});
    a = 1;
  }

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

$(function(){
	$(".events-nav-item a").on('click', function(){
		$("html, body").animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 1500);
	});
});