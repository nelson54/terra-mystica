var _ = require('lodash');

function Buildings(players, world) {
	this.list = [];
	this.players = players;
	this.world = world;
}

Buildings.prototype.getAtPos = function() {
	var q, r, list = this.list;
	
	if(arguments.length == 2) {
		q = arguments[0];
		r = arguments[1];
	}
	else {
		var hex = arguments[0] || {};
		q = hex.q;
		r = hex.r;
	}

	for(var i=0; i < list.length; i++) {
		var building = list[i];
		if(q === building.position.q &&
		   r === building.position.r) 
		{
			return _.deepCopy(building);
		}
	}

	return null;
};

Buildings.prototype.indexOfPos = function() {
	var q, r, list = this.list;
	
	if(arguments.length == 2) {
		q = arguments[0];
		r = arguments[1];
	}
	else {
		var hex = arguments[0] || {};
		q = hex.q;
		r = hex.r;
	}

	for(var i=0; i < list.length; i++) {
		var building = list[i];
		if(q === building.position.q &&
		   r === building.position.r) 
		{
			return i;
		}
	}

	return -1;
}

Buildings.prototype.removeAt = function(q, r) {
	var list = this.list;
	var index = this.indexOfPos(q, r);

	if(index >= 0) {
		var building = list[index];

		list.slice(index, 1);
		//TODO put the building back in the player's supply

		return true;
	}

	return false;
};

Buildings.prototype.putAt = function(owner, type, q, r) {
	var list = this.list;
	var newBuilding = {
			owner: owner,
			type: type,
			pos: {q: q, r: r}
		};

	this.removeAt(q, r);
	list.push(newBuilding);	
};

Buildings.prototype.upgrade = function(q, r) {
	var building = this.getAtPos(q, r);
	if(building.type == 'DWELLING') {
		building.type = 'TRADINGPOST';
	} else if(building.type == 'TRADINGPOST') {
		building.type = 'STRONGHOLD'
	}
};

/*
{ 
	position: { q: 0, r: 0 },
	owner: 0,
	type: 'DWELLING'
}
*/

module.exports = Buildings;
