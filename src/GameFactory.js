var _ = require('lodash');
var Game = require('./Game');
var World = require('./World');
var Hex = require('./Hex');
var Players = require('./Players');
var Player = require('./Player');
var Buildings = require('./buildings');
var terrains = require('./terrains')

//TODO really doesn't go here
// #shame
var actionAssert = require('./actions/util/assert'); 
var commandExecutor = require('./CommandExecutor');
var command = require('./command');
// #endshame

module.exports.create = function(numberOfPlayers, randomize) {
    var height = 9;
    var width = 13;

    var players = new Players;
    var hexs = [];

    var numberOfCoords = height * width;

    for(var x = 0; x < numberOfCoords; x++){
        var q = Math.floor(x / width);
        var r = x % width;
        //console.log({q:q,r:r});
        var hex = new Hex(q,r);
        hex.terrainType = World.terrains[x];
        hexs[x] = hex;
    }

    for(var p = 0; p < numberOfPlayers; p++){
        players.addPlayer(new Player());
    }

    var grid = new World(width, height, hexs);

    var buildings = new Buildings(players, grid);
	var game = new Game(players, grid, buildings);

	game.next();
	if(randomize) {
		_.times(numberOfPlayers, _.partial(randomizeFaction, game) );
	}

	return game;
};

function randomizeFaction(game) {
	actionAssert.phase(game, 'FACTION_SELECT');	
	
	var choice = _.sample(game.factions.listAvailable());
	var executor = commandExecutor(game);
    var player = game.getCurrentPlayer();
    var terrainName = game.factions.get(choice).homeTerrain;
    var terrain = terrains[terrainName];
    var hex = findFirstOfType(game, terrain.value);
	executor.execute(player, command().selectFaction(choice).build('DWELLING', hex.q, hex.r));
}

function findFirstOfType(game, typeValue){
    return _.chain(game.world.hexs)
        .filter(function(hex){return hex.terrainType.value == typeValue})
        .first()
        .value();
}