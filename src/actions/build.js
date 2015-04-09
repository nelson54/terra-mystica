var err = require('./util/error');
var assert = require('./util/assert');

module.exports = execute;

function execute(game, player, action) {
    game.buildings.putAt(player.id, action.building, action.q, action.r);
}
