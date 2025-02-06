//capture scroll any percentage
$(window).scroll(function(){
  var wintop = $(window).scrollTop();
  var docheight = $(document).height();
  var winheight = $(window).height();
  var scrolled = (wintop / (docheight - winheight)) * 100;

  $('#scroll-indicator').css('width', (scrolled + '%'));
});

var topLoaded = false;
var contactLoaded = false;
var bottomLoaded = false;

$(document).ready(function (e) {
  setTimeout(()=>{
    $('.js-flickity').flickity('resize');
  }, 1000);
});

$( window ).on( "resize", function() {
  $('.js-flickity').flickity('resize');
});

function load_page_init(baseUrl) {
  Cookies.set('exelt-branch', '0', { 'max-age': 31536000 });

  $("#xlt-header").load(baseUrl + "/top.html?v=2025.02.06.04", null, ()=>{
    topLoaded = true;
    if( topLoaded && bottomLoaded && contactLoaded) {
      onTopBottomReady();
    }
  });

  if ($("#xlt-contact").length > 0) {
    $("#xlt-contact").load(baseUrl + "/bottom-contacts.html?v=2025.02.06.04", null, ()=>{
      contactLoaded = true;
      if( topLoaded && bottomLoaded && contactLoaded ) {
        onTopBottomReady();
      }
    });
  } else {
    contactLoaded = true;
  }

  $("#xlt-footer").load(baseUrl + "/bottom.html?v=2025.02.06.04", null, ()=>{
    bottomLoaded = true;
    if( topLoaded && bottomLoaded && contactLoaded ) {
      onTopBottomReady();
    }
  });
}

function aos_init() {
  setTimeout( ()=> {
    AOS.init({
    });
  }, 1000);
}

function materialize_init() {
  $('.sidenav').sidenav();
  $('.parallax').parallax();
}

function navbar_menu_init() {
  $('.dropdown-trigger').dropdown();
}

function player_init() {
  // video icon
  $(".player").each((k, val) => {
    const player = new Plyr(val);
  });
}

function tabs_init() {
  $('.tabs').tabs();
}

function dialog_init() {
  $('.modal').modal();

  // Close Toggle Slide
  $(".close-toggle").click(function() {
    $(".cards-modal").hide();
  });
}

function load_more_init() {
  $("#click-show-more").click(function () {
    var elem = $("#click-show-more").text();
    if (elem == "Show more") {
      //Stuff to do when btn is in the read more state
      $("#click-show-more").text("Show less");
      $("#slide-toggle").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#click-show-more").text("Show more");
      $("#slide-toggle").slideUp();
    }
  });
}

function onTopBottomReady() {

}

function gotoOurServices() {
  let offset = $("#our-services").offset();
  if( offset ) {
    $('html, body').animate({
      scrollTop: offset.top
    }, 100);
  }
}

function gotoLink(e, url) {
  window.location.href = url;
  e.stopPropagation();

}

function fullScreen(el) {
  if (el.requestFullscreen) 
    el.requestFullscreen();
  else if (el.webkitRequestFullscreen) 
    el.webkitRequestFullscreen();
  else if (div.msRequestFullScreen) 
    el.msRequestFullScreen();
}

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function sendMessage() {
  $('#send_result').modal('open'); 
}
