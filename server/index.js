const http = require('http');
const port = 3000
const localhost = '127.0.0.1'


// create the server
const myServer = http.createServer((req, res) =>{

   res.writeHead(200, {'Content-Type' :'Text/html'})
   res.write('<h1>Hello</h1>')
   res.end();
})


myServer.listen(port, localhost, () =>{
   console.log(`Your server is running http://${localhost}:${port}`)
})