/* 
Javascript es de un solo hilo y sincrónico. Debo hacer y espero a que termine para continuar. Como una pila de platos.


SYNTAX PARSER: es un proceso automático que te dice si la syantix es válida o no. Si es válida lo convierte a lenguaje de máquina.

1) Lexical enviroment: es como una lista de todas las variables que tengo en ese código para ejecutar. Si aprueba esto pasa al siguiente paso (hoisting);
2) Hoisting: ordena el código. Ordenado pasa al siguiente paso. 
3) Ejecución: acá va ejecutando todo y cuando se encuentra con una función, realiza nuevamente el lexical enviroment y hoisting, para luego de ejecutarla y continuar ejecutando el resto del código. Para ver cómo y en qué orden hay que ejecutarlo tiene el EXECUTION STACK. Al momento de ejecutar, cada variable va a tener su SCOPE y de ahí si puede leerla o no.
*/

function hola() {
  var foo = "Hola!"; /* Contexto de ejecución */
}

var bar = "Chao"; /* Contexto global */

/* Al estar en lugares distintas, el intérprete las parseará (es como traducirlo o gestionar) de modo distinto.

Se forman cajas con cada contexto. Cada vez que se abre un bloque de código {} se abre un nuevo contexto de ejecución cuando está dentro de una función. También se pueden formar en objetos {}.

Las variables primero se buscan en mi contexto, y luego voy buscando hacia afuera, hasta llegar al contexto global. El this apunta al objeto window en el navegador
*/

/* 
HOISTING: algo que va a pasar si ejecuto

*/
bar();
console.log(foo);

var foo = "Hola, me declaro";
function bar() {
  console.log("Soy una función");
}

// Soy una función , undefined
undefined;

/* 
Te lee la función porque el hoisting primero tira las variables (sin su valor) arriba y las funciones con sus declaraciones también.

Entonces podes invocar la función antes de declararla, pero no podes usar una variable antes de declararla pq el hoisting solo toma su declaración y no su valor.

Haría lo siguiente en el ejemplo anterior:

var foo

function bar() {
  console.log("Soy una función");
}

bar(); // ENTONCES ESTO SÍ LO EJECUTA GENERANDO UN LEXICAL ENVIRONMENT PROPIO DE LA FUNCIÓN (con su código propio, outer environment, global context y this)

console.log(foo); // ACÁ TE TIRA UNDEFINED PQ OBTENES EL VALOR DE FOO DESPUÉS EN LA SIGUIENTE LÍNEA

foo = "Hola, me declaro";

*/

/* 
EXECUTION STACK:
Es distinto al execution context. El execution stack reconoce una pila y aplica la regla del LIFO.

REGLA LIFO: first in first out. Entonces se ejecutan en orden, pero a medida que se ejecutan se van yendo de la caja, es decir eliminando. Por eso, el primero que entra a la ejecución es el primero que se elimina.

Cada plato es una tarea que tiene que hacer con su contexto. Se revisa el contexto, ejecuta y luego se elimina. Las tareas están definidas por un solo hilo, y para saber cómo es el hilo tiene el execution stack.
*/

/* 
SCOPE: no es lo mismo que el lexical environment, pero va de la mano.
Es el alcance que tiene una variable.
*/

var global = "Hola!"; // si fuera const global no podría ser modificada desde ningún lugar. Con let también te funciona este código.

function a() {
  // como no hay una variable llamada global en este contexto,
  // busca en el outer que es el global
  console.log(global);
  global = "Hello!"; // cambia la variable del contexto global
}

function b() {
  // declaramos una variable global en nuestro contexto
  // esta es independiente y no cambia a la del contexto global, ni se puede acceder a ella fuera de esta función
  var global = "Chao";
  console.log(global);
  /*  console.log(hola); */ // hola is not defined. te devuelve not defined pq no está su variable declarada directamente. No es lo mismo que undefined en el que la variable está declarada pero no tiene asignada un valor aún.
}

a(); // 'Hola!'
b(); // 'Chao'
console.log(global); // Hello!

/* 
TIPOS DE DATOS

ESTÁTICOS: no se puede cambiar el tipo de dato. Ejemplo: java 
DINÁMICOS> se puede cambiar el tipo de dato. Ejemplo: javascript
*/

/* 
OPERADORES:
*/

var a = 2 + 3; // 5

function suma(a, b) {
  return a + b;
  // usamos el mismo operador como ejemplo
  // Si no deberiamos hacer sumas binarias!
}
var a = suma(2, 3); // 5. Esto es lo mismo que el 2+3.

/* En definitiva, el operador + equivale a una función en si misma. 

Los operadores tienen PRECEDENCIA Y ASOCIATIVIDAD:

PRECEDENCIA: orden en que se van a ejecutar, ejemplo, multiplicaciones antes que suma, y parentesís antes que nada.
ASOCIATIVIDAD: es el orden en que se ejecutan cuando tienen la misma precedencia. De IZQUIERDA a DERECHA en principio. Hay algunos que son de derecha a izquierda como la exponenciación (**).

Acá están todos: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
*/

