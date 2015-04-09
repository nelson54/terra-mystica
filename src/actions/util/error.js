var _ = require('lodash');

module.exports = error;

function error(typeVal, msg) {
	throw new Error(typeVal, msg);
}

function Error(typeVal, msg) {
	this._types = !_.isArray(typeVal) ? [typeVal] : typeVal; 
	this.msg = msg;
}

Error.prototype.is = function() {
	var types = this._types;
	return _.every(arguments, function(type) {
		 return _.contains(type, type);
	});
}
