const http = require("http");
http.createServer((req,res) => {
  console.log("1 - server created");
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Aloha world');
}).listen(process.env.PORT || 8080);
  console.log("2 - after createServer");
