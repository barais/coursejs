var bodyParser = require('body-parser')
var express = require('express');
var app = express();
var morse = require('morse');


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
   extended: true
})); 
 


app.post('/morse', function (req, res) {
	if (req.body.encode == 'true'){
		var encoded = morse.encode(req.body.morse);
		var result = new Object();
		result.titi = encoded;
		res.send(result);
	}else {
		var result = new Object();
		result.titi = req.body.morse;
		res.send(result);
	}


});
app.post('/morse2', function (req, res) {
	console.log('hello world');
});



app.use(express.static('../client'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
