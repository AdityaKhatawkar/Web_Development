require('dotenv').config(); //Loads environment variables from a .env file into process.env. | security ke liye use kiya.

// express: Framework for building web servers.
// body-parser: Parses incoming request bodies (used here for form data).
// twilio: Library to interact with Twilio's API

const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const path = require('path');


const app = express();
const port = process.env.PORT || 3000;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname))

app.get('/',(req,res)=>{
  res.sendFile(Path.join(__dirname,"index.html"))
})


app.post('/send-sms', (req, res) => {
  const { to, body } = req.body;

  client.messages
    .create({
      body: body,
      to: to,
      from: process.env.TWILIO_PHONE_NUMBER,
    })
    .then(() => {
      res.send('SMS sent successfully!');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(`Error sending SMS ${err.message}`);
    });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
