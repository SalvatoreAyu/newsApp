import FastClick from './fastclick';

window.addEventListener('load', function () {
  FastClick.attach(document.body);
});
document.documentElement.addEventListener('touchmove', function (e) {
  if (e.touches.length > 1) {
    e.preventDefault();
  }
});
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';
