/**
 * Creates an 8x8 game board.
 * @returns {Array} An 8x8 array initialized with zeros.
 */
function createBoard() {
  const board = [];
  for (let i = 0; i < 8; i++) {
    const row = [];
    for (let j = 0; j < 8; j++) {
      row.push(0);
    }
    board.push(row);
  }
  return board;
}

/**
 * Finds the shortest path for a knight to move from start to end on a chessboard.
 * @param {Array} start - The starting position [x,y].
 * @param {Array} end - The ending position [x,y].
 * @returns {Array} An array of positions representing the shortest path or "No path found".
 */
function knightMoves(start, end) {
  const queue = [];
  const visited = new Set();
  queue.push([start, [start]]);

  while (queue.length > 0) {
    const [currentPosition, path] = queue.shift();

    if (currentPosition[0] === end[0] && currentPosition[1] === end[1]) {
      return path;
    }

    placeKnight(currentPosition).forEach((move) => {
      const moveStr = move.toString();
      if (!visited.has(moveStr)) {
        visited.add(moveStr);
        const newPath = path.concat([move]);
        queue.push([move, newPath]);
      }
    });
  }

  return "No path found";
}

/**
 * Determines all valid moves for a knight from a given position.
 * @param {Array} position - The current position [x,y].
 * @returns {Array} An array of valid moves.
 */
function placeKnight(position) {
  const x = position[0];
  const y = position[1];
  const allPossibleMoves = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];
  const validMoves = [];

  allPossibleMoves.forEach((move) => {
    const new_x = x + move[0];
    const new_y = y + move[1];
    if (0 <= new_x && new_x < 8 && 0 <= new_y && new_y < 8) {
      validMoves.push([new_x, new_y]);
    }
  });

  return validMoves;
}
