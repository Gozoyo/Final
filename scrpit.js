window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector("header");
    const main = document.querySelector("main");
    if (navbar && main) {
      const navbarHeight = navbar.offsetHeight;
      main.style.paddingTop = `${navbarHeight}px`;
    }
  });


  document.querySelector("#welcome-section")

  (function () {
    "use strict";

    var items = document.querySelectorAll(".timeline li");
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  })();
  

  