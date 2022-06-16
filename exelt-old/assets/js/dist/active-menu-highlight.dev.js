"use strict";

// let currentURL = window.location.href;
// document.querySelectorAll("#mobile-demo a").forEach(p => {
//   if(currentURL.indexOf(p.getAttribute("href")) !== -1){
//     p.classList.add("active");
//   }
// })
updateActiveMenu();
$("#mobile-demo a").click(function () {
  updateActiveMenu();
});

function updateActiveMenu() {
  requestAnimationFrame(function () {
    var currentURL = window.location.href;
    var currentHash = currentURL.split("#")[1];
    $("#mobile-demo a").each(function (k, dom) {
      var $el = $(dom);
      var hash = $el.attr("href").split("#")[1];
      var isActive = currentURL.indexOf($el.attr("href")) !== -1 && currentHash === hash;
      if (isActive) $el.addClass("active");else $el.removeClass("active");
    });
  });
}