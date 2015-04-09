var assert = require('./util/assert');

module.exports = execute;

function execute(game, player, action) {
	assert.phase(game, 'FACTION_SELECT');	
	assert.turn(game, player);
			
	
}
