$(document).ready(function() {
	$('.item img').attr("width",width);
	$('#main-frame').imagesLoaded(function () {
		waterfall();
	});
});

var waterfall = function() {
	$('#main-frame').masonry({
		itemSelector: '.item',
		animate: true
	});
}

var width = Math.round((window.innerWidth - 200) / 5 - 25);
