/* 
ESTRUCTURA DE DATOS: ARBOLES


1) Arrays,
2) Lists
3) Files

Lists: 
A) Linear Lists: i) stacks, ii) queues
B) Non-linear lists: i) trees, ii) graphs 

Ya vimos anteriormente stacks, queues y lienas enlazadas (simples o dobles).

ÁBOLES:

En las listas simplemente enlazadas son UNA SOLA LÍNEA. El arbol puede tener nodos con valores o incluso pequeños subárboles.

El primer nodo es el nodo raíz y ese puede tener distintos niveles. UN ÁRBOL GENEALÓGICO: van hacía abajo.

                              (A) ROOT                                            LEVEL 0

            (B)                                         (C)                       LEVEL 1  
  
  (D)= Parent node     (E)                   (F)= leaf node          (G)          LEVEL 2 (D y E = siblings // (F y G = siblings))

(H) (I)                (J)                                                        LEVEL 3
sub-tree

ROOT: el primer nodo.
LEAF O HOJAS: los nodos que no tienen hijos son NODOS HOJA.
NODOS PADRES: los que tienen nodos.
NODOS HIJOS: vienen de un nodo.
ARBOL: la construcción de un árbol es la construcción de muchos subarboles pq de cada nodo que viene de un padre también es un árbol a su vez. En efecto, a cada uno de ellos le podes hacer las mismas operaciones.

Entre ellos hay un camino y se pueden acceder a cada uno. A conoce de B, pero B no de A. La vinculación es para abajo. No se puede llegar de H a A, pero sí de A a H. Pueden tener infinitos hijos. SOLO BAJAN. NO SUBEN.

Los arboles tampoco pueden tener ciclos. Si o si crecen hacía abajo.

Un ejemplo de los arboles es el DOM (Ejemplo: hmtl ==> body ==> article ==> párrafo ==> negrita ==> etc.) Son muchos elementos anidados. EL DOM ES UN ÁRBOL.
*/

/* 
TIPOS DE ÁRBOLES:

1) ÁRBOL BINARIO (binary tree): son árboles que pueden tener como MÁXIMO DOS HIJOS.

2) BINARY SEARCH TREE (BST): Solo pueden tener 0, 1 o 2 hijos. Pero además, tiene la restricción de que tiene un número root, y aquellos números menores al root van a la izquierda y los mayores a la derecha. Pero esto respecto de cada hijo. Por lo que si va un número menor a la izquierda y luego se introduce un número mayor a ese pero menor al root, entonces el nuevo número va a la derecha del padre pero izquierda del root.

Cuando son iguales, en general no se admiten repeticiones, pero es según lo ponga cada uno. Es un tema de implementación de cada uno.

Máximo dos hijos entonces. Izquierda: menores, Derecha: mayores

Donde no veamos info. van a haber valores nulos. 

Pueden tener cualquier tipo de información, no solo números.

Cada nodo es un árbol en sí mismo, por lo que al final son árboles que tienen más árboles.

3) ÁRBOL BINARIO AUTOBALANCEADO (AVL tree): está balanceado si la cantidad de nodos a la izquiera es la misma o menos uno que a la derecha.
Cantidad de elementos a la izquierda es igual o menos 1 a la cantidad a derecha. Acordarse que cada nodo es un árbol en sí mismo. El árbol binario se autobalancea.

TRIE: es un arbol BST que se utiliza mucho para diccionario y manejo de palabras.

4) MAX HEAP: hace que en el root tiene que quedar el valor más grande y además tiene que estar completo. Además tiene que tener un hermano salvo que sea nodo hoja (que no tenga ningún hijo). O sea, o el nodo no tienen ningún hijo o tiene los dos, pero no puede tener un solo hijo. Los mayores van para arriba además.

Si meto un nodo más alto que los que ya habían entonces el nuevo nodo más alto pasa a ser la raíz.

5) MIN HEAP: lo mismo que MAX HEAP pero de menor a mayor.
*/

/* 
BINARY SEARCH TREE (BST):

Si un nodo del otro lado, pasa más de un nivel en el que el nodo del otro lado tiene nodos, entonces también tiene que autobalancearse.

Lo mismo puede usarse con palabras porque a > b por ejemplo. También se puede guardar con length.

Es un árbol adentro de otro árbol y cada árbol tiene las mismas funciones: RECURSIVIDAD.

*/

function BinarySearchTree(data) {
  this.data = data; // ESTE ES EL NODO RAÍZ
  this.left = null;
  this.right = null;
}

let bst = new BinarySearchTree(5); // {data: 5, left: null, right: null}

BinarySearchTree.prototype.add = function (data) {
  if (data > this.data) {
    // derecha para mayores
    if (this.right === null) this.right = new BinarySearchTree(data);
    // pq cada nodo es un árbol en sí mismo
    else this.right.add(data); // RECURSIVIDAD PARA RECORRER LA LISTA HASTA QUE SEA NULL
  }

  if (data < this.data) {
    // izquierda para menores
    if (this.left === null) this.left = new BinarySearchTree(data);
    // pq cada nodo es un árbol en sí mismo
    else this.left.add(data); // RECURSIVIDAD PARA RECORRER LA LISTA HASTA QUE SEA NULL
  }
};

bst.add(10);
bst;
/* {
  data: 5, left: null,
    right: BinarySearchTree { data: 10, left: null, right: null }
}  */

bst.add(11);

bst.add(4);
/* bst { data: 5,
  left: BinarySearchTree { data: 4, left: null, right: null },
  right: 
  BinarySearchTree { data: 10,
    left: null,
     right: BinarySearchTree { data: 11, left: null, right: null } } } */
bst.add(2);

/* RECORRIDOS DE LOS BST (BINARY SEARCH TREE)
Se puede recorrer por profundidad (DFS) o anchura o niveles (BFS). Son distintas formas de recorrer el árbol. Puede servir para mostrar valores por ejemplo. Recorre todo, se reserva valores y después los puedo manejar.


1) Por profundidad (DFS):
  A) Postorder: itera de la siguiente manera: Izquierda, derecha, yo (root). SE HACE POR RECURSIVIDAD.
  B) Preorder:itera de la siguiente manera: yo (root), izquierda, derecha. SE HACE POR RECURSIVIDAD.
  C) Inorder: itera como un sanguchito: izquierda, yo (root), derecha. SE HACE POR RECURSIVIDAD.

2) Por anchura o niveles (BFS):
La idea es que vamos a tener que avanzar a lo largo del arbol y saber como mantener un orden por niveles. Arrancando por el último orden. Esto se hace a travéz de una función que ya vimos en las clases anteriores. Revisar acá la primer clase de estructuras 1.

*/
