/*
!ASYNC AWAIT
Permiten código asíncrono basado en promesas sin necesidad de encadenar explícitamente promesas. No hace falta el .then y .catch
*/

// Estructura básica:
async function asyncCall() {
  const result = await resolveAfter2Seconds();
}

// Async function: estamos definiendo una función asíncrona. Las async functions SIEMPRE devuelven promesas.
// Await: espera a que la función asíncrona termine para continuar con el código. Ponemos el await antes de una función asíncrona como puede ser un método que devuelva una promesa o una petición al servidor.
// result: se guarda lo que resulta del resolveAfter2Seconds() El await dice "espera que se resuelva resolveAfter2Seconds() y luego guarda el resultado en result".

//! El async/await es una forma de ejecutar código asíncrono basado en promesas.

//! El código parece sincrónico, pero en realidad se ejecuta de manera asíncrona. El async/await nos oculta la complejidad de la sincronización, pero son asíncronas.

//! El async/await es como el generators+promises.

// Ejemplo:

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling'); // <-- Se ejecuta luego de la invocación de asyncCall()
  const result = await resolveAfter2Seconds(); // <-- Detiene la ejecución de asyncCall() hasta que finalice resolveAfter2Seconds()
  console.log(result); // <-- No se va a ejecutar hasta que la línea anterior finalice su ejecución
  console.log('calling2'); // <-- Se ejecuta luego de la invocación de asyncCall()
}

asyncCall();
// calling
// resolved (luego de dos segundos)
// calling2

// Podes guardar el resultado de una función asíncrona en una variable:
var p1 = asyncCall(); // <-- p1 es una promesa.

// Otro ejemplo:
const fs = require('fs');

function promisifiedReadFile(filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, 'utf8', function (err, data) {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

const readFilePromise = (archivo) => {
  promisifiedReadFile(archivo).then((file) => {
    console.log('Log promise file: ', file);
    return 'Lectura exitosa';
  });
};

// readFilePromise(' archivo.txt');

const readFileAsync = async (archivo) => {
  console.log('Log async file: ', await promisifiedReadFile(archivo));
  return 'Lectura exitosa';
};

// readFileAsync('archivo.txt');

// Podemos guardarlo en variable, pero no es recomendado:
var p1 = readFileAsync('archivo.txt');

p1.then((result) => {
  console.log('Soy P1: ', result);
});
// Log async file:  Bla bla bla bla
// Soy P1:  Lectura exitosa

// Otro ejemplo:
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promesa resuelta!');
    }, 2000);
  });
}

async function asyncCallSuccessPromise() {
  console.log('Iniciando asyncCallSuccessPromise');
  const result = await resolveAfter2Seconds();
  return result;
}

// dos formas de llamarla:
// LA MÁS RECOMENDADA:
asyncCallSuccessPromise().then((result) => {
  console.log('Soy P1: ', result);
}); // Soy P1: Promesa resuelta!

// OTRA FORMA:
var p1 = asyncCallSuccessPromise();
p1.then((result) => {
  console.log('Soy P1: ', result);
}); // Soy P1: Promesa resuelta!

// Otro ejemplo:
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promesa resuelta!');
    }, 2000);
  });
}

async function asyncCallSuccessPromise() {
  console.log('Iniciando asyncCallSuccessPromise');
  const result = await resolveAfter2Seconds();
  return result;
}

async function asyncCallSuccessNoPromise() {
  console.log('Iniciando asyncCallSuccessNoPromise');
  return 'Franco'; // === return Promise.resolve("Franco")
}

async function asyncCallError() {
  console.log('Iniciando asyncCallError');
  throw new Error(':(');
} // lo salvamos con un try / catch

async function asyncCallNoResponse() {
  console.log('Iniciando asyncCallNoResponse');
  const result = await resolveAfter2Seconds();
}

var p1 = asyncCallSuccessPromise();
var p2 = asyncCallSuccessNoPromise();
var p3 = asyncCallError();
var p4 = asyncCallNoResponse();

/*
!ASYNC FLOW
*/
async function showInstructors() {
  const instructor1 = await new Promise((resolve) =>
    setTimeout(() => resolve('Franco'))
  ); // <-- Pausa la ejecución y retorna el control a quien se lo había cedido (henryAwait) hasta completar la promesa y poder avanzar con las siguientes instrucciones
  console.log(instructor1);
  const instructor2 = await new Promise((resolve) =>
    setTimeout(() => resolve('Toni'))
  );
  console.log(instructor2);
}

