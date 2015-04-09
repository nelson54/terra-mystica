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
	return _.pluck(this.factions, 'name');
};

Factions.prototype.select = function(key) {
	var faction = this.get(key);
	if(!!faction) {
		this.factions = _.reject(this.factions, { homeTerrain: faction.homeTerrain });
	}

	return faction; //TODO is this right?
};

Factions.prototype.isAvailable = function(key) {
	return !!this.get(key);
};

Factions.prototype.get = function(key) {
	var kebabedKey = _.kebabCase(key);
	return = _.find(this.factions, function(faction) { 
		return _.kebabCase(faction.name) === kebabedKey; 
	});
};

function allFactions() {
	return factions.slice();
}
