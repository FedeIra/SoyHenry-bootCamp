/*
!PROMESAS
Representa el eventual resultado de una operación asíncrona.

Las promesas están implementadas como objetos con las siguientes propiedades:

1) status (pending, fulfilled, rejected)
2) information (value or a reason)
*/

// Ejemplo de una promesa:
var promise = new Promise(function (resolve, reject) {
  // do something
  resolve(value);
  reject(reason);
})
  .then(function (value) {
    // do something
  })
  .catch(function (reason) {
    // do something
  })
  .finally(function () {
    // do something
  })
  .done();

/*
posibles valores del status: "pending" || "fulfilled" || "rejected"

information: es lo que te devuelve la promesa

promesa {
  status: "rejected",
  information: desaprobé
}
                              |------- fulfilled (aprobe el M3 y se cumplió la promesa))
helado si apruebo el M3: ---->
                              |------- rejected (no aprobe el M3 y no hay helado:())

promise.then() -> se ejecuta cuando la promesa se cumplió. Puede recibir una función que se ejecuta cuando la promesa se cumplió (success handler), y una función que se ejecuta cuando la promesa se rechazó (error)

var uno = promesa.then(data => {
  console.log(data)
},
  err => {
    console.log(err);
})

uno.then(...)
.then(recurso => recurso.json())
.then(data => console.log(data))

*/

var fs = require("fs");

function promiseFunction() {
  var promise = new Promise(function (resolve, reject) {
    // Hacer cosas acá dentro, probablemente asincrónicas.
    fs.readFile(
      "../02-Promises/demo/archivo.txt",
      "utf8",
      function (err, data) {
        if (err) {
          return reject(Error("Algo se rompió"));
        }
        console.log("2: ", data);
        resolve(data);
      }
    );
  });
  return promise;
}

var promiseOne = promiseFunction(); // en promise one voy a tener guardada la promesa

console.log("1: ", promiseOne);

// si solo quiero manejar el error:
promiseOne
  .then(null, (err) => {
    console.log("4: ", err);
  })
  .catch((err) => {
    console.log(err);
  }); /* otra forma de agarrar el error . Syntax sugar. Es lo mismo que usar un then con un null como primer parámetro*/

// Para que usar promesas: PARA EVITAR CALLBACK HELL

// Ejemplo sin promesas:
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

// Ejemplo con promesas
dataBase
  .verifyUser(username, password)
  .then((userInfo) => {
    return dataBase.getRoles(username);
  })
  .then((roles) => {
    return dataBase.logAccess(username);
  })
  .then(() => {
    callback(null, userInfo, roles);
  })
  .catch((err) => {
    callback(
      err
    ); /* agarra cualquier error que se produzca en cualquiera de los pasos */
  })
  .done();

// Otro ejemplo. Función con promesas:
var primerMetodo = function () {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Terminó el primer método");
      resolve({ num: "123" }); //pasamos unos datos para ver como los manejamos
    }, 2000); // para simular algo asincronico hacemos un setTimeOut de 2 s
  });
  return promise;
};

var segundoMetodo = function (datos) {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Terminó el segundo método");
      resolve({
        nuevosDatos: datos.num + " concatenamos texto y lo pasamos",
      });
    }, 2000);
  });
  return promise;
};

var tercerMetodo = function (datos) {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Terminó el tercer método");
      console.log(datos.nuevosDatos); //imprimos los datos concatenados
      resolve("hola");
    }, 3000);
  });
  return promise;
};

// Encadenamos promesas:
primerMetodo()
  .then(segundoMetodo) /* se ejecuta con los resultados de la anterior */
  .then(tercerMetodo)
  .then(function (datos) {
    console.log(datos); //debería ser el 'hola' que pasamos en tercerMetodo
  });
