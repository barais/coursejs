
$(function(){
	goRed();
});

function goRed()
{
			var d = $("#blink") ;
			d.css('color','red');
			d.html('La vie est belle');
			setTimeout(goWhite, 500);
			var monimage = $("#img1") ;
			monimage.attr("src", 'img/img1.jpg');
}
function goWhite()
{
   	var d = $("#blink") ;
		d.css('color','blue');
		d.html('La vie est moche');

		var monimage = $("#img1") ;
		monimage.attr("src", 'img/img2.jpg');
    setTimeout(goRed, 1000);

}
