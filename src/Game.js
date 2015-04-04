var gameUtils = require('./gameUtils');

var Game = function(players, world, buildings){
    this.id = gameUtils.makeId();

    this.currentPlayerId = players.turnOrder[0];
    this.world = world;
    this.players = players;
    this.buildings = buildings;

    this.endCurrentTurn = function(){
        this.currentPlayerId = players.nextInTurnOrder(this.currentPlayerId)
    }
};

module.exports = Game;