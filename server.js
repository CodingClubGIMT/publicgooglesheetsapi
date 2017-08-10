const express = require('express')
const cors = require('cors')
const utils = require('./utils.js')
const app = express()

app.set('port', (process.env.PORT || 5000));
app.use(cors())

app.get('/', function (req, res) {
  res.json([])
})

app.get('/sheet/:sheetId', function (req, res) {
  let sheetId = req.params.sheetId;
  utils.gsTojson(req.params.sheetId)
       .then(results => {
         res.json(results)
       })
       .catch(err => res.json([]))
})

app.get('/*', function (req, res) {
  res.json([])
})

app.listen(app.get('port'), function () {
  console.log(`Example app listening on port ${app.get('port')}!`)
})
