var executors = {
	burn: require('actions/burn')
};

module.exports = commandExecutor;

function commandExecutor(game) {
	
	return {
		execute: function(playerId, command) {
			var executor, action, 
				actions = command.actions || [];

			var i, len = actions.length;
			for(i=0; i < len; i++) {
				action = actions[i];
				executor = executors[action.type];
				
				if(!!executor) {
					executor.execute(game, playerId, action);
					//TODO handle failure?
				}
				else {
					//TODO some kind of error
				}
			}
		},
		undo: function(playerId, command) { 
			var executor, action, 
				actions = command.actions || [];

			var i, len = actions.length;
			for(i=actions.length-1; i>=0; i--) {
				action = actions[i];
				executor = executors[action.type];
				
				if(!!executor) {
					executor.undo(game, playerId, action);
					//TODO handle failure?
				}
				else {
					//TODO some kind of error
				}
			}
		}
	}
}

