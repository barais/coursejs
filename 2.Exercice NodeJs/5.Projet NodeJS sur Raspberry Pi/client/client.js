$(function(){

  $("#encode").click(function(){
  var data = new Object();
  data.morse= $("#montext").val();
  $.post('/morse',data,function(result){
    console.log(result.titi);
    clignotte(result.titi,0)

  });
});

function clignotte(machaine, i){

  var c = machaine.substring(i,i+1);
  if (c== '.'){
    swithon(machaine, i,1000);
  }else if(c=="-"){
    swithon(machaine, i,2000);
  }else{
    $("#malumiere").attr("src", 'img/led.svg');
    setTimeout(function(){
      waitEteint(machaine,i);
    },1000);
  }
}


function waitEteint(machaine,i){
  setTimeout(function(){
    i = i+1;
    if (i< machaine.length){
    clignotte(machaine,i);
  }
},1000);
}

function swithon(machaine,i,time){
  $("#malumiere").attr("src", 'img/led-allume.svg');
  setTimeout(function(){
    $("#malumiere").attr("src", 'img/led.svg');
    waitEteint(machaine,i);
  },time);
}



  $("#ellume").click(function(){
		    $("#malumiere").attr("src", 'img/led-allume.svg');
  });
  $("#eteindre").click(function(){
		    $("#malumiere").attr("src", 'img/led.svg');
  });


});

/*for(var i = 0; i< result.titi.length; i++){
  var c = result.titi.substring(i,i+1);
  if (c== '.'){
    $("#malumiere").attr("src", 'img/led-allume.svg');
    setTimeout(function(){
      $("#malumiere").attr("src", 'img/led.svg');
    },250);
  }else if(c=="-"){
    $("#malumiere").attr("src", 'img/led-allume.svg');
    setTimeout(function(){
      $("#malumiere").attr("src", 'img/led.svg');
    },500);

  }else{
    $("#malumiere").attr("src", 'img/led.svg');
    setTimeout(function(){
    },500);

  }*/


  /*var i = 0;
  var k= 0;
  var j =0;
  setInterval(function(){
      if (i< result.titi.length){
      if (j==1){
        $("#malumiere").attr("src", 'img/led.svg');
        j=0;
      }else{
      var c = result.titi.substring(i,i+1);
      if (c== '.'){
        $("#malumiere").attr("src", 'img/led-allume.svg');
        i = i+1;
        j= j+1;
      }else if(c=="-"){
        $("#malumiere").attr("src", 'img/led-allume.svg');
        if (k == 1){
          i = i+1;
          k=0;
          j= j+1;
        }else {
          k = k+1;
        }
      }
      else{
        $("#malumiere").attr("src", 'img/led.svg');
        i = i+1;
        j= j+1;
      }
    }}
  },1000);*/
