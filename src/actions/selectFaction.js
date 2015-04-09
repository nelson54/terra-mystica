var assert = require('./util/assert');
var err = require('./util/error');
var _ = require('lodash');

module.exports = execute;

function execute(game, player, action) {
	//assert.phase(game, 'FACTION_SELECT');
	//assert.turn(game, player);

	var choice = action.faction;
	var factions = game.factions;

	if(!factions.isAvailable(choice)) {
		var msg = 'The "' + choice + '" faction is not available.';
		err(['ILLEGAL_ACTION', 'UNAVAILABLE_FACTION'], msg);
	}
		
	var faction = factions.select(choice); 
	_.extend(player, faction.startingState());
	player.faction = faction.name;
}
