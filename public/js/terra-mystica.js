// Initialize Phaser, and creates a 400x490px game
var game = new Phaser.Game(800, 400, Phaser.AUTO, 'terra-mystica');
var Polygon = Phaser.Polygon;
var game_state = {};

var defaultHexSize = 20;

function normalizedHexCenter(coord){
    var center = {};
    if(coord.q % 2 == 0) {
        center.x = ((coord.r) * defaultHexSize * 2);
    } else {
        center.x = ((coord.r) * defaultHexSize * 2) + defaultHexSize;
    }
    center.y = ((coord.q) * defaultHexSize * 1.7 );

    return center;
}

function drawHex(coordinate, graphics){
    var center = normalizedHexCenter(coordinate);
    var c = hexCorners(center, defaultHexSize);

    graphics.beginFill(coordinate.terrainType.color);
    graphics.lineStyle(1, 0xffd900, 0);
    graphics.moveTo(c[0].x, c[0].y);
    graphics.lineTo(c[1].x, c[1].y);
    graphics.lineTo(c[2].x, c[2].y);
    graphics.lineTo(c[3].x, c[3].y);
    graphics.lineTo(c[4].x, c[4].y);
    graphics.lineTo(c[5].x, c[5].y);
    graphics.lineTo(c[0].x, c[0].y);
    graphics.endFill();
}

// Creates a new 'main' state that wil contain the game
game_state.main = function() { };
game_state.main.prototype = {

    preload: function() {},

    create: function() {
    },

    update: function() {
        var graphics = game.add.graphics(20,20);
        game_state.world.hexs.forEach(function(coord){
            drawHex(coord, graphics);
        });
    }
};

// Add and start the 'main' state to start the game
game.state.add('main', game_state.main);

jQuery.ajax('/api/game').then(function(response){
    game.state.start('main');
    game_state = response;
});
