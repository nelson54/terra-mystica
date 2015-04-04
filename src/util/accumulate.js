var _ = require('lodash');

function accumulate() {
	var accumulator = arguments[0] || {};
	if(_.isObject(accumulator)) {
		var augmends = Array.prototype.slice.call(arguments, 1);
		_.forEach(augmends, function(augmend) {
			_.forOwn(accumulator, function(value, key) {
				accumulator[key] = _.add(value, augmend[key] || 0);		
			});
		});
	}

	return accumulator;
}

module.exports = accumulate;
