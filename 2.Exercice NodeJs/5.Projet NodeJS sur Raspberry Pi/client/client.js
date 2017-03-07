$(function(){

  var meteo = true;
  $("#encode").click(function(){
//    console.log($("#montext").val());
  var data = new Object();
  data.encode = false;
  data.morse= $("#montext").val();
  $.post('/morse',data,function(result){
      meteo = result;
      if (meteo == 'fait beau'){

      }
      
  });




  });
});
