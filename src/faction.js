
var buildings = {
	DWELLING: {
		upgradesTo: ['TRADING_POST'],
		cost: '1w2g',
		pointValue: 1,
		total: 12
	}, 
	TRADING_POST: {
		upgradesTo: ['STRONGHOLD', 'TEMPLE'],
		cost: {
			adjacent: '2w2g',
			notAdjacent: '2w4g'
		},
		pointValue: 2,
		total: 5
	},
	TEMPLE: {
		upgradesTo: ['SANCTUARY'],
		cost: '2w3g',
		pointValue: 2,
		total: 3
	},
	STRONGHOLD: {
		cost: '3w6g',
		pointValue: 3,
		total: 1
	},
	SANCTUARY: {
		cost: '3w6g',
		pointValue: 3,
		total: 1
	}
};

