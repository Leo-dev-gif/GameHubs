let score = 0;
let isGameActive = false;
const ball = document.getElementById('ball');
const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-button');

// Inizia il gioco
startButton.addEventListener('click', startGame);

function startGame() {
    score = 0;
    isGameActive = true;
    scoreDisplay.textContent = score;
    startButton.disabled = true;
    ball.style.display = 'block';
    moveBall();
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

    // Muove la pallina ogni 1 secondo
    setTimeout(moveBall, 1000);
}

// Incrementa il punteggio
ball.addEventListener('click', () => {
    if (!isGameActive) return;
    score++;
    scoreDisplay.textContent = score;

    // Bonus: Muove immediatamente la pallina
    moveBall();
});

// Ferma il gioco dopo 30 secondi
// Ferma il gioco dopo 30 secondi
setTimeout(() => {
    if (isGameActive) {
        isGameActive = false;
        ball.style.display = 'none';
        startButton.disabled = false;
        alert(`Tempo scaduto! Il tuo punteggio finale è ${score}`);
    }
}, 30000); // 30 secondi
