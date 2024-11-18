const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./Node/Built-in Modules/content/first.txt", "utf8", (err, result) => { //will print buffer if utf not mentioned
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile(
    "./Node/Built-in Modules/content/second.txt",
    "utf8",
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      const second = result;
      writeFile(
        "./Node/Built-in Modules/content/result_async.txt",
        `Here is the result : ${first}, ${second}`,
        (err, result) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log("done with this task");
        }
      );
    }
  );
});
console.log("starting next task");
