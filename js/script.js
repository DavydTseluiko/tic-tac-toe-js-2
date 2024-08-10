const gameBoard = (function () {
  const board = new Array(9);

  return { board };
})();

const player = function (name, mark) {
  return { name, mark };
};

const game = (function () {
  const firstPlayer = player("David", "X");
  const secondPlayer = player("Bot", "O");
})();
