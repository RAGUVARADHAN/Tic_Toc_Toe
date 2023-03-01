const cells = document.querySelectorAll("td");
const result = document.querySelector("#result");
const resetButton = document.querySelector("#reset");
let player = "X";

cells.forEach((cell) => {
  cell.addEventListener("click", (event) => {
    if (cell.textContent === "") {
      cell.textContent = player;

      if (checkWin(player)) {
        result.textContent = `Player ${player} wins!`;
      } else if (checkDraw()) {
        result.textContent = "Draw";
      } else {
        player = player === "X" ? "O" : "X";
      }
    }
  });
});

resetButton.addEventListener("click", (event) => {
  player = "X";
  result.textContent = "";
  cells.forEach((cell) => {
    cell.textContent = "";
  });
});

function checkWin(player) {
  return (
    (cells[0].textContent === player && cells[1].textContent === player && cells[2].textContent === player) ||
    (cells[3].textContent === player && cells[4].textContent === player && cells[5].textContent === player) ||
    (cells[6].textContent === player && cells[7].textContent === player && cells[8].textContent === player) ||
    (cells[0].textContent === player && cells[3].textContent === player && cells[6].textContent === player) ||
    (cells[1].textContent === player && cells[4].textContent === player && cells[7].textContent === player) ||
    (cells[2].textContent === player && cells[5].textContent === player && cells[8].textContent === player) ||
    (cells[0].textContent === player && cells[4].textContent === player && cells[8].textContent === player) ||
    (cells[2].textContent === player && cells[4].textContent === player && cells[6].textContent === player)
  );
}

function checkDraw() {
  return Array.from(cells).every((cell) => cell.textContent !== "");
}
