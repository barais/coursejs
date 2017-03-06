$(function(){
  $("#myspan").on('mouseover', function(){
    $(this).css('color', 'red');
  });
  $("#myspan").on('mouseout', function(){
    $("#myspan").css('color', 'black');
  });
  $("#myspan").on('click', function(){
    $("#myspan").css('color', 'blue');
  });
  $("#myspan").on('dblclick', function(){
    $("#myspan").css('color', 'yellow');
  });
});
