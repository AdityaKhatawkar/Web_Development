const http = require('http')
const server = http.createServer((req,res)=>{
    console.log("Server on")
    res.writeHead(200,{'content-type':'text/html'})
    res.write("<h1>HELLO</h1>")
    res.write("<p>How was your day??!</p>")
    res.end()
})
server.listen(5000)
