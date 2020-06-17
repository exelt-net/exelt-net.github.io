$(document).ready(function() {
    // create playLists
    const playListIds = ['tabPlaylist1', 'tabPlaylist2', 'tabPlaylist3', 'tabPlaylist4']
    const playLists = [] // type = { id, player }
    playListIds.forEach(id => {
        const $video = $(`#${id} > .player`)
        const player = new Plyr($video);
        playLists.push({
            id,
            player
        })
    })

    const onShow = (el) => {

        playLists.forEach(async playList => {
            try {
                const {
                    player
                } = playList
                await player.stop()
            } catch (e) {
                console.log()
            }
        })

        const id = $(el).attr('id')
        const playListIdIdx = _.findIndex(playListIds, v => v === id)

        const onAutoPlayEnded = () => {
            console.log('onAutoPlayEnded')

            tab.select(playListIds[0])
        }

        async function autoPlay(i = 0) {
            const {
                id,
                player
            } = playLists[i]

            const next = i + 1 < playLists.length ? i + 1 : -1

            try {
                await player.play()
            } catch (e) {
                console.log()
            }

            player.on('ended', () => {
                if (next !== -1 && next < playListIds.length) tab.select(playListIds[next])
                else onAutoPlayEnded()
            })
        }
        autoPlay(playListIdIdx)
    }

    const instance = M.Tabs.init($(".tabs"), {
        onShow
    });
    const tab = instance[0]

    playLists[0].player.once('playing', () => {
        tab.select(playListIds[0])
    })


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