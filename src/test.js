var createGame = require("./GameFactory.js").create;

var game = createGame();

console.log("Number of coords is 9*13 (117): " + game.world.coords.length == 117);