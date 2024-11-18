//Provides methods to interact with OS or even the server 

const os = require('os') //!no ./ as its a built in module

//Current user ke baare mai info
const user = os.userInfo()
console.log(user)

//System uptime ko check karne ke liye
const uptime = os.uptime()
console.log(uptime) //342923.062 😲

const currentOS = {
    name: os.type(),           //OS Name
    release: os.release(),     //release version
    totalmem: os.totalmem(),   //total RAM in bytes (Divide by 1024*1024*1024) for gbs
    freemem: os.freemem(),     //free RAM in bytes
}

console.log(currentOS)