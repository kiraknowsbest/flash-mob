var express = require('express');
var routes = require('./router');
var bodyParser = require('body-parser');
var db = require('./db/db').sequelize;
var session = require('./db/db').session;
var store = require('./db/db').store;

var app = express();

app.use(bodyParser.json());
// creating session 
app.use(session({
  key: 'flashMob_cookie',
  secret: 'purposeful_llama_secret',
  store: store,
  resave: true,
  saveUninitialized: true
}));
app.use('/', routes);

var port = process.env.port || 3000;

app.listen(port, function () {
  console.log('Server listening on localhost:', port);
});