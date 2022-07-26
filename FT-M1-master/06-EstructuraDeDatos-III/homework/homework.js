"use strict";

// PENSAR LAS SIGUIENTES FUNCIONES:
// Sumar todos los valores;
// Sumar solo pares

// PAra listas enlazadas: darlo vuelta.
/*
Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El árbol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(data) {
  this.value = data;
  this.left = null;
  this.right = null;
  this.__length = 1;
}

// FUNCIÓN SIZE (lo hice sin recursividad, pero había que hacerlo con.)
BinarySearchTree.prototype.size = function (data) {
  return this.__length;
};

// FUNCIÓN INSERT
BinarySearchTree.prototype.insert = function (data) {
  // derecha para mayores
  if (data > this.value) {
    if (!this.right) {
      this.right = new BinarySearchTree(data);
      this.__length += 1;
      return "se agregó nodo";
    } else {
      this.right.insert(data);
      this.__length += 1;
      return "se agregó nodo";
    }
  }
  //izquierda para menores
  if (data < this.value) {
    if (!this.left) {
      this.left = new BinarySearchTree(data);
      this.__length += 1;
      return "se agregó nodo";
    } else {
      this.left.insert(data);
      this.__length += 1;
      return "se agregó nodo";
    }
  }
};

// FUNCIÓN CONTAINS
BinarySearchTree.prototype.contains = function (searchValue) {
  // CASO BASE: está el valor
  if (searchValue === this.value) {
    return true;
  }

  // Para la izquierda con recursividad
  if (searchValue < this.value && this.left) {
    return this.left.contains(searchValue);
  }

  // Para la derecha con recursividad
  if (searchValue > this.value && this.right) {
    return this.right.contains(searchValue);
  }

  return false;
};

// FUNCIÓN DEPTH FIRST FOR EACH
BinarySearchTree.prototype.depthFirstForEach = function (
  callback,
  orderDFS = "in-order"
) {
  // IN ORDER (izquierda, root, derecha)
  if (this && orderDFS === "in-order") {
    if (this.left) this.left.depthFirstForEach(callback, orderDFS);

    callback(this.value);

    if (this.right) this.right.depthFirstForEach(callback, orderDFS);
  }

  // PRE ORDER (root, izquierda, derecha)
  if (this && orderDFS === "pre-order") {
    callback(this.value);
    if (this.left) this.left.depthFirstForEach(callback, orderDFS);

    if (this.right) this.right.depthFirstForEach(callback, orderDFS);
  }

  // POST ORDER (izquierda, derecha, root)
  if (this && orderDFS === "post-order") {
    if (this.left) this.left.depthFirstForEach(callback, orderDFS);
    if (this.right) this.right.depthFirstForEach(callback, orderDFS);
    callback(this.value);
  }
};

// FUNCIÓN BREATH FIRST FOR EACH
BinarySearchTree.prototype.breadthFirstForEach = function () {
  if (array == null) {
    var array = [];
  }
  if (this.left) {
    array.push(this.left);
  }
  if (this.right) {
    array.push(this.right);
  }
  callBack(this.value);
  array.length > 0 && array.shift().breadthFirstForEach(callBack, array);
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
