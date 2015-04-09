var _ = require('lodash');

var factions = [
	require('./factions/auren'),
	require('./factions/witches'),
	require('./factions/alchemists'),
	require('./factions/darklings'),
	require('./factions/halflings'),
	require('./factions/cultists'),
	require('./factions/engineers'),
	require('./factions/dwarves'),
	require('./factions/mermaids'),
	require('./factions/swarmlings'),
	require('./factions/chaosMagicians'),
	require('./factions/giants'),
	require('./factions/fakir'),
	require('./factions/nomads')
];

module.exports = Factions;
	
function Factions() {
	this.factions = allFactions();
}

Factions.prototype.listAvailable = function() {
	return _(this.factions)
	 .values()
	 .flatten()
	 .pluck('name')
	 .value();
}

Factions.prototype.select = function(key) {
	var faction = null;

	//this.factions = _.reject(this.factions, function(factions, key) {
	//	var index = _.(
	//});

}

function allFactions() {
	_.groupBy(factions, 'homeTerrain');
}
