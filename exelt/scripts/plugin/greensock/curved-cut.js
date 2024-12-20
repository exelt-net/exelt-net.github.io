// Curved cut use homepage (meet our staff block)
function inViewport($el) {
    var H = $(window).height(),
        r = $el[0].getBoundingClientRect(),
        t = r.top,
        b = r.bottom;
    return Math.max(0, t > 0 ? H - t : (b < H ? b : H));
}

$(window).on("scroll resize", function() {
    var window_offset = inViewport($('.curved-cut-block'));
    $(".overlay").height(window_offset);
    // $(".caption").css("bottom", (window_offset / 4));
});