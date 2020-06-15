$(document).ready(function() {

    const playListIds = ['tabPlaylist1', 'tabPlaylist2', 'tabPlaylist3', 'tabPlaylist4']
    const playLists = [] // type = { id, player }

    // create playLists
    playListIds.forEach(id => {
        const $video = $(`#${id} > .player`)
        const player = new Plyr($video);
        playLists.push({ id, player })
    })

    const onShow = (el) => {

        // stop video all
        playLists.forEach(async playList => {
            try {
                const { player } = playList
                await player.stop()
            } catch (e) { console.log() }
        })

        // change el to tab id
        const id = $(el).attr('id')
        const playListIdIdx = _.findIndex(playListIds, v => v === id)

        const onAutoPlayEnded = () => {
            console.log('onAutoPlayEnded')

            //loop tab
            tab.select(playListIds[0])
        }

        async function autoPlay(i = 0) {
            const { id, player } = playLists[i]
            const next = i + 1 < playLists.length ? i + 1 : -1

            // start video
            try {
                await player.play()
            } catch (e) { console.log() }

            // video next
            player.on('ended', () => {
                if (next !== -1 && next < playListIds.length) tab.select(playListIds[next])
                else onAutoPlayEnded()
            })
        }

        // start autoplay
        autoPlay(playListIdIdx)
    }

    // $(".tabs").tabs();
    const instance = M.Tabs.init($(".tabs"), { onShow });
    const tab = instance[0]

    // ดัก เมื่อ กดปุ่ม play ใช้สำหรับ ครั้งแรก
    playLists[0].player.once('playing', () => {
        tab.select(playListIds[0])
    })

});

// slide cover image
$('.carousel-review').carousel({});
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