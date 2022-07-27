function BinarySearchTree(data) {
  this.value = data;
  this.left = null;
  this.right = null;
}

// FUNCIÓN SIZE
BinarySearchTree.prototype.size = function () {
  if (!this.left && !this.right) {
    return 1;
  } else if (this.left && this.right) {
    return 1 + this.left.size() + this.right.size();
  } else if (this.left && !this.right) {
    return 1 + this.left.size();
  } else if (this.right && !this.left) {
    return 1 + this.right.size();
  }
};

BinarySearchTree.prototype.insert = function (value) {
  let hoja = new BinarySearchTree(value);

  // vamos a comparar valores con la raíz
  if (value > this.value) {
    // si es mayor entro acá: Derecha
    if (!this.right) {
      this.right = hoja;
    } else {
      this.right.insert(value);
    }
  } else {
    if (!this.left) {
      this.left = hoja;
    } else {
      this.left.insert(value);
    }
  }
};

// FUNCIÓN CONTAINS
BinarySearchTree.prototype.contains = function (value) {
  // sos el value que estoy buscando? CASO BASE
  // es menor o mayor?
  // voy hacia izq/der Si es que existe un camino (si tiene hijos)
  if (value === this.valor) {
    return true;
  }

  if (value > this.valor) {
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(value);
    }
  } else {
    // si es menor voy a la izquierda
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(value);
    }
  }
};

BinarySearchTree.prototype.depthFirstForEach = function (
  callBack,
  order = "in-order"
) {
  // PRE ORDER (root, izquierda, derecha)
  if ((order = "pre-order")) {
    callBack(this.value);
    if (this.left) {
      this.left.depthFirstForEach(callBack, order);
    }
    if (this.right) {
      this.right.depthFirstForEach(callBack, order);
    }
    // POST ORDER (izquierda, derecha, root)
  } else if ((order = "post-order")) {
    if (this.left) {
      this.left.depthFirstForEach(callBack, order);
    }
    if (this.right) {
      this.right.depthFirstForEach(callBack, order);
    }
    callBack(this.value);
  }
  // IN ORDER (izquierda, root, derecha)
  else if ((order = "in-order")) {
    if (this.left) {
      this.left.depthFirstForEach(callBack, order);
    }
    callBack(this.value);
    if (this.right) {
      this.right.depthFirstForEach(callBack, order);
    }
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (
  callBack,
  array /* Le pasamos el array para que se puede usar en las funciones recursivas y se acumule. Se acumula por niveles de arriba a abajo y izquierda a derecha*/
) {
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

// TAREAS:
let tree = new BinarySearchTree(20);

tree.insert(22);
tree.insert(2);
tree.insert(12);
tree.insert(6);
