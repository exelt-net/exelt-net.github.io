// tab partner on click
function partnerClick(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

$(document).ready(function() {
    $(".tabs").tabs();
    $(".modal").modal();
    $(".carousel").carousel();
    var instance = M.Carousel.init({
        indicators: true,
    });

    // vedio
    $(".player").each((k, val) => {
        const player = new Plyr(val);
    });
});

// slide cover image
document.addEventListener("DOMContentLoaded", function() {
    var carouselElems = document.querySelector(".carousel.carousel-slider");
    var carouselInstance = M.Carousel.init(carouselElems, {
        fullWidth: true,
        indicators: true,
        height: '100%',
        width: '100%'
    });
});

function moveNextCarousel() {
    var elems = document.querySelector(".carousel.carousel-slider");
    var moveRight = M.Carousel.getInstance(elems);
    moveRight.next(1);
}

function movePrevCarousel() {
    var elems = document.querySelector(".carousel.carousel-slider");
    var moveLeft = M.Carousel.getInstance(elems);
    moveLeft.prev(1);
}

// slide menu
$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});