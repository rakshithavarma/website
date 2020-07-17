$(function () {
  			$(document).scroll(function () {
    		var $nav = $(".sb-navbar");
    		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  			});
		});

// const counters = document.querySelectorAll('.counter');
// const speed = 500; // The lower the slower

// counters.forEach(counter => {
// 	const updateCount = () => {
// 		const target = +counter.getAttribute('data-target');
// 		const count = +counter.innerText;
// 		const start = 0;

// 		const range = target-start;

// 		// Lower inc to slow and higher to slow
// 		const inc = speed < target ? Math.abs(Math.floor(target / speed)) : 1;

// 		// const inc = 1;

// 		// console.log(inc);
// 		// console.log(count);

// 		// Check if target is reached
// 		if (count < target) {
// 			// Add inc to count and output in counter
// 			counter.innerText = count + inc;
// 			// Call function every ms
// 			setTimeout(updateCount, 1);
// 		} else {
// 			counter.innerText = target;
// 		}
// 	};

// 	updateCount();
// });

// function counter(id, start, end, duration) {
//   let obj = document.getElementById(id),
//    current = start,
//    range = end - start,
//    increment = end > start ? 1 : -1,
//    step = Math.abs(Math.floor(duration / range)),
//    timer = setInterval(() => {
//     current += increment;
//     obj.textContent = current;
//     if (current == end) {
//      clearInterval(timer);
//     }
//    }, step);
//  }
//  counter("count1", 0, 300, 3000);
//  counter("count2", 100, 500, 2500);
//  counter("count3", 0, 450, 3000);

// var section = document.querySelector('.status-count');
// var hasEntered = false;

// window.addEventListener('scroll', (e) => {
//     var shouldAnimate = (window.scrollY + window.innerHeight) >= section.offsetTop;

//     if (shouldAnimate && !hasEntered) {
//     hasEntered = true;

//     $('.value').each(function () {
//         $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//         }, {
//         duration: 4000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//         });
//     });

//   }
// });


// var a = 0;
// $(window).scroll(function() {

//   var oTop = $('.status-count').offset().top - window.innerHeight + 160;
//   if (a == 0 && $(window).scrollTop() > oTop) {
//     counters.forEach(counter => {
// 	const updateCount = () => {
// 		const target = +counter.getAttribute('data-target');
// 		const count = +counter.innerText;

// 		// Lower inc to slow and higher to slow
// 		const inc = speed < target ? Math.abs(Math.floor(target / speed)) : 1;

// 		// const inc = 1;

// 		// console.log(inc);
// 		// console.log(count);

// 		// Check if target is reached
// 		if (count < target) {
// 			// Add inc to count and output in counter
// 			counter.innerText = count + inc;
// 			// Call function every ms
// 			setTimeout(updateCount, 1);
// 		} else {
// 			counter.innerText = target;
// 		}
// 	};

// 	updateCount();
// 	});
//     a = 1;
//   }

// });


var a = 0;
$(window).scroll(function() {

  var oTop = $('.status-count').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-target');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });
    });
    a = 1;
  }
});