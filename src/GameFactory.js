var Game = require('./Game');
var World = require('./World');
var HexCoord = require('./HexCoord');
module.exports.create = function(){
    var height = 9;
    var width = 13;

    var coords = [];

    var numberOfCoords = height * width;

    for(var x = 0; x < numberOfCoords; x++){
        var q = Math.floor(x / width);
        var r = Math.floor(x / height);

        coords[x] = new HexCoord(q,r);
    }
    var grid = new World(width, height, coords);
    return new Game([], grid);
};

