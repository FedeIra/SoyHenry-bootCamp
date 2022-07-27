"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factor = 2;
  let factores = [1]; // se agrega el 1 pq lo pide el test queriendo decir que todo número se divide por 1.

  while (num > 1) {
    if (num % factor === 0) {
      factores.push(factor);
      num = num / factor;
    } else factor++;
  }
  return factores;
}

// Otra posibilidad:

let array = [1];
for (var i = 2; i < num + 1; i++) {
  if (num % i === 0) {
    array.push(i);
    num = num / i;
    i = i - 1;
  }
}

return array;

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let index = 0; index < array.length; index++) {
    if (array[index] > array[index + 1]) {
      let higherNumber = array[index];
      array[index] = array[index + 1];
      array[index + 1] = higherNumber;
      bubbleSort(array);
    }
  }
  return array;
}

// OTRA SOLUCIÓN:

for (var i = 0; i < array.length - 1; i++) {
  // [4,0,6,12,48]
  for (var j = 0; j < array.length - 1; j++) {
    if (array[j] > array[j + 1]) {
      [array[j], array[j + 1]] = [array[j + 1], array[j]]; //[4,2] = [2,4]
    }
  }
}
return array;

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let index = 0; index < array.length; index++) {
    if (array[index] > array[index + 1]) {
      let lowerNumber = array[index + 1];
      array.splice(index + 1, 1);
      array.unshift(lowerNumber);
      insertionSort(array);
    }
  }
  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min != i) {
      // Swapping the elements
      let tmp = array[i];
      array[i] = array[min];
      array[min] = tmp;
    }
  }
  return array;
}

// OTRA SOLUCIÓN
function selectionSort(array) {
  for (var i = 0; i < array.length; i++) {
    let lower = array[i];
    let lowerIndex = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < lower) {
        lower = array[j];
        lowerIndex = j;
      }
    }
    if (lowerIndex !== i) {
      array[lowerIndex] = array[i];
      array[i] = lower;
    }
  }

  return array;
}
// OTRA SOLUCIÓN:
function selectionSort(array) {
  for (var j = 0; j < array.length; j++) {
    var min = array[j];
    var pos = j;
    for (var i = j + 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
        pos = i;
      }
    }
    array[pos] = array[j];
    array[j] = min;
  }
  return array;
}

// OTRA SOLUCIÓN:
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    [array[i], array[min]] = [array[min], array[i]];
  }
  return array;
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
