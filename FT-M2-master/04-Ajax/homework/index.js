/* MI CÓDIGO CON MÁS FUNCIONES: */
//LISTA DE NOMBRES:

$("#boton2").click(function () {
  var lista = $("#lista");
  lista.empty();
});

$("#boton").click(function () {
  var lista = $("#lista");
  lista.empty();

  $.get("http://localhost:5000/amigos/", function (data) {
    for (let i = 0; i < data.length; i++) {
      lista.append(`<li>${data[i].id} - ${data[i].name}</li>`);
    }
  });
});

// VER AMIGO:
$("#search").click(function () {
  $.get(
    "http://localhost:5000/amigos/" + document.getElementById("input").value,
    function (data) {
      if ("success") {
        $("#amigo").text(data.name);
      }
    }
  );
});

//ELIMINAR AMIGO:
$("#delete").click(function () {
  let id = $("#inputDelete").val();

  $.ajax({
    url: `http://localhost:5000/amigos/${id}`,
    type: "DELETE",
    success: function () {
      $("#success").text("friend deleted");
    },
  });
});
