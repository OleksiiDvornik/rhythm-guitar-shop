const slider = new Swiper('.feedback__slider', {
  speed: 1000,
  effect: 'slide',
  grabCursor: true,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 48,
  autoHeight: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
  pagination: {
    el: '.slider__pagination',
    bulletActiveClass: 'current',
    bulletClass: 'slider__pagination-item',
    clickable: true,
  }
})
