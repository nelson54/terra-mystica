module.exports = {
	name: 'Witches',
	homeTerrain: 'FOREST',
	_witchFaction: WitchesFaction
};


function WitchesFaction() {
	return {
		supply: {
			priests: 6,
			bridges: 3
		},
		resources: {
			workers: 3,
			coins: 15,
			priests: 0
		},
		powerBowls: [5, 7, 0],
		shipping: {
			upgradeCost: '1p4c',
			distanceBonus: [0, 1, 2, 3],
			victoryPoints: [0, 2, 3, 4],
			current: 0,
			max: 3
		},
		shovel: {
			upgradeCost: '2w5c1p',
			shovelCosts: ['3w', '2w', '1w'],
			current: 0,
			max: 2
		},
		buildings: {
			DWELLING: {
				cost: '1w2c',
				income: ['1w', '1w', '1w', '1w', '1w', '1w', '1w', '1w', ''],
				inSupply: 10,
			},
			TRADING_POST: {
				cost: {
					adjacent: '2w3c',
					notAdjacent: '2w6c'
				},
				income: ['1pw2c', '1pw2c', '2pw2c', '2pw2c'],
				inSupply: 4
			},
			TEMPLE: {
				cost: '2w5c',
				income: ['1p', '1p', '1p'],
				//how to handle one time income?
				inSupply: 3
			},
			STRONGHOLD: {
				cost: '4w6c',
				income: ['2pw'],
				inSupply: 1
			},

			//TODO Sanctuary...
		},
	}
}

