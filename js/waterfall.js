$(document).ready(function() {
	$('.item img').attr("width",width);
	$('#main-frame').imagesLoaded(function () {
		waterfall();
	});
});

var waterfall = function() {
	$('#main-frame').masonry({
		itemSelector: '.item',
		columnWidth: width,
		gutter: 20,
		animate: true
	});
}

var width = Math.round((window.innerWidth - 200) / 4 - 25);
