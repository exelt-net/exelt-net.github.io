$(document).ready(function() {
    // slide partner brand
    function changeSlide(carousel, key = 0) {
        const instance = M.Carousel.getInstance(carousel);
        instance.set(key)
        $(".player").each(function() { this.pause() });
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
    $(".player").each(function() { this.pause() });
    const carouselA = $("#carousel-review").carousel({ onCycleTo: onSlideA });
    const carouselB = $("#carousel-brand").carousel({ onCycleTo: onSlideB });

    $('#next').click(() => {
        nextSlide(carouselA)

    })

    $('#prev').click(() => {
        prevSlide(carouselA)
    })
});