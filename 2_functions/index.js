'use strict'

var http = require("http"), fs = require('fs'), qs = require("querystring");
let players = require("../lib/players.js");

function serveStatic(res, path, contentType, responseCode){
  if(!responseCode) responseCode = 200;
  fs.readFile(__dirname + path, function(err, data){
    if(!err){
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Internal Server Error');
    } else {
      res.writeHead(responseCode, {'Content-Type': contentType});
      res.end(data);
    }
  });
}

http.createServer((req, res) => {
  //this will separate the route from the query string
  let url = req.url.split("?");
  //next- convert query string to an object
  let query = qs.parse(url[1]);
  let path = url[0].toLowerCase();

  switch(path) {
    case '/':
      serveStatic(res, '/../public/home.html', 'text/html');
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('About');
      break;
    case '/get':
      // get player object
      let found = players.get(query.name);
      res.writeHead(200, {'Content-Type': 'text/plain'});
      //
      let results = (found) ? JSON.stringify(found) : "Result Not Found.";
      res.end('Results for ' + query.name + "\n" + results);
      break;
    case '/delete':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('delete');
      break;
    default:
      res.writeHead(404, {'Content-Type': "text/plain"});
      res.end('404: Page Not Found');
  }
}).listen(process.env.PORT || 3000);
