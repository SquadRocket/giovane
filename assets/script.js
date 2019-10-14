$(document).ready(function(){
  $(".contentbox1").hide();
  $("#teste").hide();
  $("#mostrarmenos").hide();


$("#dropdown").click(function(){
    $(".menudesk").toggle();
    
  });

  $("#plus1").click(function(){
    $(".contentbox1").toggle("fast");
    
  });
  $("#plus2").click(function(){

    $(".contentbox2").toggle("fast");
    
  });
  $("#plus3").click(function(){

    $(".contentbox3").toggle("fast");
    
  });
  $("#mostrarmais").click(function(){
    $("#teste").show();
    $("#mostrarmenos").show();
    $("#mostrarmais").hide();



  });
  $("#mostrarmenos").click(function(){
    $("#teste").hide();
    $("#mostrarmenos").hide();
    $("#mostrarmais").show();



  });
});

