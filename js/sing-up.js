$(document).ready(function(){

  $( "input" ).keyup(function() {

  var rest1 = {
    restaurant: 'tanta',
    distrito: 'miraflores',
    comida: 'comida criolla'
  };

  var rest2 = {
    restaurant: 'olimpico',
    distrito: 'lima',
    comida: 'comida vegetariana'
  };

  var rest3 = {
    restaurant: 'rockys',
    distrito: 'lima',
    comida: 'comida rapida'
  };

  var rest4 = {
    restaurant: 'chenzu',
    distrito: 'miraflores',
    comida: 'comida japonesa'
  };

  var rest5 = {
    restaurant: 'mihan',
    distrito: 'miraflores',
    comida: 'comida japonesa'
  };

  var rest6 = {
    restaurant: 'casamama',
    distrito: 'lince',
    comida: 'comida criolla'
  };

  var rest7 = {
    restaurant: 'el huerto',
    distrito: 'lince',
    comida: 'comida criolla'
  };

  var rest8 = {
    restaurant: 'vegetales',
    distrito: 'miraflores',
    comida: 'comida vegetariana'
  };

  var rest9 = {
    restaurant: 'kentucky',
    distrito: 'lima',
    comida: 'comida rapida'
  };

  var rest10 = {
    restaurant: 'bembos',
    distrito: 'lince',
    comida: 'comida rapida'
  };

  var restaurantes = [rest1, rest2, rest3, rest4, rest5, rest6, rest7, rest8, rest9, rest10];

  $(".cerca").css("display","none");

  for (i = 0; i < restaurantes.length; i++) {

    if (restaurantes[i].distrito === $("input").val()) {
      $(".restaurantes").append("<p class='texto'>"+restaurantes[i].restaurant+"</p>");
      $("p").hover (
        function () {
        $(this).addClass("big")
      },function () {
        $(this).removeClass("big")
        }

      );

    }

    else if (restaurantes[i].comida === $("input").val()) {
      $(".restaurantes").append("<p class='texto'>"+restaurantes[i].restaurant+"</p>");
      $("p").hover (
        function () {
        $(this).addClass("big")
      },function () {
        $(this).removeClass("big")
        }

      );

    }

    else if($("input").val()==="") {
      $(".texto").remove();
      $(".cerca").css("display","block");
    }
  }

  $("p:contains('bembos')").addClass("bembos");
  $("p:contains('bembos')").attr("data-toggle", "modal");
  $("p:contains('bembos')").attr("data-target", "#exampleModal3");
  $("p:contains('casamama')").addClass("casamama");
  $("p:contains('casamama')").attr("data-toggle", "modal");
  $("p:contains('casamama')").attr("data-target", "#exampleModal4");
  $("p:contains('chenzu')").addClass("chenzu");
  $("p:contains('chenzu')").attr("data-toggle", "modal");
  $("p:contains('chenzu')").attr("data-target", "#exampleModal5");
  $("p:contains('el huerto')").addClass("huerto");
  $("p:contains('el huerto')").attr("data-toggle", "modal");
  $("p:contains('el huerto')").attr("data-target", "#exampleModal6");
  $("p:contains('kentucky')").addClass("kentucky");
  $("p:contains('kentucky')").attr("data-toggle", "modal");
  $("p:contains('kentucky')").attr("data-target", "#exampleModal2");
  $("p:contains('mihan')").addClass("mihan");
  $("p:contains('mihan')").attr("data-toggle", "modal");
  $("p:contains('mihan')").attr("data-target", "#exampleModal7");
  $("p:contains('olimpico')").addClass("olimpico");
  $("p:contains('olimpico')").attr("data-toggle", "modal");
  $("p:contains('olimpico')").attr("data-target", "#exampleModal");
  $("p:contains('rockys')").addClass("rockys");
  $("p:contains('rockys')").attr("data-toggle", "modal");
  $("p:contains('rockys')").attr("data-target", "#exampleModal1");
  $("p:contains('tanta')").addClass("tanta");
  $("p:contains('tanta')").attr("data-toggle", "modal");
  $("p:contains('tanta')").attr("data-target", "#exampleModal8");
  $("p:contains('vegetales')").addClass("vegetales");
  $("p:contains('vegetales')").attr("data-toggle", "modal");
  $("p:contains('vegetales')").attr("data-target", "#exampleModal9");

  });
    $("p").hover (
      function () {
      $(this).addClass("big")
    },function () {
      $(this).removeClass("big")
      }

    );

    $('#exampleModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget) // Button that triggered the modal
      var recipient = button.data('whatever') // Extract info from data-* attributes
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      var modal = $(this)
      modal.find('.modal-title').text('New message to ' + recipient)
      modal.find('.modal-body input').val(recipient)
    })

  });
