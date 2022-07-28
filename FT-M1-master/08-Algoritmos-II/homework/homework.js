"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) {
    return array;
  }
  let pivot = array[0],
    left = [],
    right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right).flat()];
}

// QUICKSORT AL REVÉS:

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let pivot = array[0],
    left = [],
    right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right).flat()];
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  /* Creo la función para juntar los distintos grupos y ordenarlos. La función la voy a invocar cuando haya dividido los grupos abajo de todo: */

  //3) Con los números completamente separados se invocó la siguiente función para juntarla en un array por orden:

  const merge = function (firstGroup, secondGroup) {
    let sortedArr = [];
    while (firstGroup.length && secondGroup.length) {
      if (firstGroup[0] < secondGroup[0]) {
        sortedArr.push(firstGroup.shift());
      } else {
        sortedArr.push(secondGroup.shift());
      }
    }

    return sortedArr.concat(firstGroup, secondGroup);
  };

  /* Acá aplico recursión hasta que el array este completamente dividido. */

  // 1) CASO BASE:
  if (array.length <= 1) {
    return array;
  }

  // 2) Dijo cómo se va a dividir y formo los dos grupos:
  let division = Math.floor(array.length / 2),
    firstGroup = mergeSort(array.slice(0, division)),
    secondGroup = mergeSort(array.slice(division));

  // 3) Con cada número en array por separado invoco la función merge de arriba.
  return merge(firstGroup, secondGroup);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
