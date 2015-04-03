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

front.get('/', function (req, res) {
    res.render('games.jade', {games: _.values(games)});
});

front.get('/games/:gameId/players', function (req, res) {
    var game = games[req.params.gameId];
    res.render('players.jade', {game: game});
});

// api
var api = express();

api.post('/game',function (req, res) {
    var game = makeGame(2);
    games[game.id] = game;

    res.type('application/json');
    res.json(game);
});

api.get('/game',function (req, res) {
    //TODO this is super wrong.
    var game = makeGame(2);
    games[game.id] = game;

    res.type('application/json');
    res.json(game);
});

api.get('/game/:id',function (req, res) {
    res.type('application/json');
    res.json(games[req.params.id]);
});

api.get('/game/:id/players',function (req, res) {
    res.type('application/json');
    res.json(games[req.params.id].players);
});

api.get('/game/:gameId/players/:playerId',function (req, res) {
    res.type('application/json');
    res.json(games[req.params.gameId].players.players[req.params.playerId]);
});

front.use('/api', api);

var server = front.listen(front.get('port'), function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening at http://%s:%s', host, port);
});
