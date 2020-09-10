/* Multiple Sections Animated Text on Scroll */

$(document).ready(animTitle);
$(window).scroll(animTitle);

function animTitle() {
    $('.anim-title').each(function() {
        if ($(this).visible(true)) {
            $(this).addClass("anim-title slow");
        } else {
            $(this).removeClass("slow");
        }
    });
}