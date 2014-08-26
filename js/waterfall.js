$(document).ready(function() {
	$('.item img').attr("width",width);
	$('#main-frame').imagesLoaded(function () {
		waterfall();
	});
});

var waterfall = function() {
	$('#main-frame').masonry({
		itemSelector: '.item',
		columnWidth: width + 10,
		animate: true
	});
}

var width = Math.ceil((window.innerWidth - 200) / 5 - 20);
