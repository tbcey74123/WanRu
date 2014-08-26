$(document).ready(function(){
    SetFontSize(0.06);
    
    $('#menu-button').click(function(){
        $('#side-bar').animate({left: "0px"},700);
    });
    $('#close-button').click(function(){
        $('#side-bar').animate({left: "-200px"},700);
    });

    $(window).resize(function(){
	if( window.innerWidth <= 680 ) {
	    SetToOneSide();
	}else{
	    SetToBothSide();
	    SetFontSize(0.06);
        }    	
	$('.about-me-div').css("height",Math.ceil(window.innerWidth * 0.45 * 1.25));
    });

    $('#menu ul li').click(function() {
	 var categary = this.id;
	 $('.item img').attr("width","0");
	 $('.item').css("box-shadow","none");
	 $('.' + categary + ' img').attr("width",width);
	 $('.' + categary ).css("box-shadow","5px 2px 6px #000");
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
		displaywidth = Math.round(displaywidth * 0.7);
		displayheight = Math.round(displayheight * 0.7);
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
    $('.about-me-div').css("font-size",fontsize);
}
