var err = require('./util/error');
var assert = require('./util/assert');

module.exports = execute;

function execute(game, player, action) {
	assert(game, 'PLAY');

	var amount = action.amount;
	var bowls = player.bowls;
	var removeFromBowl1 = amount * 2;

	if(bowls[1] >= removeFromBowl1) {
		bowl[1] -= removeFromBowl1;
		bowl[2] += amount;
	}
	else {
		var msg = 'Cannot burn ' + amount + ' power, only ' + bowl[1] + ' in bowl 2';
		err('ILLEGAL_ACTION', msg);
	}
}
