
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const connection = require('./db/connection')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.all('/*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-type");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});


app.get('/', function (req, res) {
  res.send('Hello World!');
});

/**
 * Students API
*/
app.get('/students', (req, res) => {
  // Query
  connection.query('SELECT * FROM student',  (error, results, fields) => {
    if (error) throw error;
    res.status(200).json(results)
  });
  
});
app.post('/students', (req, res) => {
  const student = req.body;
  // Query
  const query = connection.query(`
    INSERT INTO student(id_carrer, name, lastname_p, lastname_m)
    VALUES(?, ?, ?, ?)
    `,
    [student.id_carrer, student.name, student.lastname_p, student.lastname_m],  (error, results, fields) => {
    if (error) throw error;
    res.status(200).json(results)
  });
  console.log(query.sql)
});

/**
 * Profesors API
 */

app.get('/professors', (req, res) => {
  // Query
  connection.query('SELECT * FROM professor',  (error, results, fields) => {
    if (error) throw error;
    res.status(200).json(results)
  });
  
});
app.post('/professors', (req, res) => {
  const professor = req.body;
  // Query
  connection.query(`
    INSERT INTO professor
    (name, lastname_p, lastname_m, teaching)
    VALUES(?, ?, ?, ?)
    `,
    [professor.name, professor.lastname_p, professor.lastname_m, professor.teaching],  (error, results, fields) => {
    if (error) throw error;
    res.status(200).json(results)
  });
});

/**
* Carrer API
*/
app.get('/carrers', (req, res) => {
  // Query
  connection.query('SELECT * FROM carrer',  (error, results, fields) => {
    if (error) throw error;
    res.status(200).json(results)
  });
});
app.post('/carrers', (req, res) => {
  const carrer = req.body;
  // Query
  connection.query('INSERT INTO carrer(description) VALUES(?)', [carrer.description],  (error, results, fields) => {
    if (error) throw error;
    res.status(200).json(results)
  });
});

app.listen(5000, function () {
  console.log('Listening on port 5000');
});