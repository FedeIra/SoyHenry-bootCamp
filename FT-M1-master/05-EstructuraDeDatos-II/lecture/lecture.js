/* 
ESTRUCTURAS DE DATOS:

1) Arrays,
2) Lists
3) Files

Lists: 
A) Linear Lists: i) stacks, ii) queues
B) Non-linear lists: i) trees, ii) graphs 

Entre stacks y queues lo único que cambia es de que lado saco y pongo, pero en definitiva son listas.

!LISTAS ENLAZADAS: 
Básicamente es una únion o conexión de nodos donde cada nodo en particular va a tener dos cosas:
1) data o valor guardado adentro;
2) referencia de quién viene adelante.

Ejemplo:*/

function Node(data) {
  this.data = data;
  this.next = null;
}

// y la lista que es una función constructora. Tener un nodo solo no implica que esté en la lista:
function List() {
  this._length = 0;
  this.head = null; // el head es el que empieza la lista.
}

/* La particularidad de los nodos es que solo saben quién es el siguiente nodo.

Los nodos están conectados entre sí. 

!Head: cabeza de la lista
Para acceder al último nodo tengo que arrancar con el head, para que me vaya pasando al 
siguiente hasta llegar al último.


Con listas podemos: iterar, insertar, sacar nodos, etc. Tienen lógicas distintas para sacar al principio o al medio.

!LISTA SIMPLEMENTE ENLAZADA: 
tenemos elementos (NODOS) en el cual cada nodo va a tener los datos particulares y a su vez tiene una referencia al siguiente elemento. Porque cada nodo tiene como referencia un único nodo siguiente.

primer nodo ==> nodo 2 ==> nodo3 ==> nodo4 ==> último nodo

No hay forma de saltar del primero al último. Cada nodo tiene referencia al siguiente. Para armar esta lista no nos bastan con un arreglo como en el stack y el queue, pq en el arreglo puedo acceder a cualquier desde donde quiera. NO ES LO MISMO.

Entonces, vamos a tener dos funciones. Una función constructora de NODO y otra de lista:
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function List() {
  this._length = 0; // el __length es convención para que no accedas desde fuera
  this.head = null; // this.head apunta al primer nodo.
}

var list1 = new List();
console.log(list1); // { _length: 0, head: null } Devuelve null pq todavía no tiene ningún nodo.

// los nodos tienen la referencia o son puntero del siguiente nodo, pero no conocen su valor. si queres saber si hay un valor en la lista tenes que recorrer o iterar la lista desde head y nodo por nodo hasta que encuentres el valor.

function Node(data) {
  this.data = data;
  this.next = null;
}

function List() {
  this._length = 0;
  this.head = null;
}

List.prototype.add = function (data) {
  var node = new Node(data),
    current = this.head;
  // Si está vacia
  if (!current) {
    this.head = node;
    this._length++;
    return node;
  }
  // Si no esta vacia, recorro hasta encontrar el último
  while (current.next) {
    /* en el momento que current.next (this.next) es nulo te asigna el current node como this.next */
    current =
      current.next; /* En un momento current.next es null entonces sale de este while y su current.next es igual al nodo que creamos */
  }
  current.next = node;
  this._length++;
  return node;
};

let lista1 = new List();

lista1.add("Fede"); // acá el this se refiere a la lista1
lista1.add("Juan");
lista1.add("Emi");

List.prototype.getAll = function () {
  current = this.head; //empezamos en la cabeza
  if (!current) {
    console.log("La lista esta vacia!");
    return;
  }
  while (current) {
    console.log(current.data);
    current = current.next;
  }
  return;
};

lista1.getAll(); // Fede Juan Emi

/* LISTAS DOBLEMENTE ENLAZADAS
Tiene además un this.previous: Conocen el nodo anterior también


function Node(data) {
  this.data = data;
  this.next = null;
  this.previous = ...
}

*/

/* 
!HASH TABLE
Es otra estructura de datos. MUY IMPORTANTE.

En Js los objetos están hechos por medio de hash tables y en JS todo es un objeto.

Cómo hago para acceder a un objeto sin tener que recorrer toda la lista. Esto tiene SOLUCIÓN y conozco exactamente el lugar donde debería haber quedado guardada la info o el objeto.

Ej: si tenes un millón espacios donde podría haber quedado guardado...Es imposible acordarte dónde está cada uno... peeeero si sé el método por el que se agregó a la memoria cada objeto puedo acceder al objeto que quiera.

Acá entra en juego el HASHTABLE: tenemos un input de info que tenemos que guardar. Esa info. pasa a través de una función hash y te devuelve la posición en memoria donde va a quedar guardado ese dato.

La función hash puede ser cualquier cosa, en la medida que te devuelva UN SOLO espacio para cada objeto. 

Si por el hash guardas dos cosas en un mismo espacio, COLISIONAN. Podes agregarle cosas a la función hash para que no se guarde todo en un mismo lugar y así resolver la colisión. Podes agregarle un array en otra posición u objeto. En vez de guardar el dato directamente en la memoria, si hay dos o más datos para el mismo espacio le puedo meter una lista enlazada por ejemplo. El tema de hacer esto una lista enlazada es q va a ser lento para la búsqueda. 

Lo podemos solucionar con un objeto generando propiedades para cada uno de los datos. Y a los objetos podemos acceder directamente.
*/

//! Ejercicios con listas simplemente enlazadas:

function Node(value) {
  this.value = value;
  this.next = null;
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    let nodo = new Node(value);
    let current = this.head;

    if (current === null) {
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
    if (current === null) {
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

  search(valueOrFunction) {
    let current = this.head,
      callback = typeof valueOrFunction == "function" ? true : false;

    if (!current) {
      return null;
    }

    if (!callback) {
      if (valueOrFunction == current.value) {
        return `encontramos el valor en el head: ${current.value}`;
      }
    }

    if (callback) {
      if (valueOrFunction(current.value) == true) {
        return "el head paso la función y es true";
      }
    }

    while (current.next) {
      current = current.next;
      if (!callback) {
        if (valueOrFunction == current.value) {
          return `encontramos el valor en un nod: ${current.value}`;
        }
      }
      if (callback) {
        if (valueOrFunction(current.value) == true) {
          return "el head paso la función y es true";
        }
      }
    }
    return "tenes, head, tenes nods, pero no matchea el resultado";
  }
}

function isEven(arg) {
  return arg % 2 == 0 ? true : false;
}

let list1 = new LinkedList();

list1.add("Fede");
list1.add(3);
list1.add(6);
list1.search(isEven);
