// MI LISTA CON MÁS FUNCIONES

function Node(value) {
  this.value = value;
  this.next = null;
}

class linkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    let nodo = new Node(value), //lo que vas a meter en la lista
      current = this.head; //saber donde empieza la lista

    if (current === null) {
      //revisa que el comienzo de la lista este vacio
      this.head = nodo;
      return "nodo añadido"; //mete el nodo como comienzo de la lista
    }

    while (current.next) {
      //next -> siguiente nodo, para llegar al final podes decir que next -> null (no apunta a nada)
      current = current.next; //hay un siguiente nodo me muevo ahi
    }

    current.next = nodo; //el ultimo nodo ahora va a apuntar al nuevo nodo creado al principio
    return "se agrego el nuevo nodo con valor " + nodo.value;
  }

  // FUNCION PARA AGREGAR UN NODO EN POSICIÓN ESPECÍFICA:
  addSpecificNode(value, position = 1) {
    let newNode = new Node(value),
      current = this.head;

    if (position <= 0 || typeof position == "string") {
      throw new Error("Ingresaste una posición inválida");
    }
    // ÚLTIMO AGREGADO
    this.nodeCounter();
    if (position > this.nodeCounter()) {
      return this.add(value);
    }

    // posibilidad de que no hubiera head OK
    if (!current) {
      this.head = newNode;
      return "Nodo agregado al inicio de la lista: " + newNode.value;
    }

    // posibilidad de que solo hubiera head y posicion 1 OK
    if (!current.next && position == 1) {
      //let nodMoved = current;
      this.head = newNode;
      this.head.next = current;
      return "Nodo agregado al inicio de la lista: " + newNode.value;
    }

    // posibilidad de que solo hubiera head y posicion arriba de 1 OK
    if (!current.next && position > 1) {
      current.next = newNode;
      return "Nodo agregado a continuación del head: " + newNode.value;
    }

    // posibilidad de que haya head, nodos y posicion de 1 OK
    if (current.next && position == 1) {
      this.head = newNode;
      this.head.next = current;
      return "Se agregó el nuevo nodo: " + newNode.value;
    }

    // posibilidad de que hubiera head y nodos y posicion arriba de 1. Me quiero parar en el nodo anterior al nuevo que se va a agregar

    // Corrector para el caso de que la posición sea mayor a la cantidad de nodos
    if (current.next && position > 1) {
      while (position > 2) {
        current = current.next;
        position -= 1;
      }
    }
    current.next;
    let movedNode = current.next;
    current.next = newNode;
    current.next.next = movedNode;
    return "Agregamos en su posición indicada el nuevo nodo: " + newNode.value;
  }

  // ---------------------------------
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
    return deleted; //retorno el valor eliminado
  }

  // CONTADOR DE NODOS
  nodeCounter() {
    let current = this.head,
      counter = 0;

    if (!current) {
      return counter;
    }

    if (current) {
      counter += 1;
      while (current.next) {
        counter++;
        current = current.next;
      }
    }
    return counter;
  }

  removeSpecificNode(specificNode) {
    let current = this.head,
      deleted = "";

    // ------------CHEQUEADOR SI EXISTE EL VALOR--------------
    let counter = this.nodeCounter();

    if (counter === 0) {
      return "No hay nodos para eliminar";
    }

    while (counter > 0) {
      if (current.value == specificNode) {
        break;
      } else {
        current = current.next;
        counter -= 1;
      }
    }

    if (counter === 0) {
      return "Ninguno de los nodos tiene el valor asignado";
    } else {
      current = this.head;
    }
    // ------------------------------

    if (current.value == specificNode) {
      deleted = this.head.value;
      this.head = this.head.next;
      return "se eliminó el siguiente nodo: " + deleted;
    }

    while (current.next.value !== specificNode) {
      current = current.next;
    }
    deleted = current.next.value;
    if (current.next.next) {
      // chequear este agregado
      current.next = current.next.next;
    } else {
      current.next = null;
    }
    return "Se eliminó el siguiente nodo: " + deleted;
  }

  search(arg) {
    let current = this.head; //entro a la lista
    let isCallback = typeof arg === "function" ? true : false; //es un booleano que si el argumento es un CB se vuelve true, si es un argumento "normal" es false

    if (!current) {
      return null; //devuelvo null porque no encontre lo que buscaba
    }

    while (current) {
      // 5 -> 3 -> 4 -> 8 -> current = null;  me muevo por la lista hasta que se termina
      if (!isCallback) {
        //compruebo que argumento no sea un cb
        if (current.value === arg) {
          return current.value;
        }
      } else {
        if (arg(current.value)) {
          //como arg es un cb, lo ejecuto y compruebo su retorno
          return current.value;
        }
      }
      current = current.next; //me muevo alsiguiente nodo
    }
    return null; //sali del while, el current se movio fuera de la lista por lo que no encontro lo que buscaba
  }
}

// PARA ORDENAR LA LISTA DE MAYOR A MENOR
LinkedList.prototype.orderList = function () {
  let swap = true;

  let current = this.head;

  while (swap) {
    while (current.next) {
      swap = false;
      if (current.value > current.next.value) {
        swap = true;

        let aux = current.value;

        current.value = current.next.value;

        current.next.value = aux;
      }
    }
  }
};

let lista = new linkedList();

lista.add(2);
lista.add(4);
lista.add(1);
lista.add(3);

// LISTA: Mateo ---Juan --- Ricardo --- Ignacio ---  Alberto  --- null

// FUNCIÓN PARA ORDENAR NODOS
LinkedList.prototype.order = function () {
  let arr = [];
  let current = this.head;
  var lista = new LinkedList();
  if (!current) return null;
  while (current) {
    arr.push(current.data);
    current = current.next;
  }
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    lista.add(arr[i]);
  }
  console.log(lista);
};

// FUNCIÓN PARA METER NODO DE MAYOR A MENOR
OrderedLinkedList.prototype.add = function (val) {
  let previous = "";
  let current = this.head;
  let nodo = new Node(val);
  if (!current) {
    this.head = new Node(val);
  }

  while (current) {
    if (current.value < val) {
      break;
    }
    if (current.value > val) {
      //estoy en el nodo que va a seguir al nuevo
      previous = current;
      current = current.next;
    }
  }
  // < 'head --> 5 --> 3 --> 1 --> null' add(0)
  //   head-->   5 --> 4 --> 3 --> 1 --> 0   --> null
  //     current = 3 previous = 5 next --> 4
  previous.next = nodo;
  nodo.next = current;
};

// PARA SACAR REPETIDOS:

LinkedList.prototype.simplifyList = function () {
  let current = this.head;
  let arr = [];
  let setArr = null;

  if (!current) return false;
  if (!current.next) return current.value;

  while (current) {
    arr.push(current.value);
    current = current.next;
  }

  setArr = new Set(arr);
  arr = [];
  setArr.forEach((el) => arr.push(el));

  this.head = null;

  for (let i = 0; i < arr.length; i++) {
    this.add(arr[i]);
  }
};
