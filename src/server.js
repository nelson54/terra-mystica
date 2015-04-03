var express = require('express');
var bodyParser = require('body-parser');

var makeGame = require('./GameFactory').create;

var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.static('../bower_components'));
app.use(express.static('../public'));

app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

app.get('/api/game',function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(makeGame(2)));
});

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!'});
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening at http://%s:%s', host, port);

});