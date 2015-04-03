var _ = require('lodash');
var gameUtils = require('./gameUtils');

var Player = function(data){
    this.id = gameUtils.makeId();

    _.merge(this, data);
};

module.exports = Player;