var gameUtils = require('./gameUtils');
var Factions = require('./Factions');

/*
 * Phases:
 *		NEW
 *		FACTION_SELECT
 *		PLACE_DWELLINGS
 *		PLAY
 *	 		LEECHING
 *	 		END OF ROUND BONUS SPADES
 *		GAME_OVER
 */

var Game = function(players, world, buildings){
    this.id = gameUtils.makeId();
    this.phase = "NEW";
    this.rounds = 0;
    this.currentPlayerId = players.turnOrder[0];
    this.world = world;
    this.players = players;
    this.buildings = buildings;
	this.history = [];

	this.getCurrentPlayer = function() {
		var players = this.players, 
			id = this.currentPlayerId;

		return players.getPlayer(id);
	}

	this.next = function() {
		switch(this.phase) {
			case 'NEW':
				this.startFactionSelect();
				break;

			case 'FACTION_SELECT':
				if(this.players.allHaveFactions()) {
					delete this.factions;
					this.startPlay();
				}
				else {
					this.nextPlayer();
				}
				break;
		}
	}

	this.nextPlayer = function() {
		var players = this.players,
			id = this.currentPlayerId;

		this.currentPlayerId = players.nextInTurnOrder(id);
	}
		
	this.startFactionSelect = function() {
		this.phase = 'FACTION_SELECT';
		this.currentPlayerId = players.turnOrder[0];

		//If faction is "Chaos magicians", skip them!
		
		this.factions = new Factions();
	}

	this.startPlay = function() {
		this.round = 0;
		this.currentPlayerId = players.turnOrder[0];
		this.phase = "PLAY";
	}

    this.endCurrentTurn = function() {
        if(this.isEndOfGame()){
            this.phase = 'GAME_OVER';
        }

        if(this.isEndOfRound()){
            this.rounds++;
            this.players.resetPlayersForRound();
        }

        this.currentPlayerId = players.nextInTurnOrder(this.currentPlayerId)
    };

    this.isEndOfRound = function(){
        return this.players.getPlayers()
            .reduce(function(b, b1){return b&&b1.passed}, true)
    }

    this.isEndOfGame = function(){
        if(this.rounds >= 6){
            return true;
        }
        return false;
    }
};

module.exports = Game;
