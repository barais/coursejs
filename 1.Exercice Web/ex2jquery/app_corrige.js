function blinker()
{
	if(document.getElementById("blink")){
		var d = document.getElementById("blink") ;
		d.style.color= (d.style.color=='red'?'white':'red');
            	setTimeout('blinker()', 500);
        }
}
