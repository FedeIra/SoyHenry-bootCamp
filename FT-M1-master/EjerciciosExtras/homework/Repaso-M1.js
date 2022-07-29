const { Queue, Node, LinkedList, BinarySearchTree } = require("./DS.js");

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray2 = function (array) {
  let suma = 0;

  array.forEach((elemento) => {
    if (Array.isArray(elemento)) {
      // si es array tal cosa A
      suma += countArray2(elemento);
    } // si no es array tal otra B
    else {
      suma += elemento;
    }
  });
  return suma;
};

console.log("count", countArray2([1, [2, [3, 4]], [5, 6], 7])); // count 28

// Otra solución sin recursividad:

/* var countArray = function (array) {
  // Tu código aca:
  array = array.flat(Infinity);

  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

countArray([1, [2, [3, 4]], [5, 6], 7]); // 28 */

// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function (obj) {
  // Tu código aca:
  // el tipo de dato de array en realidad es un objeto entonces para diferenciarlo de los objetos literales usamos el método Array.isArray()

  // Paso 1: declarar una variable contadora. Con el método Object.keys(), contar las propiedades del objeto padre
  let total = Object.keys(obj).length; // te pasa las propiedades del objeto padre.

  // Paso 2: recorrer el objeto evaluando el tipo de dato almacenado en cada propiedad:
  for (const prop in obj) {
    if (typeof obj[prop] === "object" && !Array.isArray(obj[prop])) {
      total = total + countProps(obj[prop]);
    }
  }
  return total;
};

// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function () {
  // Tu código aca:
  let current = this.head, // si hay algo se almacena el objeto node que tiene value y next.
    counter = 0;

  /*Si a Number(le pasas un valor) te lo transforma a número siempre y cuando pueda. Si no se puede te devuelve NaN. Con el isNaN verifico si no se pudo transformar a number  */
  while (current) {
    if (Number.isNaN(Number(current.value))) {
      current.value = "Kiricocho";
      counter++;
    }
    current = current.next;
  }
  //retorno la cantidad de cambios
  return counter;
};

// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function (queueOne, queueTwo) {
  // Tu código aca:
  // crear una variable cuyo valor inicial sea una nueva instancia de Queue
  // recorrer ambas queues recibidas por parámetro
  // remover el primer nodo de la primera Queue para agregarlo a la nueva Queue
  // remover el primer nodo de la segunda queue para agregarlo a la nueva
  // repetir los dos pasos anteriores hasta que las dos queues pasadas por parámetro estén vacías
  var merged = new Queue();

  // el queue size te permite ver la cantidad de elementos de la queue
  while (queueOne.size() || queueTwo.size()) {
    if (queueOne.size()) {
      /* el if es para no agregar undefined al queue en el caso de que no tenga más elementos */
      merged.enqueue(queueOne.dequeue());
    }
    if (queueTwo.size()) {
      merged.enqueue(queueTwo.dequeue());
    }
  }
  return merged;
};

// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo:
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function (multiplier) {
  // Tu código aca:
  return function (params) {
    return multiplier * params;
  };
};

/* var multByFour = closureMult(4);
multByFour(2); // 8

var multBySix = closureMult(6);
multBySix(4); // 24 */

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function () {
  // Tu código aca:
  // Declarar una variable contadora. Le asignas el valor del root inicial.
  var total = this.value;
  // Recorrer el árbol partiendo de la raíz, sumar el valor de cada uno al contador
  // Si existe otro nodo a la derecha tomar ese nodo como nueva raíz y repetir el proceso. Sumar al contador total de los valores.
  // Si existe otro nodo a la izquierda tomar ese nodo como nueva raíz y repetir el proceso. Sumar al contador total de los valores.
  if (this.right) total += this.right.sum();

  if (this.left) total += this.left.sum(); // de manera recursivo ingreso a cada uno de los árboles y voy sumando al contador el valor de cada árbol
  return total;
};

module.exports = {
  countArray,
  countProps,
  mergeQueues,
  closureMult,
};

// EJERCICIO DE LOS SIMPSONS

var isAncestor = function (genealogyTree, ancestor, descendant) {
  // Tu código aca:
  /* for (let mujer in genealogyTree) {
    if (mujer === ancestor) {
      for (let hija of genealogyTree[mujer]) {
        if (hija === descendant) return true;
      }
      for (let hija of genealogyTree[mujer])
        if (isAncestor(genealogyTree, hija, descendant)) return true;
    }
  }
  return false;
}; */
};

var isAncestor = function (genealogyTree, ancestor, descendant) {
  for (prop in genealogyTree) {
    if (genealogyTree[prop].includes(descendant) && prop !== ancestor) {
      isAncestor(genealogyTree, ancestor, prop);
    }

    if (genealogyTree[prop].includes(descendant) && prop === ancestor) {
      return true;
    }
    return false;
  }
};
