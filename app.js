
const express = require('express');
const app = express();
const connection = require('./db/connection')<

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(5000, function () {
  console.log('Listening on port 5000');
});