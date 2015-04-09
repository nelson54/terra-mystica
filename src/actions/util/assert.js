var _ = require('lodash');
var err = require('./error');

module.exports = assert;

var assert = {
	phase: function(game, phase) {
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
};
