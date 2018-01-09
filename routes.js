let express = require('express')
let router = express.Router()
let request = require('superagent')

let url = 'https://www.metlink.org.nz/api/v1/StopDepartures/'

router.post('/to-town', function (req, res) {
  let homeStop = req.body.homeStop
  request
    .get(url + homeStop)
    .end((err, result) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json(result.body)
      }
    })
})

router.post('/to-home', function (req, res) {
  let townStop = req.body.townStop
  request
    .get(url + townStop)
    .end((err, result) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json(result.body)
      }
    })
})

module.exports = router
