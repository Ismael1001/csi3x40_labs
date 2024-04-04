const GameModel = {
  player: {
    x: 50, 
    y: 0, 
    width: 50, 
    height: 50, 
    velocityY: 0, 
    jumping: false 
  },
  
  obstacle: {
    x: 200, 
    y: 0, 
    width: 50, 
    height: 50 
  },
  
  gameState: {
    score: 0, 
    isGameOver: false 
  },
  
  updateGameState: function() {
    this.player.y += this.player.velocityY;
    
    if (!this.player.jumping) {
      this.player.velocityY += 0.5; 
    }
    
    if (this.player.y >= 0) {
      this.player.y = 0;
      this.player.jumping = false;
      this.player.velocityY = 0;
    }
    
    if (this.isColliding(this.player, this.obstacle)) {
      this.gameState.isGameOver = true;
    }
  },
  
  isColliding: function(obj1, obj2) {
    return obj1.x < obj2.x + obj2.width &&
           obj1.x + obj1.width > obj2.x &&
           obj1.y < obj2.y + obj2.height &&
           obj1.y + obj1.height > obj2.y;
  },
  

  jump: function() {
    if (!this.player.jumping) {
      this.player.velocityY = -10;
      this.player.jumping = true;
    }
  }
};

export default GameModel;

  