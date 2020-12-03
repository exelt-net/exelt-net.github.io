AOS.init({
    duration: 1200
})

//capture scroll any percentage
$(window).scroll(function(){
    var wintop = $(window).scrollTop();
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolled = (wintop / (docheight - winheight)) * 100;

    $('#scroll-indicator').css('width', (scrolled + '%'));
});
