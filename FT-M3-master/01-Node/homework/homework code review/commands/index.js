const fs = require("fs"); // importo el modulo core FS
const request = require("request");

function date(input, terminado) {
  terminado(Date());
}

function pwd(input, terminado) {
  terminado(process.mainModule.path);
}

function ls(input, pepe) {
  fs.readdir(".", function (err, files) {
    if (err) throw err;
    var aux = files.join("\n");
    pepe(aux);
  });
}

function echo(input, done) {
  // input --> ["hello", "world"] --- JOIN ---> "hello world"
  done(input.join(" "));
}

function cat(input, done) {
  // input === ["bash.js"]
  fs.readFile(input[0], function (err, data) {
    if (err) throw err;
    done(data);
  });
}

function head(input, done) {
  fs.readFile(input[0], "utf-8", function (err, data) {
    if (err) throw err;
    // logica para el comportamiento
    let lineas = data.toString().split("\n").splice(0, 10).join("\n");
    // ["Pepe was here hehe xd", "1", "2", ....]
    done(lineas);
  });
}

function tail(input, done) {
  fs.readFile(input[0], "utf-8", function (err, data) {
    if (err) throw err;
    // logica para el comportamiento
    let lineas = data.toString().split("\n").slice(-10).join("\n");
    done(lineas);
  });
}

function curl(input, done) {
  // input --> ["www.google.com"]
  request(`http://${input[0]}`, function (err, response, body) {
    if (err) throw err;
    if (response.statusCode === "200") console.log("llego un 200");
    done(body);
  });
}

module.exports = {
  date,
  pwd,
  ls,
  echo,
  cat,
  head,
  tail,
  curl,
};

/*

ls

    // console.log("arreglo: ", files);
    // files.forEach((nombre) => {
    //   process.stdout.write(nombre.toString() + "\n");
    // });

tail

    //  let lineas = data.toString().split("\n")
    //  let ultimas = lineas.splice(lineas.length -10, lineas.length).join("\n")

*/
