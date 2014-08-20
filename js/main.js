$(document).ready(function(){
    $('#menu-button').click(function(){
        $('#side-bar').animate({left: "0px"},700);
    });
    $('#close-button').click(function(){
        $('#side-bar').animate({left: "-200px"},700);
    });
});