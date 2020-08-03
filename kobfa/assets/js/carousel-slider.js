// slide cover image
$('.carousel').carousel();
$('.carousel-slider-service').carousel({});
$('.home.carousel-slider').carousel({
    fullWidth: true,
    height: '100%',
    width: '100%',
    indicators: true
});
$('.blog.carousel-slider').carousel({
    fullWidth: true,
    height: '100%',
    width: '100%',
    indicators: true
});

var itvAutoSlide = setInterval(() => {
    $('.home.carousel-slider').carousel('next')
}, 10000)

function moveNextCarousel(className = '') {
    var els = $(`${className} .carousel-slider`);
    els.carousel('next');
}

function movePrevCarousel(className = '') {
    var els = $(`${className} .carousel-slider`);
    els.carousel('prev');
}