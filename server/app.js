const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const url = require('url');
const app = global.app = express();
const jwt = require("jsonwebtoken");
const server = http.createServer(app);
const _ = require('lodash');
const io = require('socket.io').listen(server);

app.use(global.jsonParser = bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(express.static(path.join(__dirname, '../dist/ticTacToe')));
app.use(require('./routes/auth'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/ticTacToe/index.html'));
});

//var db = require("./models");

//db.engine.sync().then(function () {
  //db.init();
  server.listen(3000, function () {
    console.log('Сервер работает! Порт: 3000');
  });  
//});
