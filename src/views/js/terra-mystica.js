// Initialize Phaser, and creates a 400x490px game
var game = new Phaser.Game(800, 400, Phaser.AUTO, 'terra-mystica');
var game_state = new GameState();

// Add and start the 'main' state to start the game
game.state.add('main', game_state);

jQuery.ajax('/api/game').then(function(response){
    game.state.start('main');
    game_state.hexes = response.world.hexs;
});
