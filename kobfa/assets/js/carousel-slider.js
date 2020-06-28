// slide cover image
$('.carousel-review').carousel({});
$('.carousel-review1').carousel({});
$('.carousel-review2').carousel({});

$('.home.carousel-slider').carousel({
    fullWidth: true,
    height: '100%',
    width: '100%',
    indicators: true
});
$('.blog.carousel-slider').carousel({
    fullWidth: true,
    height: '100%',
    width: '100%'
});
autoplay();

function autoplay() {
    $('.home.carousel-slider').carousel('next');
    setTimeout(autoplay, 5000);
}

function moveNextCarousel() {
    var elems = document.querySelector(".carousel-slider");
    var moveRight = M.Carousel.getInstance(elems);
    moveRight.next(1);
}

function movePrevCarousel() {
    var elems = document.querySelector(".carousel-slider");
    var moveLeft = M.Carousel.getInstance(elems);
    moveLeft.prev(1);
}