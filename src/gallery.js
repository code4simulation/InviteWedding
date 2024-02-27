function openFullscreen(elem) {
  var imgSrc = elem.getAttribute('src');
  document.getElementById('fullscreen-img').src = imgSrc;
  document.getElementById('fullscreen').style.display = 'flex';
}

function closeFullscreen() {
  document.getElementById('fullscreen').style.display = 'none';
}

// Assuming touch sliding functionality is desired, you would need to implement touch event listeners.
// This is a simple version and might not work smoothly on all devices.
let touchstartX = 0;
let touchendX = 0;

function checkDirection() {
  if (touchendX < touchstartX) alert('Swiped left');
  if (touchendX > touchstartX) alert('Swiped right');
}

document.getElementById('fullscreen').addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX;
});

document.getElementById('fullscreen').addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX;
  checkDirection();
});
