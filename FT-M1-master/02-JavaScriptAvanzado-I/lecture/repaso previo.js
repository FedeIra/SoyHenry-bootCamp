/* 
Single threaded: un único proceso de ejecución.

En JS tiene comportamiento de único hilo. Una tarea a la vez, asincrono.

SYNTAX PARSER: 
Lee las líneas de código y si se topa con un error te tira error de sintaxis. Se puede leer con detenimiento nuestros errores. Incluso te dice la línea aunque no es tan correcto.

También tiene el LEXICAL ENVIROMENT: determina dónde están declarados los statements o expresiones. el comportamiento de una variable o función depende dónde fue definida e invocada.

Ejemplo:
*/

function hola(params) {
  var foo = "hola"; /* Acá es definida en el contexto de la función */
}
var bar = "chao"; /*Acá es definida globalmente  */

/* Cuando lo definimos como var es de acceso global. Todos pueden acceder a ese valor. Al estar en lugares distintas, por lo menos están en un mundo separado. Al menos, por el momento.

El sytax los parsea de forma distinta. Nuestro lexical environment nos da la capacidad de saber cuál es nuestro entorno, etc. No existen acá las variables públicas o privadas, pero si aquellas que pueden ser o no accesibles desde determinados entornos. Tampoco tenemos el global y local.

var : definición global
let = de scope
const = let, pero que no se va a modificar el valor del mismo

Esta determinación de variables hace que puedas acceder o no dependiendo dónde estamos. Todo eso te lo dice el lexical environment.
*/

// GLOBAL CONTEXT
var sayHello = "Hello";

function person() {
  // EXECUTION CONTEXT
  var first = "David",
    last = "shariff";

  function firstName() {
    // EXECUTION CONTEXT
    return first; /* Va a saber quién es first pq accede al contexto de afuera  */
  }

  function lastName() {
    // EXECUTION CONTEXT
    return last;
  }
  console.log(sayHello + " " + firstName() + " " + lastName());
}

person(); // Hello David shariff

/* CONTEXTO DE EJECUCIÓN: entorno de ejecución. Ahí va a tener sus propias variables definidas y funciones. Un reconocimiento de mi área. Toda instancia o archivo que ejecute va a tener su contexto de ejecucón global.

Ejemplo: function lastName. Tiene su propio contexto de ejecución dentro de su función. Pero luego tiene su más próximo contexto que es la function person por lo que puede acceder a sus valores. Pero también, tiene luego el contexto siguiente que es el global y de ahí puede obtener el var sayHello. Es como una CEBOLLA. Una vez que se termina de ejecutar la función se elimina su contexto de ejecución para no gastar espacio.

Si yo no invoco la función JS no genera el contexto de ejecución. E incluso terminado de ejecutar lo elimina.

window es el contexto global de chrome. Ahí van a estar todas las variables, funciones, valores definidas. Pero ese contexto global es único para todos sus elementos. Cada entorno tiene su propio entorno de contexto de ejecución global. El contexto de ejecución es un objeto, con su propio espacio de memoria.

A su vez el function person (en el contexto de ejecución de la función) tiene sus propias variables que pueden ser o no accesibles desde el entorno global.

Un entorno de contexto de ejecución va a tener su propio entorno pero también su "OUTER ENVIRONMENT" es decir, contexto por fuera. 

En el caso de la función person, su outer environment va a tener el contexto global, ejemplo say hello.

Si sé dónde se invocó el código, se qué variables tengo accesibles.

Entonces, el contexto de ejecución tiene conocimiento sobre:
1) tu código, 
2) outer environment
3) THIS
4) Global object
 */

/* 
THIS:
Pero aparte del contexto global y contexto de ejecución, tenemos el THIS. Tener conocimiento sobre sí mismo. Se crea un nuevo objeto que tiene conocimiento sobre la función planteada. Variables, info. respecto de la función, pero además siempre va a haber un objeto global.

El this no es solo para clases. El this se refiere a info. de sí mismo, y esta info. puede servir o no dependiendo de lo que necesites hacer. Dentro del this hay info. personal sobre esa función.
*/

/* 
GLOBAL OBJECT: objeto global completo al que siempre podes acceder. La última capa de la cebolla.

Cada entorno de JS tiene un this y entorno global. A nivel global, el this es window que tiene muchísima info. como funciones que ya están definidas.

Pero cada entorno o contexto de ejecución tiene su propio this.
*/

var foo =
  "foo"; /* Dónde se almacena? Acá la estoy definiendo en el contexto global, por lo que si pongo this, te va a aparecer window, pero en ese va a estar definida la variable foo. en el contexto global (windows) foo va a ser igual a "foo"*/

