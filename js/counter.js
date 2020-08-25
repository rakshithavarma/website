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