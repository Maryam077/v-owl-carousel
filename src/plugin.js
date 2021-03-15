import VOwlCarousel from './Carousel.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('owl-carousel-vuejs', VOwlCarousel);
  }
};
