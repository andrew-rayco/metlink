var express = require('express')
var path = require('path')
var request = require('superagent')

var app = express()

app.use(express.static(path.join(__dirname, '/public')))

// These routes aren't working
// app.get('/', function (req, res) {
//   console.log('hitting route')
//   res.send('hello')
// })
//
app.get('/test', function (req, res) {
  request
    .get('https://www.metlink.org.nz/api/v1/StopDepartures/7093')
    .end((err, result) => {
      if (err) {
        console.log('oh no! Error!:', err)
      } else {
        res.json(result.body)
      }
    })
})

app.listen(3000, () => {
  console.log('listening to this joint on port 3000')
})
