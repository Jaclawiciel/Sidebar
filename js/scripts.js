console.log("Test");

$('.hamburger').click(function () {
    $('.menu').toggleClass('menu-shown');
});

$('.close-sign').click(function () {
    $('.menu').toggleClass('menu-shown');
});

$(window).resize(function() {
    var width = $(window).width();

    if (width >= 1024 ) {
        $('.menu').addClass('menu-shown');
    }
});