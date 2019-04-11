/*
const http = require("http");
http.createServer((req,res) => {
  console.log("1 - server created");
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Aloha world');
}).listen(process.env.PORT || 8080);
  console.log("2 - after createServer");
*/



const http = require("http"), fs = require('fs');
  http.createServer((req,res) => {
    console.log("1 - server created");
    const path = req.url.toLowerCase();
      switch(path) {
        case '/':
          fs.readFile("public/home.html", (err, data) =>{
          if (err) return console.error(err);
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(data.toString());
        });
          break;
        case '/about':
          fs.readFile("public/about.html", (err, data) =>{
          if (err) return console.error(err);
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(data.toString());
        });
          break;
        default:
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.end('Yo! This page don\'t work or exist right now!!');
          break;
        }
    //res.writeHead(200, {'Content-Type': 'text/plain'});
    //res.end('Aloha world');
  }).listen(process.env.PORT || 3000);
    console.log("2 - after createServer");
