var browserify = require('browserify-middleware');
var express = require('express');
var favicon = require('serve-favicon');
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname);
app.set('port', (process.env.PORT || 3000));

app.get('/public/app.js', browserify(__dirname + '/client.js'));
app.use(favicon(__dirname + '/favicon.ico'));

app.get('/', function (req, res) {
  // res.send('Hello World!');
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

var server = app.listen(app.get('port'), function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
