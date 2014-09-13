var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

var server = app.listen(3000, function () {
  console.log('Listening on port %d', server.address().port);
});