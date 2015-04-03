var _ = require('lodash');
var Game = require('./Game');
var World = require('./World');
var Hex = require('./Hex');
var Players = require('./Players');
var Player = require('./Player');
var terrains = require('./terrains');

module.exports.create = function(numberOfPlayers){
    var height = 9;
    var width = 13;

    var players = new Players;
    var coords = [];

    var numberOfCoords = height * width;

    for(var x = 0; x < numberOfCoords; x++){
        var q = Math.floor(x / width);
        var r = x % width;
        console.log({q:q,r:r});
        var coord = new Hex(q,r);
        coord.terrainType = terrains[_.shuffle(Object.keys(terrains))[0]];
        coords[x] = coord;
    }

    for(var p = 0; p < numberOfPlayers; p++){
        players.addPlayer(new Player());
    }
    var grid = new World(width, height, coords);
    return new Game(players, grid);
};

