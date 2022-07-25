"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El árbol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

// PARA LOS METODOS PODEMOS VER EL README QUE TIENE TEORIA
// FALTA LA OTRA CLASE PARA EL NODO como en listas enlazadas.
function BinarySearchTree(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function () {
  // retornar cantidad de nodos
};

BinarySearchTree.prototype.insert = function (newNode) {
  // Para agregar a la derecha
  if (newNode > this.data) {
    if (this.right === null) this.right = new BinarySearchTree(newNode);
    else this.right.insert(newNode);
  }
  // Para agregar a la izquierda
  if (newNode < this.data) {
    if (this.left === null) this.left = new BinarySearchTree(newNode);
    else this.left.insert(newNode);
  }
};

BinarySearchTree.prototype.contains = function (value) {
  //chequear si existe value en la lista y retornar true or false

  /*  Podríasiguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order") probar invocando recursividad en left y right al mismo tiempo como en fibonacchi
  RECURSIVIDAD
algo(A)
  algo(derecha de A) */

  let firstNode = this.data;
  if (
    value == this.data ||
    value == this.right.data ||
    value == this.left.data
  ) {
    return "found the value you were searching for! There you are: " + value;
  }
  this.left.contains(value);
  this.data = firstNode;
  this.right.contains(value);
};

BinarySearchTree.prototype.depthFirstForEach = function (
  orderDFS = "in-order"
) {
  // recorrer la lsita por los siguientes métodos dependiendo del valor que por defecto es in-order: 1) post-order, 2)pre-order, 3)in-order
};

BinarySearchTree.prototype.breadthFirstForEach = function () {
  // BFS
};

let bst1 = new BinarySearchTree(20);
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};

function BinarySearchTree(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function () {
  // retornar cantidad de nodos
};

BinarySearchTree.prototype.insert = function (newNode) {
  // Para agregar a la derecha
  if (newNode > this.data) {
    if (this.right === null) this.right = new BinarySearchTree(newNode);
    else this.right.insert(newNode);
  }
  // Para agregar a la izquierda
  if (newNode < this.data) {
    if (this.left === null) this.left = new BinarySearchTree(newNode);
    else this.left.insert(newNode);
  }
};

BinarySearchTree.prototype.contains = function (value) {
  //chequear si existe value en la lista y retornar true or false
  if (
    value ===
    this.data /* || value === this.right.data || value === this.left.data */
  )
    return true;
  else {
    this.left.contains(value);
  }

  /* this.data = firstNode;
  this.right.contains(value); */

  //return false;
};

BinarySearchTree.prototype.depthFirstForEach = function (
  orderDFS = "in-order"
) {
  // recorrer la lsita por los siguientes métodos dependiendo del valor que por defecto es in-order: 1) post-order, 2)pre-order, 3)in-order
};

BinarySearchTree.prototype.breadthFirstForEach = function () {
  // BFS
};

let bst1 = new BinarySearchTree(20);

bst1.insert(15);
bst1.insert(25);

bst1.contains(15);
