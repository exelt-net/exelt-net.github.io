// // tab partner on click
// function partnerClick(evt, cityName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
// }

$(document).ready(function() {

    const playListIds = ['tabPlaylist1', 'tabPlaylist2', 'tabPlaylist3', 'tabPlaylist4']
    const playLists = [] // type = { id, player }

    playListIds.forEach(id => {
        const $video = $(`#${id} > .player`)
        const player = new Plyr($video);
        playLists.push({ id, player })
    })

    const onShow = (el) => {
        // stop playlist before 
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

            // return tab first
            tab.select(playListIds[0])
        }

        async function autoPlay(i = 0) {
            const { id, player } = playLists[i]
            const next = i + 1 < playLists.length ? i + 1 : -1

            // start player
            try {
                await player.play()
            } catch (e) { console.log() }

            player.on('ended', () => {
                if (next !== -1 && next < playListIds.length) tab.select(playListIds[next])
                else onAutoPlayEnded()
            })
        }

        autoPlay(playListIdIdx)
    }

    const instance = M.Tabs.init($(".tabs"), { onShow });
    const tab = instance[0]

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