function bar() {
  var hola = "hola";
  return "ey";
} /* Está función va a pasar a estar definida en el contexto global. Pero la variable hola NO. La variable hola no se agrega al contexto global, porque pertenece a la función bar. Recién aparecería al invocar la función. Ahí se genera el contexto de ejecución. El hola no se guarda en el contexto global window sino en el contexto de ejecución de la función que a su vez está guardada en el entorno global por haber sido invocada ahí. */

function bar2() {
  console.log(this);
}
bar2(); // te va a imprimir window pq la función se definió en el contexto global, por lo tanto el this hace referencia a su entorno dónde fue creada, el global. La función bar se invocó en el entorno global.

/*!El contexto de ejecución de una función se genera cuando es invocado. Al invocarla en el contexto global, su entorno es entonces el global, por lo que this es window. */

/* El contexto de this depende del contexto dónde se invoque la función */

var global = "Hola!";

function a() {
  // como no hay una variable llamada global en este contexto,
  // busca en el outer que es el global
  console.log(global);
  global = "Hello!"; // cambia la variable del contexto global
}

function b() {
  // declaramos una variable global en nuestro contexto
  // esta es independiente
  var global = "Chao";
  console.log(global);
}

a(); // 'Hola!'
b(); // 'Chao'
console.log(global);

function b() {
  /* Se genera en el contexto de ejecución de la función a, por lo tanto en el contexto de b vamos a tener a la variable a. */
  console.log("B!");
}

function a() {
  this.a = "hola";
  b(); /* El contexto de ejecución de b se genera entonces en el contexto de ejecución de a que a su vez se genera en el contexto de ejecución global al que siempre vamos a tener acceso */
}

a(); /* Se general el contexto de ejecución a. Le paso una variable a que diga hola. En el contexto local va a tener una variable que es a. Luego invoco b que genera el contexto de ejecución de b que fue invocado dentro del contexto de a. */

/* Cada invocación genera un nuevo contexto de ejecución. Todos tienen acceso al contexto global. */

/*
HOISTING
Nos los da el SYNTAX PARSER
Es muy importante los contextos de ejecución por el hoisting.

En principio en JS no importa definir las funciones arriba (salvo algunas), pero las variables sí importan.


El hoisting se hace solo. No lo tenemos que ejecutar. Es una particularidad propia de JS, pasa por defecto.

El hoisting revisa todo el código, puede ver variables y les asigna un espacio de memoria, pero no su valor. Por lo que si pido su valor antes de que fuera definido te va a tirar undefined
*/
bar(); // Soy una función
console.log(foo); // undefined

var foo = "Hola, me declaro";
function bar() {
  console.log("Soy una función");
}

/* 
Lo anterior traducido según la lectura de hoisting sería el siguient:

*/

var foo;

function bar() {
  console.log("Soy una función");
}

bar(); // Soy una función

console.log(foo); // undefined

foo = "Hola, me declaro"; // guarda el valor de foo en la variable foo que ya le había reservado espacio

/* El hoisting reserva espacio de memoria para todo lo que este definido, incluyendo variables y funciones.
En el caso de variables simplemente las define y en el caso de funciones las define y declara.

*/

/* 
EJERCICIO DE HOISTING CON CONTEXTOS
*/

var foo;

function a() {
  b();
  var foo = "un foo cualquiera";
  c();
  console.log("foooo: ", foo);
}

function b() {
  console.log(foo);
  console.log("B!");
}

function c() {
  b();
}

foo = "foo";
/* a(); */

/* 
Al invocar la función a) hace los siguientes pasos:

1) Pasa a la función a) que genera un contexto de ejecución propio, y su entorno en el que fue creado es el entorno global.
2) Se invoca b) desde la función a) por lo que se genera un nuevo contexto de ejecución dentro de la función b) con su outer environment en la función desde la que fue invocada y con el entorno global luego.
3) La función b manda a imprimir la variable foo. Para eso se fija si está definido en su primer entorno (función b), pero no lo está. Entonces pasa a su segundo entorna, la función a, pero tampoco está porque no se llegó a definir antes de invocar a b, por lo tanto pasa al último entorno que es el contexto global donde la variable foo está definida como "foo" y te imprime "foo" y "B!"
4) Luego volvemos a la función a, donde se define una nueva variable foo "un foo cualquiera",
5) luego pasamos a la invocación de la función c. Acá se genera un nuevo contexto de ejecución en el que el primer entorno es la función c), luego la función a) en la que fue creada y por último el contexto global.
6) La función c invoca la función b, generando un nuevo entorno que es la función b como primer entorno, la función c como segundo entorno en el que fue creado, luego la función a) desde la que fue invocada la función c, y por último el entorno global.
7) Se imprime la variable foo para lo que busca primero en el entorno de la función c, luego en la función b, y luego en la función a en la que antes de que se invocara b) no estaba definida. No estaba definida porque se generó un nuevo contexto global. Aclaración: el var foo genera una nueva variable foo que solo aplica para el contexto de la función a), no así el resto de las funciones.
8) Por lo tanto, recurre finalmente al entorno global donde foo está definido como "foo", por lo que te imprime "foo" y luego "B!".

*/

