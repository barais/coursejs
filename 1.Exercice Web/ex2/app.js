
window.onload = function(){
	goRed();
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
