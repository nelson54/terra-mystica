var _ = require('lodash');

module.exports = function command() {
	return new Command([]);
};

function Command(actions, nextAction) {
	this.actions = actions.slice();
	if(nextAction)
		this.actions.push(nextAction);
}

//burn, pass, build, advance shipping, advance spades, transform

Command.prototype.burn = function(value) {
	var amount = value || 1;
	var actions = this.actions;
	var last = _.last(actions);

	if(last.type === 'burn') {
		last.amount += amount;
		return new Command(actions);
	}

	return new Command(actions, { type: 'burn', amount: amount });
};

Command.prototype.pass = function() { //TODO select a bonus tile for next round
	return new Command(this.actions, { type: 'pass' });
};


Command.prototype.build = function(q, r, distance){
	return new Command(this.actions, { type : 'pass', q: q, r: r})
};

Command.prototype.advanceSpadeTrack = function() {
	return new Command(this.actions, { type: 'advance spades' });
};

Command.prototype.advanceShippingTrack = function() {
	return new Command(this.actions, { type: 'advance shipping' });
};

Command.prototype.transform = function(q,r, distance) {
	return new Command(this.actions, { type: 'transform', q: q, r: r, distance: distance });
};

Command.prototype.selectFaction = function(faction) {
	return new Command(this.actions, { type: 'select faction', faction: faction });
};

// burn [amt]
// pass [bonus tile]
// upgrade shipping
//
