//capture scroll any percentage
$(window).scroll(function(){
  var wintop = $(window).scrollTop();
  var docheight = $(document).height();
  var winheight = $(window).height();
  var scrolled = (wintop / (docheight - winheight)) * 100;

  $('#scroll-indicator').css('width', (scrolled + '%'));
});

var topLoaded = false;
var bottomLoaded = false;

$(document).ready(function (e) {
  $("#xlt-header").load("./top.html", null, ()=>{
    topLoaded = true;
    if( topLoaded && bottomLoaded ) {
      onTopBottomReady();
    }
  });
  $("#xlt-footer").load("./bottom.html", null, ()=>{
    bottomLoaded = true;
    if( topLoaded && bottomLoaded ) {
      onTopBottomReady();
    }
  });
});

function aos_init() {
  AOS.init({
  });
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
  $('html, body').animate({
    scrollTop: $("#our-services").offset().top
  }, 100);
}