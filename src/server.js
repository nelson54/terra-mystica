var _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');

var makeGame = require('./GameFactory').create;

// front sends client code
var front = express();

var games = {};

front.set('port', (process.env.PORT || 4000));
front.set('views', __dirname+'/views');
front.set('view engine', 'jade');

front.use(express.static(__dirname+'/../bower_components'));
front.use(express.static(__dirname+'/../public'));

front.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
front.use(bodyParser.json()); // parse application/json


front.use(function(req, res, next) {
	req.locals = {};

	var oldRender = res.render;
	res.render = function(template, optionals) {
		oldRender.call(res, template, _.extend(req.locals, optionals || {}));
	};

	next();
});

front.param('gameId', function (req, res, next, id) {
	req.game = req.locals.game = games[id];
	next();
});

front.param('playerId', function(req, res, next, id) {
	var players = req.game.players;
	req.player = req.locals.player = players.getPlayer(id);
	next();
});

front.get('/', function (req, res) {
    res.render('games.jade', {games: _.values(games)});
});

front.get('/games/:gameId/players', function (req, res) {
    res.render('players.jade');
});

front.get('/game/:gameId/players/:playerId',function (req, res) {
    res.render('game.jade');
});

// api
var api = express();

api.use(function(req, res, next) {
    res.type('application/json');
	next();
});

api.param('gameId', function(req, res, next, id) {
	req.game = games[id];
	next();
});

api.param('playerId', function(req, res, next, id) {
	var game = req.game;
	if(!!game) 
		req.player = game.players.getPlayer(id);
	next();	
});

api.post('/game',function (req, res) {
    var game = makeGame(2);
    games[game.id] = game;

    res.json(game);
});

api.get('/game',function (req, res) {
    res.json(games);
});

api.get('/game/:gameId',function (req, res) {
    res.json(req.game);
});

api.get('/game/:id/players',function (req, res) {
    res.json(req.game.players);
});

api.get('/game/:gameId/players/:playerId',function (req, res) {
    res.json(req.player);
});

api.post('/game/:gameId/players/:playerId/shovel-track', function(req, res){
    req.player.upgradeShovelTrack();
    res.json();
});

api.post('/game/:gameId/players/:playerId/shipping-track', function(req, res){
    res.json();
});

front.use('/api', api);

var server = front.listen(front.get('port'), function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening at http://%s:%s', host, port);
});
