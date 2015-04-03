var _ = require('lodash');
var Game = require('./Game');
var World = require('./World');
var Hex = require('./Hex');
var Players = require('./Players');
var Player = require('./Player');
var Buildings = require('./buildings');

module.exports.create = function(numberOfPlayers){
    var height = 9;
    var width = 13;

    var players = new Players;
    var hexs = [];

    var numberOfCoords = height * width;

    for(var x = 0; x < numberOfCoords; x++){
        var q = Math.floor(x / width);
        var r = x % width;
        console.log({q:q,r:r});
        var hex = new Hex(q,r);
        hex.terrainType = World.terrains[x];
        hexs[x] = hex;
    }

    for(var p = 0; p < numberOfPlayers; p++){
        players.addPlayer(new Player());
    }

    var grid = new World(width, height, hexs);

    var buildings = new Buildings(players, grid);
    return new Game(players, grid, buildings);
};

