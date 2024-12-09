const screens = document.querySelectorAll('.screen');
const startBtn = document.querySelector('.start');
const timeList = document.querySelector('.time-list');
const timeEl = document.getElementById('time');
const board = document.getElementById('board');

let time = 0;
let score = 0;

// Move to the next screen on Start button click
startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
});

// Set game time and move to the next screen
timeList.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.textContent);
    screens[1].classList.add('up');
    startGame();
  }
});

// Start the game
function startGame() {
  score = 0;
  timeEl.textContent = `00:${time < 10 ? '0' + time : time}`;
  const timer = setInterval(() => {
    if (time === 0) {
      clearInterval(timer);
      finishGame();
    } else {
      let currentTime = --time;
      timeEl.textContent = `00:${currentTime < 10 ? '0' + currentTime : currentTime}`;
    }
  }, 1000);
  createRandomCircle();
}

// Finish the game and show the score
function finishGame() {
  board.innerHTML = `<h1>Your Score: <span class="primary">${score}</span></h1>`;
}

// Create a random circle on the board
function createRandomCircle() {
  const circle = document.createElement('div');
  const size = getRandomNumber(20, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  circle.addEventListener('click', () => {
    score++;
    circle.remove();
    createRandomCircle();
  });

  board.appendChild(circle);
}

// Generate a random number between min and max
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
