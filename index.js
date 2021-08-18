let myData = {
  Hello: 1,
  World: 2,
  This: 3,
  'is a': 4,
  TEST: 5,
}

console.log('we runnin')

const { response } = require('express')
var express = require('express')

var app = express()

var server = app.listen(5000, listening)

function listening() {
  console.log('listening...')
}

app.get('/hello', sendAll)

function sendAll(req, res) {
  res.send(myData)
}
