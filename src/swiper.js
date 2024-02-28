var mySwiper = new Swiper('.mySwiper', {
  // Swiper options
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  // Enable swipe gestures
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Enable keyboard control
  keyboard: true,
});

var mySwiper = new Swiper('.mySwiper', {
  // Swiper options...
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});

// Button click events
document.getElementById('goLeft').addEventListener('click', function() {
  mySwiper.slidePrev();
});

document.getElementById('goRight').addEventListener('click', function() {
  mySwiper.slideNext();
});

document.getElementById('goHome').addEventListener('click', function() {
  mySwiper.slideTo(0); // Assuming the first slide is the "home" slide
});
