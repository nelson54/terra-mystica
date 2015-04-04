var _ = require('lodash');
var Players = function () {
    this.turnOrder = [];
    this.players = {};

    this.addPlayer = function(player){
        this.players[player.id] = player;
        this.turnOrder = _.keys(this.players);
    };

    this.getPlayers = function(){
        return _.values(this.players);
    };

    this.getPlayer = function(id){
        return this.players[id];
    };

    this.nextInTurnOrder = function(id){
        var pos = this.turnOrder.indexOf(id)+1;
        if(pos === -1){
            throw "That player is not in turn order";
        } else if (pos >= this.turnOrder.length){
            return this.turnOrder[0];
        } else {
            return this.turnOrder[pos];
        }

    };

    this.resetPlayersForRound = function(){
        for(var id in this.players){
            this.players[id].resetPlayerForRound();
        }
    }
};

module.exports = Players;
