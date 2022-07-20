# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

Al no ponerle var el hoisting no lo sube para arriba, por lo que al ejecutar esta tarea ni siquiera estaba la variable. A diferencia de arriba, la variable ya estaba declarada y en la memoria aunque sin su valor por lo que tiró undefined.

```javascript
x = 1; // al no tener el var no le aplica el hoisting poniendolo arriba de todo. Pero en este caso ya está declarada arriba de todo por lo que cualquier tarea que quiere imprimir o usar x va a ser igual a 1.
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x); // 10
  console.log(a); // 8
  var f = function (a, b, c) {
    b = a;
    console.log(b); // 8
    b = c; // b = 10
    var x = 5;
  };
  f(a, b, c);
  console.log(b); // 9  Pq en el contexto de ejecución de f, está el parámetro de b que es igual a 9.
};
c(8, 9, 10);
console.log(b); // 10
console.log(x); // 1
```

```javascript
console.log(bar); // undefined
console.log(baz); // NOT DEFINED porque al no ponerle var el hoisting no lo sube para arriba, por lo que al ejecutar esta tarea ni siquiera estaba la variable. A diferencia de arriba, la variable ya estaba declarada y en la memoria aunque sin su valor por lo que tiró undefined.
foo(); // Hola!
function foo() {
  console.log("Hola!");
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if (true) {
  var instructor =
    "Franco"; /* si fuera let, no lo toma el global pq solo se guarda en el scope de if {}. Lo mismo con const */
}
console.log(instructor); // Franco

var instructor2 = "Tony";
if (true) {
  /* Si en lugar de true pongo 1 o cualquier número mayor a 1 también te manda Tony pq true es igual a 0. */
  let instructor2 = "Franco";
}
console.log(instructor2); // Tony /* Una función autoinvocada se crea, abre y cierra y solo existe ese contexto. Es una expresión, no un statement> IIFES. En js si escribís las cosas entre parentesis lo toma como una expresión. Es como un espacio privado. */
```

```javascript
var instructor = "Tony";
console.log(instructor); // Tony
(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor);
  }
})(); // Franco
console.log(instructor); // Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor); // The Flash
  console.log(pm); // Reverse Flash
}
console.log(instructor); //The Flash. El var se puede acceder fuera del contexto del if. entonces te lo sobreescribe. Se esta redeclarando. Solamente el var se puede redeclarar
console.log(pm); // Franco porque el pm de if está en let y entonces solo tiene ese valor en ese contexto.

var variable1 = "Hola";

var variable1 = "Fede";

/* Se puede re declarar. Si intento esto con let o const te tira error pq no se puede */
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"; // 2 Hace la siguiente operación: 6 + Num("3")
"2" * "3"; // 6
4 + 5 + "px"; // 9px Es así: 4+5+px => 4+5:9 + px = 9px. En la segunda operación concatena
"$" + 4 + 5; // $45
"4" - 2; // 2
"4px" - 2; // NaN. El not a number se identifica como un tipo de dato. Te está diciendo "esto un número no es"
7 / 0; // Infinity
{
}
[0]; // [0]  El {} no es un objeto, sino un bloque de código vacío. Como está vacío lo ignora. Es lo mismo que decir: [0]
parseInt("09"); // 9. El parseInt convierte un string a un entero.
5 && 2; // 2 /* El and devuelve el último true pq necesita que los dos elementos que está evaluando sean true. Por eso lee el primero, después el segundo. Entonces se queda con el último. Lo mismo con el siguiente: */
2 && 5; // 5
2 && 0; // 0 /* Pq chequea que los dos sean verdaderos. Al uno de ellos ser falso te devuelve esto que equivale a falso. */
5 || 0; // 5 /* El OR devuelve el primer true. Con que uno sea verdadero ya está por lo que en el primer verdadero se olvida del resto. */
0 || 5; // 5
[3] + [3] - [10]; // 23. No se puede sumar dos arreglos u objetos como en python.
typeof []; // object.
3 > 2 > 1; // false
3 > 2 == 1; // true
3 > 2 === 1; // false
3 > 2 === 1; // true no es estricutamente igual a 1
[] == ![]; // true .
typeof []; // object
typeof ![]; // boolean: false
![]; // false
/* El [] lo interpreta como string vacío, el string vacío equivale a 0, y por lo tanto false. Por lo que ambos valores terminan siendo false. Mirá: */
"" == []; // true
0 == []; // true
0 == false; // true

5 < 10 && console.log("Hola"); // Hola. /* Si el primero es true, pasa al segundo y lo imprime */

function pepe(a) {
  let variable = a || "hola soy pepe";
  console.log(variable);
}
pepe(); // hola soy pepe /* Es una suerte de default. Si el a no se cumple o es false pasa al segundo y lo imprime. */
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

test(); // undefined , 2
```

Y el de este código? :

```javascript
var snack = "Meow Mix";

function getFood(food) {
  /*   var snack; */ // El hoisting crea la variable, pero no está definida
  if (food) {
    var snack = "Friskies";
    return snack;
  }
  return snack; // Esto se ejecuta aunque sea false y no se cumpla el if. Entonces, esto retorna undefined pq no se ejecutó el if. Pero el hoisting está haciendo un trabajo. Te sube esta variable snack que subir (sin su valor). Entonces la variable snack la vas a tener pero undefined. Luego lo retorna aunque no esté su valor, por lo que le retorna el valor de undefined que pasa a ser el nuevo valor de snack.
}

getFood(false); // Meow Mix
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = "Juan Perez";
var obj = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname()); // Aurelio de Rosa

var test =
  obj.prop
    .getFullname; /* Apunta al global pq ahora está adentro de una variable que está en el global. */

console.log(test()); // Juan Perez
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}

printing(); // 1, 4, 3, 2
/* Los asincrónos se quedan en webapis mientras que el resto al call stack por lo que se resuelven enseguida. Luego se resuelven los setTimeOut que estaban en el web api o en el queue según lo que cada uno demora. */
```
