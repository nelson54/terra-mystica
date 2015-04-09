var _ = require('lodash');
var err = require('./error');

module.exports = {
	phase: assertPhase,
	passed: assertPassed,
	turn: assertTurn
};

function assertPhase(game, phase) {
	if(_.isArray(phase)) {
		_.forEach(phase, doAssert);
	}
	else {
		doAssert(phase);
	}

	function doAssert(phase) {
		if(game.phase !== phase) {
			var msg = 'Cannot perform this action during phase "' + game.phase + '"';
			err(['ILLEGAL_ACTION', 'WRONG_PHASE'], msg);
		}
	}
}

function assertPassed(player, value) {
	var hasPassed = value || true;
	if(player.passed === hasPassed) {
		var msg = 'Cannot perform this action, already passed for the round';
		err(['ILLEGAL_ACTION', 'ALREADY_PASSED'], msg);
	}
}

function assertTurn(game, player) {
	if(game.currentPlayerId !== player.id) {
		var msg = 'Cannot perform this action, someone else\'s turn';
		err(['ILLEGAL_ACTION', 'NOT_YOUR_TURN'], msg);
	}
}
