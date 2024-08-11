const gameBoard = (function () {
  const board = new Array(9).fill("-");

  return { board };
})();

const player = function (name, mark) {
  return { name, mark };
};

const game = (function () {
  const firstPlayer = player("David", "X");
  const secondPlayer = player("Bot", "O");

  const firstToGo = firstPlayer.mark === "X" ? firstPlayer : secondPlayer;
  const secondToGo = firstPlayer.mark === "X" ? secondPlayer : firstPlayer;

  let round = 0;

  function displayBoard() {
    console.clear();
    for (let i = 0; i < 3; i++) {
      console.log(gameBoard.board.slice(i * 3, i * 3 + 3).join(" | "));
      if (i < 2) {
        console.log("---------");
      }
    }
  }

  function playersChoice(player) {
    let choice;
    do {
      choice = +prompt(`${player.name}, it's your time to go`) - 1;
    } while (gameBoard.board[choice] !== "-");

    gameBoard.board[choice] = player.mark;
  }

  function botsChoice(player) {
    let choice;
    do {
      choice = Math.floor(Math.random() * 9);
    } while (gameBoard.board[choice] !== "-");

    gameBoard.board[choice] = player.mark;
  }

  function makeChoice(player) {
    if (player.name !== "Bot") {
      playersChoice(player);
    } else {
      botsChoice(player);
    }
    displayBoard();
  }

  function playRound() {
    displayBoard();
    if (round % 2 === 0) {
      makeChoice(firstToGo);
    } else {
      makeChoice(secondToGo);
    }
    round++;
  }

  function playGame() {
    while (round < 9) {
      playRound();
    }
  }

  playGame();
})();
