$(document).ready(function() {
    // tab
    $('.tabs').tabs();

    // video icon
    $(".player").each((k, val) => {
        const player = new Plyr(val);
    });

    // modal
    $('.modal').modal();

    // slide partner brand
    function changeSlide(carousel, key = 0) {
        const instance = M.Carousel.getInstance(carousel);
        instance.set(key)
    }

    function nextSlide(carousel, num = 1) {
        const instance = M.Carousel.getInstance(carousel);
        instance.next(num)
    }

    function prevSlide(carousel, num = 1) {
        const instance = M.Carousel.getInstance(carousel);
        instance.prev(num)
    }

    // if #carousel-review move
    const onSlideA = (el) => {
        try {
            const key = $(el).attr('data-key')
            changeSlide(carouselB, key)
        } catch (e) {}
    }

    // if #carousel-brand move
    const onSlideB = (el) => {
        try {
            const key = $(el).attr('data-key')
            changeSlide(carouselA, key)
        } catch (e) {}
    }

    const carouselA = $("#carousel-review").carousel({ onCycleTo: onSlideA });
    const carouselB = $("#carousel-brand").carousel({ onCycleTo: onSlideB });

    $('#next').click(() => {
        nextSlide(carouselA)
    })

    $('#prev').click(() => {
        prevSlide(carouselA)
    })

    // Video motion
    function slideShow(idx = 0) {
        const speed = 500;

        const slides = $("#motion-autoplay #slide-content li");
        const targetSlide = $(slides[idx]);

        slides.filter(".active").stop(true, false).fadeOut(speed, () => {
            $(this).removeClass("active");
        });
        targetSlide.stop(true, false).fadeIn(speed).addClass("active");

    }

    // click tab
    $("#motion-autoplay #slide-menu a").click((e) => {
        const slideMenus = $("#motion-autoplay #slide-menu li");
        slideMenus.filter(".selected").removeClass("selected")

        const a = $(e.currentTarget)
        a.parent().addClass("selected")

        const idx = parseInt(a.attr('data-key'))
        slideShow(idx);
    });

    const secs = 17 * 1000 // set video time
    setInterval(() => {
        const slideMenus = $("#motion-autoplay #slide-menu li");
        const idx = parseInt(slideMenus.filter(".selected").find('a').attr('data-key'))
        const next = idx + 1 < slideMenus.length ? idx + 1 : 0
        $($("#motion-autoplay #slide-menu a")[next]).click()
    }, secs)

});

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


// slide menu left
$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});


// Close Toggle Slide
$(".close-toggle").click(function() {
    $(".cards-modal").hide();
});