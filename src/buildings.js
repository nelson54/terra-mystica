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
			return building;
		}
	}

	return null;
};

Buildings.prototype.putAt = function(owner, type, pos) {
	//TODO putting pieces back!
};


/*
{ 
	position: { q: 0, r: 0 },
	owner: 0,
	type: 'DWELLING'
}
*/

exports = Buildings;
