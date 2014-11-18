$(document).ready(function(){

    SetFontSize(0.06);
    SetTextToMiddle();
    ResizeTopPic();
	
    $('#open').click(function(){
        $('#side-bar').animate({left: "0px"},700);
	$('#open').css("display","none");
	$('#close').css("display","block");
    });

    $('#close').click(function(){
        $('#side-bar').animate({left: "-280px"},700);
	$('#close').css("display","none");
	$('#open').css("display","block");
    });
        
    	$('.menu-button').hover(function() {
		var src = $(this).css("background-image").replace("_1.png",".png");
		preloadImg(src);
		$(this).css("background-image",src);
	},
	function() {
		var src = $(this).css("background-image").replace(".png","_1.png");
		preloadImg(src);
		$(this).css("background-image",src);

	});


	$('.menu-icon').hover(function() {
		
		$('.menu-icon').each(function() {
			var src = this.src.replace("2.png","1.png");
			this.src = src;
		});
		var src = this.src.replace("1.png","2.png");
		this.src = src;
		
		var className = $(this).attr("class");
		className = className.replace("menu-icon ","");
		$('.menu-popout .' + className).css("opacity","1");
		},

	function() {
		$('.menu-icon').each(function() {
			var src = this.src.replace("1.png","2.png");
			this.src = src;
		});
		
		var className = $(this).attr("class");
		className = className.replace("menu-icon ","");
		$('.menu-popout .' + className).css("opacity","0");
			
	});

	$('.menu-icon-div').hover(function() {
		$('.menu-icon-div img').each(function() {
			var src = this.src.replace("2.png","1.png");
			preloadImg(src);
			this.src = src;
		});
		var tar = $(this).find("img");
		var src = tar[0].src.replace("1.png","pop.png");
			preloadImg(src);
		tar[0].src = src;
	},
	function() {
		$('.menu-icon-div img').each(function() {
			var src = this.src.replace("1.png","2.png");
			preloadImg(src);
			this.src = src;
		});
		var tar = $(this).find("img");
		var src = tar[0].src.replace("pop.png","2.png");
			preloadImg(src);
		tar[0].src = src;
	});


    $(window).resize(function(){
	if( window.innerWidth <= 680 ) {
	    SetToOneSide();
	}else{
	    SetToBothSide();
	    SetFontSize(0.06);
        }    	
	$('.about-me-div').css("height",Math.ceil(window.innerWidth * 0.45 * 1.25));
	ResizeTopPic();
	SetTextToMiddle();
    });

    /*$('#menu ul li').hover(function() {
	$(this).css("color","#FFAA33");
    },
    function() {
	$(this).css("color","black");
    });*/

    $('#menu ul li').click(function() {
	 var categary = this.id;
	 $('.item img').attr("width","0");
	 $('.item').css({
		"border" : "none",
		 "margin-bottom" : "0px"
	 });
	 $('.' + categary + ' img').attr("width",width);
	 $('.' + categary ).css({
	 	"border" : "5px #E0E0E0 solid",
		"margin-bottom" : "10px"
	 });
	 waterfall();
    }); 
    
    $('.item').click(function() {
	 var src = $(this).children('img').attr("src");
	 
	 $('#tmp img').attr("src",src);

	 $('#tmp').css("display","block");
	 var displaywidth = $('#tmp img').width();
	 var displayheight = $('#tmp img').height();
	 $('#tmp').css("display","none");
	 

	 while( displaywidth > window.innerWidth || displayheight > window.innerHeight ) {
		displaywidth = Math.round(displaywidth * 0.8);
		displayheight = Math.round(displayheight * 0.8);
	 }

	 $('#display img').attr("src",src);
	 $('#display img').attr("width",displaywidth)
	 $('#display-div').css("display","block");
	    
	 var displayleft = (window.innerWidth - displaywidth) / 2 ;
	 var displaytop = (window.innerHeight - displayheight) / 2 ;
	 $('#display').css({
		"position": "relative",
		"top": displaytop,
		"left": displayleft
	 });

	 waterfall();
    });

    $('#display-div, #display img').click(function() {
	 $('#display-div').css("display","none");
	
    });
});

var ResizeTopPic = function() {
    $('#about-me-pic img').attr("height",window.innerHeight);
}

var SetToOneSide = function() {
	$('.about-me-right').addClass("about-me-left");
	$('.about-me-left').css("width","90%");
	$('.about-me-middle').css("float","right");
	$('.about-me-none').css("display","none");
	SetFontSize(0.12);
}

var SetToBothSide = function() {
	$('.about-me-right').removeClass("about-me-left");
	$('.about-me-left').css("width","45%");
	$('.about-me-right').css("width","45%");
	$('.about-me-middle').css("float","left");
	$('.about-me-none').css("display","inline");
	SetFontSize(0.12);
}
var SetFontSize = function(num) {
    var width = window.innerWidth;
    var fontsize = Math.ceil(width * 0.45 * num);
    var top_fontsize = Math.ceil(width / 1650 * 120);
    $('.about-me-div').css("font-size",fontsize + "px");
    $('#name h1').css("font-size",top_fontsize + "px");
    $('#name').css("top",Math.ceil($('#about-me-top').height() - top_fontsize) / 2);
    $('#name').css("margin-left",Math.ceil(width - top_fontsize * 5) / 2);
}

var SetTextToMiddle = function() {
    var container_height = $('.about-me-div').height();
    var text_target = $('.about-me-text');

    for( i = 0; text_target[i]; i++ ) {
	var text_height = $(text_target[i]).height();
	var text_top = (container_height - text_height) / 2 ;
	var text_id = text_target[i].id;
 	$('#' + text_id).css("top",text_top);
    }

}

var preloadImg = function(src) {
	var img = new Image();

	src = src.split("media");
	src = "media" + src[1];
	src = src.replace(")","");

	img.src = src;

	$(img).load(function() {
		return 0;
	});
}

