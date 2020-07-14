//Seleciona todas os elementos divs que possuem em sua classe o nome "lesson"
$(document).ready(function(){

  $("#btn-about").click(function(e){
    if($(".section-1").is(":visible")){
      $(".section-1").fadeOut("slow");
      $(".about-me-info").fadeIn("slow");
      $(".links-section").fadeIn("slow");
    }else{
      $(".about-me-info").fadeIn("slow");
      $(".links-section").fadeIn("slow");
    }
    e.preventDefault();
  });

  $(".lesson1").click(function(e){
    if($(".about-me-info").is(":visible") ){
      $(".about-me-info").fadeOut("slow");
      $(".links-section").fadeOut("slow");
      $(".section-1").fadeIn("slow");
    }else{
      $(".section-1").fadeIn("slow");
    }
    e.preventDefault();
  });

});