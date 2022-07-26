// Lo que hice en el homework, pre programming y post (hasta el codeReview)

function BinarySearchTree(data) {
  this.value = data;
  this.left = null;
  this.right = null;
  this.__length = 1;
}

// FUNCIÓN SIZE
BinarySearchTree.prototype.size = function (data) {
  return this.__length;
};

// FUNCIÓN INSERT
BinarySearchTree.prototype.insert = function (data) {
  // derecha para mayores
  if (data > this.value) {
    if (this.right === null) {
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
    if (this.left === null) {
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
BinarySearchTree.prototype.breadthFirstForEach = function () {};

// FUNCIÓN PARA ARMAR ARRAY DE ÁRBOLES IN ORDER (izquierda, root, derecha)
function dfsRecursiveInOrder(node, testArray) {
  if (node) {
    if (node.left) {
    }
    dfsRecursiveInOrder(node.left, testArray);

    testArray.push(node.value);

    if (node.right) {
      dfsRecursiveInOrder(node.right, testArray);
    }
  }
  return testArray;
}

// INVOCACIÓN
if (orderDFS === "in-order") {
  return dfsRecursiveInOrder(this, []);
}

let tree = new BinarySearchTree(20);

tree.insert(12);
tree.insert(22);
tree.insert(15);
tree.insert(25);
tree.insert(5);
tree.insert(17);
tree.insert(21);
tree.insert(28);
tree.insert(0);
tree.insert(14);
tree.insert(50);
tree.insert(1);
tree.insert(45);
tree.insert(13);
tree.insert(12);
tree.insert(11);
tree.insert(30);
tree.insert(35);
tree.insert(33);
tree.insert(31);
tree.insert(34);

console.log(tree.depthFirstForEach("in-order"));

console.log(tree.depthFirstForEach());
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
