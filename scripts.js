//Seleciona todas os elementos divs que possuem em sua classe o nome "lesson"
$(document).ready(function(){


  $("#btn-about").click(function(e){
  
    $(".main-title").toggle();
    $(".about-me-info").toggle();

    e.preventDefault();

  });

});