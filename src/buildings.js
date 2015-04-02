var types = {
	DWELLING: {
		upgradesTo: ['TRADING_POST']	
	}, 
	TRADING_POST: {
		upgradesTo: ['STRONGHOLD', 'TEMPLE']
	},
	TEMPLE: {
		upgradesTo: 'SANCTUARY'
	},
	STRONGHOLD: {},
	SANCTUARY: {}
};

{ 
	position: { q: 0, r: 0 },
	owner: 0,
	type: 
