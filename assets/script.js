function slidetoggle(){
  var trocar = document.getElementById("menudesk");
  if (trocar.style.display === "none"){
    trocar.style.display = "block";
  }else{
    trocar.style.display = "none";
  }

}



function togglebox1(){
  var trocar = document.getElementById("contentbox1");
  if (trocar.style.display === "none"){
    trocar.style.display = "flex";
  }else{
    trocar.style.display = "none";
  }
}

function togglebox2(){
  var trocar = document.getElementById("contentbox2");
    if (trocar.style.display === "none"){
    trocar.style.display = "flex";
  }else{
    trocar.style.display = "none";
  }
}

function togglebox3(){
  var trocar = document.getElementById("contentbox3");
  if (trocar.style.display === "none"){
    trocar.style.display = "flex";
  }else{
    trocar.style.display = "none";
  }
}





























$(document).ready(function(){
  // $(".contentbox1").hide();
  // $(".contentbox2").hide();
  // $(".contentbox3").hide();
  $("#teste").hide();

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
