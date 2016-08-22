var Promise = this.Promise || require('es6-promise').Promise;
var express = require('express');
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.json())

var agent = require('superagent-promise')(require('superagent'), Promise);
var PARTICLE_ACCESS_TOKEN = '62141e3f936fba476916e731fd945d203984c264';

app.post('/event', function (request, response) {
  console.log("new body is", request.body);
  agent
        .post('https://api.particle.io/v1/devices/' + request.body.coreid + '/sweepz?access_token=' + PARTICLE_ACCESS_TOKEN)
        .send('arg=' + 17)
        .end()

  response.status(200).end();
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
