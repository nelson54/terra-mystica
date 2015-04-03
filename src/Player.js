var gameUtils = require('./gameUtils');
var _ = require('./lodash');

var Player = function(data){
    this.id = gameUtils.makeId();

    _.merge(this, data);
};

module.exports = Player;