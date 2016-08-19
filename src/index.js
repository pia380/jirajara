var express = require('express');
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.json())

app.post('/event', function (req, res) {
  console.log('body', req.body.hello)
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
