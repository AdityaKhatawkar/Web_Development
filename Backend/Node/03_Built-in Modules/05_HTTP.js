const http = require("http");

//req -> incoming request by the client
//res -> response that we will send back

const server = http.createServer((req, res) => {
  // console.log(req) //Wont display unless reloaded because the server is waiting for the request object
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  // res.write('Welcome to our home page')
  // res.end()
  else if (req.url === "/about") { // url mai /about lagao
    res.end("This is the about page!! :D");
  } else { //kuch aur hai toh error
    res.end(`<h1>Oops! wrong url T_T</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back to home</a>`);
  }
});

server.listen(5000); //What port out server is gonna be listening to
