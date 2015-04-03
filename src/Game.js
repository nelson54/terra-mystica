var gameUtils = require('./gameUtils');

var Game = function(players, world, buildings){
    this.id = gameUtils.makeId();
    this.players = players;
    this.world = world;
    this.buildings = buildings;
};

module.exports = Game;