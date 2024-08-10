const gameBoard = (function () {
  const board = new Array(9);

  return { board };
})();

const player = function(name, mark) {
  return {name, mark}
}
