var express = require('express')
var path = require('path')
var routes = require('./routes')
var bodyParser = require('body-parser')

var app = express()

// app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api-v1', routes)
app.use(express.static(path.join(__dirname, '/public')))

let PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log('listening to this joint on port', PORT) // eslint-disable-line no-console
})
