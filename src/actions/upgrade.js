var err = require('./util/error');
var assert = require('./util/assert');

module.exports = execute;

function execute(game, player, action) {
    game.buildings.upgrade(action.q, action.r);
}