const http = require('http')

//normal implementation of creating a server

// const server = http.createServer((req,res) => {
//     res.end('Welcome')
// })


//Using Event Emitter API
const server = http.createServer()
//emits request event
//subscribe to it, listen for it/ respond to it

server.on('request', (req,res) => { //server emits the request event behind the scenes
    res.end('Welcome!')
})

server.listen(5000)