//Interacting with file systems

const { readFileSync, writeFileSync } = require("fs");
// Short form of
// const fs = require('fs')
// fs.readFileSync()

//read from file
//path and encoding as parameters
const first = readFileSync("./Node/Built-in Modules/content/first.txt", "utf8");
const second = readFileSync(
  "./Node/Built-in Modules/content/second.txt",
  "utf8"
);

//write to file
writeFileSync(
  //Will overwrite if there is something in the file already
  "./Node/Built-in Modules/content/result-sync.txt",
  `Written!!!!!!!! : ${first}, ${second}`,
  { flag: "a" } //!Yeh add karne se overwrite nai hoga!!!
);
