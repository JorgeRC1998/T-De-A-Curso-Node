/*var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)*/

var express = require('express')
var app = express()
//navegacion entre paginas html
app.use(express.static(__dirname + '/publicfolder'))
 
app.listen(3000)