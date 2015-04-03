var express = require('express');
var bodyParser = require('body-parser');

var makeGame = require('./GameFactory').create;

var app = express();

app.set('port', (process.env.PORT || 3000));
app.set('views', __dirname+'/views');
app.set('view engine', 'jade');


app.use(express.static(__dirname+'/../bower_components'));
app.use(express.static(__dirname+'/../public'));

app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

app.get('/api/game',function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(makeGame(2)));
});

app.get('/', function (req, res) {
    res.render('index');
});

var server = app.listen(app.get('port'), function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening at http://%s:%s', host, port);

});