/* 
No se toma la variable foo definida en el contexto de ejecución de la función a pq solo aplica para ese contexto de ejecución al crear una nueva variable no global.

Otro ejemplo tomando las funciones anteriores y creando una nueva:
*/

function llamarFoo() {
  a();
  console.log(foo);
}

llamarFoo(); // foo. No te imprime un foo cualquiera pq no te toma la var foo de la función a pq no es su contexto.

/*
EXECUTION STACk:
Los contextos de ejecuciones se generan en forma de pila. Apilo un montón de cosas y para resolver lo de abajo resuelvo primero lo de arriba. */

function b() {
  console.log("B!");
}

function a() {
  b();
}

a();

/* Primero se genera el contexto de ejecución global donde se guardan las funciones a y b.

Luego invoco la función a generandose su contexto de ejecución. CAJITA PROPIA. Pero a invoca a b). Por lo que se apila b arriba de a generandose un nuevo contexto de ejecución. Cuando pasa a, se elimina el contexto de ejecución de b, y cuando termina a, se elimina el contexto de ejecución de a, quedandonos solo con el contexto global.

El contexto global no se elimina hasta que se termine de correr todo el archivo completa, pero los contexto de las funciones SI.

*/

/* 
Las variables se generan en distintos contextos y solo esos contextos puede acudir a dicha variable.

Si la variable se genera en el contexto global todos los contextos van a poder acudir a ella. Pero si la variable se genera en una función, objeto o lo que sea dentro de {} entonces solo ese contexto va a poder acceder a esa variable. Salvo las var que tienen contexto global y por eso se sugiere no utilizarlas.

Ejemplo:
*/

let ejemploGlobal = "Soy una variable global let";

function funcionEjemplo() {
  console.log(ejemploGlobal); /* Puede acceder a ella */
  let ejemploLocal = "soy una variable local";
}

funcionEjemplo();
// console.log(ejemploLocal); // me dice que ejemploLocal no está definida y tira error

/* Otro ejemplo con var */

var ejemploGlobal2 = "Soy una variable global var";

function funcionEjemplo2() {
  var ejemploGlobal2 = "soy una variable local var, pero distinta";
  console.log(ejemploGlobal2); /* soy una variable local var, pero distinta */
}

funcionEjemplo2();

console.log(ejemploGlobal2); // me devuelve soy una variable global var y no la de la función. Esto pq la estoy llamando en el contexto global y no en el contexto de la función. Además, todo el contexto de ejecución de la función, incluyendo la variable se elimina pq ya no la necesita.

// OTRO EJEMPLO DE HOISTING:

var global = "Hola!";

function as() {
  console.log(global);
  global = "Hello";
}

function b() {
  console.log(global); // undefined. Esto pq al hacer el hoisting de la función, chequea que hay una variable llamada global, la guarda pero sin su valor lo que hace que no se tenga que recurrir a la variable global que esta definida globalmente. El tema es que ahora cuando le meto console.log la variable global está guardada pero no así su valor, por lo que tira undefined. Esto cambia si elimina la linea de abajo.
  var global = "Chao";
  console.log(global);
  for (let i = 0; i < 3; i++) {
    console.log(i);
    console.log(global);
  }
}

b();
console.log(global); // Hola!

/* TIPOS DE DATOS:

ESTÁTICO VS. DINÁMICO

Javascript es de tipado dinámico (salvo const) pq se puede cambiar las variables cuando se me da la gana. Un ejemplo de estático es JAVA.

Ejemplo:
*/

var name = "primer definición";

name = "lo quiero cambiar y punto";

name = {
  propiedad: "mirá, te lo cambié de vuelta",
};

console.log(name); // { propiedad: 'mirá, te lo cambié de vuelta' }

/* OPERADORES:

Precedencia de operadores y asociatividad: dependiendo el orden de los operadores el resultado que pdoes obtener.
Arranca primero los parentesis.


a ? b : c equivale a if (a) {b} else {c}

typeOf te dice el tipo de dato.

COERCIÓN DE DATOS: es el cambio de un tipo de dato a otro. La aplica directamente y automáticamente JS. 
*/

3 + "3"; // la suma es una concanetación en strings por lo que lo concatena.

"33" - 3; // el menos no está definido para los strings por lo que hace la operación matemática.

