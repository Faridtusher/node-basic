const http = require('http')
const port = 3000
const hostname = '127.0.0.1'

const myServer = http.createServer((req, res) =>{
   res.end('The name of my country is Bangladesh, I love my country')
})

myServer.listen(port, hostname, () =>{
   console.log(`My server is running in : http://${hostname}:${port}`)
})
