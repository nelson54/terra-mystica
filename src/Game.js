var gameUtils = require('gameUtils');

var Game = function(players, world){
    this.id = gameUtils.makeId();
    this.players = players;
    this.world = world;

};

module.exports = Game;