"a" - 3; // intenta convertir el a a number por medio de Number("a"), pero devuelve NaN

["3"] * 3; // 9

Number(null); // el número de nada es 0

Number(undefined); //NaN

Number(false); // 0
Number(true); // 1

10 - true; // 9 pq el pone a true el valor de 1

/* 
FUNCIONES: first class functions
Las funciones son objetos por lo que puedo acceder a determinadas particularidades de ellas.

Ejemplo:
*/

function nombreFuncion() {
  console.log("Soy una función");
}

nombreFuncion.name; // nombreFuncion. Esto es una propiedad del objeto función.
nombreFuncion(); // Soy una función.  también tiene su propio método

/* 
EXPRESIONES Y STATEMENTS

EXPRESIONES: asignación de variables y operaciones matemáticas.
STATEMENTS: condicionales, funciones, for, while, etc. Aquellos que estemos generando e invocando.

Es importante para entender lo que hace el scope de algo.
*/

var saludo = function soyUnStatement() {
  return "pareciera una variable, pero soy un statement";
};

/* Aunque lo metas como una variable a saludo, en la práctica es una función por lo que esto es un statement */

/* 
VALOR Y REFERENCIA: los datos se pasan por referencia o valor.

REFERENCIA: observa una posición de memoria.
Normalmente cuando definimos un objeto a lo que estamos apuntando es a la posición de memoria de dicho objeto.

Cuando pasas un valor por referencia este valor cambia para todos los contextos que acceden a ese valor. 

VALOR: En cambio, cuando paso el valor (no así la referencia), se genera una nueva cajita y lo mira el solo (solo el que lo modifica) entonces lo impacta solo a él y no al resto de los contextos que acceden a ese valor.
*/

var a = 1;
var b = 2;

a = b; // 2 acá se hace el pasaje por valor
b = 1; // 1

var a;
var b = { nombre: "martina" }; // b miraba a este objeto

a = b; // ya no le estoy pasando el valor. Le estoy pasando la referencia. Cuando hablamos de objetos pasamos la posición de memoria. Le estás diciendo ahora a a que también mire el objeto que miraba b

b.nombre = "foo";

console.log(a.nombre); // tanto a como b están mirando al objeto y por lo tanto leen el objeto modificado a foo.

/* Los objetos se pasan por referencia mientras que las variables por valor */

var objeto = {
  propiedad: "me pasan por referencia",
}; /* Por referencia se almacena el objeto en un espacio de memoria y las referencias pueden verla desde fuera. */

var b =
  "soy solo una variable, me pasan por valor"; /* Por valor se almacena directamente la variable con su valor en el espacio de memoria */

/* 
THIS
En chrome nuestro contexto global es chrome. Si guardo variables se guardan en este contexto en principio.
*/

this.a =
  "hola"; /* Como está en global this hace referencia a window (el contexto global). Genera una variable a en el global */

/* window.a */ // en la consola de chrome te imprime "hola"

function f1() {
  /* This hace referencia al contexto propio de esa función */
  return this;
}

/* f1() === window; */ // te devuelve true en chrome

typeof this; // object (globalThis)

var varGlobal = { prop: 37 };

function loguea() {
  return this.prop;
} /* No está asociada a nadie */

loguea(); //undefined

function logueaGlobal() {
  return this;
}

logueaGlobal(); // te imprime el this global

console.log(this);

function loguea() {
  return this.prop;
} /* No está asociada a nadie */

loguea(); //undefined

function logueaGlobal() {
  return this;
}

logueaGlobal(); // te imprime el this global

console.log(this);

var obj = {
  nombre: "Objeto",
  log: function () {
    this.nombre = "Cambiado"; // this se refiere a este objeto, a `obj`
    console.log(this); // obj

    var that = this; // Guardo la referencia a this. Es una variable que mira también a la cajita de this. Solo con var funciona pq el let estaría fuera del contexto de la función.

    var cambia = function (str) {
      that.nombre = str; // Uso la referencia dentro de esta funcion. Ahora puede modificar a obj.nombre
    };

    cambia("Hoola!!");
    console.log(this);
  },
};

/* 
EVENT LOOP:
JS es singlethreada, única línea de ejecución. Se trabaja todo en pilas. Reserva la función timeout en lo que sería un ayudante web apis.

Se sigue ejecutando la ejecución.

Se saca del stack la función entonces lo delega avanzando con el resto de las tareas para ejecutarlo luego. "Vos función que vas a tardar te delego." Sigo ejecutando el resto del programa.


*/

function saludarMasTarde() {
  var saludo = "Hola";
  setTimeout(function () {
    console.log(saludo);
  }, 3000);
  console.log("chau");
}

saludarMasTarde();
