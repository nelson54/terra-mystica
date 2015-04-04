var _ = require('lodash');
var parse = require('./parse');
var accumulate = require('../util/accumulate');

module.exports = Resource;

function Resource(hashOrString) {
	resource(hashOrString || emptyResources, this);
}

Resource.prototype.add = function(value) {
	var augmend = resource(value);
	return accumulate(new Resource(this), augmend);
};

Resource.prototype.subtract = function(vale) {
	var subtrahend = resource(value);
	return accumulate(new Resource(this), subtrahend);
};

Resource.prototype.negate = function() {
	return negate(new Resource(this));
};

var emptyResources = {
	workers: 0,
	coins: 0,
	priests: 0,
	power: 0
};

function resource(hashOrString, ctx) {
	var res = ctx || {};

	if(_.isObject(hashOrString)) {
		var hash = hashOrString;

		res.workers = hash.workers || 0;
		res.coins = hash.coins || 0;
		res.priests = hash.priests || 0;
		res.power = hash.power || 0;
	}
	else if(_.isString(hashOrString)) {
		var string = hashOrString;

		_.extend(res, parse(string));
	}
	
	return res;
}

function negate(hash) {
	_.forOwn(hash, function(value, key) {
		hash[key] = -value;
	});
}
