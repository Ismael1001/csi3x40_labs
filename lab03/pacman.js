let score = 0; // Initialize the score

function createGame(n) {
  if (typeof n !== 'number' || n < 3) {
    throw new Error('Invalid input. n should be a number greater than or equal to 3.');
  }

  const gameArray = Array(n).fill('.');
  const pacmanIndex = Math.floor(n / 2);
  gameArray[pacmanIndex] = 'C';
  gameArray[pacmanIndex - 1] = '^';  // Ghost to the left of Pacman
  gameArray[pacmanIndex + 1] = '@';  // Fruit to the right of Pacman

  return gameArray;
}

function moveLeft(game) {
  const pacmanIndex = game.indexOf("C");

  if (pacmanIndex > 0) {
    if (game[pacmanIndex - 1] === '.') {
      // Pacman is moving onto a pellet
      score++; // Increase the score
      game[pacmanIndex - 1] = ''; // Pellet disappears
    }

    [game[pacmanIndex - 1], game[pacmanIndex]] = [game[pacmanIndex], game[pacmanIndex - 1]];
  }

  return game;
}

function moveRight(game) {
  const pacmanIndex = game.indexOf("C");

  if (pacmanIndex < game.length - 1) {
    if (game[pacmanIndex + 1] === '.') {
      // Pacman is moving onto a pellet
      score++; // Increase the score
      game[pacmanIndex + 1] = ''; // Pellet disappears
    }

    [game[pacmanIndex], game[pacmanIndex + 1]] = [game[pacmanIndex + 1], game[pacmanIndex]];
  }

  return game;
}

// Example usage
const initialGame = createGame(10);
console.log("Initial Game:", initialGame);

const gameAfterLeftMove = moveLeft([...initialGame]);
console.log("Game After Left Move:", gameAfterLeftMove);
console.log("Score:", score); // Log the score

const gameAfterRightMove = moveRight([...initialGame]);
console.log("Game After Right Move:", gameAfterRightMove);
console.log("Score:", score); // Log the score
