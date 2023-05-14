const express = require('express')

const app = express()

app.use(express.json({
  limit: '20mb'
}))

app.use(express.urlencoded({
  extended: true
}))

app.use('/twitch', require('./routes/twitch'))

module.exports = app
