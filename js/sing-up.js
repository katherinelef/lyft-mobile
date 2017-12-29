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
for (x=0; x < lon; x++)
{
rand = Math.floor(Math.random()*chars.length);
code += chars.substr(rand, 1);
}
return code;
}

caracteres = "0123456789";
longitud = 3;

var codigo = rand_code(caracteres, longitud);
 alert("Tu codigo: LAB-" + codigo)
 console.log(parseInt(codigo));

 window.location.href = 'verify.html';

  });


  });
