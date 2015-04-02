function WitchesFaction() {
	return {
		supply: {
			priests: 6,
			bridges: 3
		},
		resources: {
			workers: 3,
			gold: 15,
			priests: 0
		},
		powerBowls: [5, 7, 0],
		shipping: {
			upgradeCost: '1p4g',
			distanceBonus: [0, 1, 2, 3],
			victoryPoints: [0, 2, 3, 4],
			current: 0,
			max: 3
		},
		shovel: {
			upgradeCost: '2w5g1p',
			shovelCosts: ['3w', '2w', '1w'],
			current: 0,
			max: 2
		},
		buildings: {
			DWELLING: {
				cost: '1w2g',
				income: ['1w', '1w', '1w', '1w', '1w', '1w', '1w', '1w', ''],
				inSupply: 10,
			},
			TRADING_POST: {
				cost: {
					adjacent: '2w3g',
					notAdjacent: '2w6g'
				},
				income: ['1pw2g', '1pw2g', '2pw2g', '2pw2g'],
				inSupply: 4
			},
			TEMPLE: {
				cost: '2w5g',
				income: ['1p', '1p', '1p'],
				//how to handle one time income?
				inSupply: 3
			},
			STRONGHOLD: {
				cost: '4w6g',
				income: ['2pw'],
				inSupply: 1
			},

			//TODO Sanctuary...
		},
	}
}

module.exports = WitchesFaction;
