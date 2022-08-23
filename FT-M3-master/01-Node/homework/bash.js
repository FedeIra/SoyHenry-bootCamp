const commands = require("./commands/index.js"),
  print = function (output) {
    process.stdout.write(output);
    process.stdout.write("\nEscribe tu nuevo comando:");
  };

process.stdout.write("Escribí tu comando: ");

process.stdin.on("data", function (data) {
  let args = data.toString().trim().split(" "),
    cmd = args.shift();

  if (commands[cmd]) commands[cmd](args, print);
  else process.stdout.write("Command not found!");
});
