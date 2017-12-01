let express = require('express')
let router = express.Router()
let request = require('superagent')

router.get('/to-town', function (req, res) {
  request
    .get('https://www.metlink.org.nz/api/v1/StopDepartures/4125')
    .end((err, result) => {
      if (err) {
        console.log('oh no! Error!:', err)
      } else {
        res.json(result.body)
      }
    })
})

router.get('/to-home', function (req, res) {
  request
    .get('https://www.metlink.org.nz/api/v1/StopDepartures/5515')
    .end((err, result) => {
      if (err) {
        console.log('oh no! Error!:', err)
      } else {
        res.json(result.body)
      }
    })
})

module.exports = router
