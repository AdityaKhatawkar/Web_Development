require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const twilio = require('twilio')

const app = express()
const port = process.env.PORT || 3000

// Load sensitive information from environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = twilio(accountSid, authToken)

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/send-sms', (req, res) => {
    const { to, body } = req.body

    client.messages
        .create({
            body: body,
            to: to,
            from: process.env.TWILIO_PHONE_NUMBER // Use the environment variable
        })
        .then(() => {
            res.send('SMS sent successfully')
        })
        .catch((err) => {
            console.error(err)
            res.status(500).send('Error sending SMS :(')
        })
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
