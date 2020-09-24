let currentURL = window.location.href;

document.querySelectorAll("#mobile-demo a").forEach(p => {
  if(currentURL.indexOf(p.getAttribute("href")) !== -1){
    p.classList.add("active");
  }
})
