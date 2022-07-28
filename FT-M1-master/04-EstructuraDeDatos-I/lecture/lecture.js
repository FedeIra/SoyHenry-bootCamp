/*
RECURSIÓN:

Con las funciones podemos hacer de todo. Incluso, con los closures podemos hasta devolver una función.

Recursión: Cuando una función adentro de su bloque de código se invoca a sí misma. Es muy útil para arboles binarios. Y a veces es la única forma de solucionar problemas.

*/

function factorial(x) {
  if (x > -1 && x < 2) return 1;
  else if (x < 0) return 0;
  return x * factorial(x - 1);
}

/* Va a llegar un momento en que  factorial(x - 1) = 1 ya que cumple el if que retorna uno. Entonces ahí se va abriendo cada contexto con su resultado hasta que llega al último al poder realizar la última operación: return x * factorial(x - 1) */

/* El factorial de un número se escribía: !5 = 5*4*3*2 
/ !N = N* N-1 * N-1 ... 1 Esto se puede hacer con un for y un while.
  
  funcion(num) ==> x * x-1 ... Se puede hacer una función iteratiba, pero también se puede resolver con una función recursiva. Es un contexto adentro de otro.

  Cuando hacemos recursividad hay que ponerle un corte pq sino se hace infinito.
*/

// OTRO EJEMPLO

function algo(num) {
  console.log("entre a la funcion");
  if (num == 1) {
    return "llegue"; // caso de corte
  } else {
    return algo(num - 1);
  }
}

console.log(algo(12)); // te tira 11 veces entre a la función, y finalmente te retorna "llegue"
/* entre a la funcion
entre a la funcion
entre a la funcion
entre a la funcion
entre a la funcion
entre a la funcion
entre a la funcion
entre a la funcion
entre a la funcion
entre a la funcion
entre a la funcion
entre a la funcion
llegue */

function algo(num) {
  console.log("entre a la funcion");
  var x = 0; /* Cada vez que abro un contexto de ejecución se abre un contexto con la variable x = 0, pero no se van sumando pq son contextos diferentes. No aplica el closure acá. */
  if (num == 1) {
    return "llegue";
  } else {
    return algo(num - 1);
  }
}

console.log(algo(12));

// Otro ejemplo:
// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
var obj = {
  a: {
    a1: 10,
    a2: "Franco",
    a3: { f: "r", a: "n", c: { o: true } },
  },
  b: 2,
  c: [1, { a: 1 }, "Franco"],
};

// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function (obj) {
  // Tu código aca:
  // el tipo de dato de array en realidad es un objeto entonces para diferenciarlo de los objetos literales usamos el método Array.isArray()

  // Paso 1: declarar una variable contadora. Con el método Object.keys(), contar las propiedades del objeto padre
  let total = Object.keys(obj).length; // te pasa las propiedades del objeto padre.

  // Paso 2: recorrer el objeto evaluando el tipo de dato almacenado en cada propiedad:
  for (const prop in obj) {
    if (typeof obj[prop] === "object" && !Array.isArray(obj[prop])) {
      total = total + countProps(obj[prop]);
    }
  }
  return total;
};

countProps(obj);

/*
ESTRUCTURA DE DATOS: cómo organizamos los datos cuando programamos.

Para encontrarlos más rapido, organizarlos mejor, etc. Mejora la eficiencia.

Tipos de estructuras:

1) ARREGLOS: líneal, por posiciones arrancando desde 0.

*/

//SET: tiene muchos metodos: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set
var arreglo = [1, 2, 3, 4, 4, 5, 5, 1, 2];

let set1 = new Set(arreglo);

/* Set tiene sus propias funciones */

set1.has(2); // te dice si tiene ese elemento

typeof set1; // object al igual que un arreglo

set1.add(15); // para agregarle elementos y devuelve todos los elementos.

set1.add(1); // no te lo agrega pq no lo repite

const aux = Array.from(set1); // armo un array usando el set1
aux.sort(); // ahí me los ordena

const aux2 = Array.from(set1).sort().reverse().join(""); // le podes meter todas las funciones de arrays que queres después de pasarlo a array

// si queres eliminar un elemento del set específico q sabes la posición pero no el valor: podes convertirlo a array como mostro Her y luego eliminas la posicion

const sinDuplicados = Array.from(new Set(arreglo)); //  [1, 2, 3, 4, 5 ] . Te crea un array from un set que te elimina todos los valores repetidos de arreglo

/* PILAS:
es cómo un arreglo que le hacemos un push y pop. PAra sacar el último o agregar un nuevo valor a la última posición (LIFO)

Ejemplo para simular un stack (como pilas de platos para lavar, ponemos un plato arriba de otro y vamos limpiando desde el último que metimos a la pila hasta el primero que metimos):
*/

const arr = [];

arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr); // el 3 es el último que entró

// Para cumplir el LIFO hay que ir sacando de último a primero... entonces:

arr.pop();
arr.pop();
arr.pop(); /* Y acá termina de ejecutarse el programa */

/* El tema es que te pueden romper la regla: */

arr.shift();

/* QUEUE
Es como una transmisión en vivo. Está entrando info. en video en vivo al momento que mi pantalla la ve y al toque sale. Es decir, la primer imagen que entra es la primer imagen que se va. Es lo contrario al lifo. ES EL FIFO (first in first out). Es como una cola de supermercado.

*/
