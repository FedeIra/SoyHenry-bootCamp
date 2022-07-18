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

function DecimalABinario(num) {
  // tu codigo aca
  let result = "";

  while (num > 0) {
    result = (num % 2) + result;
    num = Math.floor(num / 2);
  }
  return result;
}
