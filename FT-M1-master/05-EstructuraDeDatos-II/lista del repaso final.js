// OTRO EJEMPLO:

LinkedList.prototype.add = function (valor) {
  var nuevoNodo = new Node(valor);

  if (!this.head) {
    this.head = nuevoNodo;
  } else {
    var tailActual = this.head;
    while (tailActual.next !== null) {
      tailActual = tailActual.next;
    }
    tailActual.next = nuevoNodo;
  }
};

LinkedList.prototype.remove = function () {
  if (!this.head) {
    return undefined;
  }

  if (this.head.next === null) {
    var unicoNodo = this.head;
    this.head = null;
    return unicoNodo.value;
  }

  var nodoActual = this.head.next;
  var nodoPrevious = this.head;
  while (nodoActual.next !== null) {
    nodoPrevious = nodoActual;
    nodoActual = nodoActual.next;
  }
  nodoPrevious.next = null;
  return nodoActual.value;
};

LinkedList.prototype.search = function (arg) {
  var nodoActual = this.head;

  if (nodoActual === null) {
    return null;
  }

  while (nodoActual !== null) {
    if (typeof arg === "function") {
      if (arg(nodoActual.value)) {
        return nodoActual.value;
      }
    } else if (nodoActual.value === arg) {
      return nodoActual.value;
    }
    nodoActual = nodoActual.next;
  }

  return null;
};

function Node(valor) {
  this.value = valor;
  this.next = null;
}

// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function () {
  // Tu código aca:

  // Chequear que la lista no este vacía
  // Necesitamos preguntar a cada valor de los nodos
  // Ver si podemos transformar el valor del nodo a un Number
  // Si es el caso: reemplazar el valor del nodo por 'Kiricocho'
  // Contar los cambios que hicimos
  // al final retornar la cantidad de cambios

  let current = this.head, // si hay algo se almacena el objeto node que tiene value y next.
    counter = 0;

  /*Si a Number(le pasas un valor) te lo transforma a número siempre y cuando pueda. Si no se puede te devuelve NaN. Con el isNaN verifico si no se pudo transformar a number  */
  while (current) {
    if (Number.isNaN(Number(current.value))) {
      current.value = "Kiricocho";
      counter++;
    }
    current = current.next;
  }
  //retorno la cantidad de cambios
  return counter;
};

const lista = new LinkedList();
lista.changeNotNumbers();

// OTRAS FUNCIONES PARA LISTAS:

// ----- LinkedList -----
// Deben completar la siguiente implementacion 'OrderedLinkedList'(OLL)
// que es muy similar a las LinkedList vistas en clase solo que
// los metodos son distintos y deben de estar pensados para conservar la lista
// ordenada de mayor a menor.
// ejemplos:
// head --> 5 --> 3 --> 2 --> null
// head --> 4 --> 3 --> 1 --> null
// head --> 9 --> 3 --> -1 --> null
// Las dos clases principales ya van a estar implementadas a continuacion:
function OrderedLinkedList() {
  this.head = null;
}

// notar que Node esta implementado en el archivo DS
function Node(value) {
  this.value = value;
  this.next = null;
}

// Y el metodo print que permite visualizar la lista:
OrderedLinkedList.prototype.print = function () {
  let print = "head";
  let pointer = this.head;
  while (pointer) {
    print += " --> " + pointer.value;
    pointer = pointer.next;
  }
  print += " --> null";
  return print;
};

// EJERCICIO 4
// Crea el metodo 'add' que debe agregar nodos a la OLL de forma que la misma se conserve ordenada:
// Ejemplo:
// > LL.print()
// < 'head --> null'
// > LL.add(1)
// > LL.print()
// < 'head --> 1 --> null'
//    2       c
// > LL.add(5)
// > LL.print()
// < 'head --> 5 --> 1 --> null'
// > LL.add(4)
// > LL.print()
// < 'head --> 5 --> 3 --> 1 --> null'
//               4

OrderedLinkedList.prototype.insert = function (value) {
  if (!this.head) {
    this.head = new Node(value);
    return "se agregó como head";
  } else {
    let cursor = this.head;
    while (cursor.next) {
      cursor = cursor.next;
    }
    cursor.next = new Node(value);
    return "se agregó nodo";
  }
};

OrderedLinkedList.prototype.toArray = function () {
  if (this.head === null) return false;

  let current = this.head,
    arr = [];

  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  arr.sort((a, b) => (a < b ? 1 : -1));

  this.head = null;

  for (let i = 0; i < arr.length; i++) {
    this.insert(arr[i]);
  }
};

OrderedLinkedList.prototype.add = function (val) {
  this.insert(val);
  this.toArray();
};

let tree = new OrderedLinkedList();

tree.add(2);
tree.add(3);
tree.add(5);
tree.add(6);
tree.add(15);
tree.add(9);
tree.add(10);

tree.print();
