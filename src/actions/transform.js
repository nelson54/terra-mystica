var err = require('./util/error');
var assert = require('./util/assert');

module.exports = execute;

function execute(game, player, action) {
    game.world.transform(action.distance, action.q, action.r);
}
