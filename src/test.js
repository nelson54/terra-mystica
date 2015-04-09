//var createGame = require("./GameFactory.js").create;

//var game = createGame();

//console.log("Number of coords is 9*13 (117): " + (game.world.hexs.length == 117));

var translateToNormalCoordinate = function(size,i){
    return i - size * Math.floor(i / size)
};

(function(distance){
    var baseTerrain = 3;
    var terrainCount = 8;

    console.log(translateToNormalCoordinate(terrainCount, baseTerrain+distance));
})(-2);