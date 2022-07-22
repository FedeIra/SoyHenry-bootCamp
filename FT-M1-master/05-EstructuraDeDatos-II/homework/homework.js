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
class Node {
  constructor(value) {
    this.value = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    let newNode = new Node(value),
      currentNode = this.head;

    if (!currentNode) {
      this.head = newNode;
      return "nodo añadido";
    }
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    return newNode;
  }
  remove() {
    let current = this.head; //entras en la lista
    let deleted = "";
    if (current === null) {
      return null; //la lista esta vacia, no puedo  borrar nada devuelvo null
    }

    if (!current.next) {
      //compruebo que al head no le siga nadie
      deleted = this.head.value; //guardo el valor en un auxiliar antes de borrarlo

      this.head = null; //borras la cabeza de la lista
      return deleted;
    }

    while (current.next.next) {
      //current es el anteultimo nodo
      current = current.next;
    }

    deleted = current.next.value; //guardo valor en auxiliar antes de borrarlo
    current.next = null; //borro la conexion al ultimo nodo, JS despues se encarga de sacarlo de memoria
    return deleted;
  }
  search(arg) {
    let currentNode = this.head;
    let isCallback = typeof arg === "function" ? true : false;

    if (!currentNode) {
      return "No node head, no return...";
    }
    while (currentNode) {
      if (!isCallback) {
        if (current.value === arg) {
          return current.value;
        } else {
          if (arg(current.value)) {
            return current.value;
          }
        }
        currentNode = current.next;
      }
      return null;
    }
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

function HashTable() {
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
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
