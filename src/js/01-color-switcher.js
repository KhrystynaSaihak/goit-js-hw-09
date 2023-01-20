const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  bodyRef: document.querySelector('body'),
};
let startInterval = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onStartPress = e => {
  if (e.currentTarget.disablet) {
    return;
  }

  startInterval = setInterval(() => {
    refs.bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
};

const onStopPress = e => {
  clearInterval(startInterval);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
};

refs.startBtn.addEventListener('click', onStartPress);
refs.stopBtn.addEventListener('click', onStopPress);
