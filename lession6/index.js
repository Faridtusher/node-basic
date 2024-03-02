const http = require('http')
const fs = require('fs')

const port = 3000
const hostname = '127.0.0.1'

// create the server
const server = http.createServer((req, res) =>{
 
   if(req.url === '/'){
      fs.readFile('index.html', 'utf-8', (err, data) =>{

         if(err){
            console.log(err)
         }
         else{
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
         }
      })
   }

   else if(req.url === '/about'){
      fs.readFile('about.html', 'utf-8', (err, data) =>{
         if(!err){
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()
         }
         else{
            console.log(err)
         }
      })
   }

   else if (req.url === '/contact') {
      fs.readFile('contact.html', 'utf-8', (err, data) => {
         if (!err) {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()
         }
         else {
            console.log(err)
         }
      })
   }

   else {
      fs.readFile('404.html', 'utf-8', (err, data) => {
         if (!err) {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()
         }
         else {
            console.log(err)
         }
      })
   }
})


// run the server
server.listen(port, hostname, () =>{
   console.log(`Your server is running : http://${hostname}:${port}`)
})