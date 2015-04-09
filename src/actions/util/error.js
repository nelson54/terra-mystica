var _ = require('lodash');

module.exports = error;

function error(typeVal, msg) {
	throw new GameError(typeVal, msg);
}

function GameError(typeVal, msg) {
	Error.call(this, msg);
	this._types = !_.isArray(typeVal) ? [typeVal] : typeVal; 
	this.stack = new Error().stack;
}

GameError.prototype = Object.create(Error.prototype);

GameError.prototype.is = function() {
	var types = this._types;
	return _.every(arguments, function(type) {
		 return _.contains(type, type);
	});
}
