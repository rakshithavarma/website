$(document).ready(function ()  
{
//select the close by class and apply a click even listener
  $(".ieee_day_close").on("click", function () 
	{
		//select the modal element by id , and apply display none when close is clicked
		//this will close the modal on click
		$("#ieee_day_modal").css("display", "none")
	});
  
});


