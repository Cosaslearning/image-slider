// Swiper JavaScript Code
let swiperCards = new Swiper(".cards", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  
});