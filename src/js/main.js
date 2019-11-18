import slider from "./component/slider";

const videoLink = document.querySelector('a.video');
const modal = document.querySelector('section.modal');
const video = document.querySelector('video');
const close = document.querySelector('.close');

videoLink.addEventListener('click', function(e) {
  modal.classList.add('open');
  video.play();
});

close.addEventListener('click', function(e) {
  e.stopPropagation();
  modal.classList.remove('open');
  video.pause();
  video.currentTime = 0;
});