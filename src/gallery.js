function openFullscreen(elem) {
  // Assuming `elem` is the clicked image element
  document.querySelector('.mySwiper').style.display = 'block'; // Show the Swiper gallery
  const imgIndex = Array.from(document.querySelectorAll('.gallery-grid img')).indexOf(elem);
  mySwiper.slideTo(imgIndex, 0); // Navigate to clicked image
  // Consider adding fullscreen request here if needed
  // Optionally, set the src of the first Swiper slide to the clicked image
  // and adjust other slides as needed
  document.querySelector('.swiper-slide-active img').src = elem.src;
  // Initialize or update Swiper here if it hasn't been initialized
  // Or use mySwiper.update() if Swiper is already initialized
  // Open the Swiper gallery in fullscreen
  if (document.querySelector('.mySwiper').requestFullscreen) {
    document.querySelector('.mySwiper').requestFullscreen();
  }
}
// Close fullscreen and hide the Swiper gallery when closing fullscreen
function closeFullscreen() {
  document.querySelector('.mySwiper').style.display = 'none';
}

var mySwiper = new Swiper('.mySwiper', {
  // Swiper options
  slidesPerView: 1,
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Enable swipe gestures
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Enable keyboard control
  keyboard: true,
  slideToClickedSlide: true,
  on: {
    init: function () {
      this.el.style.display = 'none'; // Ensure Swiper is hidden on initialization
    }
  },
});

document.addEventListener('fullscreenchange', function () {
    if (!document.fullscreenElement) {
        document.querySelector('.mySwiper').style.display = 'none'; // Hide Swiper when exiting fullscreen
        mySwiper.slideTo(0, 0); // Optionally reset Swiper to the first slide
    }
});

document.querySelectorAll('.swiper-slide img').forEach(item => {
  item.addEventListener('click', function() {
    if (this.requestFullscreen) {
      this.requestFullscreen();
    } else if (this.webkitRequestFullscreen) { /* Safari */
      this.webkitRequestFullscreen();
    } else if (this.msRequestFullscreen) { /* IE11 */
      this.msRequestFullscreen();
    }
  });
});
