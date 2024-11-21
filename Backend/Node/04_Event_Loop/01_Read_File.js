// The event loop in Node.js is like a manager that handles tasks. It keeps checking for work to do, like running code, 
// handling timers, or responding to requests. It makes sure everything happens one at a time without blocking anything else.

const { readFile, writeFile } = require('fs')

console.log('started a first task')

//Read file is async and doesn't block the code execution and gets offloaded to the event loop and gets executed
// in a separate thread of execution. while the file is being read, the program will continue to the next line after the 
//callback!!!!!!!!!!!!!!!!

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('completed first task')
})

console.log('starting next task')