"use strict";

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  return n === 0 ? 1 : n * nFactorial(n - 1);
}

// Otra solución:

function factorial(n) {
  // caso base --> si num mayor a 1 o menos a 2 ==> retornamos 1
  console.log("una vez más, entré");
  if (n > -1 && n < 2) {
    console.log("retorno 1");
    return 1; /* Cuando llega al 1 vuelve para atrás */
  } else if (n < 0) return 0;
  else {
    return n * nFactorial(n - 1);
  }
  // caso base --> si num es menor a 0 => retornamos 0
}

// => !5 = 5 * !4
// => !N = !N * (N-1)

function facto(n) {
  let prod = 1;
  for (let i = n; i > 1; i--) {
    prod *= i;
  }
  return prod;
}

function nFactorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * nFactorial(n - 1);
  }
}

function nFibonacci(n) {
  return n === 0 ? 0 : n === 1 ? 1 : nFibonacci(n - 1) + nFibonacci(n - 2);
}

function nFibonacci(n) {
  if (n < 0) return "error";
  if (n < 2) return n;

  return nFibonacci(n - 1) + nFibonacci(n - 2);
}

nFibonacci(5);

// secuencia: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55(21 + 34), 89(34 + 55), 144(55 + 89)
//            n n+1 r  r ...
// nFibonacci(7) = nFibonacci(6) + nFibonacci(5)

/* Entra en juego un concepto. Hay distintos tipos de programación para llegar a mismo resultado:
-Programación declarativa: declaro lo que quiero que se haga, como el ejercicio anterior
-Programación imperativa: le digo lo que quiero que se haga, y cómo quiero que se haga, como en la solución de un for que le digo paso a paso que quiero que haga.

Hay veces que una es mejor y otras la otra.
*/

/* function fibo (n){
    if (n === 0) return 0;
  else if (n === 1  n === 2)return 1;
  else {
    let serie = [0,1,1]
    for (i=3; i <= (n); i++){
      serie.push((serie[i-1]+serie[i-2]));
    }
    return serie[n];
  } 
}  */

/*NOTA AGREGADA POR MI: FIBONACCI: 
secuencia: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 (21+34), 89 (34+55), 144 (55+89)
Tiene dos casos bases en los cuales:
f(0) = 0  es decir, la función evaluada con el parametro 0 te da 0
f(1) = 1  lo mismo que antes
f(n) = f(n-2) + f(n-1)  Es decir, a partir de f(2), el tercero se calcula como la suma de los dos anteriores. En realidad, esto aplicaría también para f(0) y f(1).
A partir de forma recursiva, poniendote una posición como n, debería calcularte el f(n) usando recursividad.


*/

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.list = [];
}

Queue.prototype.enqueue = function (value) {
  return this.list.push(value);
  //return this.list.unshift(value);
};

Queue.prototype.dequeue = function () {
  // return this.list.length > 0 ? this.list.shift() : undefined; NO HACE FALTA LA PARTE DE UNDIFINED PQ AL TENER RETURN TE TIRA UNDIFINED SI NO HABÍA NADA:
  return this.list.shift();
  //return this.list.pop();
};

Queue.prototype.size = function () {
  return this.list.length;
};

/* function Queue() {
  class Queue {
    constructor(lista = []) {
      return (this.lista = lista);
    }
    enqueue(value) {
      return this.lista.unshift(value);
    }
    dequeue() {
     return this.lista.length > 0 ? this.lista.pop() : undefined;
    }
    size() {
      return this.lista.length;
    }
  }
}
var queue = new Queue();
var q2 = new Queue(); */

/*NOTA AGREGADA POR MI: completar función constructora Queue, meterle los métodos dentro de queue y en cada uno meterle la lógica para sacar, eliminar y te lea el size. Acordarse de revisar los tests.  */
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
