function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  let arregloFactores = [1];
  let divisor = 2;

  while (num > 1) {
    if (num % divisor === 0) {
      arregloFactores.push(divisor);
      num = num / divisor;
    } else {
      divisor++;
    }
  }
  return arregloFactores;
}

factorear(180); // [ 1, 2, 2, 3, 3, 5 ]
factorear(101); // [ 1, 101 ] El 101 es número primo.

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var hayaCambio = true; // si no hay cambio es pq está ok la lista, de lo contrario no hace falta recorrerla.

  while (hayaCambio) {
    hayaCambio = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
        hayaCambio = true;
      }
    }
  }
  return array;
}
bubbleSort([3, 1, 5, 8, 213]); // [ 1, 3, 5, 8, 213 ]

// ---- Algoritmos ----
// EJERCICIO 10
// Ordená un arreglo de objetos usando un bubble sort pero con algunas particularidades.
// Además del arreglo a ordenar la función va a recibir como parámetro una función
// que va a retornar 1 sí no hay que ordenarlo y -1 en el caso de que si haya que ordenarlo.
// Ejemplo:
// var array = [
//   {name: 'Cristian', age: 26, height: 1.85},
//   {name: 'Dylan', age: 30, height: 1.75},
//   {name: 'Joaquin', age: 25, height: 1.77},
// ]
// specialSort(array, swapFunction) --> Retornaría el siguiente array:
// [
//   {name: 'Cristian', age: 26, height: 1.77},
//   {name: 'Joaquin', age: 25, height: 1.85},
//   {name: 'Dylan', age: 30, height: 1.75},
// ]
function specialSort(array, swapFunction) {
  // Tu código aca:
  // 1 no cambia, -1 cambia

  for (let j = 0; j < array.length - 1; j++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (swapFunction(array[i], array[i + 1]) === -1) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
  }
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    /* Arrancamos en 1 pq asumismo que el 1 es el mayor. */
    var x = i - 1;
    var aux = array[i];

    while (x >= 0 && array[x] > aux) {
      array[x + 1] = array[x];
      x = x - 1;
    }
    array[x + 1] = aux;
  }
  return array;
}

insertionSort([2, 99, 5, 6, 44, 88, 51, 32, 15, 1]); // [ 1, 2, 5, 6, 15, 32, 44, 51, 88, 99 ]

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    var minimo = i; // nos tenemos que quedar con la primera posición
    for (let x = i + 1; x < array.length; x++) {
      if (array[x] < array[minimo]) {
        minimo = x;
      }
    }
    // salgo del for = encontré el valor mínimo sin ordenar. Ahora hay que cambiarlo de posición:
    if (minimo !== 1) {
      let aux = array[i];
      array[i] = array[minimo];
      array[minimo] = aux;
    }
  }
  return array;
}

selectionSort([3, 123, 5, 9, 2, 5, 10, 3]); // [ 2, 3, 3, 5, 5, 9, 10, 123 ]
