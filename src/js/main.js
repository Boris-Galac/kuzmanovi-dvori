///// HAM BTN AND NAV OPEN/CLOSEDS

const hamBtn = document.querySelector(".ham-btn");
const nav = document.querySelector(".nav");
hamBtn.addEventListener("click", (e) => {
  if (nav.getAttribute("aria-expanded") === "false") {
    nav.setAttribute("aria-expanded", "true");
    hamBtn.setAttribute("data-active", "true");
  } else {
    nav.setAttribute("aria-expanded", "false");
    hamBtn.setAttribute("data-active", "false");
  }
  nav.addEventListener("click", (e) => {
    if (!e.target.matches(".nav__list")) {
      nav.setAttribute("aria-expanded", "false");
      hamBtn.setAttribute("data-active", "false");
    }
  });
});

var swiper = new Swiper(".hero-slider", {
  effect: "fade",
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 2500,
  },
});

var swiper = new Swiper(".recenzija-swiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

//// BACK TO TOP

const backToTopbtn = document.querySelector(".back-to-top-btn");

backToTopbtn.addEventListener("click", (e) => {
  window.scroll({
    top: 0,
  });
});
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 150) {
    backToTopbtn.setAttribute("data-visible", "true");
  } else backToTopbtn.setAttribute("data-visible", "false");
});

// OPEN SEARCH MODAL

const searchBtn = document.querySelector(".search-btn");
const overlay = document.querySelector(".overlay");
searchBtn.addEventListener("click", (e) => {
  overlay.setAttribute("data-active", "true");
  overlay.setAttribute("aria-expanded", "true");
});
window.addEventListener("click", (e) => {
  if (e.target.matches(".overlay")) {
    overlay.setAttribute("data-active", "false");
    overlay.setAttribute("aria-expanded", "false");
  }
});

/////////// HIDE HEADER ON SCROLL

let lastScrollTop = 0;
let navbar = document.querySelector(".header");
let navbarHeight = document.querySelector(".header").scrollHeight;
window.addEventListener("scroll", (e) => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = `-${navbarHeight}px`;
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

// baguette GALLERY
if (document.querySelector(".main").classList.contains("main--gallery")) {
  baguetteBox.run(".gallery");
}
