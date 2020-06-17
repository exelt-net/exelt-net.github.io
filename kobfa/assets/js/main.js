$(document).ready(function() {
    // tab
    $('.tabs').tabs();
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

    var HM = {
        //tab
        jqs_slideList: '.slideList',
        jqs_tabList: '.slides .carouselLinks',


        init: function() {
            //init sliders
            var aSliders = $(this.jqs_slideList);
            if (aSliders.length > 0) {
                this.slideShow(aSliders);
            }

            //init the carousels that are lists of links
            $('.carousel.icons').hellmannsCrsl({
                rotateSpeed: 5000,
                viewport: '.carouselLinks'
            });
        },

        slideShow: function(eSlideListParam) {
            var slideList = eSlideListParam,
                slides = slideList.find('li'),
                tabList = slideList.siblings('.carouselLinks'),
                tabs = tabList.find('li'),
                speed = 500;


            tabs.on('click', 'a', function(e) {
                $(this).trigger('slides.swap');
                e.preventDefault();
            });

            //make it automatic, but this doesn't work properly, I'm stuck...
            setInterval(function() {
                var current = parseInt($('li.selected a').data('links-to').split('_')[1], 10);
                var idx = current - 1;
                var max = $('.carouselLinks li a').length;
                idx = (current < max) ? (idx + 1) : 0;
                $('a:eq(' + idx + ')').trigger('click');
            }, 3000);

            tabs.find('a').bind('slides.swap', function() {
                var self = $(this),
                    selfIndex = self.parent().index(),
                    targetSlide = slides.eq(selfIndex);

                //fade in/out slides
                slides.filter('.active').stop(true, false).fadeOut(speed, function() {
                    $(this).removeClass('active');
                });
                targetSlide.stop(true, false).fadeIn(speed).addClass('active');

                tabs.removeClass('selected');
                self.parent().addClass('selected');
            });
        }
    };

    HM.init();



    // video icon
    $(".player").each((k, val) => {
        const player = new Plyr(val);
    });
    // modal
    $('.modal').modal();


});

// slide cover image
$('.carousel-review').carousel({});
$('.carousel-review1').carousel({});
$('.carousel-review2').carousel({});


$('.carousel-slider').carousel({
    fullWidth: true,
    height: '100%',
    width: '100%',
    indicators: true
});
autoplay();

function autoplay() {
    $('.carousel-slider').carousel('next');
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



// Test