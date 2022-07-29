// EJEMPLO DE ÁRBOL VISTO EN LA PRÁCTICA:
function BinarySearchTree(valor) {
  this.value = valor;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    if (this.left === null) {
      var newTree = new BinarySearchTree(value);
      this.left = newTree;
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      var newTree = new BinarySearchTree(value);
      this.right = newTree;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.size = function () {
  if (this.value === null) {
    return 0;
  }

  if (this.left === null && this.right === null) {
    return 1;
  }

  if (this.left === null) {
    return 1 + this.right.size();
  }

  if (this.right === null) {
    return 1 + this.left.size();
  }

  return 1 + this.left.size() + this.right.size();
};

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function () {
  // Tu código aca:
  // Declarar una variable contadora. Le asignas el valor del root inicial.
  var total = this.value;
  // Recorrer el árbol partiendo de la raíz, sumar el valor de cada uno al contador
  // Si existe otro nodo a la derecha tomar ese nodo como nueva raíz y repetir el proceso. Sumar al contador total de los valores.
  // Si existe otro nodo a la izquierda tomar ese nodo como nueva raíz y repetir el proceso. Sumar al contador total de los valores.
  if (this.right) total += this.right.sum();

  if (this.left) total += this.left.sum(); // de manera recursivo ingreso a cada uno de los árboles y voy sumando al contador el valor de cada árbol
  return total;
};

// PARA BUSCAR ÁRBOL MENOR:

BinarySearchTree.prototype.searchMin = function () {
  if (!this.left) return this.value;
  else {
    return this.left.searchMin();
  }
};

var bst = new BinarySearchTree(15);

bst.insert(10);
bst.insert(17);
bst.insert(5);
bst.insert(7);
bst.insert(3);
bst.insert(25);

bst.sum();
