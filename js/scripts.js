$(function() {
	$('.slides').properSlider({
		width : 600,
		height : 400
	});
	
	$('#next').click(function() {
		$('.slides').properSlider('slide', 'next');
		return false;
	});
	
	$('#prev').click(function() {
		$('.slides').properSlider('slide', 'prev');
		return false;
	});
});