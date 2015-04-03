var _ = require('lodash');
var Players = function () {
    this.players = {};

    this.addPlayer = function(player){
        this.players[player.id] = player;
    }

    this.getPlayers = function(){
        return _.values(this.players);
    }

    this.getPlayer = function(id){
        return this.players[id];
    }
};

module.exports = Players;
