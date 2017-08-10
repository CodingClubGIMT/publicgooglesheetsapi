const express = require('express')
const utils = require('./utils.js')
const app = express()

app.get('/', function (req, res) {
  res.json(['Hello World!'])
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

app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
})