function handleKeyDown(event) {
  if (GameModel.gameState.isGameOver) {
    return;
  }

  switch (event.key) {
    case 'ArrowUp':
      GameModel.jump();
      break;
  }
}

function initEventListeners() {
  document.addEventListener('keydown', handleKeyDown);
}

export { initEventListeners };