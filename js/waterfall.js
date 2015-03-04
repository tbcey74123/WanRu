$(document).ready(function() {
	/*var width = $("#works-page-preview").css("width").replace("px", "");
	width = Math.round(width / 5);*/
	var width = 150; 

	$('.item img').attr("width",width);
	$('#works-page-preview').imagesLoaded(function () {
		waterfall(width);
	});
});

var waterfall = function(width) {
	$('#works-page-preview').masonry({
		itemSelector: '.item',
		columnWidth: width,
		gutter: 20,
		animate: true
	});
}

