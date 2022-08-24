var fs = require("fs");

function promiseFunction() {
  var promise = new Promise(function (resolve, reject) {
    // Hacer cosas acá dentro, probablemente asincrónicas.
    fs.readFile("./archivos.txt", "utf8", function (err, data) {
      if (err) {
        return reject(Error("Algo se rompió"));
      }
      console.log("2: ", data);
      resolve(data);
    });
  });
  return promise;
}

var promiseOne = promiseFunction(); // en promise one voy a tener guardada la promesa.

console.log("1: ", promiseOne); /* ESTO NO ES ASINCRÓNICO */

promiseOne.then(
  (data) => {
    console.log("3: ", data);
  },
  (err) => {
    console.log("4: ", err);
  }
);

console.log("HOLIII"); /* ESTO NO ES ASINCRÓNICO */
var nuevaDataPromesa = promise.then(function (data) {
  var nuevaData = data.split("").splice(0, 100).join("");
  return nuevaData;
});

console.log(promise);

promise.then(function (data) {
  console.log("se cumplió la promesa");
});

var lectura;
fs.readFile("./archivo.txt", "utf8", function (err, data) {
  lectura = data;
});

console.log(lectura);

dataBase.verifyUser(username, password, (error, userInfo) => {
  if (error) {
    callback(error);
  } else {
    dataBase.getRoles(username, (error, roles) => {
      if (error) {
        callback(error);
      } else {
        dataBase.logAccess(username, (error) => {
          if (error) {
            callback(error);
          } else {
            callback(null, userInfo, roles);
          }
        });
      }
    });
  }
});