function henryAwait() {
  console.log('¿Quienes son los intstructores de Henry?');
  showInstructors(); // <-- como se asincronica, la manda a ejecutar, pero sigue con el resto de la ejecución consoleando "Gracias vuelvan pronto" antes de que termine la ejecución de showInstructors(). Lo mismo pasa con el console.log FIN.
  console.log('Gracias vuelvan pronto'); // <-- Loguea "Gracias vuelvan pronto"
}

henryAwait(); // <-- Ya finalizó, avanza...
console.log('FIN'); // <-- Logua "FIN"

// ¿Quienes son los intstructores de Henry?
// Gracias vuelvan pronto
// FIN
// Franco
// Toni

//! SI QUEREMOS CORREGIRLO Y QUE NOS IMPRIMA LO SIGUIENTE:
// ¿Quienes son los intstructores de Henry?
// Franco
// Toni
// Gracias vuelvan pronto
// FIN

async function showInstructors() {
  const instructor1 = await new Promise((resolve) =>
    setTimeout(() => resolve('Franco'))
  );
  console.log(instructor1);
  const instructor2 = await new Promise((resolve) =>
    setTimeout(() => resolve('Toni'))
  );
  console.log(instructor2);
}

async function henryAwait() {
  console.log('¿Quienes son los intstructores de Henry?');
  await showInstructors();
  console.log('Gracias vuelvan pronto');
}

// Primer forma:
await henryAwait();
console.log(`FIN`);

// Segunda forma:
// var p1 = henryAwait();
// p1.then(() => {
//   console.log(`FIN`);
// });

/* Las dos devuelven lo siguiente: */

// ¿Quienes son los intstructores de Henry?
// Franco
// Toni
// Gracias vuelvan pronto
// FIN

//! ASYNC/AWAIT IN LOOPS
/* Hay que tener cuidado al momento de usar async await dentro de loops.
Como son muy lentos, en especial la búsqueda de info, hay que tratar de evitar el aysnc await dentro de ciclos */

/*
!LOS MÉTODOS (CALLBACKS) NO ACEPTAN ASYNC:
*/
instructores.forEach(async (instructor) => {}); // <-- No funciona, porque los métodos no aceptan async

//!EJEMPLO: LO SIGUIENTE NO SE RECOMIENDA:

const instructores = [`Franco`, `Toni`, `Martu`, `Diego`];

const delay = 3000; // no sabemos cuánto puede tardar cada dato en llegar.

async function showInstructors() {
  console.log(`Quines son los instructores?`);
  for (const instructor of instructores) {
    let result = await new Promise((resolve) =>
      setTimeout(() => resolve(instructor), delay)
    );
    console.log(instructor);
  }
  console.log(`Los instructores se han mostrado`);
}

showInstructors();
// Quines son los instructores?
// Franco
// Toni
// Martu
// Diego
// Los instructores se han mostrado

//!ALTERNATIVA RECOMENDADA:
const instructores2 = [`Franco`, `Toni`, `Martu`, `Diego`];
const delay2 = 3000;

const promises = instructores2.map(
  (instructor) =>
    new Promise((resolve) => {
      setTimeout(() => resolve(instructor), delay2);
    })
);

// Ahora en lugar de tardar 3 segundos para cada una, tardas 3 segundas para todas.

Promise.all(promises).then((instructores) => {
  console.log(instructores);
}); // [ 'Franco', 'Toni', 'Martu', 'Diego' ]

// Otro ejemplo:
const readFilePromise2 = (archivo) => {
  promisifiedReadFile(archivo).then((file) => {
    console.log('Log promise file: ', file);
    return 'Lectura exitosa';
  });
};

const readFileAsync2 = async (archivo) => {
  console.log('Log async file: ', await promisifiedReadFile(archivo));
  return 'Lectura exitosa';
};

//! TRY/CATCH: ERRORES EN ASYNC AWAIT:
//Si una promesa falla, el async await no se ejecuta. Podemos manejarlos con try / catch:

const readFileAsync3 = async (archivo) => {
  try {
    console.log('Log async file: ', await promisifiedReadFile(archivo));
    return 'Lectura exitosa';
  } catch (err) {
    console.log('Error unificado: ', err);
  }
}; /* En lugar de romperte la consola si la función tira error, te tira el error como vos le digas con el catch */
