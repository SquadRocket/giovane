
$(document).ready(function(){
  $(".contentbox1").hide();
  $(".contentbox2").hide();
  $(".contentbox3").hide();
  $("#teste").hide();
  $(".navp").click(function(){
    $(".menudesk").slideToggle("fast");
  


  });
  $("#mostrarmais").click(function(){
    $("#teste").show(500);
    $("#mostrarmenos").show();
    $("#mostrarmais").hide();
  });
  $("#mostrarmenos").click(function(){
    $("#teste").hide(500);
    $("#mostrarmenos").hide();
    $("#mostrarmais").show();
  });
  $(".box1").click(function(){
    $(".contentbox1").slideToggle(500);

  });
  $(".box2").click(function(){
    $(".contentbox2").slideToggle(500);

  });
  $(".box3").click(function(){
    $(".contentbox3").slideToggle(500);

  });

  
});
