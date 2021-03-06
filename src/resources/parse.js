var validator = /^(?:\d+\s*(?:w|p|c|pw)\s*)+$/;
var expr = /(\d+)\s*(w|p|c|pw)\s*/g;
var codeToType = {
	w: 'workers',
	p: 'priests',
	c: 'coins',
	pw: 'power'
};

function parseResourceString(str) {
	if(!validator.test(str))
		throw 'invalid resource string: \"' + str '\"';

	var match, amount, code, type;
	var accumulator = {
		workers: 0,
		coin: 0,
		priests: 0,
		power: 0
	};

	while(match = regex.exec(str)) {
		amount = parseInt(match[1], 10);
		code = match[2];
		type = codeToType[code];	
		
		accumulator[type] += amount;	
	}

	return accumulator;
}

module.exports = parseResourceString;
