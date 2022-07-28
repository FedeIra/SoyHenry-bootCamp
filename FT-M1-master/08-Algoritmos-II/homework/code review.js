function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // Caso base (para la recursividad):
  if (array.length <= 1) {
    return array;
  }
  let pivot = array[0], // podríamos haber puesto que arranque por el medio: array[Math.floor(Math.random()*array.length)]
    left = [],
    right = [];

  for (let i = 1; i < array.length; i++) {
    /*arrancamos por el i=1 pq el pivote era el i=0 */
    if (array[i] <= pivot) {
      /* Aca mandamos los pivot a la izquierda */
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  //return [...quickSort(left), pivot, ...quickSort(right)];
  // return quickSort(left).concat(pivot).concat(quickSort(right));
}

quickSort([3, 1, 7, 4, 10]); // [1, 3, 4, 7, 10]

// FALTA COMPLETAR Y CHEQUEAR CON LA QUE MANDE HERNÁN

console.log(mergeSort([3, 5, 1, 4, 76, 4]));

// console.log(quickSort([9,7,8,1,2,2,9,9,6,5,3,4,0]))

function mergeSort(array) {
  console.log("mergeSort");
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length === 1) return array; // [3] --> ya esta ordenado

  // [5,6,4,9,8,1,7,3]
  //
  // --> slice(0,4) // [5,6,4,9] ----- slice(4, ??) // [8,1,7,3]
  // metodo SLICE para recortar el arreglo !== SPLICE --> sPlice es destructivo

  // Divido en 2 el arreglo
  let medio = Math.floor(array.length / 2);
  let left = array.slice(0, medio);
  let right = array.slice(medio);

  return union(mergeSort(left), mergeSort(right));
}
// FUNCIÓN QUE UNE NUESTROS ARREGLOS:
console.log(mergeSort([9, 7, 8, 1, 2, 2, 9, 9, 6, 5, 3, 4, 0]));

function union(left, right) {
  console.log("union");

  // [1] --- [5]
  //     i
  //          x

  let i = 0;
  let x = 0;
  let array = [];

  while (i < left.length && x < right.length) {
    if (left[i] < right[x]) {
      array.push(left[i]);
      i++;
    } else {
      // derecha es mayor
      array.push(right[x]);
      x++;
    }
  }

  // [1] + [] + [5]
  // [1,5]
  return array.concat(left.slice(i)).concat(right.slice(x));
}
