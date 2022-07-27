/*
ALGORITMOS 2:

2 algoritmos de ordenamiento más a los anterior. Estos no funcionan de forma iterativa, sino recursiva.


!QUICKSORT:

La complejidad del quicksort es O(n* logn)
Pasos:
1) elegir un elemento de la lista a ordener: pivote. Puede ser un elemento cualquier del array.
2) Mover los demás elementos respecto al pivot a la izquierda los menores y derecha los mayores. El pivot puede ser cualquier elemento de la lista, aunque suele ser más fácil elegir el primero o el último.
3) la lista queda formada en dos sublistas.
4) Después repetimos el proceso mientras que cada sublista tenga más de un elemento.
5) Así quedan finalmente todos los elementos ordenados de menor a mayor.

!El pivot podría ser un array aparte.

Ejemplo:
1) LISTA: 9 -3 5 2 6 8 -6 1 3
2) SublistaMenores= -3 2 -6 1 /  pivot 3 / SublistaMayores= 8 5 9 6
3) Sub sublistas eligiendo un pivot para cada sublista anterior y haciendo nuevas sublistas. Terminan siendo arrays de un solo elemento.

Como es una recursión tiene que haber una condición de corte o caso base: nuestra base de corte es el array que queda con un solo o ningún: if(array.length <=1)

4) Después los concateno de izquierda a derecha (menor a mayor) o viceversa si pusiste mayores a la derecha.
*/

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // Caso base:
  if (array.length <= 1) {
    return array;
  }
  let pivot = array[0],
    left = [],
    right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right).flat()];
}

quickSort([3, 1, 2, 5, 4, 6]); // [1, 2, 3, 4, 5, 6]

/* 
!MERGE SORT

PASOS:
1) Divide el conjunto en dos grupos (sin pivot). Da lo mismo que no queden iguales. Se puede dividir con Math.floor(array.length/2). Terminan siendo arrays de un solo elemento.
2) Ordena recursivamente los dos grupos,
3) Junta (o mergea) los grupos ordenados. Por cada par de arrays de recorre. Recorre dos arrays al mismo tiempo. Y ese número que estás recorriendo de cada uno de los arrays lo comparas y ves cuál es el menor. El menor lo levantas y levantas el mayor seguido al menor. Lo haces así sucesivamente con cada sub array.


La diferencia con quicksort, es cuándo se divide el conjunto. El merge sort ordena cuando va subiendo mientras que el quick sort ordena cuando está bajando.

*/
