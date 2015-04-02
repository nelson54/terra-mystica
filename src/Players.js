var Players = function () {
    this.players = {};

    this.addPlayer = function(player){
        this.players[player.id] = player;
    }

};

module.exports = Players;
