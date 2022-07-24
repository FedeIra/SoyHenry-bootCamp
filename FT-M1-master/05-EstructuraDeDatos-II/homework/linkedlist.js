function Node(value) {
  this.value = value;
  this.next = null;
}

class linkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    let nodo = new Node(value); //lo que vas a meter en la lista
    let current = this.head; //saber donde empieza la lista

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

  // AGREGARLE UN METODO QUE ELIMINE UN NODO ESPECIFICO POR POSICION
  removeSpecificNode(specificNode) {
    let current = this.head;
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

let lista = new linkedList();
