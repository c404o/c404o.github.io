function toggleAudio() {
  var audioElement = document.getElementById('player')
  var soundOn = document.getElementById('play')
  var soundOff = document.getElementById('pause')
  if (audioElement.paused) {
    audioElement.play();
    $(soundOn).show();
    $(soundOff).hide();
  } else {
    audioElement.pause();
    $(soundOn).hide();
    $(soundOff).show();
  }
} 

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  heart.innerText = '🖤';

  document.body.appendChild(heart);

  setTimeout(() => {
              heart.remove();
              }, 5000);
}

setInterval(createHeart, 300);
