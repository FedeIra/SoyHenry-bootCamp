/*
!ESTRUCTURA DE DATOS: 

1) Arrays,
2) Lists
3) Files

Lists: 
A) Linear Lists: i) stacks, ii) queues
B) Non-linear lists: i) trees, ii) graphs 

Ya vimos anteriormente stacks, queues y lienas enlazadas (simples o dobles).

!ÁBOLES: (tiene mucho de recursividad)

Es muy parecido a un árbol genealógico. Los árboles son un subtipo de los grafos (graphs).

Vamos a estar viendo principalmente ÁRBOLES BINARIOS:
*/

/* 

                              (A) ROOT                                            LEVEL 0

            (B)                                         (C)                       LEVEL 1  
  
  (D)= Parent node     (E)                   (F)= leaf node          (G)          LEVEL 2 (D y E = siblings // (F y G = siblings))

(H) (I)                (J)                                                        LEVEL 3

!ROOT: El root es el primer nodo. Sin embargo, cualquier nodo que tenga hijo es root porque es un subárbol. Aún siendo hijos pueden tener hijos y tienen las mismas funciones que el padre(son subárboles). 
!LEAF: Los nodos hojas son aquellos que no tienen hijos. Las hojas apuntal a NULL.
!SIBLINGS:También los nodos de un mismo padre son nodos hermanos.
!LEVELS: hay diferentes niveles según los nodos van teniendo hijos.

Para buscar un valor dentro del árbol binario tengo que usar recursividad y el árbol que tiene el valor es el factor base.

Un ejemplo de árbol es el DOM (document object model). Ejemplo: hmtl ==> body ==> article ==> párrafo ==> negrita ==> etc.) Son muchos elementos anidados.

Hay dos tipos dentro de los árboles binarios:

!1) ÁRBOLES BINARIOS (binary tree)

!2) ÁRBOLES BINARIOS BUSCADORES (binary search tree, BST)
Se ordenen los nodos por su valor.

!BALANCE: un árbol esta desbalanceado cuando los niveles entre la rama de la izquierda y la rama de la derecha superan 1 de diferencia. Si uno de los lados tiene más de un nivel de diferencia el árbol está desbalanceado.

Cada nodo tiene: 1) this.value, 2) this.right, 3) this.left. Por defecto el segundo y tercero son null.

RECURSIVIDAD
preguntas a cada nodo: 1) sos el valor? tenes hijos? alguno de tus hijos tiene el valor que estoy buscando? es una función que hace 3 cosas.
Y así sucesivamente a cada hijo por lo que llamas a la misma función con cada hijo considerando si el valor es mayor o menos al que le preguntaste anteriormente.
algo(A)
  algo(derecha de A)

!3) ARBOL AUTOBALANCEADO (AVL tree): se autobalancea automáticamente.

!4) MAX HEAP: siempre la raíz es más grande. Los hijos no pueden ser más grandes que los padres.
*/

/* 
!FORMAS DE RECORRER UN ÁRBOL:

Si no es un árbol binario de búsqueda tengo que buscar en todos los lados. Si es de búsqueda busco árbol por menor o mayor.

1) DFS: se ve al árbol como un árbol con 3 hijos. No se vé el resto:
  A) Postorder (izquierda, derecha, root): de abajo hacía arriba y de izquierda a derecha. Recursivamente tendrías que llegar a la última hoja de la izquierda antes de hacer recursividad.
  B) Preorder (root, izquierda, derecha): de arriba hacía abajo por niveles y de izquierda a derecha.
  C) InOrder (izquierda, root, derecha): 

CAMBIA EL ORDEN EN EL QUE PREGUNTO!

2) BFS
*/

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

var bst = new BinarySearchTree(15);

bst.insert(10);
bst.insert(17);
bst.insert(5);
bst.insert(7);
bst.insert(3);
bst.insert(25);

bst.sum();
