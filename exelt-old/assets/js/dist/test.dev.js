"use strict";

var currentURL = window.location.href;
document.querySelectorAll("#mobile-demo a").forEach(function (p) {
  if (currentURL.indexOf(p.getAttribute("href")) !== -1) {
    p.classList.add("active");
  }
});