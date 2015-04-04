var gameUtils = require('./gameUtils');

var Game = function(players, world, buildings){
    this.id = gameUtils.makeId();
    this.phase = "PLAY";
    this.rounds = 0;
    this.currentPlayerId = players.turnOrder[0];
    this.world = world;
    this.players = players;
    this.buildings = buildings;

    this.endCurrentTurn = function(){
        if(this.isEndOfGame()){
            this.phase = 'GAME_OVER';
        }

        if(this.isEndOfRound()){
            this.rounds++;
            this.players.resetPlayersForRound();
        }

        this.currentPlayerId = players.nextInTurnOrder(this.currentPlayerId)
    };

    this.isEndOfRound = function(){
        return this.players.getPlayers()
            .reduce(function(b, b1){return b&&b1.passed}, true)
    }

    this.isEndOfGame = function(){
        if(this.rounds >= 6){
            return true;
        }
        return false;
    }
};

module.exports = Game;