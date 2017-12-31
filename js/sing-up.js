$(document).ready(function(){
  $("#number").keyup(function() {
    if($("#number").val().length===12){
      $("#next").removeAttr("disabled");
      $("#next").addClass("pink")
    }

    else if($("input").val().length < 12 || $("input").val().length > 12){
      $("#next").attr( "disabled", "disabled" )
      $("#next").removeClass("pink")
    }
  });

  $("#next").click(function () {
  function rand_code(chars, lon){
    code = "";
    for (i=0; i < lon; i++){
      rand = Math.floor(Math.random()*chars.length);
      code += chars.substr(rand, 1);
    }
    return code;
  }
  caracteres = "0123456789";
  longitud = 3;

  var codigo = rand_code(caracteres, longitud);
  alert("Tu codigo: LAB-" + codigo)

  localStorage.setItem("nombre",codigo);

  window.location.href = 'verify.html';
  });

  $("#code").keyup(function () {
    if(parseInt($("#code").val()) === parseInt( localStorage.nombre)) {
      $("#next2").removeAttr("disabled");
      $("#next2").addClass("pink")
    }
    else if(parseInt($("#code").val()) < parseInt(localStorage.nombre) || parseInt($("#code").val()) > parseInt(localStorage.nombre) ){
      $("#next2").attr( "disabled", "disabled" )
      $("#next2").removeClass("pink")
    }
  });

  $("#next2").click(function () {
  window.location.href = 'register.html';
  });
});
