/*
ALGORITMO: es una manera de resolver un problema.

1) Resolver el problema,
2) Comprensible,
3) Eficiente: tiempo, espacio y otros recursos. Mientras menos se ocupe mejor.


!ALGORITMOS DE ORDENAMIENTO:

!1) BUBBLE SORT
Te ordena de menor a mayor. Ejemplos:
*/

let array = [5, 4];

var a = 5;
var b = 4;

var aux = 5; // creo un auxiliar para guardar el valor que le voy a pasar a b pq si cambia a sin crear este auxiliar entonces despu;es no le puede pasar a b el valor de a.
a = b;
b = aux;

/* 
!2) INSERTION SORT:
Agrega elementos de menor a mayor. Va comparando uno a uno. Si el número del siguiente elemento es mayor que el valor a insertar se inserta antes y si es menor se inserta después.

! 3) SELECTION SORT:
Identifica el número más bajo de toda la lista y lo manda al principio, después pasa al segundo menor y así sucesivamente hasta que queda todo ordenado.
*/
