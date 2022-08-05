const rutaGet = "http://localhost:5000/amigos/";

function clearInputs() {
  $("#input").val("");
  $("#inputDelete").val("");
}

function showFriends(info) {
  $("#lista").empty();
  info.forEach((item) => {
    // var li = document.createElement("li") --> Also valid
    $("#lista").append(`<li> ${item.name} </li>`);
  });
}

$("#boton").click(function () {
  // GET
  $.get(rutaGet, function (friends) {
    // console.log(friends); --> Funcionando, llega un arreglo de 6 obj amigos.

    // friends --> [{},{},{},{},{},{} ]
    //                     i

    friends.forEach((item) => {
      // var li = document.createElement("li") --> Also valid
      $("#lista").append(`<li> ${item.name} </li>`);
    });
  });
});

$("#search").click(function () {
  let id = $("#input").val();
  //   console.log(id);
  clearInputs(); // limpiamos el input para que quede vacío
  if (id) {
    $.get(rutaGet + id, function (friend) {
      $("#amigo").text(friend.name);
    });
  } else {
    // alert("Debes ingresar un id");
    $("#error").text("Debes ingresar un id de un amigo");
  }
});

$("#delete").click(function () {
  let id = $("#inputDelete").val();
  clearInputs();
  if (id) {
    $.ajax({
      url: rutaGet + id,
      type: "DELETE",
      success: function (result) {
        // console.log(result); // arreglo sin el amigo recien borrado
        showFriends(result);
        // Do something with the result
        $("#success").text("Your friend has been deleted");
      },
    });
  } else {
    alert("WARNING! Debes ingresar un ID");
  }
});
