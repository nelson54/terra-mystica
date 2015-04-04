var _ = require('lodash');

module.exports = function command() {
	return new Command([]);
}

function Command(actions, nextAction) {
	this.actions = actions.slice();
	if(nextAction)
		this.actions.push(nextAction);
}

Command.prototype.burn = function(value) {
	var amount = value || 1;
	var actions = this.actions;
	var last = _.last(actions);

	if(last.type === 'burn') {
		last.amount += amount;
		return new Command(actions);
	}
	
	return new Command(actions, { type: 'burn', amount: amount });
}

Command.prototype.advanceSpadesTrack = function() {
	return new Command(this.actions, { type: 'advance spades' });
}

Command.prototype.advanceShippingTrack = function() {
	return new Command(this.actions, { type: 'advance shipping' });
}

Command.prototype.pass = function() { //TODO select a bonus tile for next round
	return new Command(this.actions, { type: 'pass' });
}

// burn [amt]
// pass [bonus tile]
// upgrade shipping
//
