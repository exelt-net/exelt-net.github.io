// let currentURL = window.location.href;

// document.querySelectorAll("#mobile-demo a").forEach(p => {
//   if(currentURL.indexOf(p.getAttribute("href")) !== -1){
//     p.classList.add("active");
//   }
// })

updateActiveMenu();

$("#mobile-demo a").click(() => {
  updateActiveMenu();
});

function updateActiveMenu() {
  requestAnimationFrame(() => {
    let currentURL = window.location.href;
    let currentHash = currentURL.split("#")[1];

    $("#mobile-demo a").each((k, dom) => {
      const $el = $(dom);
      let hash = $el.attr("href").split("#")[1];
      let isActive =
        currentURL.indexOf($el.attr("href")) !== -1 &&
        currentHash === hash;

      if (isActive) $el.addClass("active");
      else $el.removeClass("active");
    });
  });
}