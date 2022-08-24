var primerMetodo1 = function () {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Terminó el método 1");
      resolve({ num: "1" }); //pasamos unos datos para ver como los manejamos
    }, 1000); // para simular algo asincronico hacemos un setTimeOut de 2 s
  });
  return promise;
};

var primerMetodo2 = function (datos) {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Terminó el primer método 2");
      resolve({ num: 2 });
    }, 2000);
  });
  return promise;
};

var primerMetodo3 = function (datos) {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Terminó el primer método 3");
      resolve({ num: 3 });
    }, 4000);
  });
  return promise;
};

var p1 = primerMetodo1(); /*en la variable p1 guardo la promesa pending  */
var p2 = primerMetodo2();
var p3 = primerMetodo3();

/* p1.then((data) => {
  console.log(data);
}); */

Promise.all([primerMetodo1(), primerMetodo2(), primerMetodo3()]).then(
  (values) => {
    console.log(values);
  }
);

//OTRA FORMA SIN DECLARAR VARIABLES
Promise.all([p1, p2, p3]).then((values) => {
  console.log(values);
}); /* acepta un arreglo de promesas y después te pasa la solución de todas en un arreglo. */

/* p1.then(funcion(valordep1) {
  return p2; // si p2  es una promesa;
}).then(function(valordeP2) {
  return p3; // si p3 es otra promesa;
}).then(function(valordeP3){
});  */
