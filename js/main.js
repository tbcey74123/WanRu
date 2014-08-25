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

    $('#classA').click(function() {
	$('.item img').attr("width","0");
	$('.classA img').attr("width",width);
    	waterfall();
    });
    $('#classB').click(function() {
	$('.item img').attr("width","0");
	$('.classB img').attr("width",width);
    	waterfall();
    });

    $('#all-work').click(function() {
	$('.item img').attr("width",width);
	waterfall();
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
