$(function() {
	var slides1 = $('#slides1'),
		slides2 = $('#slides2');
		
	//Example 1
	slides1.properSlider({
		width : 600,
		height : 400
	});
	
	$('#next').click(function() {
		slides1.properSlider('slide', 'next');
		return false;
	});
	
	$('#prev').click(function() {
		slides1.properSlider('slide', 'prev');
		return false;
	});
	
	//Example 2
	slides2.properSlider({
		width: 600,
		height: 400,
		auto_slide: true
	});
});