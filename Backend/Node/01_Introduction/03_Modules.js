// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04_names') //To access the shared variables between files
const sayHi = require('./05_utils')
const data = require('./06_alternative')
console.log(data)
require('./07_func_in_module') //The function in the module is invoked even though its not exported 
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
//When we import a module, we actually invoke it