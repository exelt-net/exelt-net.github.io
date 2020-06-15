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

    const instance = M.Tabs.init($(".tabs"));
    const tab = instance[0]

    $('#btn-play').click((e) => {
            $('#btn-play').prop("disabled", true)

            const onAutoPlayEnded = () => {
                $('#btn-play').prop("disabled", false)
            }

            function autoPlay(i = 0) {
                const {
                    id,
                    player
                } = playLists[i]
                const next = i + 1 < playLists.length ? i + 1 : -1

                tab.select(id)

                player.play()

                player.on('ended', () => {
                    if (next !== -1) autoPlay(next)
                    else onAutoPlayEnded()
                })
            }
            autoPlay()
        })
        // end auto play
});

// slide cover image

// document.addEventListener("DOMContentLoaded", function() {
//     var carouselElems = document.querySelector(".carousel.carousel-slider");
//     var carouselInstance = M.Carousel.init(carouselElems, {
//         fullWidth: true,
//         indicators: true,
//         height: '100%',
//         width: '100%',
//         duration: 3,
//     });
// });
$('.carousel-review').carousel({
    // dist: 190,
    // indicators: true,
});


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