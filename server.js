var express = require('express')
var path = require('path')
var routes = require('./routes')

var app = express()

app.use('/api-v1', routes)
app.use(express.static(path.join(__dirname, '/public')))

app.listen(3000, () => {
  console.log('listening to this joint on port 3000')
})
