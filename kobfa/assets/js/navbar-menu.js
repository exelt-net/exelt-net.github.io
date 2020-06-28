$(document).ready(function() {
    $('.sidenav').sidenav();
});
// Hide Menu on Scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("hide-menu-scroll").style.top = "0";
    } else {
        document.getElementById("hide-menu-scroll").style.top = "-88px";
    }
    prevScrollpos = currentScrollPos;
}