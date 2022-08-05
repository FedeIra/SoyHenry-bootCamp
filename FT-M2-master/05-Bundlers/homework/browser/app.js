/* TIP HOMEWORK: Está en formato función autoinvocada y declarar cosas en el window. Hay que pasarlo de la sintaxis de función autoinvocada y de exponer cosas en el windows a la sintaxis de import/export o modulo export y después instalar webpack crear el webpack config hacerlo correr q te guarde el bundel y luego en el index html que tenga en vez de varios scripts solo en bundle. */
(function () {
  var whiteboard = window.whiteboard;
  var socket = window.io(window.location.origin);

  socket.on("connect", function () {
    console.log("Connected!");
  });

  socket.on("load", function (strokes) {
    strokes.forEach(function (stroke) {
      var start = stroke.start;
      var end = stroke.end;
      var color = stroke.color;
      whiteboard.draw(start, end, color, false);
    });
  });

  socket.on("draw", function (start, end, color) {
    whiteboard.draw(start, end, color, false);
  });

  whiteboard.on("draw", function (start, end, color) {
    socket.emit("draw", start, end, color);
  });
})();
