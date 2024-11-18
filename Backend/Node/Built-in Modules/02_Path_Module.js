//Allows to interact with file paths easily.

const path = require('path')

//seperator property returns platform specific seperator
console.log(path.sep) // '\' ko return karega as file path mai \ ka use karte for seperation.

//Join sequence of path segments using this seperator and returns a normalized resulting path.
const filePath = path.join('/content', '/subfolder','/test.txt') // '/' converted to '\' because thats the seperator!!!!
console.log(filePath)

//If we only want last portion of our path
const base = path.basename(filePath)
console.log(base)

//returning absolute path 
const absolute = path.resolve(__dirname, 'content','subfolder','test.txt') //dirname current js file ka absolute path hai
console.log(absolute)