console.log("Test");

$('.hamburger').click(function () {
    $('.menu').toggleClass('menu-shown');
    console.log("hamburger");
});

$('.close-sign').click(function () {
    $('.menu').toggleClass('menu-shown');
    console.log("close");
});