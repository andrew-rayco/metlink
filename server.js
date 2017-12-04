var express = require('express')
var path = require('path')
var routes = require('./routes')

var app = express()

app.use('/api-v1', routes)
app.use(express.static(path.join(__dirname, '/public')))

let PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('listening to this joint on port', PORT)
})
