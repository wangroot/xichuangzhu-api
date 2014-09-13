var express = require('express');
var app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'xcz'
});

connection.connect();

// 获取加精作品的更新信息
app.get('/update', function (req, res) {
  connection.query('SELECT * from work WHERE highlight = 1', function (err, rows) {
    if (err) throw err;

    var update_info = [];

    rows.forEach(function (row) {
      update_info.push({
        'id': row.id,
        'update_at': row.updated_at
      });
    });

    res.json(update_info);
  });
});

// Error handle
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

var server = app.listen(3000, function () {
  console.log('Listening on port %d', server.address().port);
});
