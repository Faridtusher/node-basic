const http = require('http')

const port = 3000
const hostname = '127.0.0.1'

// create the server
const myServer = http.createServer((req, res) =>{

   res.writeHead(200, {'Content-Type':'text/html'})
   res.write('<H1>Hello</H1>')
   res.end()
})

myServer.listen(port, hostname, () =>{
   console.log(`Your server is running : http://${hostname}:${port}`)
})