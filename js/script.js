var swiper = new Swiper(".mySwipertopnft", {
    slidesPerView: 3,
    spaceBetween: 0,
    allowTouchMove: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 35
      },
      860: {
        slidesPerView: 2,
        spaceBetween: 35
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 35
      }
    }
  });