"use strict";

// Closures

function counter() {
  /*
  Ejercicio 1: //contador en el cual cada vez que ejecuten la función counter se genera un nuevo contador y aumenta en 1 el valor. Cada contador es independiente. Hay que usar closure.//

  La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando un valor numérico que empieza en 1 e incrementa con cada invocación.

  Ejemplo:
  const nuevoContador = counter()
  nuevoContador()     // 1
  nuevoContador()     // 2
  nuevoContador()     // 3

  const otroContador = counter()
  otroContador()      // 1
  otroContador()      // 2
  otroContador()      // 3
   */
  var totalValue = 1;
  return function addOne() {
    totalValue++;
    return totalValue;
  };
}

const secondCounter = counter();

secondCounter(); // 2
secondCounter(); // 3
secondCounter(); // 4
secondCounter(); // 5

const otherCounter = counter();
otherCounter(); // 2
otherCounter(); // 3
otherCounter(); // 4
otherCounter(); // 5

function cacheFunction(cb) {
  /*
  Ejercicio 2: //la memoria cache guarda en algún lado las cosas previas que busqué. Nos ahorra de hacer un procesamiento costoso si ya lo hicimos previamente. Si vuelvo a invocar una función con mismo parametro que directamente me devuelva el resultado y no haga toda la función. El cb se refiere a callback es decir recibe de parámetro una función que todavóa no sé qué hace//

  Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar otra vez cálculos que ya se hicieron anteriormente.

  cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".


  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) 

  */

  // Paso 1: ejecutar el callback y que se guarde en la función ese resultado.
  cb();

  // Paso 2: retornar una función que acepte como argumento (arg) e invocar a cb con ese argumento. Ese
  return function summonCB(arg) {
    cb(arg);
  };
}

// Bind

var instructor = {
  nombre: "Franco",
  edad: 25,
};

var alumno = {
  nombre: "Juan",
  curso: "FullStack",
};

function getNombre() {
  return this.nombre;
}

/*
  Ejercicio 3

  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)

  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/

let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno = getNombre.bind(alumno);

getNombreInstructor(); // Franco
getNombreAlumno(); // Juan

/*
  Ejercicio 4
  
  Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, tres funciones que retornen una cadena (string) y el delimitador especificado (asteriscos, guiones, y guiones bajos, respectivamente). Las funciones obtenidas deberían recibir solamente un argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(this, "*", "*");
let textoGuiones = crearCadena.bind(this, "-", "-");
let textoUnderscore = crearCadena.bind(this, "_", "_");

textoAsteriscos("First try"); // *First try*
textoGuiones("Second try"); // -Second try-
textoUnderscore("Third try"); // _Third try_

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};
