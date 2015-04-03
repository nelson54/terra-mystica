var t = require('./terrains');
var plains = t.PLAINS,
    swamp = t.SWAMP,
    lakes = t.LAKES,
    forest = t.FOREST,
    mountain = t.MOUNTAIN,
    wasteland = t.WASTELAND,
    desert = t.DESERT,
    water = t.WATER,
    blank = t.__BLANK;


var World = function(width, height, hexs){

    this.hexs = hexs;

    this.width = width;
    this.height = height;

};

World.terrains = [
    plains, mountain, forest, lakes, desert, wasteland, plains, swamp, wasteland, forest, lakes, wasteland, swamp,
    desert, water, water, plains,swamp,water,water,desert,swamp,water,water,swamp, blank,
    blank,water, swamp, water, mountain, water, forest, water, forest, water, mountain, water, blank,
    forest, lakes, desert, water,water,wasteland, lakes, water, wasteland, water, wasteland, plains, blank,
    swamp, plains, wasteland, lakes, swamp, plains, mountain, desert, water, water, forest, swamp, lakes,
    mountain, forest, water, water, desert, forest, water, water, water, plains, mountain, plains, blank,
    blank, water, water, mountain, water, wasteland, water, forest, water, desert, swamp, lakes, desert,
    desert, lakes, plains, water, water, water, lakes, swamp, water, mountain,plains,mountain, blank,
    wasteland,swamp,mountain,lakes,wasteland,forest,desert,wasteland,mountain,water, lakes,forest,wasteland
];

module.exports = World;