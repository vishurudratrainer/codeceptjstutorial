var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(express.urlencoded());

app.get('/', function (req, res) {
  console.log(__dirname + '/public/index.html')
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/bootstrap', function (req, res) {

  res.sendFile(path.join(__dirname + '/public/bootstrapform.html'));
});

app.get('/prompt', function (req, res) {

  res.sendFile(path.join(__dirname + '/public/prompt.html'));
});
app.get('/confirm', function (req, res) {

  res.sendFile(path.join(__dirname + '/public/confirm.html'));
});

app.get('/alert', function (req, res) {

  res.sendFile(path.join(__dirname + '/public/alert.html'));
});

app.get('/iframe1', function (req, res) {

  res.sendFile(path.join(__dirname + '/public/iframe1.html'));
});

app.get('/datatestid', function (req, res) {

  res.sendFile(path.join(__dirname + '/public/locator.html'));
});

app.post('/', function (req, res, next) {
  console.log(JSON.stringify(req.body))
  res.send(JSON.stringify(req.body));
});

app.post('/bootstrap', function (req, res, next) {
  console.log(JSON.stringify(req.body))
  res.send(JSON.stringify(req.body));
});

app.get('/admin', function (req, res) {

  res.sendFile(path.join(__dirname + '/public/admin.html'));
});

app.post('/admin', function (req, res, next) {
  console.log(JSON.stringify(req.body))
  res.send('Hello'+req.body.username);
});

app.listen(3001);
module.exports = app;
