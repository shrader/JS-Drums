
function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('playing');
  }
  function playSound(keyEvent) {
    const audio = document.querySelector(`audio[data-key="${keyEvent.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${keyEvent.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }


document.querySelectorAll(".key").forEach(item => {
  item.addEventListener("transitionend", removeTransition);
});
window.addEventListener("keydown", playSound);
