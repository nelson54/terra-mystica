var gameUtils = require('./gameUtils');

var Player = function(){
    this.id = gameUtils.makeId();
};

module.exports = Player;