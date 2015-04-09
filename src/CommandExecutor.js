var executors = {
	burn: require('actions/burn')
};

module.exports = commandExecutor;

function commandExecutor(game) {
	return {
		execute: execute
	};

	function execute(playerId, command) {
		var executor, action, 
			actions = command.actions || [];

		var i, len = actions.length;
		for(i=0; i < len; i++) {
			action = actions[i];
			executor = executors[action.type];
			
			if(!!executor) {
				executor(game, getPlayer(playerId), action);
				game.history.push([playerId, command]);
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

