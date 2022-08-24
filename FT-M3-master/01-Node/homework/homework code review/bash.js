const commands = require("./commands");

function terminado(algo) {
  process.stdout.write(algo);
  process.stdout.write("\nprompt >");
}

// Output un prompt
process.stdout.write("prompt > ");
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on("data", function (data) {
  //split ---> [ "hello", "world"]
  //split ---> [ "bash.js"]
  var cmd = data.toString().trim().split(" "); // remueve la nueva línea

  var aux = cmd.shift(); // "echo" - "cat"

  if (commands[aux]) commands[aux](cmd, terminado);
  else terminado("Command does not exist");
});

/*
Pasos repetitivos: 

2- leo el comando, DOY una respuesta
3- vuelvo a dar un prompt y esperar el comando nuevo



// function on data

  // "  sooy algo        " --> "soy algo"
  //   if (cmd === "date") {
  //     terminado(Date());
  //   } else if (cmd === "pwd") {
  //     // console.log(process.mainModule);
  //     terminado(process.mainModule.path);
  //   } else terminado("Command does not exist");

*/
