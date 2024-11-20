// npm - global command, comes with node
// npm --version  -> to check version of npm

// local dependency -> use it only in this particular project
// npm i <packageName>

// global dependency -> use it in any project
// npm install -g <packageName>
// sudo install -g <packagename> on mac

// package.json - manifest file (stores important info about project/package)
// manual approach (creates package.json in the root, create properties etc)
// npm init (step by step, press enter to skip) sarre set karne ke liye option dega
// npm init -y (everything default) saare questions skip karke default lega

//package will be stored as a dependency
//we need package.json to provide info about our project. It contains the property "dependencies" which will show
//the dependencies that our project is using

//when we install the first dependency like lodash (npm i lodash), npm creates node_modules folder which contains
//the dependencies

//if trying to install package with multiple dependencies (npm i bootstrap), then other dependencies are also installed



const _ = require('lodash') //_ is a common way to use

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)