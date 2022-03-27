let swiper = new Swiper('.swiper', {
  slidesPerView: 1.2,
  spaceBetween: 20,
  freeMode: true,
  breakpoints: {
    600: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 2.3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3.2,
      spaceBetween: 30,
    },
  },
});

let swiper2 = new Swiper('.videos', {
  slidesPerView: 1.2,
  spaceBetween: 20,
  freeMode: true,
  breakpoints: {
    600: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 2.3,
      spaceBetween: 30,
    },
  },
});
