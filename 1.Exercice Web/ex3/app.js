
$(document).ready(function() {
	$("#montext").on("change propertychange paste keyup",function(){

		console.log("titi " +$("#montext").val().substring(0,1));

		var firstLetter = $("#montext").val().substring(0,1);
		var minuscule = false;
		if (firstLetter.toLowerCase() == firstLetter){
			minuscule = true;
		}
		if (!minuscule){
			console.log('ok');
			$("#montext").addClass("valid");
			$("#montext").removeClass("invalid");

		}else{
			console.log('nok');
			$("#montext").addClass("invalid");
			$("#montext").removeClass("valid");

		}
	});

$( "#progressbar" ).progressbar({
      value: 37
    });
	var l = 37;

	$("a.doSomething.toto").click(function(){
		window.alert("ok");
	});

	setInterval(function(){
		if (l>100)
			{
				l=0;
			}
		l = l+5;
		$( "#progressbar" ).progressbar({
			value: l
		});

		}, 1000);





        $("#hide").click(function() {
                $(".test").hide();
         });
				 $("#show").click(function() {
								 $(".test").show();
					});

});
