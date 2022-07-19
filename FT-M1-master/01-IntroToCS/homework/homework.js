"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  let data = num.split("").reverse(), // con el split pasa a ser [1, 1, 0]. Con el reverse pasa a ser [0, 1, 1]
    result = 0;

  for (let i = 0; i < data.length; i++) {
    // igual a Math.pow(2, i) . Aca creo un  valor que va guardando los numeros del array a la potencia por su posicion
    result += 2 ** i * data[i]; // aca agarra el valor de factor y lo multiplica por el valor del array y luego lo suma a result
  }
  return result;
}

// Otra solución:
function BinarioADecimal(num) {
  // tomar el número binario (num)
  // vamos a empezar por el final (exponente)
  // base 2
  // acumulando la suma en una caja

  var sumaTotal = 0 /* Acá le guardo la suma que va a arrancar en 0 */,
    contador = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    sumaTotal = sumaTotal + Math.pow(2, contador) * num[i];
    contador++;
  }
  return sumaTotal;
}

console.log(BinarioADecimal("101111")); // 47

function DecimalABinario(num) {
  // tu codigo aca
  let result = "";

  while (num > 0) {
    result = (num % 2) + result;
    num = Math.floor(num / 2);
  }
  return result;
}

// Otra solución:
parseInt(num, 2);

// Otra solución:

function DecimalABinario(num) {
  // tu codigo aca
  // tengo que crear una caja donde vaya guardando los restos hasta que el número sea menor a 2
  // hay que ir agrengadolos al arreglo pero de manera inversa, es decir, usar unshift
  var numeroBinario = [];

  while (num >= 1) {
    /* Igual o mayor a 1 pq necesitamos también el resto del número cuando llegue a 1 y se tenga que dividir de vuelta */
    numeroBinario.unshift(num % 2); /* Acá voy agregando los restos al array */
    num = Math.floor(
      num / 2
    ); /* Acá voy actualizando el número entero (sin el resto). Para eso utilizamos el floor, para que lo redonde para abajo */
  }
  return numeroBinario.join(""); /* Con esto lo paso a string */
}

DecimalABinario(23); // 10111
DecimalABinario(47); // 101111
DecimalABinario(152); // 10011000

// Otra solución usando string y no array:

function DecimalABinario(num) {
  // tu codigo aca
  // tengo que crear una caja donde vaya guardando los restos hasta que el número sea menor a 2
  // hay que ir agrengadolos al arreglo pero de manera inversa, es decir, usar unshift
  var numeroBinario = "";

  while (num >= 1) {
    /* Igual o mayor a 1 pq necesitamos también el resto del número cuando llegue a 1 y se tenga que dividir de vuelta */
    numeroBinario += num % 2; /* Acá voy agregando los restos al array */
    num = Math.floor(
      num / 2
    ); /* Acá voy actualizando el número entero (sin el resto). Para eso utilizamos el floor, para que lo redonde para abajo */
  }
  return numeroBinario; /* Con esto lo paso a string */
}

DecimalABinario(23); // 10111
DecimalABinario(47); // 101111
DecimalABinario(152); // 10011000

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
