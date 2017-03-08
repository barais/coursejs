var bodyParser = require('body-parser')
var express = require('express');
var app = express();
var morse = require('morse');


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
   extended: true
}));



app.post('/morse', function (req, res) {
		var encoded = morse.encode(req.body.morse);
		var result = new Object();
		result.titi = encoded;
		res.send(result);
});



app.use(express.static('../client'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
