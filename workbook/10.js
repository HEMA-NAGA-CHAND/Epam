let tiles = [];
let timer = null;
let time = 0;

// BOM: show instructions
window.onload = () => {
  window.alert("Slide tiles to arrange them in order (1-8)");
  document.getElementById("info").textContent = navigator.userAgent;
};

function createBoard() {
  const puzzle = document.getElementById("puzzle");
  puzzle.innerHTML = '';
  tiles.forEach((val, i) => {
    const div = document.createElement("div");
    div.className = "tile";
    if (val === '') div.classList.add("empty");
    div.textContent = val;
    div.addEventListener("click", () => moveTile(i));
    puzzle.appendChild(div);
  });
}

function startGame() {
  tiles = ['1','2','3','4','5','6','7','8',''];
  createBoard();
  time = 0;
  clearInterval(timer);
  timer = setInterval(() => {
    time++;
    document.getElementById("timer").textContent = `Time: ${time}s`;
  }, 1000);
}

function shuffle() {
  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }
  createBoard();
}

function resetGame() {
  startGame();
  setTimeout(() => {
    window.alert("Game reset!");
  }, 300); // BOM: delay alert
}

function moveTile(index) {
  const emptyIndex = tiles.indexOf('');
  const validMoves = [index - 1, index + 1, index - 3, index + 3];
  if (validMoves.includes(emptyIndex)) {
    [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
    createBoard();
    checkWin();
  }
}

function checkWin() {
  const win = ['1','2','3','4','5','6','7','8',''];
  if (tiles.join() === win.join()) {
    clearInterval(timer);
    window.alert(`You win! Time: ${time}s`); // BOM: win message
  }
}
