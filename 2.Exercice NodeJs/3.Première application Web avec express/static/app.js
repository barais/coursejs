
window.onload = function(){
	goRed();
}


function sendDataDemo(){
var data = new FormData();
data.append('user', 'person');
data.append('pwd', 'password');
data.append('organization', 'place');
data.append('requiredkey', 'key');

var xhr = new XMLHttpRequest();
xhr.open('POST', '/foo1', true);
xhr.onload = function () {
    // do something to response
    console.log(this.responseText);
};
xhr.send(data);
}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "/foo", true);
  xhttp.send();
}

function goRed()
{
			var d = document.getElementById("blink") ;
			d.style.color='red';
			d.innerHTML = 'La vie est belle';
			setTimeout(goWhite, 500);
			var monimage = document.getElementById("img1") ;
			monimage.src = 'img/img1.jpg';
}
function goWhite()
{
		var d = document.getElementById("blink") ;
		d.style.color='blue';
		d.innerHTML = 'La vie est moche';

		var monimage = document.getElementById("img1") ;
		monimage.src = 'img/img2.jpg';
        setTimeout(goRed, 1000);

}
