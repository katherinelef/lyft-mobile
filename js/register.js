$(document).ready(function () {

  var verifyUser = false;
  var verifyEmail = false;
  var verifyCheckbox =false;


  $("#user").keyup(function () {
    if($(this).val().length > 6){
     verifyUser = true;
     desabilitar();
    }
    else
      verifyUser = false

  });

  $("#email").keyup(function () {
    var patter = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var email =patter.test($(this).val())

    if(email) {
      verifyEmail = true;
      desabilitar();
    }
    else
    verifyEmail = false
  });

    $("#check").click(function () {
    if(checked=true){
      verifyCheckbox =true;
      desabilitar();
    }
    else
    verifyCheckbox =false


  });

  function desabilitar() {
  if(verifyUser == true && verifyEmail==true && verifyCheckbox ==true){
    $("#next4").removeAttr("disabled");
    $("#next4").addClass("pink");
  }
  else
    $("#next4").attr( "disabled", "disabled" );
    $("#next4").removeClass("pink");
  }

  $("#next4").click(function () {

    window.location.href = 'valid.html';

  })
});
