"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
/* MIS NOTAS: chequear que coincida con las demás notas.
Lista --> ["Franco"] --> ["Toni"] --> ["Diego"] --> null

var lista = new List();
lista.search("Diego") --> true
lista.search("Mati") --> false

Puede recibir una función. Ejemplo:
function size6(valor) {
  return valor.length === 6;
}
lista.search(size6); tendría que ejecutar la función en cada uno hasta que devuelva true y haga match. Tenes que chequear si recibís un valor o una función y considerando eso hacer una u otro paso.
*/
function Node(value) {
  this.value = value;
  this.next = null;
}

class LinkedList {
  constructor() {
    this.head = null;
    // this.length = 0; puedo aregarlo si quiero
  }

  add(value) {
    let nodo = new Node(value);
    let current = this.head;

    if (!current) {
      this.head = nodo;
      return "nodo añadido";
    }

    while (current.next) {
      current = current.next;
    }

    current.next = nodo;
    return "se agrego el nuevo nodo con valor " + nodo.value;
  }

  remove() {
    let current = this.head;
    let deleted = "";
    if (!current) {
      return null;
    }

    if (!current.next) {
      deleted = this.head.value;

      this.head = null;
      return deleted;
    }

    while (current.next.next) {
      current = current.next;
    }

    deleted = current.next.value;
    current.next = null;
    return deleted;
  }
  // --------------------------------------
  search(valueOrFunction) {
    let current = this.head,
      callback = typeof valueOrFunction == "function" ? true : false;

    if (!current) {
      return null;
    }

    if (!callback) {
      if (valueOrFunction == current.value) {
        return current.value;
      }
    }

    if (callback) {
      if (valueOrFunction(current.value) == true) {
        return current.value;
      }
    }

    while (current.next) {
      current = current.next;
      if (!callback) {
        if (valueOrFunction == current.value) {
          return current.value;
        }
      }
      if (callback) {
        if (valueOrFunction(current.value) == true) {
          return current.value;
        }
      }
    }
    return null;
  }
}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings. Cada letra tiene asociado un código cuando usas charCodeAt = var str = "Franco"; str.charCodeAt(0) = 70) y calcula el módulo (mod es %) de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

// FUNCIÓN CREADORA DE LA HASHTABLE
function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

HashTable.prototype.hash = function (key) {
  let sum = 0;
  for (let i = 0; i < key.length; i++) {
    sum += key.charCodeAt(i);
  }
  return sum % this.numBuckets;
};

HashTable.prototype.set = function (key, value) {
  if (typeof key !== "string") throw new TypeError("Keys must be strings");
  let i = this.hash(key);

  // con esto evito colisiones:
  if (this.buckets[i] === undefined) {
    this.buckets[i] = {};
  }
  this.buckets[i][key] = value;
};

HashTable.prototype.get = function (key) {
  let i = this.hash(key);
  return this.buckets[i][key];
};

HashTable.prototype.hasKey = function (key) {
  let i = this.hash(key);
  return this.buckets[i].hasOwnProperty(key);
};

// vamos a tener un arreglo this.buckets = [{instructora = "Ana"}];
/* mientras que recibe un imput y nos de un output ya está. Lo importante es que si ingresamos el mismo input salga lo mismo como valor
  HashTable.prototype.hash = function(key) {
    let sum = 0
    for (let i = 0, key.length; i++) {
      sum+= key.charCodeAt(i);
    } 
    return sum%this.numBuckets
  }
}
  
  */

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
