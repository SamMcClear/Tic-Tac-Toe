let currentPlayer = "X";
const cells = document.querySelectorAll(".cell");

function makeMove(cell) {
  if (!cell.textContent) {
    cell.textContent = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWinner() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
      alert(`Player ${cells[a].textContent} wins!`);
      resetBoard();
      return;
    }
  }
}

function resetBoard() {
  cells.forEach(cell => cell.textContent = "");
  currentPlayer = "X";
}