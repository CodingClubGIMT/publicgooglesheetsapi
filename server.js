const express = require('express')
const cors = require('cors')
const apicache = require('apicache')
const utils = require('./utils.js')

const app = express()
let cache = apicache.middleware

app.set('port', (process.env.PORT || 5000));
app.use(cors())

app.get('/', function (req, res) {
  res.json([])
})

app.get('/sheet/:sheetId', cache('5 hours'),function (req, res) {
  console.log('only once');
  utils.gsTojson(req.params.sheetId)
       .then(results => {
         res.json(results)
       })
       .catch(err => res.json([]))
})

app.get('/clear', function (req, res) {
  apicache.clear()
  res.json([])
})

app.get('/*', function (req, res) {
  res.json([])
})

app.listen(app.get('port'), function () {
  console.log(`Example app listening on port ${app.get('port')}!`)
})
