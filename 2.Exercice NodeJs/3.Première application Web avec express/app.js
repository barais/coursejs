var express = require('express');
var app = express();


function maFonction(res){
  console.log("cool");
  res.send('Hello world');

}
app.get('/foo', function (req, res) {
  maFonction(res);

});

app.post('/foo1', function (req, res) {
  console.log(req);


});



app.use(express.static('static'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