/* 
COERCIÓN DE DATOS: lo hace JS automáticamente para no romper nada.

Ejemplo:
*/

3 + "3"; // 33
3 + [3]; // 33

Number("3"); // devuelve el número 3.
Number(false); // devuelve el número 0.
Number(true); // devuelve el número 1.
Number(undefined); // devuelve `NaN`.
Number(null); // devuelve el nuḿero 0.

null == false; // false

/* Tenes comparativos en sentido relativo (==) y sentido estricto (===). El estricto toma en cuenta también el tipo de datos. Ejemplo: */

"2" == 2; // true
"2" === 2; // false

/* Otros ejemplos: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#a_model_for_understanding_equality_comparisons */

/* 
FIST CLASS FUNCTIONS:

Significa que JS trata a las funciones como cualquier tipo de datos. O sea, la podes guardar en una variable, pasar como argumento (callback), meterla dentro de un array.

Lo único particular es que adentro tienen un código que las hace invocable. También tienen un nombre (aunque esto es opcional, hay funciones anónimas).


*/

/* 
EXPRESIONES Y STATEMENTS

EXPRESIÓN: todo lo que devuelve un valor */
2 + 2; // 4

/* STATEMENT: es un controlador de flujo. Va a controlar el flujo. Devuelve un valor que después se puede ejecutar. Ejemplo, cuando abro una llave con for o while o una función. Ejemplo: */

const pepe = () => console.log("Pepe");

console.log(pepe()); // esto es una expresión

function name(nombre) {
  nombre;
} // esto es un statement

name(pepe); // esto es una expresión y me devuelve el pepe

/* 
VALOR Y REFERENCIA

Hay dos formas de pasar variables como argumento.

Valor: estoy haciendo una copia que no cambia a la original. Ej: objetos, arrays.
Referencia: la estoy pasando con un apuntador que apunta a la original. Por eso el original también cambia.

Ejemplo de referencia:
*/
var pepe2 = {
  name: "Pepe",
  hobbie: "Correr",
};

var aux = pepe2;

aux.amigos = "amigos";

pepe2; // { name: 'Pepe', hobbie: 'Correr', amigos: 'amigos' } Se le agregó a pepe la propiedad amigos.

/* Cuando tenemos una referencia tanto pepe como aux apuntan a ella. Entonces al cambiarlos, cambian el objeto para ambos. */

// EJEMPLO DE VALOR

var a = 10;
var b = a;

b = b * 2; // ahora b vale 20

a; // equivale a 10

/* Es decir, cambiamos el objeto, pero el a tiene el suyo propio */

/* Para hacer copia de un objeto y tener directamente su valor sin referencia usar el SPREAD OPERATOR. Ejemplo: */

var objeto1 = { hola: "hola" };

var objeto2 = { ...objeto1 };

objeto2.valor = "valor";

objeto1; // no te va a tomar la propiedad valor. Solamente el hola.

/* THIS
En el contexto global, this apunta al objeto window.

En VSC solo muestra un objeto vacío.
*/

console.log(this);

/* En el browser, lo siguiente resulta en true

this === window

Si escribo this.a = 27, queda guardada en el contexto global window la variable a con su valor de 27.

El this apunta al objeto global en un princip[io, pero estpo cambia cuando está en otros contextos.

*/

function f1() {
  return this;
}

f1(); // te devuelve window pq la función se invoca en el contexto global

/* Ahora bien, el this se puede utilizar dentro de un objeto como método.

El this apunta al objeto en el que está definido. Si está fuera de una función apunta al objeto global. Si está dentro de una función apunta al objeto de la función y si no está entonces apunta al contexto global.

El this adentro de la función apunta al global. Solo apunta a un objeto cuando es definido dentro de un método.
*/

var obj = {
  nombre: "Objeto",
  log: function () {
    this.nombre = "Cambiado"; // this se refiere a este objeto, a `obj`
    console.log(this); // obj

    var that = this; // Guardo la referencia a this para poder cambiarlo en el punto de adelante.

    var cambia = function (str) {
      that.nombre = str; // Uso la referencia dentro de esta funcion
    };

    cambia("Hoola!!");
    console.log(this);
  },
};

/* 
EVENT LOOP:


*/

function saludarMasTarde() {
  var saludo = "Hola";

  setTimeout(function () {
    console.log(saludo);
  }, 3000); /* El stetimeout es asincrónico */
  console.log("jejeje"); /* va a salir primero jejeje */
}

saludarMasTarde();

/* Cuando JS ve algo asincrónico, lo va a enviar a web apis (otra persona, lo delega). Se sigue ejecutando el resto gracias a que pudiste delegar la otra tarea. Pero apenas se termina de ejecutar las tareas sincrónicas, recién ahí agarro la tarea asincrónica. Cuando las tareas asincrónicas terminan de cumplirse van al callback queue. En el callback queue se van apilando las tareas asincrónicas que se terminan de ejecutar una vez que se hayan ejecutado todas las funciones sincrónicas. */
