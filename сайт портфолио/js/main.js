new WOW().init();
const swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.project-pagination',
    bulletClass: 'projects-bullet',
    bulletActiveClass: 'projects-bullet-active',
    clickable: true
  },
});