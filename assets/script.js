$(document).ready(function(){
  $(".contentbox1").hide();
$("#dropdown").click(function(){
    $(".menudesk").toggle();
    
  });
  if(window.screen.width > 360){
  $("#plus1").click(function(){
    $(".contentbox1").toggle("fast");
    
  });
  $("#plus2").click(function(){

    $(".contentbox2").toggle("fast");
    
  });
  $("#plus3").click(function(){

    $(".contentbox3").toggle("fast");
    
  });
}else{
  $("#plus1").click(function(){
    $(".contentbox1").toggle("fast");
    
  });
  $("#plus2").click(function(){
    $(".contentbox2").toggle("fast");
    
  });
  $("#plus3").click(function(){
    $(".contentbox3").toggle("fast");
    
  });
var testevalida = $(".procurar").length();
if (testevalida > 0){
  $(".search").hide();
}

}
});