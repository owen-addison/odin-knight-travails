// Create the game board
function createBoard() {
  const board = []; // Create an empty array
  // Loop 8 times for each row
  for (i = 0; i < 8; i++) {
    const row = []; // Create an empty array for each row
    // Loop 8 times for each cell
    for (j = 0; j < 8; j++) {
      row.push(0); // Add a 0 for each cell
    }
    board.push(row); // Add each row to the board
  }
  return board; // Return the 8x8 array
}

function knightMoves(start, end) {
  const queue = [];
  const visited = new Set();
  queue.push([start, [start]]); // Enqueue the starting position and the path taken so far

  while (queue.length > 0) {
    const currentPosition = queue.shift()[0]; // The start/move position
    const path = queue[1]; // Array with the current path

    if ((currentPosition = end)) {
      return path; // Found the shortest path
    }

    placeKnight(currentPosition).forEach((move) => {
      // If move has not been visited
      if (!visited.has(move)) {
        visited.add(move);
        const newPath = path.concat([move]); // Append the new move to the current path
        queue.push([move, newPath]);
      }
    });
  }

  return "No path found"; // If we exit the loop without returning, no path exists
}

function placeKnight(position) {
  const x = currentPosition[0];
  const y = currentPosition[1];
  const allPossibleMoves = [
    (2, 1),
    (1, 2),
    (-1, 2),
    (-2, 1),
    (-2, -1),
    (-1, -2),
    (1, -2),
    (2, -1),
  ];
  const validMoves = [];

  allPossibleMoves.forEach((move) => {
    const new_x = move[0];
    const new_y = move[1];
    if (0 <= new_x < 8 && 0 <= new_y < 8) {
      validMoves.push(move);
    }
  });

  return validMoves;
}

/*
PSEUDOCODE:
FUNCTION createBoard():
  board = 8x8 array filled with 0s
  RETURN board

FUNCTION knightMoves(start, end):
  queue = []
  visited = new Set()
  queue.enqueue([start, [start]]) // Enqueue the starting position and the path taken so far

  WHILE queue is not empty:
    currentPosition, path = queue.dequeue();

    IF currentPosition = end:
      RETURN path // Found the shortest path

    FOR each move in placeKnight(currentPosition): // Get all possible moves from current position
      IF move is not in visited:
        visited.add(move)
        newPath = path + [move] // Append the new move to the current path
        queue.enqueue([move, newPath])

  RETURN "No path found" // If we exit the loop without returning, no path exists

FUNCTION placeKnight(position):
  x, y = position
  allPossibleMoves = [(2,1), (1,2), (-1,2), (-2,1), (-2,-1), (-1,-2), (1,-2), (2,-1)]
  validMoves = []

  FOR each move in possibleMoves:
    IF move is within the board boundaries and not an obstacle:
      validMoves.append(move);

  RETURN validMoves
*/
