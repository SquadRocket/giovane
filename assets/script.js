$(document).ready(function(){
$("#dropdown").click(function(){
    $("#menudesk").toggle();
    
  });
  if(window.screen.width > 360){
  $("#plus1").click(function(){
    $("#contentbox1").toggle("fast");
    
  });
  $("#plus2").click(function(){

    $("#contentbox2").toggle("fast");
    
  });
  $("#plus3").click(function(){

    $("#contentbox3").toggle("fast");
    
  });
}
});