
var executors = {
	'burn' : require('./actions/burn'),
	'pass' : require('./actions/pass'),
	'build' : require('./actions/build'),
	'upgrade' : require('./actions/upgrade'),
	'advance shipping' : require('./actions/advanceShippingTrack'),
	'advance spades' : require('./actions/advanceSpadeTrack'),
	'transform' : require('./actions/transform'),
	'select faction': require('./actions/selectFaction')
};

module.exports = commandExecutor;

function commandExecutor(game) {
	return {
		execute: execute
	};

	function execute(player, command) {
		var executor, action, 
			actions = command.actions || [];

		var i, len = actions.length;
		for(i=0; i < len; i++) {
			action = actions[i];
			executor = executors[action.type];

			player = (typeof player === 'object') ? player : getPlayer(player);

			if(!!executor) {
				executor(game, player, action);
				game.history.push([player.id, command]);
				game.next();
			}
			else {
				//TODO some kind of error
			}
		}
	}

	function getPlayer(playerId) {
		var player = game.players.getPlayer(playerId);		
		if(!!player) {
			throw {
				type: 'PLAYER_NOT_FOUND',
				msg: 'Player "' + playerId + '" does not exist!'
			};
		}

		return player;
	}
}

