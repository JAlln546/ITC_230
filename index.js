'use strict'

let players = require("./lib/players.js");

const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
// allows direct navigation to static files
app.use(express.static(__dirname + '/public'));
app.use(require("body-parser").urlencoded({extended: true}));

let handlebars = require("express-handlebars");
app.engine(".html", handlebars({extname: '.html'}));
app.set("view engine", ".html");

// send static file as response
app.get('/', (req, res) => {
 res.type('text/html');
 res.sendFile(__dirname + '/public/home.html');
});

// send plain text response
app.get('/about', (req, res) => {
 res.type('text/plain');
 res.send('About page');
});

//handle GET
app.get('/delete', (req, res) => {
  let result = players.delete(req.query.name); //delete player
  res.render('delete', {name: req.query.name, result: result});
});

//handle POST
app.post('/get', (req,res) => {
  console.log(req.body);
  var header = 'Searching for: ' + req.body.name + '<br>';
  var found = players.get(req.body.name);
  res.render("details", {name: req.body.name, result: found});
});

// define 404 handler
app.use( (req,res) => {
 res.type('text/plain');
 res.status(404);
 res.send('404 - Not found');
});

//app.get('/', (req, res) => res.send('Hello World!'))

app.listen(app.get('port'), () => {
  console.log(`Express Has Started!`)
});
