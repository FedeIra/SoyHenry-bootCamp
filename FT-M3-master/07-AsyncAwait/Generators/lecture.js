/*
!GENERATOR FUNCTION
Son funciones que pueden ser pausadas manteniendo los valores que tenían en ese momento de la ejecución y luego retomar la función y continuar el flujo.
*/

//función normal
function normalFuncion() {
  console.log('Iniciando función normal');
  console.log('Continuando función normal');
  console.log('Terminando función normal');
  console.log('Fin de la función normal');
}
// normalFuncion();

// función generadora: se puede pausar y retomar la ejecución. Se ejecuta hasta el yield y se pausa devolviendote el valor hasta el yield. Es parecido al return, pero no termina la función.
function* generatorFuncion() {
  console.log('Iniciando función generadora');
  yield 'Iniciando';
  console.log('Continuando función generadora');
  yield 'Continuando';
  console.log('Terminando función generadora');
  yield 'Terminando';
  console.log('Fin de la función generadora');
  yield 'Fin';
}

var generator = generatorFuncion();

generator.next(); // { value: 'Iniciando', done: false }
generator.next(); // { value: 'Continuando', done: false }
generator.next(); // { value: 'Terminando', done: false }
generator.next(); // { value: 'Fin', done: false }
generator.next(); // { value: undefined, done: true }

//Combinado con un return:

function* generatorUnreacheableValue() {
  console.log('Iniciando generator function');
  yield 'First reacheable value';
  yield 'Second reacheable value';
  return 'Return executed';
  yield 'Unreacheable value';
}

var generatorObject = generatorUnreacheableValue();

generatorObject.next(); // { value: 'First reacheable value', done: false }
generatorObject.next(); // { value: 'Second reacheable value', done: false }
generatorObject.next(); // { value: 'Return executed', done: true }
generatorObject.next(); // { value: undefined, done: true }

// No se ejecutó el último yield pq se considera finalizada la función por el return. El done:true o falso indica si la función está finalizada o no.

// un generador infinito:
function* naturalNumbers() {
  let number = 1;
  while (true) {
    yield number;
    number = number + 1;
  }
}

var contador = naturalNumbers();

contador.next(); // { value: 1, done: false }
contador.next(); // { value: 2, done: false }
contador.next(); // { value: 3, done: false }
contador.next(); // { value: 4, done: false }
// es inifinito y el done siempre va a ser falso.
contador.next().value; // 5
contador.next().value; // 6  Si solo quiero obtener el número y no el objeto con el done.

// un generador infinito:
function* naturalXNumbers(x) {
  let number = 1;
  while (number < x) {
    yield number;
    number = number + 1;
  }
}

var contador2 = naturalXNumbers(10);

contador2.next(); // { value: 1, done: false }
contador2.next(); // { value: 2, done: false }
contador2.next(); // { value: 3, done: false }
contador2.next(); // { value: 4, done: false }
contador2.next().value; // 5
contador2.next().value; // 6
contador2.next().value; // 7
contador2.next().value; // 8
contador2.next().value; // 9
console.log(contador2.next()); // { value: undefined, done: true }
console.log(contador2.next().value); // undefined
