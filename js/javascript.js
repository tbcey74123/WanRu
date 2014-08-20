var main = function () {
    $('#button').click(function () {
        $('.side-bar').animate({
            left: "0px"
        }, 200);
        
        $('body').animate({
            left: "285px"
        }, 200);
    });
};

$(document).ready(main);