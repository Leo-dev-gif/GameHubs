let score = 0;
let isGameActive = false;
const ball = document.getElementById('ball');
const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('start-button');
const themeSelect = document.getElementById('theme-select');
let gameTimer;

// Inizia il gioco
startButton.addEventListener('click', startGame);
themeSelect.addEventListener('change', changeTheme);

function startGame() {
    score = 0;
    isGameActive = true;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = 30;
    startButton.disabled = true;
    ball.style.display = 'block';
    moveBall();
    startTimer();
}

// Muove la pallina in posizioni casuali
function moveBall() {
    if (!isGameActive) return;

    const areaWidth = gameArea.clientWidth;
    const areaHeight = gameArea.clientHeight;

    const ballSize = ball.offsetWidth;

    // Posizioni casuali
    const randomX = Math.random() * (areaWidth - ballSize);
    const randomY = Math.random() * (areaHeight - ballSize);

    ball.style.left = `${randomX}px`;
    ball.style.top = `${randomY}px`;

    // Muove la pallina ogni 1.5 secondi
    setTimeout(moveBall, 1500);
}

// Incrementa il punteggio
ball.addEventListener('click', () => {
    if (!isGameActive) return;
    score++;
    scoreDisplay.textContent = score;

    // Bonus: Muove immediatamente la pallina
    moveBall();
});

function startTimer() {
    let timeLeft = 30;
    gameTimer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timeDisplay.textContent = timeLeft;
        } else {
            clearInterval(gameTimer);
            endGame();
        }
    }, 1000);
}
document.getElementById('theme-select').addEventListener('change', function() {
    if (this.value === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});

function endGame() {
    isGameActive = false;
    ball.style.display = 'none';
    startButton.disabled = false;
    alert(`Tempo scaduto! Il tuo punteggio finale è ${score}`);
}

function changeTheme() {
    const theme = themeSelect.value;
    if (theme === 'dark') {
        document.body.style.background = '#333';
        gameArea.style.backgroundColor = '#444';
        ball.style.background = 'radial-gradient(circle, #ff7675, #d63031)';
    } else if (theme === 'light') {
        document.body.style.background = '#fff';
        gameArea.style.backgroundColor = '#dfe6e9';
        ball.style.background = 'radial-gradient(circle, #74b9ff, #0984e3)';
    }
}
