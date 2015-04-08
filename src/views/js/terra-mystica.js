// Initialize Phaser, and creates a 400x490px game
var game = new Phaser.Game(900, 600, Phaser.AUTO, 'terra-mystica');
game.transparent = true;

var game_state = new GameState();

// Add and start the 'main' state to start the game
game.state.add('main', game_state);

var gameId = $('#terra-mystica').data('gameId');
var playerId = $('#terra-mystica').data('playerId');

jQuery.ajax('/api/game/'+ gameId).then(function(response) {
    game.state.start('main');
    game_state.hexes = response.world.hexs;
});
