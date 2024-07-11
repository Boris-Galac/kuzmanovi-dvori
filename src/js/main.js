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
