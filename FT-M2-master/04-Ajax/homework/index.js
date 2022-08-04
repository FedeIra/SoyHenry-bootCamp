// LISTA DE NOMBRES:
$("#boton").click(function () {
  $.get("http://localhost:5000/amigos/", function (data) {
    data
      .map((friend) => friend.name)
      .forEach((friend) => {
        let list = document.createElement("li");
        list.textContent = `${friend}`;
        $("#lista").append(list);
      });
  });
});

// VER AMIGO:
var index = document.getElementById("input").value;

$("#search").click(function () {
  $.get(
    "http://localhost:5000/amigos/" + document.getElementById("input").value,
    function (data) {
      if ("success") {
        $("#amigo").text(data.name);
      }

      /*  let titleFriend = document.createElement('h3');
        titleFriend.textContent = data.name;
        let friendContent = document.createElement('p');
        friendContent.textContent = `Age: ${data.age}, Email:  ${data.email}`;
        $('#amigo').append(titleFriend);
         $('#amigo').append(friendContent); */
    }
  );
});

//ELIMINAR AMIGO:
$("#delete").click(function () {
  $.ajax({
    url: `http://localhost:5000/amigos/${
      document.getElementById("inputDelete").value
    }`,
    type: "DELETE",
    success: function (request) {
      $("#success").text("friend deleted");
    },
  });
});
