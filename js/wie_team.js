



$(document).ready(function(){
  $(".button").click(function(){
      var name = $(this).attr('data-filter');
      if(name == "all"){
          $(".shot-thumbnail").show('2000');
      }else{
          $(".shot-thumbnail").not("."+name).hide('2000');
          $(".shot-thumbnail").filter("."+name).show('2000');
      }
  })

  $(".navigation a").click(function(){
      $(this).addClass("active").siblings().removeClass("active");
  })
})

var filter_link = $('#filter'),
    gallery_item = $('.shot-thumbnail');

filter_link.on('change',function(){
  // find same class of menu
  var filterVal = $(this).val();
  
  if(filterVal == 'all') {
    // Each all and filter values
    gallery_item.show('2000');
  }else{
    gallery_item.not("."+ filterVal).hide('2000');
    gallery_item.filter("."+ filterVal).show('2000');
  }
  return false;
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




// $(function () {
//   $(document).scroll(function () {
//   var $nav = $(".sb-navbar");
//   $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//   });
// });

// $("[data-trigger]").on("click", function () {
// var trigger_id = $(this).attr('data-trigger');
// $(trigger_id).toggleClass("show");
// $('body').toggleClass("offcanvas-active");
// });

// // close button 
// $(".btn-close").click(function (e) {
// $(".navbar-collapse").removeClass("show");
// $("body").removeClass("offcanvas-active");
// });
