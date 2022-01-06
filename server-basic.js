const http = require('http');


const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer((req , server ) => {
  server.statusCode = 200;
  server.setHeader('Content-Type' , 'text/plain');
  server.end('Hello World');

  
});


server.listen(port , hostname , () => {

  console.log(`Server Running at http://${hostname}:${port}`);
});


