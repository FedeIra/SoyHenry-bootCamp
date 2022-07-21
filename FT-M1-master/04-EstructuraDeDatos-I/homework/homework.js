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

/* function nFactorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * nFactorial(n - 1);
  }
} */

function nFibonacci(n) {
  return n === 0 ? 0 : n === 1 ? 1 : nFibonacci(n - 1) + nFibonacci(n - 2);
}
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
  class QueueCreator {
    constructor(lista) {
      this.lista = lista;
    }
    enqueue(value) {
      this.lista.unshift(value);
    }
    dequeue() {
      if (this.lista.length > 0) {
        this.lista.splice(0, 1);
      } else {
        return undefined;
      }
    }
    size() {
      return this.lista.length;
    }
  }

  let queue = new QueueCreator();
}

/* Queue(); */

/*NOTA AGREGADA POR MI: completar función constructora Queue, meterle los métodos dentro de queue y en cada uno meterle la lógica para sacar, eliminar y te lea el size. Acordarse de revisar los tests.  */
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
