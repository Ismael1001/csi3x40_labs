function createGame(n) {
  // Check if the input is valid
  if (typeof n !== 'number' || n < 3) {
    throw new Error('Invalid input. n should be a number greater than or equal to 3.');
  }

  // Initialize an array with n elements, all containing pellets "."
  const gameArray = Array(n).fill('.');

  // Place the Pacman "C" in the middle of the array
  const pacmanIndex = Math.floor(n / 2);
  gameArray[pacmanIndex] = 'C';

  // Place the Ghost "^" on the left side of Pacman
  gameArray[pacmanIndex - 1] = '^';

  // Place the fruit "@" on the right side of Pacman
  gameArray[pacmanIndex + 1] = '@';

  return gameArray;
}

// Example usage
const gameArray = createGame(10);
console.log(gameArray);
