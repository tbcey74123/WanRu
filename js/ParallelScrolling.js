$(document).ready(function() {
	
	var prev_height = $(window).scrollTop();
	var S, target_height;
	$(window).scroll(function() {
		var height_now = $(window).scrollTop();
		S = height_now - prev_height;	
		
		if(height_now < 2600) {
			move(height_now, 900, S, "about-page");
		}
		if(height_now < 4200 && height_now > 3000) {
			sliding(height_now);
		}else if(height_now < 3000) {
	 		$("#experience_map").css({
				"background-position": "0 0"
			});
		}
		if(height_now < 4900) {
			move(height_now, 2600, S, "experience-page");
		}
		if(height_now < 6600) {
			move(height_now, 4900, S, "works-page");
		}
		if(height_now >= 6600)
			move(height_now, 6800, S, "contact-page");
		prev_height = height_now;
	});
});
var sliding = function(height_now) {
	var position = 3000 - height_now;
	position *= 3;
	$("#experience_map").animate({
		backgroundPosition: position + 'px 0'
	}, 1);
}
var move = function(height_now, base_height, S, target_div) {
	var target_height;
	var opacity;
	if(height_now < base_height) {
		$("#" + target_div).css({
			"position": "absolute",
			"top": base_height + "px"
		});
		$("#" + target_div + "-content").css({
			"opacity": 0
		});
	}else {
		$("#" + target_div).css({
			"position": "fixed",
			"top": 0
		});
	}
	target_height = base_height + 900;
	if(base_height == 2600)
		target_height += 600;
	if(height_now > target_height) {
		$("#" + target_div).css({
			"position": "absolute",
			"top": target_height + "px"
		});
		$("#" + target_div + "-content").css({
			"top": "0",
			"opacity": 1
		});
	}
	if(height_now >= base_height && height_now <= base_height + 300) {
		//target_height = $("#" + target_div + "-content").css("top").replace("px", "");
		//target_height -= S;
		target_height = base_height - height_now + 300;
		opacity = (300 - target_height) / 300;
		$("#" + target_div + "-content").css({
			"top": target_height,
			"opacity": opacity
		});

	}
}
